// Ported from the Plural Telemetry docs (telemetry.plural.sh/cost). Keep the
// constants in sync with that model so both calculators give the same answer.

export type CostInputs = {
  gbPerDay: number
  retentionDays: number
  eventBytes: number
  compression: number
  peakFactor: number
  vcpuHour: number
  s3GbMonth: number
  crossAzGb: number
}

export const DEFAULT_INPUTS: CostInputs = {
  gbPerDay: 5000,
  retentionDays: 15,
  eventBytes: 650,
  compression: 8,
  peakFactor: 1.5,
  vcpuHour: 0.0408, // m7g.2xlarge on-demand, us-east-1: $0.3264/h for 8 vCPU + 32 GiB
  s3GbMonth: 0.023,
  crossAzGb: 0.02, // $0.01/GB charged on each side
}

const HOURS = 730
const DAYS = 30.4
const SECONDS = HOURS * 3600
const PUT_PER_1K = 0.005
const GET_PER_1K = 0.0004
const GP3_GB_MONTH = 0.08
const WRITER_VCPU = 8
const READER_VCPU = 2
const READER_REPLICAS_PER_GROUP = 2
// Cache-miss and manifest GETs per second for each (reader pod, opened shard) pair.
const GETS_PER_READER_SHARD = 17
// Remote-shard query responses per day, as a fraction of raw ingest.
const QUERY_FANOUT_FRACTION = 0.01
const WRITER_MIB_PER_SECOND = 40
const WRITER_UTILIZATION = 0.85

export type CostLine = { label: string; usd: number; detail: string }
export type Estimate = {
  name: string
  total: number
  lines: CostLine[]
  footprint: string
}

/** Datadog list prices (annual commitment) for Standard indexing by retention. */
function datadogIndexPerMillion(days: number) {
  if (days <= 3) return 1.06
  if (days <= 7) return 1.27
  if (days <= 15) return 1.7

  return 2.5
}

