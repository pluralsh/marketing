'use client'

import { useEffect, useId, useState } from 'react'

import type { UseCase } from '@/content/home'

import { ArrowLink } from '@/components/ui/Button'
import { Kbd } from '@/components/ui/Kbd'
import { URLS } from '@/content/site'
import { cn } from '@/utils/cn'

/** Vertical tablist of agent use cases with a run log for the selected one. */
export function UseCaseTabs({ items }: { items: UseCase[] }) {
  const [active, setActive] = useState(0)
  const id = useId()
  const current = items[active]

  // Number keys jump straight to a use case, matching the hints on each tab.
  useEffect(() => {
    const onDigit = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null

      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (target?.closest('input, textarea, select, [contenteditable]')) return
      const index = Number(event.key) - 1

      if (Number.isInteger(index) && index >= 0 && index < items.length)
        setActive(index)
    }

    document.addEventListener('keydown', onDigit)

    return () => document.removeEventListener('keydown', onDigit)
  }, [items.length])

  const onKeyDown = (event: React.KeyboardEvent) => {
    const delta = { ArrowDown: 1, ArrowUp: -1 }[event.key]

    if (!delta) return
    event.preventDefault()
    const next = (active + delta + items.length) % items.length

    setActive(next)
    document.getElementById(`${id}-tab-${next}`)?.focus()
  }

  return (
    <div className="flex flex-wrap gap-8">
      <div
        role="tablist"
        aria-label="Use cases"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="border-line flex flex-[1_1_260px] flex-col border-t"
      >
        {items.map((item, i) => {
          const selected = i === active

          return (
            <button
              key={item.label}
              id={`${id}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                'border-line flex min-h-13 cursor-pointer items-center justify-between gap-3 border-b px-3.5 text-left text-base transition-colors',
                selected
                  ? 'bg-surface text-ink font-medium shadow-[inset_2px_0_0_var(--accent)]'
                  : 'text-muted hover:text-ink'
              )}
            >
              <span>{item.label}</span>
              <Kbd className="border-0">{i + 1}</Kbd>
            </button>
          )
        })}
      </div>
      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="grid min-w-0 flex-[3_1_480px] grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-stretch gap-6"
      >
        <div className="flex flex-col gap-3.5 pt-1.5">
          <h3 className="text-heading-md m-0">{current.title}</h3>
          <p className="text-body m-0">{current.body}</p>
          <ArrowLink
            href={URLS.contact}
            className="mt-2 self-start"
          >
            See it in a demo
          </ArrowLink>
        </div>
        <div className="bg-code text-code-text flex min-h-60 flex-col gap-2 rounded-sm p-5 font-mono text-[13px] leading-relaxed">
          <div className="text-code-muted text-[11px]">{current.agent}</div>
          {current.steps.map((step) => (
            <div
              key={step}
              className="flex gap-2.5"
            >
              <span
                aria-hidden="true"
                className="text-syntax-green"
              >
                ✓
              </span>
              <span>{step}</span>
            </div>
          ))}
          <div className="border-code-line text-syntax-violet mt-auto border-t pt-3">
            → {current.outcome}
          </div>
        </div>
      </div>
    </div>
  )
}
