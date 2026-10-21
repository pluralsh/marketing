// Ported from the Plural Telemetry docs (telemetry.plural.sh/architecture).
// Pod counts are illustrative sizing from vendor capacity guides, not benchmarks.

export type TelemetryProduct = 'logs' | 'metrics' | 'traces'

export type Mode = 'write' | 'read'

export type ArchNode = {
  id: string
  label: string
  sub?: string
  x: number
  y: number
  w: number
  h: number
  /** Pods for a given scale level and query load (1–3). */
  pods?: (level: number, q: number) => number
  tone?:
    | 'ours'
    | 'stateful'
    | 'stateless'
    | 'cache'
    | 'store'
    | 'client'
    | 'ring'
  modes?: Mode[]
}

export type Flow = {
  mode: Mode
  d: string
  color?: string
  dur?: number
  count?: number
}

export type ArchSide = {
  title: string
  subtitle: string
  nodes: ArchNode[]
  flows: Flow[]
  stats: (level: number, q: number) => { label: string; value: string }[]
  scaleNote: string
}

export type ArchConfig = {
  levelLabel: string
  levels: string[]
  defaultLevel: number
  ours: ArchSide
  peer: ArchSide
}

const INK = 'var(--ink)'
const ACCENT_INK = 'var(--accent-ink)'

const at = (arr: number[]) => (l: number) => arr[Math.min(l, arr.length - 1)]

function ours(
  product: TelemetryProduct,
  agents: string,
  writers: number[]
): ArchSide {
  const w = at(writers)
  // One reader group per shard; query load sets the replicas in each group.
  const r = (l: number, q: number) => w(l) * q

  return {
    title: `Plural ${product[0].toUpperCase()}${product.slice(1)}`,
    subtitle: 'writers + stateless readers on S3',
    nodes: [
      {
        id: 'agents',
        label: 'Agents',
        sub: agents,
        x: 20,
        y: 14,
        w: 200,
        h: 42,
        tone: 'client',
        modes: ['write'],
      },
      {
        id: 'grafana',
        label: 'Grafana',
        sub: 'queries',
        x: 240,
        y: 14,
        w: 200,
        h: 42,
        tone: 'client',
        modes: ['read'],
      },
      {
        id: 'writers',
        label: 'writer',
        sub: '1 shard / pod',
        x: 20,
        y: 90,
        w: 200,
        h: 150,
        pods: (l) => w(l),
        tone: 'ours',
        modes: ['write'],
      },
      {
        id: 'readers',
        label: 'reader',
        sub: 'stateless · disk is cache',
        x: 240,
        y: 90,
        w: 200,
        h: 150,
        pods: (l, q) => r(l, q),
        tone: 'ours',
        modes: ['read'],
      },
      {
        id: 'control',
        label: 'Kubernetes Leases',
        x: 20,
        y: 256,
        w: 420,
        h: 30,
        tone: 'ring',
      },
      {
        id: 'slate',
        label: 'SlateDB',
        sub: 'one per shard',
        x: 20,
        y: 298,
        w: 420,
        h: 44,
        tone: 'stateless',
      },
      {
        id: 'store',
        label: 'Object storage',
        x: 20,
        y: 356,
        w: 420,
        h: 48,
        tone: 'store',
      },
    ],
    flows: [
      { mode: 'write', d: 'M120 56 V380', count: 3 },
      {
        mode: 'write',
        d: 'M58 182 C 80 150, 160 150, 182 182',
        color: INK,
        dur: 1.6,
        count: 1,
      },
      { mode: 'read', d: 'M332 56 V380', count: 2 },
      { mode: 'read', d: 'M348 380 V56', color: ACCENT_INK, count: 2 },
      {
        mode: 'read',
        d: 'M278 182 C 300 150, 380 150, 402 182',
        color: INK,
        dur: 1.6,
        count: 1,
      },
    ],
    stats: (l, q) => [
      { label: 'component kinds', value: '2' },
      { label: 'pods', value: String(w(l) + r(l, q)) },
      { label: 'replicated disks', value: '0' },
      { label: 'hash rings', value: '0' },
    ],
    scaleNote:
      'More writers means more shards from the next hour on, and a reader group for each. Nothing is copied or rebalanced; each group scales on its own, and any reader merges every shard over gRPC.',
  }
}

type PeerSpec = {
  name: string
  subtitle: string
  agents: string
  ingester: string
  storeSub: string
  gateway: string
  dist: number[]
  ing: number[]
  fe: number[]
  sched?: number[]
  querier: number[]
  gw: number[]
  cache: number[]
  compactor: number[]
  extra?: { label: string; pods: number[] }
  rings: string
  kinds: number
  scaleNote: string
}

