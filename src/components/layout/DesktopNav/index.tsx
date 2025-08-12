'use client'

import type { Content, LinkField } from '@prismicio/client'

import { SliceZone } from '@prismicio/react'
import { memo } from 'react'

import PrismicButton from '@/components/PrismicButton'
import NavigationItem from '@/slices/main/NavigationItem'
import { cn } from '@/utils/cn'

type DesktopNavProps = {
  links: Content.NavigationItemSlice[]
  buttons: LinkField[]
}

function DesktopNav({ links, buttons }: DesktopNavProps) {
  return (
    <>
      <ul
        className={cn(
          'content hidden items-center gap-8 lg:flex',
          'text-neutral-000 has-hover:text-neutral-000/70 has-data-[state=open]:text-neutral-000/70 [&_:is(button,a)]:hover:text-neutral-000 [&_:is(button,a)]:data-[state=open]:text-neutral-000 transition [&_:is(button,a)]:transition [&_:is(button,a)]:data-[state=open]:underline'
        )}
      >
        <SliceZone
          slices={links}
          components={{
            navigation_item: NavigationItem,
          }}
          context={{
            screen: 'desktop',
          }}
        />
      </ul>
      <ul className="col-start-[content-end] col-end-[full-width-end] hidden items-center justify-end gap-2 lg:flex">
        {buttons.map((item, idx) => (
          <li key={idx}>
            <PrismicButton field={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(DesktopNav)
