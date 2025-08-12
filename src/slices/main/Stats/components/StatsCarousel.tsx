'use client'

import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'
import useEmblaCarousel from 'embla-carousel-react'

import { DotButton, useDotButton } from '@/components/EmblaDotButton'
import { cn } from '@/utils/cn'
import { getBreakpoint } from '@/utils/css'

type StatsCarouselProps = {
  statistics: Content.StatsSlice['primary']['statistics']
}

export default function StatsCarousel({ statistics }: StatsCarouselProps) {
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
    <div className="grid-container max-md:grid-container-padding-full-bleed-0">
      <div className="separator" />
      <div className="content overflow-clip">
        <div className="content embla overflow-visible">
          <div
            className="embla__viewport"
            ref={emblaRef}
          >
            <div className="embla__container pan-y flex touch-pinch-zoom">
              {statistics.map(({ number, description }, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'embla__slide flex translate-3d flex-col justify-between select-none',
                    'aspect-square max-h-[230px] min-w-0 p-4',
                    'basis-[230px] max-md:shrink-0 max-md:grow-0 md:basis-(--embla-slide-basis)',
                    'border-neutral-000/10 border-r max-lg:last:border-r-0 lg:first:border-l'
                  )}
                  style={
                    {
                      '--embla-slide-basis': `${100 / statistics.length}%`,
                    } as React.CSSProperties
                  }
                >
                  <h3 className="text-heading-small">{number}</h3>
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-body-small">{children}</p>
                      ),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="separator" />
      <div className="embla__controls my-8 flex justify-center md:hidden">
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
