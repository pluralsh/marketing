'use client'

import type { Content, ImageField, LinkField } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceZone } from '@prismicio/react'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Dialog } from 'radix-ui'
import { memo, useEffect } from 'react'

import PrismicButton from '@/components/PrismicButton'
import SvgCross from '@/components/svg/SvgCross'
import SvgMenuBars from '@/components/svg/SvgMenuBars'
import NavigationItem from '@/slices/main/NavigationItem'
import MobileScreens from '@/slices/main/NavigationItem/mobile-screens'
import { cn } from '@/utils/cn'

import { useMobileNav } from './MobileNav.context'
import styles from './styles.module.css'

type MobileNavProps = {
  links: Content.NavigationItemSlice[]
  buttons: LinkField[]
  logo: ImageField
  logoHref: string
}

function MobileNav({ links, buttons, logo, logoHref }: MobileNavProps) {
  const t = useTranslations('Generic')
  const { open, setOpen, activeLink, setActiveLink } = useMobileNav()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    watchDrag: false,
    duration: 20,
  })

  function closeDialog() {
    setOpen(false)
    setTimeout(() => {
      setActiveLink(null)
    }, 300)
  }

  useEffect(() => {
    if (!emblaApi) return
    if (!activeLink) {
      emblaApi.scrollTo(0)
    } else {
      emblaApi.scrollTo(1)
    }
  }, [activeLink, emblaApi])

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open) => {
        setOpen(open)
        if (!open) {
          closeDialog()
        }
      }}
    >
      <Dialog.Title className="sr-only">{t('navigationTitle')}</Dialog.Title>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="hover:text-grey-400 focus:text-grey-400 inline-flex cursor-pointer transition outline-none lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? (
            <SvgCross className="text-neutral-000" />
          ) : (
            <SvgMenuBars className="text-neutral-000/70" />
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Content
          className={cn(
            'fixed inset-0 origin-top overflow-y-auto bg-neutral-900 pb-6',
            styles.DialogContent
          )}
        >
          <div className="grid-container relative isolate h-full grid-rows-[auto_1fr] before:content-none after:content-none">
            {/* Header bar */}
            <div className="content-full-width h-header sticky top-0 z-10 flex items-center justify-between lg:grid lg:grid-cols-subgrid">
              <div
                className={cn(
                  'lg:content-full-width grow-1 items-center lg:grid lg:grid-cols-subgrid',
                  'flex max-lg:justify-between max-lg:gap-x-4',
                  'rounded-xl bg-neutral-800 py-2.5 pr-2.5 pl-5'
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
                <nav className="flex items-center justify-end">
                  <Dialog.Close className="hover:text-grey-400 focus:text-grey-400 inline-flex cursor-pointer transition outline-none lg:hidden">
                    <SvgCross className="text-neutral-000" />
                  </Dialog.Close>
                </nav>
              </div>
            </div>

            {/* Screens */}
            <div className="content-full-width">
              <div className="embla min-h-full overflow-x-visible">
                <div
                  className="embla__viewport h-full"
                  data-active-slice-id={activeLink}
                  ref={emblaRef}
                >
                  <div className="embla__container pan-y -ml-16 flex h-full touch-pinch-zoom">
                    {/* Screen 1 */}
                    <div className="embla__slide flex h-full min-w-0 shrink-0 grow-0 basis-full translate-3d flex-col justify-between overflow-y-auto pl-16">
                      <ul className="mt-8 flex flex-col gap-y-6">
                        <SliceZone
                          slices={links}
                          components={{
                            navigation_item: NavigationItem,
                          }}
                          context={{
                            screen: 'mobile',
                          }}
                        />
                      </ul>
                      <div className="mt-10 flex flex-col gap-1">
                        {buttons.map((item, idx) => (
                          <Dialog.Close
                            asChild
                            key={idx}
                          >
                            <PrismicButton
                              field={item}
                              size="large"
                            />
                          </Dialog.Close>
                        ))}
                      </div>
                    </div>
                    {/* Screen 2 */}
                    <div className="embla__slide min-w-0 shrink-0 grow-0 basis-full translate-3d overflow-y-auto pl-16">
                      <SliceZone
                        slices={links}
                        components={{
                          navigation_item: MobileScreens,
                        }}
                        context={{
                          screen: 'mobile',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default memo(MobileNav)
