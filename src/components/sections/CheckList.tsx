import { cn } from '@/utils/cn'

type CheckListProps = {
  items: React.ReactNode[]
  className?: string
}

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn('m-0 flex list-none flex-col gap-2.5 p-0', className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-2.5"
        >
          <span
            aria-hidden="true"
            className="text-accent-ink"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
