import type { Stat } from '@/content/types'

export const observabilityLinks = {
  docs: 'https://telemetry.plural.sh/',
  architecture: 'https://telemetry.plural.sh/architecture/',
  cost: 'https://telemetry.plural.sh/cost/',
  verification: 'https://telemetry.plural.sh/verification/',
  installation: 'https://telemetry.plural.sh/installation/',
  github: 'https://github.com/pluralsh/telemetry',
}

export const observabilityAnchors = [
  {
    eyebrow: '01',
    title: 'Loki, Prometheus, and Tempo, rewritten in Rust',
    body: 'Drop-in compatible with the agents, query languages, and Grafana dashboards you already run.',
    href: '#rewrites',
  },
  {
    eyebrow: '02',
    title: 'Roughly 50% faster, vastly simpler',
    body: 'Writers and stateless readers over an S3 bucket, instead of nine services, hash rings, and replicated disks.',
    href: '#architecture',
  },
  {
    eyebrow: '03',
    title: 'A fraction of the cost',
    body: 'Write once to object storage. No 3× replication, no cross-AZ fan-out, no per-event indexing bill.',
    href: '#cost',
  },
]

/** Median query latency in ms, peer first, from differential fuzzing on S3. */
export const telemetryStores = [
  {
    signal: 'logs',
    name: 'Plural Logs',
    peer: 'Loki',
    ingest: 'Loki push · OTLP · Elasticsearch _bulk',
    query: 'LogQL',
    p50: { peer: 9.2, ours: 6.1 },
    p99: { peer: 497.6, ours: 216.4 },
  },
  {
    signal: 'metrics',
    name: 'Plural Metrics',
    peer: 'Prometheus / Mimir',
    ingest: 'Prometheus remote write · OTLP',
    query: 'PromQL',
    p50: { peer: 4.6, ours: 1.8 },
    p99: { peer: 81.4, ours: 22.1 },
  },
  {
    signal: 'traces',
    name: 'Plural Traces',
    peer: 'Tempo',
    ingest: 'OTLP · Zipkin',
    query: 'TraceQL',
    p50: { peer: 20.9, ours: 3.9 },
    p99: { peer: 159.8, ours: 66.6 },
  },
]

export const rewriteCells = [
  {
    icon: 'M4 6h16 M4 12h10 M4 18h13',
    title: 'Logs, replacing Loki',
    body: 'Accepts Loki push, OTLP, and Elasticsearch _bulk, and answers LogQL through Loki’s HTTP API.',
  },
  {
    icon: 'M4 20V12 M10 20V6 M16 20v-4 M2 20h20',
    title: 'Metrics, replacing Prometheus',
    body: 'Takes Prometheus remote write and OTLP, and answers PromQL with the same API Grafana already uses.',
  },
  {
    icon: 'M4 6h6 M8 12h8 M12 18h8 M10 6v6 M16 12v6',
    title: 'Traces, replacing Tempo',
    body: 'Ingests OTLP and Zipkin, with trace-by-id lookups and TraceQL search on Tempo’s endpoints.',
  },
  {
    icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    title: 'One engine underneath',
    body: 'Every store is built on SlateDB, an LSM tree that writes straight to S3, GCS, or Azure Blob with an NVMe cache in front.',
  },
]

export const simplicityStats: Stat[] = [
  {
    value: '~50%',
    label: 'lower query latency on average vs Loki, Mimir, and Tempo',
  },
  { value: '5×', label: 'faster median trace query than Tempo' },
  { value: '1/18', label: 'of Mimir’s CPU for the same workload' },
  { value: '0', label: 'replicated disks, hash rings, or ZooKeeper to run' },
]

export const verificationCells = [
  {
    icon: 'M9 12l2 2 4-4 M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z',
    title: 'Oracle regression tests',
    body: 'Every pull request sends identical fixtures and queries to Plural Telemetry and to Prometheus, Loki, or Tempo, then compares the responses.',
  },
  {
    icon: 'M4 4h6v6H4z M14 14h6v6h-6z M14 7h3a3 3 0 0 1 3 3 M10 17H7a3 3 0 0 1-3-3',
    title: 'Nightly differential fuzzing',
    body: 'Randomized datasets and recursively generated queries probe Unicode, NaN, clock skew, cardinality extremes, and out-of-order writes. Every run is seeded and replayable.',
  },
  {
    icon: 'M4 20V12 M10 20V6 M16 20v-4 M2 20h20',
    title: 'Published benchmarks',
    body: 'The same runs record latency, CPU, and memory on both sides, with the seed and commit, including the cases where we lose.',
  },
]

export const operatorInstall = `helm upgrade --install telemetry-operator \\
  oci://ghcr.io/pluralsh/charts/telemetry-operator \\
  --namespace telemetry --create-namespace`

export const logsResourceYaml = `apiVersion: telemetry.plural.sh/v1alpha1
kind: Logs
metadata:
  name: logs
  namespace: telemetry
spec:
  mode: Sharded # or Standalone for dev and edge
  config:
    retention: 14d
    storage:
      objectStore:
        type: Aws # or Gcp, Azure
        aws:
          region: us-east-1
          bucket: acme-telemetry
  writer:
    replicas: 3
  reader:
    autoscaling:
      enabled: true`

export const operatorPoints = [
  'Metrics, Logs, and Traces custom resources, plus per-tenant credentials',
  'Writers, per-shard readers, Services, PDBs, autoscalers, and Ingress',
  'S3, GCS, or Azure Blob, with IRSA, Pod Identity, or workload identity',
  'Standalone mode for dev and edge, sharded mode for production',
]

export const costReasons = [
  {
    eyebrow: 'Datadog',
    title: 'Priced per event indexed',
    body: 'At 5 TB/day, indexing is about 96% of the bill, and it scales with event count, not bytes.',
  },
  {
    eyebrow: 'Loki',
    title: 'Replication and sprawl',
    body: 'Every write fans out to three ingesters across zones, which costs about $2,000/month in cross-AZ traffic alone at 5 TB/day.',
  },
  {
    eyebrow: 'Plural Telemetry',
    title: 'Write once, let S3 keep it',
    body: 'Each record goes to one shard owner, and object storage provides the durability. Readers only move query results between zones.',
  },
]

export const agentQuery = `GET /read/ns/payments/loki/api/v1/query_range
  ?query=sum by (route) (rate({app="payments-api"} |= "error" [5m]))
  &start=now-1h
Authorization: Bearer <scoped JWT>`

export const observabilityFaq = [
  {
    question: 'Do I have to re-instrument anything?',
    answer:
      'No. Each store speaks the protocols you already send, including Prometheus remote write, Loki push, OTLP, and Zipkin, and answers PromQL, LogQL, and TraceQL through the APIs Grafana already queries. Switching is a change of URL.',
  },
  {
    question: 'What happens when a writer dies?',
    answer:
      'Its Kubernetes Lease expires, another writer takes it over, and the shard is reopened from object storage. Data is durable once it lands in the bucket; writes can wait for that before acknowledging.',
  },
  {
    question: 'How do you know it’s compatible and fast?',
    answer:
      'Every store is continuously fuzzed against its reference implementation on identical data and queries, with latency, CPU, and memory recorded for both sides and published, including the cases where we lose.',
  },
  {
    question: 'Is it open source?',
    answer:
      'Yes. Plural Telemetry is Apache 2.0, runs entirely in your cluster against your own bucket, and is developed in the open by Plural.',
  },
]
