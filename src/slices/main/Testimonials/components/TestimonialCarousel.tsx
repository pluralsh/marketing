'use client'

import type { Content, GroupField } from '@prismicio/client'
import type { EmblaOptionsType } from 'embla-carousel'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import useEmblaCarousel from 'embla-carousel-react'

import type {
  PickContentRelationshipFieldData,
  Simplify,
} from '@/../prismicio-types'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './CarouselArrowButtons'

type PropType = {
  testimonials: GroupField<
    PickContentRelationshipFieldData<
      {
        id: 'testimonials'
        fields: [
          'testimonial',
          'position',
          'location',
          'person_icon',
          'company_icon',
        ]
      },
      Simplify<Content.TestimonialsDocumentDataTestimonialsItem>,
      string
    >
  >
  options?: EmblaOptionsType
}

export default function TestimonialCarousel({
  testimonials,
  options,
}: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla mx-4 w-full overflow-visible md:col-start-2 md:col-end-3 lg:mx-12">
      <div
        className="embla__viewport px-4 md:pr-0 md:pl-12"
        ref={emblaRef}
      >
        <div className="embla__container pan-y -ml-16 flex touch-pinch-zoom">
          {testimonials.map(
            (
              { testimonial, position, location, person_icon, company_icon },
              idx
            ) => (
              <div
                className="embla__slide min-w-0 shrink-0 grow-0 basis-full translate-3d pl-16 select-none"
                key={idx}
              >
                <blockquote>
                  <PrismicRichText
                    field={testimonial}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="enquote text-quote">{children}</p>
                      ),
                    }}
                  />
                </blockquote>
                <div className="mt-4 flex flex-col gap-x-6 gap-y-2 sm:mt-6 sm:flex-row sm:items-center">
                  <div className="flex items-center">
                    <PrismicNextImage
                      field={company_icon}
                      className="size-8 rounded-full object-cover md:size-12"
                      fallbackAlt=""
                    />
                    <PrismicNextImage
                      field={person_icon}
                      className="-ml-5 size-8 rounded-full object-cover md:size-12"
                      fallbackAlt=""
                    />
                  </div>
                  <div className="text-body-medium">
                    <p className="text-neutral-000">{position}</p>
                    <p>{location}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="embla__controls mt-8 ml-4 md:mt-16 md:ml-12">
        <div className="embla__buttons flex items-center gap-x-1">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  )
}
