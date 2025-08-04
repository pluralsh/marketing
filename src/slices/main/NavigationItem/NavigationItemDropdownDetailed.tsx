'use client'

import type { Content } from '@prismicio/client'

import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { Popover } from 'radix-ui'

import type { HeaderContext } from '@/components/layout/Header.client'
import type { SliceVariationProps } from '@/types/prismicio'

import { useMobileNav } from '@/components/layout/MobileNav/MobileNav.context'
import SliceContainer from '@/components/SliceContainer'
import SvgArrowRight from '@/components/svg/SvgArrowRight'
import SvgCaretRight from '@/components/svg/SvgCaretRight'
import SvgDropdownArrow from '@/components/svg/SvgDropdownArrow'
import { cn } from '@/utils/cn'

import styles from './styles.module.css'

export type NavigationItemDropdownDetailedProps = SliceVariationProps<
  Content.NavigationItemSlice,
  'dropdownDetailed',
  HeaderContext
>

export default function NavigationItemDropdownDetailed({
  slice,
  context,
}: NavigationItemDropdownDetailedProps) {
  return (
    <SliceContainer
      slice={slice}
      as="li"
    >
      {(() => {
        switch (context?.screen) {
          case 'mobile':
            return <MobileDropdownDetailed slice={slice} />
          case 'desktop':
            return <DesktopDropdownDetailed slice={slice} />
          default:
            return null
        }
      })()}
    </SliceContainer>
  )
}

function DesktopDropdownDetailed({
  slice,
}: NavigationItemDropdownDetailedProps) {
  const { label, links_label, links } = slice.primary
  const featuredResource = slice.primary.featured_resource?.[0]

  return (
    <Popover.Root>
      <Popover.Trigger className="inline-flex cursor-pointer items-center gap-3 data-[state=open]:[&>svg]:rotate-180">
        <span>{label}</span>
        <SvgDropdownArrow className="text-neutral-000/30" />
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          collisionPadding={24}
          side="bottom"
          sideOffset={20}
          align="start"
          alignOffset={-32}
          className={cn(
            'grid max-w-(--radix-popover-content-available-width) auto-cols-fr grid-flow-col gap-10 rounded-xl p-8 pt-6',
            'text-body-small bg-neutral-800 shadow-[0_32px_64px_0_rgba(0,0,0,0.8)]',
            styles.PopoverContent
          )}
        >
          <div className="flex items-start gap-x-10">
            <div className="shrink">
              <span className="text-neutral-000/50 mb-3">{links_label}</span>
              <ul
                className={cn(
                  'grid grid-cols-2 gap-x-10 gap-y-6',
                  'text-neutral-000 hover:text-neutral-000/70 transition'
                )}
              >
                {links.map(({ link, icon, description }, idx) => (
                  <li
                    key={idx}
                    className="mt-3"
                  >
                    <Popover.Close asChild>
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
                            <span className="leading-6 font-medium">
                              {link.text}
                            </span>
                          )}
                          <PrismicRichText
                            field={description}
                            components={{
                              paragraph: ({ children }) => (
                                <p className="text-caption text-neutral-000/70">
                                  {children}
                                </p>
                              ),
                            }}
                          />
                        </div>
                      </PrismicNextLink>
                    </Popover.Close>
                  </li>
                ))}
              </ul>
            </div>
            {featuredResource && (
              <Popover.Close asChild>
                <PrismicNextLink
                  field={featuredResource.link}
                  className="group shrink-0"
                >
                  <div className="group aspect-[5/3] max-w-[200px] overflow-hidden rounded-lg">
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
              </Popover.Close>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

function MobileDropdownDetailed({
  slice,
}: NavigationItemDropdownDetailedProps) {
  const { label } = slice.primary
  const { setActiveLink } = useMobileNav()

  return (
    <button
      type="button"
      className="inline-flex cursor-pointer items-center gap-x-2.5"
      onClick={() => setActiveLink(slice.id)}
    >
      <span className="text-neutral-000 font-medium">{label}</span>
      <SvgCaretRight className="text-neutral-000/50" />
    </button>
  )
}
