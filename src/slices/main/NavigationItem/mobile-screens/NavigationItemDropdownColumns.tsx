import { PrismicNextLink } from '@prismicio/next'
import { Dialog } from 'radix-ui'

import { useMobileNav } from '@/components/layout/MobileNav/MobileNav.context'
import SvgArrowLeft from '@/components/svg/SvgArrowLeft'
import { Button } from '@/components/ui/Button'

import type { NavigationItemDropdownColumnsProps } from '../NavigationItemDropdownColumns'

export default function MobileDropdownColumnsScreen({
  slice,
}: NavigationItemDropdownColumnsProps) {
  const { link_columns } = slice.primary
  const { setActiveLink } = useMobileNav()

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
      <div className="mt-5 flex flex-col gap-y-10">
        {link_columns.map((column, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-y-4"
          >
            <span className="text-neutral-000/50">{column.column_label}</span>
            <ul className="text-neutral-000 flex flex-col gap-y-4">
              {column.links.map((link, idx) => (
                <li key={idx}>
                  <Dialog.Close asChild>
                    <PrismicNextLink field={link} />
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
