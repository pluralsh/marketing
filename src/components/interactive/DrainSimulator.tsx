'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

type Mode = 'node' | 'plural'
type PodState = 'old' | 'down' | 'rolling' | 'ready'
type Pod = {
  name: string
  node: number
  wave: number
  state: PodState
  ticks: number
}

const WORKLOADS = [
  'ingress-nginx',
  'cert-manager',
  'auth',
  'payments-api',
  'checkout',
  'cart',
  'orders',
  'search',
  'notifications',
  'reporting',
  'worker',
  'cron',
]
const TICK_MS = 450
const RESTART_TICKS = 3
const WAVE_CONCURRENCY = 2

const freshPods = (): Pod[] =>
  WORKLOADS.map((name, i) => ({
    name,
    node: Math.floor(i / 3),
    wave: i < 3 ? 0 : i < 8 ? 1 : 2,
    state: 'old',
    ticks: 0,
  }))

/** Advance the simulation one tick. Pure, so it is easy to reason about. */
function step(pods: Pod[], mode: Mode): Pod[] {
  const next = pods.map((pod) => {
    const busy = pod.state === 'down' || pod.state === 'rolling'

    return busy && pod.ticks <= 1
      ? { ...pod, state: 'ready' as const, ticks: 0 }
      : { ...pod, ticks: pod.ticks - 1 }
  })
  const busy = next.some((p) => p.state === 'down' || p.state === 'rolling')

  if (mode === 'node') {
    // Drain a whole node at a time: every pod on it goes down together.
    const target = busy ? undefined : next.find((p) => p.state === 'old')

    return target
      ? next.map((p) =>
          p.node === target.node
            ? { ...p, state: 'down', ticks: RESTART_TICKS }
            : p
        )
      : next
  }

  // ClusterDrain: rolling restarts in waves, a few workloads at a time.
  const pending = next.filter((p) => p.state !== 'ready')

  if (!pending.length) return next
  const wave = Math.min(...pending.map((p) => p.wave))
  let slots =
    WAVE_CONCURRENCY -
    next.filter((p) => p.wave === wave && p.state === 'rolling').length

  return next.map((p) => {
    if (p.wave !== wave || p.state !== 'old' || slots <= 0) return p
    slots--

    return { ...p, state: 'rolling', ticks: RESTART_TICKS }
  })
}

const stateStyles: Record<PodState, { label: string; className: string }> = {
  old: {
    label: 'running',
    className: 'border-line-strong bg-surface text-muted',
  },
  down: {
    label: 'unavailable',
    className: 'border-danger/40 bg-danger/8 text-danger',
  },
  rolling: {
    label: 'rolling restart',
    className: 'border-accent bg-accent-tint text-accent-ink',
  },
  ready: {
    label: 'upgraded',
    className: 'border-success/40 bg-success/8 text-success',
  },
}

const modes: { value: Mode; label: string }[] = [
  { value: 'node', label: 'Node-by-node drain' },
  { value: 'plural', label: 'Plural ClusterDrain' },
]

export function DrainSimulator() {
  const [mode, setMode] = useState<Mode>('plural')
  const [pods, setPods] = useState(freshPods)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    if (!running) return
    const timer = setInterval(() => {
      setPods((current) => {
        const next = step(current, mode)

        if (next.every((p) => p.state === 'ready')) setRunning(false)

        return next
      })
    }, TICK_MS)

    return () => clearInterval(timer)
  }, [running, mode])

  const reset = (nextMode = mode) => {
    setRunning(false)
    setMode(nextMode)
    setPods(freshPods())
  }

  const total = pods.length
  const done = pods.filter((p) => p.state === 'ready').length
  const down = pods.filter((p) => p.state === 'down').length
  const availability = Math.round((100 * (total - down)) / total)

  return (
    <div className="border-line-strong bg-surface overflow-hidden rounded-xl border">
      <div className="border-line flex flex-wrap items-center justify-between gap-3 border-b p-3">
        <div
          role="tablist"
          aria-label="Drain mode"
          className="bg-canvas flex gap-1 rounded-lg p-1"
        >
          {modes.map((m) => (
            <button
              key={m.value}
              type="button"
              role="tab"
              aria-selected={mode === m.value}
              onClick={() => reset(m.value)}
              className={cn(
                'min-h-9 cursor-pointer rounded-md px-3 text-sm transition-colors',
                mode === m.value
                  ? 'bg-surface text-ink shadow-sm'
                  : 'text-muted hover:text-ink'
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {!running && done < total && (
            <Button
              size="sm"
              onClick={() => setRunning(true)}
            >
              Start drain
            </Button>
          )}
          <Button
            size="sm"
            variant="secondary"
            onClick={() => reset()}
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <ul className="m-0 grid flex-[2_1_420px] list-none grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-2 p-4">
          {pods.map((pod) => {
            const style = stateStyles[pod.state]

            return (
              <li
                key={pod.name}
                className={cn(
                  'flex flex-col gap-0.5 rounded-lg border px-3 py-2.5 font-mono text-xs transition-colors',
                  style.className
                )}
              >
                <span className="text-ink text-[13px]">{pod.name}</span>
                <span className="text-muted">
                  {mode === 'node'
                    ? `node-${pod.node + 1}`
                    : `wave ${pod.wave}`}
                </span>
                <span>● {style.label}</span>
              </li>
            )
          })}
        </ul>
        <div className="border-line flex flex-[1_1_260px] flex-col gap-5 border-l p-5">
          <div>
            <div className="text-label">Service availability</div>
            <div
              aria-live="polite"
              className={cn(
                'font-serif text-5xl',
                availability < 100 ? 'text-danger' : 'text-success'
              )}
            >
              {availability}%
            </div>
          </div>
          <div>
            <div className="text-label mb-2">Progress</div>
            <div className="bg-surface-muted h-2 overflow-hidden rounded">
              <div
                className="bg-accent h-full transition-[width]"
                style={{ width: `${(100 * done) / total}%` }}
              />
            </div>
            <div className="text-muted mt-2 text-sm">
              {done} of {total} workloads restarted
            </div>
          </div>
          <p className="text-body m-0 text-sm">
            {mode === 'node'
              ? 'Each node is drained at once, so every pod on it goes down together, whatever deployment owns it.'
              : 'Workloads restart in waves, two at a time, through their own rolling update. Old pods serve traffic until new ones are ready.'}
          </p>
        </div>
      </div>
    </div>
  )
}
