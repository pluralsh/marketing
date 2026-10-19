'use client'

import { useState } from 'react'

import { FilterChips, filterOptions } from '@/components/ui/FilterChips'
import { SmartLink } from '@/components/ui/SmartLink'

type Role = { slug: string; title: string; team?: string; location: string }

export function RoleList({ roles }: { roles: Role[] }) {
  const [filter, setFilter] = useState('All')
  const visible = roles.filter(
    (role) => filter === 'All' || role.team === filter
  )

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-heading-lg m-0">Open roles</h2>
        <FilterChips
          label="Filter roles"
          options={filterOptions(roles, (role) => role.team ?? 'Other')}
          value={filter}
          onChange={setFilter}
        />
      </div>
      <ul className="border-line m-0 list-none border-t p-0">
        {visible.map((role) => (
          <li key={role.slug}>
            <SmartLink
              href={`/careers/hire/${role.slug}`}
              className="border-line text-ink hover:bg-surface group flex flex-wrap items-center justify-between gap-4 border-b px-2 py-5 no-underline"
            >
              <span className="group-hover:text-accent-ink text-xl">
                {role.title}
              </span>
              <span className="text-muted flex items-center gap-5 text-sm">
                <span>{role.team}</span>
                <span>{role.location}</span>
                <span
                  aria-hidden="true"
                  className="text-ink"
                >
                  →
                </span>
              </span>
            </SmartLink>
          </li>
        ))}
      </ul>
    </>
  )
}
