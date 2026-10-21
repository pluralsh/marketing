import { Icon } from '@/components/ui/Icon'
import { SmartLink } from '@/components/ui/SmartLink'
import { cn } from '@/utils/cn'

import { CellGrid } from './CellGrid'

export type FeatureCell = {
  title?: React.ReactNode
  body?: React.ReactNode
  /** Small mono label above the title, e.g. "01 · Downtime". */
  eyebrow?: React.ReactNode
  /** SVG path drawn as an accent line icon. */
  icon?: string
  href?: string
}

type FeatureCellsProps = {
  items: FeatureCell[]
  minColumn?: string
  /** Larger serif titles for fewer, weightier cells. */
  emphasis?: boolean
  className?: string
}

/** A ruled row of short feature blurbs (pillars, benefits, pain points…). */
export function FeatureCells({
  items,
  minColumn,
  emphasis,
  className,
}: FeatureCellsProps) {
  return (
    <CellGrid
      minColumn={minColumn}
      className={className}
    >
      {items.map((item, i) => {
        const content = (
          <>
            {item.icon && (
              <Icon
                path={item.icon}
                size={22}
                className="text-accent-ink"
              />
            )}
            {item.eyebrow && <span className="text-label">{item.eyebrow}</span>}
            {item.title && (
              <h3
                className={cn(
                  'm-0',
                  emphasis
                    ? 'font-serif text-[26px] leading-tight font-normal'
                    : 'text-[17px] font-medium'
                )}
              >
                {item.title}
              </h3>
            )}
            {item.body && (
              <div className="text-body m-0 text-[15px]">{item.body}</div>
            )}
            {item.href && (
              <span
                aria-hidden="true"
                className="text-accent-ink mt-auto"
              >
                →
              </span>
            )}
          </>
        )
        const cellClass =
          'flex flex-col gap-2.5 px-gutter py-7 lg:px-[clamp(20px,3vw,32px)]'

        return item.href ? (
          <SmartLink
            key={i}
            href={item.href}
            className={cn(cellClass, 'text-ink hover:bg-surface no-underline')}
          >
            {content}
          </SmartLink>
        ) : (
          <div
            key={i}
            className={cellClass}
          >
            {content}
          </div>
        )
      })}
    </CellGrid>
  )
}
