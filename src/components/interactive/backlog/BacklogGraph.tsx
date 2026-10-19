'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/Button'

import { BacklogEngine } from './BacklogEngine'

/**
 * A year of open tickets drawn as a contribution graph. Sweeping the pointer
 * across it (or pressing "Run agents") clears the backlog.
 */
export function BacklogGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<BacklogEngine | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)
  const [legend, setLegend] = useState<string[]>([])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return
    const engine = new BacklogEngine(canvas, { onCountChange: setRemaining })
    const styles = getComputedStyle(canvas)

    engineRef.current = engine
    setLegend(
      BacklogEngine.paletteFor(
        styles.getPropertyValue('--accent').trim(),
        styles.getPropertyValue('--surface-muted').trim()
      )
    )

    return () => {
      engine.destroy()
      engineRef.current = null
    }
  }, [])

  const isZero = remaining === 0

  return (
    <div className="border-line-strong bg-surface mt-3 flex flex-col gap-2 rounded-xl border px-[clamp(12px,2vw,20px)] pt-4 pb-3.5">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[13px]">
        <span aria-live="polite">
          <span className="font-medium">
            {remaining === null
              ? '…'
              : `${remaining} ${remaining === 1 ? 'ticket' : 'tickets'}`}
          </span>{' '}
          <span className="text-muted">open in the last year</span>
        </span>
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-muted max-sm:hidden">
            Sweep your cursor across to clear it
          </span>
          <Button
            variant="secondary"
            size="sm"
            className="bg-canvas font-mono text-[13px]"
            onClick={() => engineRef.current?.runAgents()}
          >
            Run agents
          </Button>
        </span>
      </div>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Backlog graph of open tickets. Move the pointer across it, or use Run agents, to clear it."
        className="block h-[170px] w-full cursor-crosshair touch-none sm:h-[210px]"
      />
      <div className="text-label flex min-h-9 flex-wrap items-center justify-between gap-3">
        {isZero ? (
          <span className="flex flex-wrap items-center gap-2.5">
            <span className="text-ink font-medium">Backlog zero.</span>
            <span>This is what Plural agents do all day.</span>
            <Button
              size="sm"
              className="font-mono text-xs"
              onClick={() => engineRef.current?.reset()}
            >
              Refill backlog
            </Button>
          </span>
        ) : (
          <span>
            Each block is an upgrade, CVE, alert, or ticket waiting on your
            team.
          </span>
        )}
        <span
          className="flex items-center gap-1"
          aria-hidden="true"
        >
          Less
          {legend.map((color) => (
            <span
              key={color}
              className="inline-block size-[11px] rounded-xs"
              style={{ background: color }}
            />
          ))}
          More
        </span>
      </div>
    </div>
  )
}
