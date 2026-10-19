import { cn } from '@/utils/cn'

type CellGridProps = React.ComponentProps<'div'> & {
  /** Narrowest a column may get before the grid wraps, e.g. "240px". */
  minColumn?: string
  /** Divide cells with hairlines and rule the top edge. */
  ruled?: boolean
}

/** Responsive auto-fit grid of cells inside the page rails. */
export function CellGrid({
  minColumn = '240px',
  ruled = true,
  className,
  style,
  ...props
}: CellGridProps) {
  const grid = (
    <div
      className={cn(
        'grid grid-cols-[repeat(auto-fit,minmax(min(var(--min-column),100%),1fr))]',
        ruled && 'ruled-grid',
        className
      )}
      style={{ '--min-column': minColumn, ...style } as React.CSSProperties}
      {...props}
    />
  )

  // The ruled grid clips its overflow, so the registration marks live on a wrapper.
  return ruled ? <div className="rule-top">{grid}</div> : grid
}
