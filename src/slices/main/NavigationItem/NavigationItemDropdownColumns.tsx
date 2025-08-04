'use client'

import type { Content } from '@prismicio/client'

import { PrismicNextLink } from '@prismicio/next'
import { Popover } from 'radix-ui'

import type { HeaderContext } from '@/components/layout/Header.client'
import type { SliceVariationProps } from '@/types/prismicio'

import { useMobileNav } from '@/components/layout/MobileNav/MobileNav.context'
import SliceContainer from '@/components/SliceContainer'
import SvgCaretRight from '@/components/svg/SvgCaretRight'
import SvgDropdownArrow from '@/components/svg/SvgDropdownArrow'
import { cn } from '@/utils/cn'

import styles from './styles.module.css'

export type NavigationItemDropdownColumnsProps = SliceVariationProps<
  Content.NavigationItemSlice,
  'dropdownColumns',
  HeaderContext
>

export default function NavigationItemDropdownColumns({
  slice,
  context,
}: NavigationItemDropdownColumnsProps) {
  return (
    <SliceContainer
      slice={slice}
      as="li"
    >
      {(() => {
        switch (context?.screen) {
          case 'mobile':
            return <MobileDropdownColumns slice={slice} />
          case 'desktop':
            return <DesktopDropdownColumns slice={slice} />
          default:
            return null
        }
      })()}
    </SliceContainer>
  )
}

function DesktopDropdownColumns({ slice }: NavigationItemDropdownColumnsProps) {
  const { label, link_columns } = slice.primary

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
          {link_columns.map((column, idx) => (
            <div key={idx}>
              <span className="text-neutral-000/50">{column.column_label}</span>
              <ul className="text-neutral-000 hover:text-neutral-000/70 transition">
                {column.links.map((link, idx) => (
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
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

function MobileDropdownColumns({ slice }: NavigationItemDropdownColumnsProps) {
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
