'use client'

import type { Content, KeyTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import { useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '@/slices/main/Testimonials/components/CarouselArrowButtons'
import Eyebrow from '@/components/ui/Eyebrow'
import { PrismicNextImage } from '@prismicio/next'
import { cn } from '@/utils/cn'
import { getBreakpoint } from '@/utils/css'

export type FeaturesHorizontallyScrollableProps = SliceVariationProps<
  Content.FeaturesSlice,
  'horizontallyScrollable'
>

export default function FeaturesHorizontallyScrollable({
  slice,
}: FeaturesHorizontallyScrollableProps) {
  const breakpointXl = getBreakpoint('xl')
  const { title, features } = slice.primary

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    breakpoints: {
      [`(max-width: ${breakpointXl}px)`]: {
        active: false,
      },
    },
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const eyebrowOrder = useMemo(
    () => [...new Set(features.map(({ eyebrow }) => eyebrow))],
    [features]
  )

  const slides = useMemo(
    () =>
      Object.values(
        features.reduce(
          (acc, feature) => {
            if (!feature.eyebrow) return acc
            const featureList = acc[feature.eyebrow] || []
            acc[feature.eyebrow] = [...featureList, feature]
            return acc
          },
          {} as Record<string, typeof features>
        )
      ).sort((a, b) => {
        const aEyebrow = a[0]?.eyebrow
        const bEyebrow = b[0]?.eyebrow
        const aIndex = eyebrowOrder.indexOf(aEyebrow as KeyTextField)
        const bIndex = eyebrowOrder.indexOf(bEyebrow as KeyTextField)
        return aIndex - bIndex
      }),
    [features, eyebrowOrder]
  )

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content relative my-14 flex flex-col items-center overflow-hidden md:mt-26">
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-heading-small sticky mb-12 max-w-[596px] md:mb-16 xl:text-center">
                {children}
              </h3>
            ),
          }}
        />
        <div className="embla w-full overflow-visible">
          <div
            className="embla__viewport"
            ref={emblaRef}
          >
            <div className="embla__container pan-y flex flex-col xl:flex-row">
              {slides.map((items, idx) => (
                <div
                  className="embla__slide mt-10 min-w-0 shrink-0 grow-0 basis-full justify-center select-none xl:mt-0 xl:grid"
                  key={idx}
                >
                  <div className="flex flex-col gap-6 xl:items-center">
                    {items[0] && (
                      <Eyebrow
                        field={items[0].eyebrow}
                        className="w-fit"
                      />
                    )}
                    <div className="grid w-full grid-cols-[1fr] gap-6 xl:grid-cols-[3fr_4fr]">
                      {items.map(
                        (
                          {
                            title,
                            description,
                            highlighted,
                            icon,
                            background_image,
                          },
                          idx
                        ) => (
                          <div
                            key={idx}
                            className={cn(
                              'relative min-h-[320px] rounded-xl border-white/10 xl:border xl:p-4',
                              {
                                'xl:col-span-2': highlighted,
                              }
                            )}
                          >
                            <div className="h-full w-full rounded-xl bg-neutral-800">
                              {highlighted && (
                                <div className="absolute top-0 left-0 hidden h-full w-full overflow-hidden xl:block xl:p-4">
                                  <PrismicNextImage
                                    className="h-full w-full rounded-xl object-cover"
                                    field={background_image}
                                  />
                                </div>
                              )}
                              <div className="relative z-1 flex flex-col p-6 xl:p-10">
                                <div className="border-neutral-000/10 flex aspect-[1] h-10 w-10 items-center justify-center rounded-full border">
                                  <div className="bg-primary-600 flex items-center justify-center rounded-full p-[0.35rem]">
                                    <PrismicNextImage
                                      field={icon}
                                      className="h-4 w-4"
                                      fallbackAlt=""
                                    />
                                  </div>
                                </div>
                                <PrismicRichText
                                  field={title}
                                  components={{
                                    heading3: ({ children }) => (
                                      <h3 className="text-title-large mt-6">
                                        {children}
                                      </h3>
                                    ),
                                  }}
                                />
                                <PrismicRichText
                                  field={description}
                                  components={{
                                    paragraph: ({ children }) => (
                                      <p
                                        className={cn(
                                          'text-body-medium mt-3 text-white',
                                          { 'text-white/70': !highlighted }
                                        )}
                                      >
                                        {children}
                                      </p>
                                    ),
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__controls mt-8 hidden justify-center md:mt-16 xl:flex">
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
      </div>
    </SliceContainer>
  )
}
