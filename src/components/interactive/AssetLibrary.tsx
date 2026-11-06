'use client'

import { useState } from 'react'

import Image from 'next/image'

import { FilterChips, filterOptions } from '@/components/ui/FilterChips'
import type { ResourceAsset } from '@/content/resources'

/** "All assets" grid of downloadable PDFs, filterable by kind. */
export function AssetLibrary({ assets }: { assets: ResourceAsset[] }) {
  const [filter, setFilter] = useState('All')
  const visible = assets.filter(
    (asset) => filter === 'All' || asset.kind === filter
  )

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 className="text-heading-lg m-0">All assets</h2>
        <FilterChips
          label="Filter by type"
          options={filterOptions(assets, (asset) => asset.kind)}
          value={filter}
          onChange={setFilter}
        />
      </div>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-5 p-0">
        {visible.map((asset) => (
          <li key={asset.href}>
            <a
              href={asset.href}
              download
              className="border-line bg-surface text-ink group flex h-full flex-col overflow-hidden rounded-sm border no-underline"
            >
              <span className="flex h-[230px] items-end justify-center overflow-hidden bg-[#ececef] px-10 pt-7">
                <Image
                  src={asset.cover.src}
                  alt={asset.cover.alt}
                  width={asset.cover.width}
                  height={asset.cover.height}
                  sizes="220px"
                  className="block h-auto w-[70%] max-w-[220px] rounded-t-[3px] shadow-[0_16px_32px_-20px_rgba(14,16,21,0.5)] transition-transform group-hover:-translate-y-1"
                />
              </span>
              <span className="flex flex-1 flex-col gap-3 px-6 pt-6 pb-[26px]">
                <span className="text-accent-ink font-mono text-xs tracking-[0.1em] uppercase">
                  {asset.type}
                </span>
                <span className="text-[21px] leading-[1.3]">{asset.title}</span>
                <span className="text-muted text-sm">{asset.blurb}</span>
                <span className="text-accent-ink mt-auto inline-flex items-center gap-1.5 pt-2 font-medium">
                  {asset.cta} <span aria-hidden="true">↓</span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      {visible.length === 0 && (
        <p className="text-muted m-0 text-[15px]">
          Nothing here yet. New guides and reports are on the way.
        </p>
      )}
    </>
  )
}
