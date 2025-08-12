'use client'

import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'

import { cn } from '@/utils/cn'
import { getBreakpoint } from '@/utils/css'

type LogotypeCarouselProps = {
  logotypes: Content.LogotypesSlice['primary']['logotypes']
}

export default function LogotypeCarousel({ logotypes }: LogotypeCarouselProps) {
  const breakpointMd = getBreakpoint('md')
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      breakpoints: {
        [`(width >= ${breakpointMd})`]: {
          active: false,
        },
      },
    },
    [AutoScroll({ speed: 1, startDelay: 0 })]
  )

  return (
    <div className="embla overflow-visible">
      <div
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container pan-y flex touch-pinch-zoom max-md:px-4">
          {[...logotypes, ...logotypes].map(({ logo }, idx) => (
            <div
              key={idx}
              className={cn(
                'embla__slide translate-3d select-none',
                'min-w-0 max-md:flex max-md:h-[230px] max-md:shrink-0 max-md:items-center max-md:justify-center max-md:px-4',
                'md:grid md:aspect-square md:basis-(--embla-slide-basis) md:place-items-center md:p-4',
                'border-neutral-000/10 md:border-r md:first:border-l',
                {
                  'md:hidden': idx > logotypes.length - 1,
                }
              )}
              style={
                {
                  '--embla-slide-basis': `${100 / logotypes.length}%`,
                } as React.CSSProperties
              }
            >
              <PrismicNextImage
                field={logo}
                fallbackAlt=""
                className="max-md:max-h-full max-md:max-w-full max-md:object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
