'use client'

import type { Content, ImageField, LinkField } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import { useEffect } from 'react'

import { cn } from '@/utils/cn'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

type StickyHeaderProps = {
  links: Content.NavigationItemSlice[]
  buttons: LinkField[]
  logo: ImageField
  logoHref: string
  scrollThreshold: number
}

export default function StickyHeader({
  links,
  buttons,
  logo,
  logoHref,
  scrollThreshold,
}: StickyHeaderProps) {
  useEffect(() => {
    let lastScrollY = 0
    let hasPassedThreshold = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isPastThreshold = currentScrollY > scrollThreshold

      // Update threshold state
      if (isPastThreshold !== hasPassedThreshold) {
        hasPassedThreshold = isPastThreshold
      }

      // Only control visibility after passing threshold
      if (isPastThreshold && lastScrollY > currentScrollY) {
        document.documentElement.style.setProperty(
          '--sticky-header-visible',
          '1'
        )
      } else {
        document.documentElement.style.setProperty(
          '--sticky-header-visible',
          '0'
        )
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  return (
    <div
      className={cn(
        'grid-container fixed inset-x-0 top-0 z-(--z-header) items-center transition-transform',
        'translate-y-[calc(-110%_+_110%_*_var(--sticky-header-visible))]',
        'before:content-none after:content-none'
      )}
    >
      <div className="content-full-width h-header flex items-center justify-between lg:grid lg:grid-cols-subgrid">
        <div
          className={cn(
            'lg:content-full-width grow-1 items-center lg:grid lg:grid-cols-subgrid',
            'flex max-lg:justify-between max-lg:gap-x-4',
            'rounded-xl bg-neutral-800/60 py-2.5 pr-2.5 pl-5 backdrop-blur-[7px]'
          )}
        >
          {isFilled.image(logo) && (
            <Link
              href={logoHref}
              className="col-start-[full-width-start] col-end-[content-start] justify-self-start"
            >
              <PrismicNextImage
                field={logo}
                className="h-6.5 w-auto"
                fallbackAlt=""
                priority
              />
            </Link>
          )}
          <div
            className={cn(
              'items-center lg:col-start-[content-start] lg:col-end-[full-width-end] lg:grid lg:grid-cols-subgrid',
              'flex max-lg:justify-end'
            )}
          >
            <DesktopNav
              links={links}
              buttons={buttons}
            />
            <MobileNav
              logo={logo}
              logoHref={logoHref}
              links={links}
              buttons={buttons}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
