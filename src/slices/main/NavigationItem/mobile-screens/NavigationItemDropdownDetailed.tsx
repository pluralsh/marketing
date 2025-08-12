import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { Dialog } from 'radix-ui'

import { useMobileNav } from '@/components/layout/MobileNav/MobileNav.context'
import SvgArrowLeft from '@/components/svg/SvgArrowLeft'
import SvgArrowRight from '@/components/svg/SvgArrowRight'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

import type { NavigationItemDropdownDetailedProps } from '../NavigationItemDropdownDetailed'

export default function MobileDropdownDetailedScreen({
  slice,
}: NavigationItemDropdownDetailedProps) {
  const { setActiveLink } = useMobileNav()
  const { links_label, links, featured_resource } = slice.primary
  const featuredResource = featured_resource?.[0]

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
      <div className="mt-5">
        <span className="text-neutral-000/50 mb-5">{links_label}</span>
        <ul className="text-neutral-000 flex flex-col gap-y-5">
          {links.map(({ link, icon, description }, idx) => (
            <li key={idx}>
              <Dialog.Close asChild>
                <PrismicNextLink
                  field={link}
                  className="hover:text-neutral-000 flex gap-x-2 transition"
                >
                  <div className="border-neutral-000/10 grid size-8 shrink-0 place-items-center rounded-full border">
                    <div className="bg-primary-600 grid size-5.5 place-items-center rounded-full">
                      <PrismicNextImage
                        field={icon}
                        className="h-4 w-4"
                        fallbackAlt=""
                      />
                    </div>
                  </div>
                  <div>
                    {link.text && (
                      <span className="leading-6 font-medium">{link.text}</span>
                    )}
                    <PrismicRichText
                      field={description}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="text-caption text-neutral-000/70 mt-0.5">
                            {children}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </PrismicNextLink>
              </Dialog.Close>
            </li>
          ))}
        </ul>
      </div>
      {featuredResource && (
        <Dialog.Close asChild>
          <PrismicNextLink
            field={featuredResource.link}
            className="group mt-10 block"
          >
            <div className="group aspect-[5/3] overflow-hidden rounded-lg">
              <PrismicNextImage
                field={featuredResource.image}
                className="size-full object-cover transition group-hover:scale-105"
                fallbackAlt=""
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-x-3">
              <span
                className="text-neutral-000 min-w-0 shrink grow overflow-hidden font-medium overflow-ellipsis whitespace-nowrap"
                title={featuredResource.link.text || undefined}
              >
                {featuredResource.link.text}
              </span>
              <div
                className={cn(
                  'grid h-6 w-6 shrink-0 cursor-pointer place-items-center rounded-md',
                  'border-neutral-000/10 group-hover:border-neutral-000/[24%] text-neutral-000 border transition'
                )}
              >
                <SvgArrowRight className="size-2" />
              </div>
              <PrismicRichText
                field={featuredResource.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-caption text-neutral-000/70 mt-2">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </PrismicNextLink>
        </Dialog.Close>
      )}
    </div>
  )
}