function peer(s: PeerSpec): ArchSide {
  const querier = (l: number, q: number) =>
    Math.ceil(at(s.querier)(l) * (0.5 + q / 2))
  const total = (l: number, q: number) =>
    [
      s.dist,
      s.ing,
      s.fe,
      s.sched ?? [0],
      s.gw,
      s.cache,
      s.compactor,
      s.extra?.pods ?? [0],
    ].reduce((a, arr) => a + at(arr)(l), 0) + querier(l, q)

  return {
    title: s.name,
    subtitle: s.subtitle,
    nodes: [
      {
        id: 'agents',
        label: 'Agents',
        sub: s.agents,
        x: 20,
        y: 14,
        w: 200,
        h: 42,
        tone: 'client',
        modes: ['write'],
      },
      {
        id: 'grafana',
        label: 'Grafana',
        sub: 'queries',
        x: 240,
        y: 14,
        w: 200,
        h: 42,
        tone: 'client',
        modes: ['read'],
      },
      {
        id: 'dist',
        label: 'distributor',
        x: 20,
        y: 76,
        w: 200,
        h: 52,
        pods: at(s.dist),
        tone: 'stateless',
        modes: ['write'],
      },
      {
        id: 'ing',
        label: 'ingester',
        sub: s.ingester,
        x: 20,
        y: 138,
        w: 200,
        h: 102,
        pods: at(s.ing),
        tone: 'stateful',
        modes: ['write', 'read'],
      },
      {
        id: 'fe',
        label: 'query-frontend',
        x: 240,
        y: 76,
        w: s.sched ? 96 : 200,
        h: 52,
        pods: at(s.fe),
        tone: 'stateless',
        modes: ['read'],
      },
      ...(s.sched
        ? [
            {
              id: 'sched',
              label: 'scheduler',
              x: 344,
              y: 76,
              w: 96,
              h: 52,
              pods: at(s.sched),
              tone: 'stateless' as const,
              modes: ['read' as Mode],
            },
          ]
        : []),
      {
        id: 'querier',
        label: 'querier',
        x: 240,
        y: 138,
        w: 200,
        h: 50,
        pods: querier,
        tone: 'stateless',
        modes: ['read'],
      },
      {
        id: 'gw',
        label: s.gateway,
        x: 240,
        y: 196,
        w: 96,
        h: 44,
        pods: at(s.gw),
        tone: 'stateful',
        modes: ['read'],
      },
      {
        id: 'cache',
        label: 'memcached',
        sub: '×3 pools',
        x: 344,
        y: 196,
        w: 96,
        h: 44,
        pods: at(s.cache),
        tone: 'cache',
        modes: ['read'],
      },
      {
        id: 'ring',
        label: s.rings,
        x: 20,
        y: 256,
        w: 420,
        h: 30,
        tone: 'ring',
      },
      {
        id: 'compactor',
        label: 'compactor',
        x: 20,
        y: 298,
        w: s.extra ? 200 : 420,
        h: 44,
        pods: at(s.compactor),
        tone: 'stateful',
      },
      ...(s.extra
        ? [
            {
              id: 'extra',
              label: s.extra.label,
              x: 240,
              y: 298,
              w: 200,
              h: 44,
              pods: at(s.extra.pods),
              tone: 'stateless' as const,
            },
          ]
        : []),
      {
        id: 'store',
        label: 'Object storage',
        sub: s.storeSub,
        x: 20,
        y: 356,
        w: 420,
        h: 48,
        tone: 'store',
      },
    ],
    flows: [
      { mode: 'write', d: 'M120 56 V138', count: 2 },
      { mode: 'write', d: 'M120 128 L60 160', count: 1, dur: 1.4 },
      { mode: 'write', d: 'M120 128 L120 160', count: 1, dur: 1.4 },
      { mode: 'write', d: 'M120 128 L180 160', count: 1, dur: 1.4 },
      { mode: 'write', d: 'M220 220 H230 V380', count: 2, dur: 2.6 },
      { mode: 'read', d: 'M288 56 V76', count: 1, dur: 1 },
      ...(s.sched
        ? [
            { mode: 'read' as Mode, d: 'M336 102 H344', count: 1, dur: 0.8 },
            { mode: 'read' as Mode, d: 'M392 128 L340 138', count: 1, dur: 1 },
          ]
        : [{ mode: 'read' as Mode, d: 'M340 128 V138', count: 1, dur: 0.8 }]),
      { mode: 'read', d: 'M240 170 H220', count: 2, dur: 1, color: ACCENT_INK },
      { mode: 'read', d: 'M288 188 V196', count: 1, dur: 0.8 },
      {
        mode: 'read',
        d: 'M392 188 V196',
        count: 1,
        dur: 0.8,
        color: ACCENT_INK,
      },
      { mode: 'read', d: 'M288 240 V250 H234 V380', count: 2, dur: 2.2 },
    ],
    stats: (l, q) => [
      { label: 'component kinds', value: String(s.kinds) },
      { label: 'pods', value: String(total(l, q)) },
      { label: 'replicated disks', value: `${at(s.ing)(l)} PVCs` },
      { label: 'hash rings', value: '4' },
    ],
    scaleNote: s.scaleNote,
  }
}

