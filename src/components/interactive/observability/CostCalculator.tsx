'use client'

import { useMemo, useState } from 'react'

import { motion } from 'motion/react'

import { Segmented } from '@/components/ui/Segmented'
import { cn } from '@/utils/cn'

import { type CostInputs, DEFAULT_INPUTS, estimate, usd } from './costModel'
import { DiagramFrame, Leader } from './DiagramFrame'

const COLORS = ['var(--accent)', 'var(--subtle)', 'var(--ink)']

const FIELDS: {
  key: keyof CostInputs
  label: string
  min: number
  max: number
  step: number
  fmt: (v: number) => string
}[] = [
  {
    key: 'gbPerDay',
    label: 'Ingest',
    min: 100,
    max: 20000,
    step: 100,
    fmt: (v) => (v >= 1000 ? `${(v / 1000).toFixed(1)} TB/day` : `${v} GB/day`),
  },
  {
    key: 'retentionDays',
    label: 'Retention',
    min: 3,
    max: 30,
    step: 1,
    fmt: (v) => `${v} days`,
  },
  {
    key: 'eventBytes',
    label: 'Avg event',
    min: 200,
    max: 4000,
    step: 50,
    fmt: (v) => `${v} B`,
  },
  {
    key: 'compression',
    label: 'Compression',
    min: 3,
    max: 15,
    step: 0.5,
    fmt: (v) => `${v}×`,
  },
  {
    key: 'peakFactor',
    label: 'Peak / avg',
    min: 1,
    max: 3,
    step: 0.1,
    fmt: (v) => `${v.toFixed(1)}×`,
  },
  {
    key: 'vcpuHour',
    label: 'vCPU-hour',
    min: 0.02,
    max: 0.08,
    step: 0.001,
    fmt: (v) => `$${v.toFixed(3)}`,
  },
]

/** Monthly log-ingestion cost: Plural Telemetry vs self-hosted Loki vs Datadog. */
export function CostCalculator() {
  const [inputs, setInputs] = useState<CostInputs>(DEFAULT_INPUTS)
  const [scaleMode, setScaleMode] = useState<'log' | 'linear'>('log')
  const results = useMemo(() => estimate(inputs), [inputs])
  const max = Math.max(...results.map((r) => r.total))
  const scale = (v: number) =>
    scaleMode === 'log' ? Math.log10(Math.max(v, 1)) / Math.log10(max) : v / max
  const ours = results[0].total

  return (
    <DiagramFrame
      label="Monthly cost of log ingestion"
      controls={
        <>
          <Segmented
            label="Bar scale"
            value={scaleMode}
            onChange={setScaleMode}
            options={[
              { value: 'log', label: 'log' },
              { value: 'linear', label: 'linear' },
            ]}
          />
          <button
            type="button"
            onClick={() => setInputs(DEFAULT_INPUTS)}
            className="text-muted hover:text-ink hover:border-line-strong h-[30px] cursor-pointer rounded-sm border border-transparent px-2.5 text-[12.5px]"
          >
            Reset to 5 TB/day
          </button>
        </>
      }
      caption="Estimates for comparison only, using AWS us-east-1 on-demand prices and Datadog list prices with an annual commitment. They exclude engineering time, Datadog Flex Logs, and committed-use discounts."
    >
      <div className="grid lg:grid-cols-[280px_1fr]">
        <div className="border-line flex flex-col gap-4 border-b p-5 lg:border-r lg:border-b-0">
          {FIELDS.map((f) => (
            <label
              key={f.key}
              className="block"
            >
              <div className="mb-1 flex items-baseline gap-2 text-[13.5px]">
                <span className="text-body">{f.label}</span>
                <Leader />
                <span className="text-ink font-mono text-[12.5px]">
                  {f.fmt(inputs[f.key])}
                </span>
              </div>
              <input
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={inputs[f.key]}
                onChange={(e) =>
                  setInputs({ ...inputs, [f.key]: Number(e.target.value) })
                }
                className="range-hairline w-full"
              />
            </label>
          ))}
        </div>

        <div
          aria-live="polite"
          className="flex min-w-0 flex-col justify-center gap-6 p-5"
        >
          {results.map((r, i) => (
            <div key={r.name}>
              <div className="mb-2 flex items-baseline gap-3">
                <span
                  className={cn(
                    'font-serif text-[19px]',
                    i === 0 ? 'text-accent-ink' : 'text-ink'
                  )}
                >
                  {r.name}
                </span>
                <Leader />
                <span className="font-serif text-[28px] leading-none tabular-nums">
                  {usd(r.total)}
                  <span className="text-muted ml-1 font-sans text-[13px]">
                    /mo
                  </span>
                </span>
              </div>
              <div className="border-line h-3.5 overflow-hidden border bg-[repeating-linear-gradient(-45deg,var(--line)_0_1px,transparent_1px_6px)]">
                <motion.div
                  className="h-full"
                  style={{ background: COLORS[i] }}
                  animate={{
                    width: `${Math.max(1.5, scale(r.total) * 100)}%`,
                  }}
                  transition={{ type: 'spring', stiffness: 140, damping: 22 }}
                />
              </div>
              <div className="text-muted mt-1.5 flex flex-wrap justify-between gap-2 text-[12.5px]">
                <span>{r.footprint}</span>
                {i > 0 && (
                  <span className="text-ink font-mono">
                    {(r.total / ours).toFixed(1)}× Plural Telemetry
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-line grid border-t md:grid-cols-3">
        {results.map((r, i) => (
          <div
            key={r.name}
            className={cn(
              i > 0 && 'border-line border-t md:border-t-0 md:border-l'
            )}
          >
            <div className="border-line flex items-center gap-2 border-b px-4 py-2.5 text-[14px] font-medium">
              <span
                aria-hidden="true"
                className="size-2"
                style={{ background: COLORS[i] }}
              />
              {r.name}
            </div>
            <table className="w-full border-collapse text-[12.5px]">
              <tbody>
                {r.lines.map((l) => (
                  <tr
                    key={l.label}
                    className="border-line border-b last:border-b-0"
                  >
                    <td className="px-4 py-2">
                      <div className="text-ink">{l.label}</div>
                      <div className="text-muted text-[11.5px]">{l.detail}</div>
                    </td>
                    <td className="text-ink px-4 py-2 text-right align-top font-mono tabular-nums">
                      {usd(l.usd)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </DiagramFrame>
  )
}
