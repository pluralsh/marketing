'use client'

import { useSyncExternalStore } from 'react'

import type { CommunityEvent } from '@/content/community'

import { button } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { cn } from '@/utils/cn'

const DAY_MS = 86_400_000

// Today's date is only known in the browser; the static HTML omits countdowns.
const subscribe = () => () => {}
const getToday = () => new Date().toDateString()
const getServerToday = () => null

function status(event: CommunityEvent, today: Date) {
  if (!event.start || !event.end)
    return { label: 'Every month', className: 'text-success' }
  const start = new Date(`${event.start}T00:00:00`)
  const end = new Date(`${event.end}T00:00:00`)
  const days = Math.round((start.getTime() - today.getTime()) / DAY_MS)

  if (today > end) return null
  if (days <= 0) return { label: 'Happening now', className: 'text-accent-ink' }

  return {
    label: days === 1 ? 'Tomorrow' : `In ${days} days`,
    className: days <= 30 ? 'text-warning' : 'text-muted',
  }
}

export function EventList({ events }: { events: CommunityEvent[] }) {
  const todayKey = useSyncExternalStore(subscribe, getToday, getServerToday)
  const today = todayKey ? new Date(todayKey) : null
  const visible = events
    .map((event) => ({ event, when: today ? status(event, today) : undefined }))
    .filter(({ when }) => when !== null)

  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {visible.map(({ event, when }) => {
        const meetup = event.type === 'Meetup'

        return (
          <li
            key={event.name}
            className={cn(
              'bg-surface flex flex-col gap-4 rounded-sm border p-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5',
              meetup ? 'border-accent' : 'border-line'
            )}
          >
            <div className="flex items-center gap-4 sm:contents">
              <div
                className={cn(
                  'flex w-24 shrink-0 flex-col items-center rounded-sm px-2 py-3 text-center',
                  meetup ? 'bg-accent text-on-accent' : 'bg-surface-muted'
                )}
              >
                <span className="font-mono text-[11px]">
                  {event.dateLabel.month}
                </span>
                <span className="font-serif text-2xl">
                  {event.dateLabel.days}
                </span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span
                    className={cn(
                      'rounded px-2 py-0.5 font-mono text-xs',
                      meetup
                        ? 'bg-accent-tint text-accent-ink'
                        : 'bg-surface-muted'
                    )}
                  >
                    {event.type}
                  </span>
                  <span className="text-muted">{event.where}</span>
                  {when && (
                    <span className={when.className}>· {when.label}</span>
                  )}
                </div>
                <span className="hidden text-xl font-medium sm:inline">
                  {event.name}
                </span>
              </div>
            </div>
            <span className="text-xl font-medium sm:hidden">{event.name}</span>
            <SmartLink
              href={event.href}
              className={cn(
                button({
                  variant: meetup ? 'primary' : 'secondary',
                  size: 'md',
                }),
                'w-full sm:w-auto'
              )}
            >
              {event.cta ?? 'Event site ↗'}
            </SmartLink>
          </li>
        )
      })}
    </ul>
  )
}
