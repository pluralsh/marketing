'use client'

import type { LinkField } from '@prismicio/client'

import { Collapsible } from 'radix-ui'
import { useState } from 'react'

import { cn } from '@/utils/cn'

import { useMobileNav } from '../MobileNav/MobileNav.context'
import NavLink from './NavLink'
import styles from './styles.module.css'

type NavCollapsibleLinkProps = {
  link: LinkField
  childLinks: LinkField[]
}

export default function NavCollapsibleLink({
  link,
  childLinks,
}: NavCollapsibleLinkProps) {
  const { close } = useMobileNav()
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root
      className="flex w-full flex-wrap"
      open={open}
      onOpenChange={setOpen}
    >
      <Collapsible.Trigger className="flex grow-1 cursor-pointer justify-between gap-2 py-2 text-start font-medium transition-colors hover:text-gray-600">
        <span>{link.text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn('shrink-0', open && 'rotate-180')}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Collapsible.Trigger>
      <div className="basis-full overflow-hidden">
        <Collapsible.Content className={cn('px-2', styles.CollapsibleContent)}>
          {childLinks.map((link, idx) => (
            <NavLink
              key={idx}
              className="py-2 ps-4"
              link={link}
              onClick={close}
            />
          ))}
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}
