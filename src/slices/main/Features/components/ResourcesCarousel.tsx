'use client'

import type { Content } from '@prismicio/client'

import { asText } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import useEmblaCarousel from 'embla-carousel-react'

import { DotButton, useDotButton } from '@/components/EmblaDotButton'
import { getBreakpoint } from '@/utils/css'

type ResourcesCarouselProps = {
  slides: Content.FeaturesSliceResourcesPrimaryResourcesItem[]
}

export default function ResourcesCarousel({ slides }: ResourcesCarouselProps) {
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
    <div className="embla">
      <div
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container -ml-8 flex touch-pan-y touch-pinch-zoom md:-ml-6">
          {slides.map(({ title, description, image, link }, idx) => (
            <div
              key={idx}
              className="embla__slide min-w-0 shrink-0 grow-0 basis-full translate-3d pl-8 select-none md:basis-[calc(100%/3)] md:pl-6"
            >
              <PrismicNextLink
                field={link}
                className="group flex flex-col"
              >
                <div className="w-full overflow-clip rounded-lg md:rounded-xl">
                  <PrismicNextImage
                    field={image}
                    fallbackAlt=""
                    className="aspect-[420/260] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <PrismicRichText
                    field={title}
                    components={{
                      heading3: ({ children }) => (
                        <h3
                          className="text-title-medium mt-6 line-clamp-4"
                          title={asText(title)}
                        >
                          {children}
                        </h3>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mt-4 line-clamp-4">{children}</p>
                      ),
                    }}
                  />
                </div>
              </PrismicNextLink>
            </div>
          ))}
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
