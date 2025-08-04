'use client'

import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'
import useEmblaCarousel from 'embla-carousel-react'

import { DotButton, useDotButton } from '@/components/EmblaDotButton'
import PrismicButton from '@/components/PrismicButton'
import SvgCheckCircle from '@/components/svg/SvgCheckCircle'
import SvgPlus from '@/components/svg/SvgPlus'
import { cn } from '@/utils/cn'
import { getBreakpoint } from '@/utils/css'

type CardsCarouselProps = {
  slides: Content.PricingSliceCardsPrimaryCardsItem[]
}

export default function CardsCarousel({ slides }: CardsCarouselProps) {
  const breakpointMd = getBreakpoint('md')
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    breakpoints: {
      [`(width >= ${breakpointMd})`]: {
        active: false,
      },
    },
  })

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <div className="embla py-12 md:py-16">
      <div
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container -ml-8 grid touch-pan-y touch-pinch-zoom auto-cols-[100%] grid-flow-col grid-rows-[repeat(4,_auto)] md:-ml-6 md:auto-cols-fr">
          {slides.map(
            ({ title, description, emphasized, features, link }, idx) => (
              <div
                key={idx}
                className={cn(
                  'embla__slide min-w-0 shrink-0 grow-0 basis-full translate-3d pl-8 select-none md:basis-[calc(100%/3)] md:pl-6',
                  'row-span-4 grid grid-rows-subgrid'
                )}
              >
                <div
                  className={cn(
                    'border-neutral-000/10 row-span-4 grid h-full grid-rows-subgrid justify-items-start rounded-xl border p-4 md:p-6',
                    emphasized && 'border-0 bg-neutral-800'
                  )}
                >
                  <div className="text-neutral-000 text-body-medium border-neutral-000/10 row-span-1 inline-flex h-10 items-center overflow-hidden rounded-full border px-4 py-2 overflow-ellipsis whitespace-nowrap">
                    {title}
                  </div>
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="row-span-1 mt-4">{children}</p>
                      ),
                    }}
                  />
                  <div className="row-span-1 mt-6">
                    <PrismicRichText
                      field={features}
                      components={{
                        listItem: ({ children }) => (
                          <li className="mt-3">{children}</li>
                        ),
                        label: ({ children, node }) => {
                          switch (node.data.label) {
                            case 'icon:plus':
                              return (
                                <div className="text-neutral-000/60 flex items-center gap-x-3">
                                  <SvgPlus className="shrink-0" />
                                  <span>{children}</span>
                                </div>
                              )
                            case 'icon:check':
                              return (
                                <div className="flex items-center gap-x-3">
                                  <SvgCheckCircle className="text-accent-400 shrink-0" />
                                  <span className="text-neutral-000">
                                    {children}
                                  </span>
                                </div>
                              )
                            default:
                              return (
                                <span data-label={node.data.label}>
                                  {children}
                                </span>
                              )
                          }
                        },
                      }}
                    />
                  </div>
                  <div className="row-span-1 mt-auto">
                    <PrismicButton
                      field={link}
                      className="mt-8 h-auto text-center whitespace-normal md:mt-16"
                      size="large"
                      variant={emphasized ? 'primary' : 'secondary'}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="embla__controls mt-10 flex justify-center md:hidden">
        <div className="embla__dots flex items-center gap-x-2.5">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot bg-neutral-000 h-1.5 w-1.5 rounded-full opacity-20'.concat(
                index === selectedIndex
                  ? 'embla__dot--selected bg-neutral-000 h-2 w-2 opacity-100'
                  : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
