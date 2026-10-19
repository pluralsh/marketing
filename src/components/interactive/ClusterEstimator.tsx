'use client'

import { useState } from 'react'

import {
  PRO_BASE_PRICE,
  PRO_CLUSTER_PRICE,
  PRO_MAX_CLUSTERS,
} from '@/content/pricing'

const stepperButton =
  'border-line-strong bg-surface hover:bg-surface-hover flex size-9 cursor-pointer items-center justify-center rounded-[4px] border text-lg disabled:opacity-40'

/** Monthly Pro estimate for a chosen cluster count; past the cap it points to Enterprise. */
export function ClusterEstimator() {
  const [clusters, setClusters] = useState(3)
  const overCap = clusters > PRO_MAX_CLUSTERS
  const price = PRO_BASE_PRICE + PRO_CLUSTER_PRICE * (clusters - 1)

  return (
    <div className="border-line bg-canvas flex flex-col gap-3 rounded-sm border p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-label">Estimate</span>
        <div
          role="group"
          aria-label="Number of clusters"
          className="flex items-center gap-2"
        >
          <button
            type="button"
            aria-label="Fewer clusters"
            className={stepperButton}
            disabled={clusters <= 1}
            onClick={() => setClusters((n) => Math.max(1, n - 1))}
          >
            −
          </button>
          <span
            aria-live="polite"
            className="min-w-24 text-center font-mono text-sm"
          >
            {overCap
              ? `${PRO_MAX_CLUSTERS}+ clusters`
              : `${clusters} ${clusters === 1 ? 'cluster' : 'clusters'}`}
          </span>
          <button
            type="button"
            aria-label="More clusters"
            className={stepperButton}
            disabled={overCap}
            onClick={() =>
              setClusters((n) => Math.min(PRO_MAX_CLUSTERS + 1, n + 1))
            }
          >
            +
          </button>
        </div>
      </div>
      <div aria-live="polite">
        <span className="font-serif text-[28px]">
          {overCap ? 'Enterprise' : `$${price.toLocaleString('en-US')}/mo`}
        </span>{' '}
        <span className="text-muted text-sm">
          {overCap ? 'covers unlimited clusters' : 'billed monthly'}
        </span>
      </div>
    </div>
  )
}