export function estimate(i: CostInputs): Estimate[] {
  const avgMBs = (i.gbPerDay * 1000) / 86400
  const peakMBs = avgMBs * i.peakFactor
  const storedGb = (i.gbPerDay / i.compression) * i.retentionDays
  const vcpuMonth = i.vcpuHour * HOURS
  const wireGbDay = i.gbPerDay / 3 // snappy/gzip on the wire

  // Plural Telemetry
  const writerMBs = WRITER_MIB_PER_SECOND * 1.048576 * WRITER_UTILIZATION
  const writers = Math.max(1, Math.ceil(peakMBs / writerMBs))
  // One reader group per storage shard; each pod opens only its own shard.
  const readers = writers * READER_REPLICAS_PER_GROUP
  const writerVcpu = writers * WRITER_VCPU
  const readerVcpu = readers * READER_VCPU
  const oursVcpu = writerVcpu + readerVcpu
  const oursPuts =
    writers * 10 * SECONDS +
    ((storedGb / i.retentionDays) * DAYS * 1000 * 6) / 64 // WAL + SST/compaction
  const oursGets = readers * GETS_PER_READER_SHARD * SECONDS
  const fwdFraction = writers > 1 ? (writers - 1) / writers : 0
  const forwardXaz = wireGbDay * fwdFraction * (2 / 3) * DAYS * i.crossAzGb
  const fanoutXaz =
    i.gbPerDay *
    QUERY_FANOUT_FRACTION *
    fwdFraction *
    (2 / 3) *
    DAYS *
    i.crossAzGb

  const ours: Estimate = {
    name: 'Plural Telemetry',
    footprint: `${writers} writers × ${WRITER_VCPU} vCPU + ${writers} reader groups × ${READER_REPLICAS_PER_GROUP} × ${READER_VCPU} vCPU`,
    lines: [
      {
        label: 'Compute',
        usd: oursVcpu * vcpuMonth,
        detail: `${writerVcpu} writer + ${readerVcpu} reader vCPU`,
      },
      {
        label: 'Object storage',
        usd: storedGb * 1.1 * i.s3GbMonth,
        detail: `${Math.round(storedGb * 1.1).toLocaleString('en-US')} GB incl. index`,
      },
      {
        label: 'Object requests',
        usd: (oursPuts / 1000) * PUT_PER_1K + (oursGets / 1000) * GET_PER_1K,
        detail: 'WAL, SST, compaction, cache misses',
      },
      {
        label: 'Cross-AZ traffic',
        usd: forwardXaz + fanoutXaz,
        detail: 'write forwarding + query fan-out',
      },
    ],
    total: 0,
  }

  // Self-hosted Loki (microservices)
  const lokiDistVcpu = Math.ceil(peakMBs / 10)
  const lokiIngVcpu = Math.ceil((3 * peakMBs) / 4)
  const lokiQueryVcpu = Math.ceil(oursVcpu * 0.6)
  const lokiOtherVcpu = 12 + Math.ceil(i.gbPerDay / 1000) * 4 // index-gw, compactor, ruler, frontend, scheduler, memcached
  const lokiVcpu = lokiDistVcpu + lokiIngVcpu + lokiQueryVcpu + lokiOtherVcpu
  const ingesters = Math.max(3, Math.ceil(lokiIngVcpu / 4))
  const chunkPuts = ((i.gbPerDay / i.compression) * 1e6 * DAYS * 1.3) / 256 // ~256 KB chunks, partial dedupe
  const lokiGets = 200 * SECONDS
  const lokiXaz = wireGbDay * 2 * DAYS * i.crossAzGb // RF=3: two of three replicas cross AZ

  const loki: Estimate = {
    name: 'Grafana Loki',
    footprint: `${lokiVcpu} vCPU across 9 components, ${ingesters} ingesters`,
    lines: [
      {
        label: 'Compute',
        usd: lokiVcpu * vcpuMonth,
        detail: `${lokiVcpu} vCPU (${lokiIngVcpu} in RF=3 ingesters)`,
      },
      {
        label: 'Object storage',
        usd: storedGb * 1.03 * i.s3GbMonth,
        detail: `${Math.round(storedGb * 1.03).toLocaleString('en-US')} GB chunks + index`,
      },
      {
        label: 'Object requests',
        usd: (chunkPuts / 1000) * PUT_PER_1K + (lokiGets / 1000) * GET_PER_1K,
        detail: 'chunk flushes, query fetches',
      },
      {
        label: 'Cross-AZ traffic',
        usd: lokiXaz,
        detail: 'replication to 3 ingesters',
      },
      {
        label: 'WAL volumes',
        usd: ingesters * 100 * GP3_GB_MONTH,
        detail: `${ingesters} × 100 GB gp3`,
      },
    ],
    total: 0,
  }

  // Datadog
  const eventsM = (i.gbPerDay * 1e9 * DAYS) / i.eventBytes / 1e6
  const idx = datadogIndexPerMillion(i.retentionDays)
  const dd: Estimate = {
    name: 'Datadog',
    footprint: `${Math.round(eventsM / 1000).toLocaleString('en-US')}B events/month`,
    lines: [
      {
        label: 'Ingestion',
        usd: i.gbPerDay * DAYS * 0.1,
        detail: '$0.10 / GB ingested',
      },
      {
        label: 'Indexing',
        usd: eventsM * idx,
        detail: `$${idx.toFixed(2)} / M events, ${i.retentionDays}-day retention`,
      },
    ],
    total: 0,
  }

  for (const e of [ours, loki, dd])
    e.total = e.lines.reduce((a, l) => a + l.usd, 0)

  return [ours, loki, dd]
}

export function usd(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 10_000) return `$${Math.round(n / 1000)}k`

  return `$${Math.round(n).toLocaleString('en-US')}`
}
