'use client'

import type { LinkField } from '@prismicio/client'

import { PrismicNextLink } from '@prismicio/next'
import { Popover } from 'radix-ui'

import { cn } from '@/utils/cn'

import styles from './styles.module.css'

type NavPopoverLinkProps = {
  link: LinkField
  childLinks: LinkField[]
}

export default function NavPopoverLink({
  link,
  childLinks,
}: NavPopoverLinkProps) {
  return (
    <Popover.Root>
      <Popover.Trigger className="inline-flex cursor-pointer items-center gap-1 font-medium transition-colors outline-none hover:text-gray-600">
        <span>{link.text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
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
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={cn(
            'mt-4 flex w-56 flex-col rounded-xl bg-white px-6 py-4 shadow-lg ring ring-gray-200',
            styles.PopoverContent
          )}
          sideOffset={5}
          align="center"
          side="bottom"
        >
          {childLinks.map((childLink, idx) => (
            <Popover.Close
              asChild
              key={idx}
            >
              <PrismicNextLink
                field={childLink}
                className="py-2 font-medium transition-colors hover:text-gray-600"
              >
                {childLink.text}
              </PrismicNextLink>
            </Popover.Close>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
