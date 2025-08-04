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
        <div className="embla__container pan-y flex touch-pinch-zoom max-md:-ml-12">
          {[...logotypes, ...logotypes].map(({ logo }, idx) => (
            <div
              key={idx}
              className={cn(
                'embla__slide translate-3d select-none md:grid md:place-items-center',
                'max-h-[230px] min-w-0 max-md:my-12 max-md:pl-12 md:aspect-square md:p-4',
                'max-md:shrink-0 max-md:grow-0 md:basis-(--embla-slide-basis)',
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
