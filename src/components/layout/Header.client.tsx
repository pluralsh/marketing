'use client'

import type { Content, ImageField, LinkField } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import { memo, useMemo, useState } from 'react'

import { cn } from '@/utils/cn'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { MobileNavContext } from './MobileNav/MobileNav.context'
import StickyHeader from './StickyHeader'

export type HeaderContext = {
  screen: 'desktop' | 'mobile'
}

type HeaderClientProps = {
  nav_logo: ImageField
  nav_link_slices: Content.NavigationItemSlice[]
  nav_buttons: LinkField[]
  logo_href: string
} & React.ComponentProps<'header'>

function HeaderClient({
  className,
  nav_logo,
  nav_link_slices,
  nav_buttons,
  logo_href,
  ...props
}: HeaderClientProps) {
  const [open, setOpen] = useState(false)
  const [activeLink, _setActiveLink] = useState<null | string>(null)
  const close = () => setOpen(false)
  const setActiveLink = (linkIdx: string | null) => _setActiveLink(linkIdx)

  const contextValue = useMemo(
    () => ({
      open,
      setOpen,
      close,
      activeLink,
      setActiveLink,
    }),
    [open, activeLink]
  )

  return (
    <MobileNavContext value={contextValue}>
      <header
        className={cn('grid-container items-center', className)}
        {...props}
      >
        <div className="content-full-width h-header flex items-center justify-between lg:grid lg:grid-cols-subgrid">
          <div
            className={cn(
              'lg:content-full-width grow-1 items-center lg:grid lg:grid-cols-subgrid',
              'flex max-lg:justify-between max-lg:gap-x-4',
              'rounded-xl bg-neutral-800 py-2.5 pr-2.5 pl-5'
            )}
          >
            {isFilled.image(nav_logo) && (
              <Link
                href={logo_href}
                className="col-start-[full-width-start] col-end-[content-start] justify-self-start"
              >
                <PrismicNextImage
                  field={nav_logo}
                  className="h-6.5 w-auto"
                  fallbackAlt=""
                  priority
                />
              </Link>
            )}
            <nav
              className={cn(
                'items-center lg:col-start-[content-start] lg:col-end-[full-width-end] lg:grid lg:grid-cols-subgrid',
                'flex max-lg:justify-end'
              )}
            >
              <DesktopNav
                links={nav_link_slices}
                buttons={nav_buttons}
              />
              <MobileNav
                logo={nav_logo}
                logoHref={logo_href}
                links={nav_link_slices}
                buttons={nav_buttons}
              />
            </nav>
          </div>
        </div>
        <div className="separator" />
      </header>
      <StickyHeader
        scrollThreshold={300}
        links={nav_link_slices}
        buttons={nav_buttons}
        logo={nav_logo}
        logoHref={logo_href}
      />
      <style
        global
        jsx
      >
        {`
          [data-slice-screen] {
            display: none;
          }

          ${nav_link_slices.reduce(
            (acc, { id }) => `${acc}
            [data-active-slice-id="${id}"] [data-slice-screen][data-slice-id="${id}"] {
              display: block;
            }
          `,
            ``
          )}
        `}
      </style>
    </MobileNavContext>
  )
}

const HeaderClientMemo = memo(HeaderClient)

export default HeaderClientMemo
