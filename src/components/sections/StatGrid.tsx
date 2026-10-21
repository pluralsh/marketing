import type { Stat } from '@/content/types'

import { CellGrid } from './CellGrid'

export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <CellGrid minColumn="220px">
      {items.map((stat) => (
        <div
          key={stat.label}
          className="px-gutter py-9 lg:px-8"
        >
          <div className="text-stat text-accent-ink">{stat.value}</div>
          <p className="text-body mt-2.5 mb-0 text-[15px]">{stat.label}</p>
        </div>
      ))}
    </CellGrid>
  )
}
