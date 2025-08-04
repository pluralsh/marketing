'use client'

import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import * as React from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'
import { cn } from '@/utils/cn'

export type TeamCarouselProps = SliceVariationProps<
  Content.TeamSlice,
  'carousel'
>

export default function TeamCarousel({ slice }: TeamCarouselProps) {
  const { eyebrow, title, images } = slice.primary

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoScroll({ speed: 1, startDelay: 0 })]
  )

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content md:ty-16 mt-8 overflow-hidden md:mx-4">
        <div className="grid grid-cols-1 justify-start gap-x-9 gap-y-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <Eyebrow field={eyebrow} />
          </div>
          <PrismicRichText
            field={title}
            components={{
              heading3: ({ children }) => (
                <h2 className="text-heading-small md:max-w-[592px]">
                  {children}
                </h2>
              ),
            }}
          />
        </div>
      </div>
      <div className="content-full-bleed mb-8 overflow-hidden md:mb-16">
        <div className="embla mt-10">
          <div
            className="embla__viewport"
            ref={emblaRef}
          >
            <div className="embla__container pan-y flex touch-pinch-zoom">
              {[...images, ...images].map(({ image }, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'embla__slide grid translate-3d place-items-center select-none',
                    'my-12 w-[80%] pl-2 lg:w-[40%] lg:max-w-[554px] lg:min-w-[277px] lg:pl-12',
                    'shrink-0 grow-0'
                  )}
                  style={
                    {
                      '--embla-slide-basis': `${100 / images.length}%`,
                    } as React.CSSProperties
                  }
                >
                  <PrismicNextImage
                    field={image}
                    className="aspect-[277/200] w-full rounded-lg object-cover lg:aspect-auto lg:object-scale-down"
                    fallbackAlt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}
