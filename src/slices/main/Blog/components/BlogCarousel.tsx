'use client'

import type { Content } from '@prismicio/client'

import { asText } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import useEmblaCarousel from 'embla-carousel-react'

import { DotButton, useDotButton } from '@/components/EmblaDotButton'
import { cn } from '@/utils/cn'
import { getBreakpoint } from '@/utils/css'

type BlogCarouselProps = {
  slides: Content.BlogSliceDefaultPrimaryBlogPostsItem[]
}

export default function BlogCarousel({ slides }: BlogCarouselProps) {
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
        <div className="embla__container -ml-8 flex touch-pan-y touch-pinch-zoom md:-ml-4">
          {slides.map(({ title, description, image, link }, idx) => (
            <div
              key={idx}
              className="embla__slide min-w-0 shrink-0 grow-0 basis-full translate-3d pl-8 select-none md:basis-[calc(100%/3)] md:pl-4"
            >
              <PrismicNextLink
                field={link}
                className={cn(
                  'flex h-full flex-col overflow-clip rounded-xl p-3 pb-6 md:rounded-2xl md:p-4 md:pb-10',
                  'border-neutral-000/10 hover:border-neutral-000/[24%] group border transition'
                )}
              >
                <div className="overflow-clip rounded-lg md:rounded-xl">
                  <PrismicNextImage
                    field={image}
                    fallbackAlt=""
                    className="aspect-[420/260] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <PrismicRichText
                    field={title}
                    components={{
                      heading3: ({ children }) => (
                        <h3
                          className="text-title-large mt-6 line-clamp-3 md:mt-8"
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
                        <p className="mt-4 line-clamp-3">{children}</p>
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
