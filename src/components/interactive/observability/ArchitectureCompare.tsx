'use client'

import { useId, useState } from 'react'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

import { Segmented } from '@/components/ui/Segmented'
import { cn } from '@/utils/cn'

import {
  ARCH,
  type ArchNode,
  type ArchSide,
  type TelemetryProduct,
} from './archConfigs'
import { DiagramFrame, Leader } from './DiagramFrame'

const QUERY_LOAD = 2

const TONE: Record<
  NonNullable<ArchNode['tone']>,
  { fill: string; stroke: string; dash?: string }
> = {
  ours: {
    fill: 'color-mix(in srgb, var(--accent) 7%, var(--surface))',
    stroke: 'var(--accent)',
  },
  stateful: { fill: 'var(--surface)', stroke: 'var(--ink)' },
  stateless: { fill: 'var(--surface)', stroke: 'var(--line-strong)' },
  cache: { fill: 'var(--surface)', stroke: 'var(--line-strong)', dash: '3 3' },
  store: { fill: 'hatch', stroke: 'var(--line-strong)' },
  client: { fill: 'var(--canvas)', stroke: 'var(--line)' },
  ring: { fill: 'transparent', stroke: 'var(--line-strong)', dash: '2 4' },
}

const POD = 9
const GAP = 3

function Pods({
  node,
  count,
  color,
}: {
  node: ArchNode
  count: number
  color: string
}) {
  const perRow = Math.max(1, Math.floor((node.w - 16 + GAP) / (POD + GAP)))
  const top = node.y + (node.sub ? 34 : 24)
  const rows = Math.max(
    1,
    Math.floor((node.y + node.h - 6 - top + GAP) / (POD + GAP))
  )
  const cap = perRow * rows
  const shown = Math.min(count, count > cap ? cap - 1 : cap)

  return (
    <g>
      <AnimatePresence>
        {Array.from({ length: shown }, (_, i) => (
          <motion.rect
            key={i}
            x={node.x + 8 + (i % perRow) * (POD + GAP)}
            y={top + Math.floor(i / perRow) * (POD + GAP)}
            width={POD}
            height={POD}
            fill={color}
            fillOpacity={node.tone === 'ours' ? 0.9 : 0.5}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              delay: (i % 12) * 0.015,
              type: 'spring',
              stiffness: 420,
              damping: 24,
            }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        ))}
      </AnimatePresence>
      {count > shown && (
        <text
          x={node.x + 8 + (shown % perRow) * (POD + GAP) + 1}
          y={top + Math.floor(shown / perRow) * (POD + GAP) + 8}
          fontSize={8.5}
          className="fill-muted font-mono"
        >
          +{count - shown}
        </text>
      )}
      <text
        x={node.x + node.w - 8}
        y={node.y + 15}
        textAnchor="end"
        fontSize={10}
        className="fill-muted font-mono"
      >
        ×{count}
      </text>
    </g>
  )
}

function Side({
  side,
  level,
  ours,
}: {
  side: ArchSide
  level: number
  ours: boolean
}) {
  const hatchId = useId()
  const reduced = useReducedMotion()
  const color = ours ? 'var(--accent)' : 'var(--subtle)'

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-baseline gap-2 px-5 pt-4 pb-2.5">
        <span
          className={cn(
            'font-serif text-[19px]',
            ours ? 'text-accent-ink' : 'text-ink'
          )}
        >
          {side.title}
        </span>
        <Leader />
        <span className="text-label">{side.subtitle}</span>
      </div>
      <div className="border-line bg-canvas border-t">
        <svg
          viewBox="0 0 460 418"
          className="h-auto w-full"
          role="img"
          aria-label={`${side.title} architecture`}
        >
          <defs>
            <pattern
              id={hatchId}
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path
                d="M0 0v6"
                stroke="var(--ink)"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          {side.nodes.map((n) => {
            const t = TONE[n.tone ?? 'stateless']

            return (
              <g key={n.id}>
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={n.h}
                  rx={2}
                  fill={t.fill === 'hatch' ? `url(#${hatchId})` : t.fill}
                  stroke={t.stroke}
                  strokeOpacity={n.tone === 'stateful' ? 0.6 : 1}
                  strokeDasharray={t.dash}
                />
                <text
                  x={n.x + 8}
                  y={n.y + 16}
                  fontSize={11.5}
                  className="fill-ink font-mono"
                >
                  {n.label}
                </text>
                {n.sub && (
                  <text
                    x={n.x + 8}
                    y={n.y + 29}
                    fontSize={9.5}
                    fontStyle="italic"
                    className="fill-muted"
                  >
                    {n.sub}
                  </text>
                )}
                {n.pods && (
                  <Pods
                    node={n}
                    count={n.pods(level, QUERY_LOAD)}
                    color={
                      n.tone === 'ours'
                        ? color
                        : n.tone === 'cache'
                          ? 'var(--subtle)'
                          : 'var(--ink)'
                    }
                  />
                )}
              </g>
            )
          })}
          {side.flows.map((f, i) => {
            const c =
              f.color ?? (f.mode === 'write' ? color : 'var(--accent-ink)')
            const dur = f.dur ?? 2.4
            const count = f.count ?? 1

            return (
              <g key={i}>
                <path
                  d={f.d}
                  fill="none"
                  stroke={c}
                  strokeOpacity={0.45}
                  strokeWidth={1.25}
                  strokeDasharray="4 8"
                >
                  {!reduced && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="12"
                      to="0"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  )}
                </path>
                {!reduced &&
                  Array.from({ length: count }, (_, k) => (
                    <rect
                      key={k}
                      x={-3}
                      y={-3}
                      width={6}
                      height={6}
                      fill={c}
                    >
                      <animateMotion
                        dur={`${dur}s`}
                        begin={`${(k * dur) / count + i * 0.13}s`}
                        repeatCount="indefinite"
                        path={f.d}
                      />
                    </rect>
                  ))}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

const PRODUCT_OPTIONS: { value: TelemetryProduct; label: string }[] = [
  { value: 'logs', label: 'Logs' },
  { value: 'metrics', label: 'Metrics' },
  { value: 'traces', label: 'Traces' },
]

/** Plural Telemetry next to its Grafana peer at a typical production load. */
export function ArchitectureCompare() {
  const [product, setProduct] = useState<TelemetryProduct>('logs')
  const cfg = ARCH[product]

  return (
    <DiagramFrame
      label="Architecture, side by side"
      controls={
        <Segmented
          label="Signal"
          value={product}
          onChange={setProduct}
          options={PRODUCT_OPTIONS}
        />
      }
      caption={`Illustrative sizing at ${cfg.levels[cfg.defaultLevel]}, from vendor capacity guides. Not benchmark results.`}
    >
      <div className="flex flex-col md:flex-row">
        <Side
          side={cfg.ours}
          level={cfg.defaultLevel}
          ours
        />
        <div className="bg-line h-px md:h-auto md:w-px" />
        <Side
          side={cfg.peer}
          level={cfg.defaultLevel}
          ours={false}
        />
      </div>
    </DiagramFrame>
  )
}