export const ARCH: Record<TelemetryProduct, ArchConfig> = {
  logs: {
    levelLabel: 'Ingest',
    levels: [
      '100 GB/day',
      '500 GB/day',
      '1 TB/day',
      '2 TB/day',
      '5 TB/day',
      '10 TB/day',
    ],
    defaultLevel: 4,
    ours: ours('logs', 'Alloy · OTel · Fluent Bit', [1, 1, 1, 1, 3, 5]),
    peer: peer({
      name: 'Grafana Loki',
      subtitle: 'microservices mode',
      agents: 'Promtail · Alloy · OTel',
      ingester: 'RF=3 · WAL on PVC',
      storeSub: 'chunks + TSDB index',
      gateway: 'index-gw',
      dist: [2, 2, 3, 4, 8, 14],
      ing: [3, 3, 6, 9, 18, 33],
      fe: [2, 2, 2, 2, 2, 3],
      sched: [2, 2, 2, 2, 2, 2],
      querier: [2, 3, 4, 6, 10, 16],
      gw: [2, 2, 2, 2, 3, 4],
      cache: [3, 3, 3, 4, 6, 9],
      compactor: [1, 1, 1, 1, 1, 1],
      extra: { label: 'ruler', pods: [1, 1, 1, 2, 2, 3] },
      rings: 'memberlist rings: distributor · ingester · compactor · scheduler',
      kinds: 9,
      scaleNote:
        'New ingesters join the hash ring and take over token ranges; every write fans out to three of them. Scaling down means flushing and handing off in-memory chunks and WALs one ingester at a time.',
    }),
  },
  metrics: {
    levelLabel: 'Active series',
    levels: ['100k', '1M', '4M', '8M', '16M', '32M'],
    defaultLevel: 3,
    ours: ours('metrics', 'Prometheus · Alloy · OTel', [1, 1, 1, 2, 4, 8]),
    peer: peer({
      name: 'Grafana Mimir',
      subtitle: 'microservices mode',
      agents: 'Prometheus · Alloy',
      ingester: 'RF=3 · TSDB head + WAL',
      storeSub: '2h TSDB blocks',
      gateway: 'store-gw',
      dist: [2, 2, 3, 5, 9, 17],
      ing: [3, 3, 9, 15, 30, 60],
      fe: [2, 2, 2, 2, 2, 3],
      sched: [2, 2, 2, 2, 2, 2],
      querier: [2, 2, 4, 6, 10, 16],
      gw: [3, 3, 3, 4, 6, 9],
      cache: [3, 3, 4, 6, 8, 12],
      compactor: [1, 1, 1, 2, 3, 4],
      extra: { label: 'ruler · alertmanager', pods: [2, 2, 3, 3, 4, 5] },
      rings:
        'memberlist rings: distributor · ingester · store-gateway · compactor',
      kinds: 10,
      scaleNote:
        'Each series lives in memory on three ingesters until a 2-hour block is cut and uploaded. Adding ingesters reshards series via the ring; store-gateways reshard blocks via their own ring.',
    }),
  },
  traces: {
    levelLabel: 'Spans/s',
    levels: ['5k', '20k', '50k', '100k', '250k', '500k'],
    defaultLevel: 3,
    ours: ours('traces', 'OTel Collector · Alloy', [1, 1, 1, 2, 5, 10]),
    peer: peer({
      name: 'Grafana Tempo',
      subtitle: 'microservices mode',
      agents: 'OTel Collector · Alloy',
      ingester: 'RF=3 · live traces + WAL',
      storeSub: 'Parquet blocks',
      gateway: 'metrics-gen',
      dist: [2, 2, 3, 4, 8, 15],
      ing: [3, 3, 6, 9, 21, 39],
      fe: [2, 2, 2, 2, 2, 3],
      querier: [2, 2, 4, 6, 10, 18],
      gw: [1, 1, 2, 2, 4, 6],
      cache: [3, 3, 3, 4, 6, 9],
      compactor: [1, 1, 2, 2, 4, 6],
      rings: 'memberlist rings: distributor · ingester · compactor · generator',
      kinds: 7,
      scaleNote:
        'Ingesters hold live traces in memory, replicated three ways, until blocks are cut. Compactors shard work through their own ring; queriers fan searches across ingesters and backend blocks.',
    }),
  },
}
