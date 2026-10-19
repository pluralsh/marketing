'use client'

import { cn } from '@/utils/cn'

type FilterChipsProps<T extends string> = {
  label: string
  options: { value: T; label: string; count: number }[]
  value: T
  onChange: (value: T) => void
  className?: string
}

/** Single-select filter rendered as toggle buttons with counts. */
export function FilterChips<T extends string>({
  label,
  options,
  value,
  onChange,
  className,
}: FilterChipsProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn('flex flex-wrap gap-2', className)}
    >
      {options.map((option) => {
        const pressed = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={pressed}
            onClick={() => onChange(option.value)}
            className={cn(
              'flex min-h-9 cursor-pointer items-center gap-2 rounded-full border px-3.5 text-sm transition-colors',
              pressed
                ? 'border-ink bg-ink text-canvas'
                : 'border-line-strong bg-surface text-ink hover:border-ink/40'
            )}
          >
            {option.label}
            <span
              className={cn(
                'font-mono text-xs',
                pressed ? 'opacity-70' : 'text-muted'
              )}
            >
              {option.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/** Builds "All" plus one option per distinct key, with counts. */
export function filterOptions<T>(
  items: T[],
  key: (item: T) => string,
  allLabel = 'All'
) {
  const groups = [...new Set(items.map(key))]

  return [
    { value: 'All', label: allLabel, count: items.length },
    ...groups.map((group) => ({
      value: group,
      label: group,
      count: items.filter((item) => key(item) === group).length,
    })),
  ]
}
