'use client'

import { useId } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/utils/cn'

type SegmentedProps<T extends string> = {
  label: string
  options: { value: T; label: React.ReactNode }[]
  value: T
  onChange: (value: T) => void
  className?: string
}

/** Compact single-select control with squared, hairline-divided segments. */
export function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
  className,
}: SegmentedProps<T>) {
  const id = useId()

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={cn(
        'border-line-strong bg-surface flex h-[30px] items-stretch rounded-sm border p-0.5 text-[12.5px]',
        className
      )}
    >
      {options.map((option, i) => {
        const checked = option.value === value

        return (
          <div
            key={option.value}
            className="flex items-stretch"
          >
            {i > 0 && (
              <span
                aria-hidden="true"
                className="bg-line my-1 w-px"
              />
            )}
            <button
              type="button"
              role="radio"
              aria-checked={checked}
              onClick={() => onChange(option.value)}
              className={cn(
                'relative cursor-pointer px-2.5 transition-colors',
                checked ? 'text-ink' : 'text-muted hover:text-ink'
              )}
            >
              {checked && (
                <motion.span
                  layoutId={`segmented-${id}`}
                  className="border-line-strong bg-canvas absolute inset-0 rounded-[2px] border shadow-[inset_0_-2px_0_0_var(--line)]"
                  transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                />
              )}
              <span className="relative">{option.label}</span>
            </button>
          </div>
        )
      })}
    </div>
  )
}
