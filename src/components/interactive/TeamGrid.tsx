'use client'

import { useState } from 'react'

import type { team as teamData } from '@/content/company'

import { FilterChips, filterOptions } from '@/components/ui/FilterChips'
import { SmartLink } from '@/components/ui/SmartLink'
import { cn } from '@/utils/cn'

type TeamGridProps = {
  members: typeof teamData
  openRoles: number
  /** Heading block rendered beside the filters. */
  heading: React.ReactNode
}

// Avatars cycle through a few tints so the grid reads as a mosaic.
const avatarStyles = [
  'bg-accent-tint text-accent-ink',
  'bg-accent/30 text-ink',
  'bg-surface-muted text-ink',
  'bg-ink text-canvas',
]

const initials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

export function TeamGrid({ members, openRoles, heading }: TeamGridProps) {
  const [filter, setFilter] = useState('All')
  const options = filterOptions(members, (m) => m.group)
  const visible = members.filter((m) => filter === 'All' || m.group === filter)

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6">
        {heading}
        <FilterChips
          label="Filter team"
          options={options}
          value={filter}
          onChange={setFilter}
        />
      </div>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3 p-0">
        {visible.map((member) => (
          <li
            key={member.name}
            className="border-line bg-surface flex items-center gap-3.5 rounded-sm border p-3"
          >
            <div
              aria-hidden="true"
              className={cn(
                'flex size-12 shrink-0 items-center justify-center rounded-xs font-serif text-lg',
                avatarStyles[members.indexOf(member) % avatarStyles.length]
              )}
            >
              {initials(member.name)}
            </div>
            <div className="min-w-0">
              <div className="font-medium">{member.name}</div>
              <div className="text-muted text-sm">{member.role}</div>
            </div>
          </li>
        ))}
        <li>
          <SmartLink
            href="/careers"
            className="border-line-strong text-ink hover:border-accent flex h-full flex-col justify-center gap-0.5 rounded-sm border border-dashed p-3 no-underline"
          >
            <span className="font-serif text-lg">You?</span>
            <span className="text-accent-ink text-sm">
              See {openRoles} open roles →
            </span>
          </SmartLink>
        </li>
      </ul>
    </>
  )
}
