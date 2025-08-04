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

export type NavigationItemDropdownSimpleProps = SliceVariationProps<
  Content.NavigationItemSlice,
  'dropdownSimple',
  HeaderContext
>

export default function NavigationItemDropdownSimple({
  slice,
  context,
}: NavigationItemDropdownSimpleProps) {
  return (
    <SliceContainer
      slice={slice}
      as="li"
    >
      {(() => {
        switch (context?.screen) {
          case 'mobile':
            return <MobileDropdownSimple slice={slice} />
          case 'desktop':
            return <DesktopDropdownSimple slice={slice} />
          default:
            return null
        }
      })()}
    </SliceContainer>
  )
}

function DesktopDropdownSimple({ slice }: NavigationItemDropdownSimpleProps) {
  const { label, links_label, links, resources } = slice.primary

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
            'max-w-(--radix-popover-content-available-width) gap-10 rounded-xl p-8 pt-6',
            'text-body-small bg-neutral-800 shadow-[0_32px_64px_0_rgba(0,0,0,0.8)]',
            styles.PopoverContent
          )}
        >
          <div className="flex items-start gap-x-10">
            <div className={cn(resources.length > 0 && 'w-2xs')}>
              <span className="text-neutral-000/50">{links_label}</span>
              <ul className="text-neutral-000 hover:text-neutral-000/70 transition">
                {links.map((link, idx) => (
                  <li
                    key={idx}
                    className="mt-3"
                  >
                    <Popover.Close asChild>
                      <PrismicNextLink
                        field={link}
                        className="hover:text-neutral-000 transition"
                      />
                    </Popover.Close>
                  </li>
                ))}
              </ul>
            </div>
            {resources.length > 0 && (
              <div className="flex items-start gap-x-6">
                {resources.map(({ link, image, description }, idx) => (
                  <Popover.Close
                    key={idx}
                    asChild
                  >
                    <PrismicNextLink
                      field={link}
                      className="group max-w-[200px]"
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
                  </Popover.Close>
                ))}
              </div>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

function MobileDropdownSimple({ slice }: NavigationItemDropdownSimpleProps) {
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
