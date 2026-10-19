import { SmartLink } from '@/components/ui/SmartLink'

import { CellGrid } from './CellGrid'

type LinkCard = {
  label: string
  title: string
  description?: string
  href: string
}

/** A ruled row of navigational cards ("Other ways to reach us", "Go deeper"). */
export function LinkCards({
  items,
  minColumn = '240px',
}: {
  items: LinkCard[]
  minColumn?: string
}) {
  return (
    <CellGrid minColumn={minColumn}>
      {items.map((item) => (
        <SmartLink
          key={item.href}
          href={item.href}
          className="text-ink hover:bg-surface group px-gutter flex flex-col gap-2 py-7 no-underline lg:px-8"
        >
          <span className="text-label">{item.label}</span>
          <span className="group-hover:text-accent-ink text-lg leading-snug font-medium">
            {item.title}
          </span>
          {item.description && (
            <span className="text-body text-[15px]">{item.description}</span>
          )}
        </SmartLink>
      ))}
    </CellGrid>
  )
}
