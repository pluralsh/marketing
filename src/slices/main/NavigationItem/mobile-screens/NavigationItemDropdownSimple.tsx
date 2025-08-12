import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { Dialog } from 'radix-ui'

import { useMobileNav } from '@/components/layout/MobileNav/MobileNav.context'
import SvgArrowLeft from '@/components/svg/SvgArrowLeft'
import SvgArrowRight from '@/components/svg/SvgArrowRight'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

import type { NavigationItemDropdownSimpleProps } from '../NavigationItemDropdownSimple'

export default function MobileDropdownSimpleScreen({
  slice,
}: NavigationItemDropdownSimpleProps) {
  const { setActiveLink } = useMobileNav()
  const { links_label, links, resources } = slice.primary

  return (
    <div
      className="pb-6"
      data-slice-screen
      data-slice-id={slice.id}
    >
      <Button
        className="group mt-6 cursor-pointer"
        variant="secondary"
        size="xs"
        onClick={() => setActiveLink(null)}
      >
        <SvgArrowLeft className="text-neutral-000/70 group-hover:text-neutral-000 transition" />
        <span>Back</span>
      </Button>
      <div className="text-body-small mt-5 flex flex-col">
        <span className="text-neutral-000/50">{links_label}</span>
        <ul className="text-neutral-000">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="mt-4"
            >
              <Dialog.Close asChild>
                <PrismicNextLink field={link} />
              </Dialog.Close>
            </li>
          ))}
        </ul>
        {resources.length > 0 && (
          <div className="mt-6 flex flex-col gap-y-9">
            {resources.map(({ link, image, description }, idx) => (
              <Dialog.Close
                key={idx}
                asChild
              >
                <PrismicNextLink
                  field={link}
                  className="group"
                >
                  <div className="group aspect-[5/3] overflow-hidden rounded-lg">
                    <PrismicNextImage
                      field={image}
                      className="size-full object-cover transition group-hover:scale-105"
                      fallbackAlt=""
                      priority
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-x-3">
                    <span
                      className="text-neutral-000 min-w-0 shrink grow overflow-hidden font-medium overflow-ellipsis whitespace-nowrap"
                      title={link.text || undefined}
                    >
                      {link.text}
                    </span>
                    <div
                      className={cn(
                        'grid h-6 w-6 shrink-0 cursor-pointer place-items-center rounded-md',
                        'border-neutral-000/10 group-hover:border-neutral-000/[24%] text-neutral-000 border transition'
                      )}
                    >
                      <SvgArrowRight className="size-2" />
                    </div>
                  </div>
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-caption text-neutral-000/70 mt-2">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </PrismicNextLink>
              </Dialog.Close>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
