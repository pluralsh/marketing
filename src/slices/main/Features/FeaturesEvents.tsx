import type { Content } from '@prismicio/client'

import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

export type FeaturesEventsProps = SliceVariationProps<
  Content.FeaturesSlice,
  'events'
>

export default function FeaturesEvents({ slice }: FeaturesEventsProps) {
  const { eyebrow, title, events } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content mt-8 md:mt-16 md:px-4">
        <div className="grid grid-cols-1 justify-start gap-x-9 gap-y-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <Eyebrow field={eyebrow} />
          </div>
          <PrismicRichText
            field={title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-heading-small md:max-w-[592px]">
                  {children}
                </h2>
              ),
            }}
          />
        </div>
      </div>
      <div className="2xl:content mt-10 mb-14 grid grid-cols-1 gap-10 md:mt-20 md:mb-30 md:grid-cols-2 md:gap-4">
        {events.map(({ title, date, time, image, event_link }, i) => (
          <PrismicNextLink
            key={`${title}-${i}`}
            field={event_link}
          >
            <div className="border-neutral-000/10 group hover:border-neutral-000/24 rounded-2xl border p-4 transition md:p-6">
              <div className="flex h-full flex-col items-start md:rounded-xl">
                <div className="flex flex-col">
                  <PrismicRichText
                    field={title}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="text-title-large mb-10 text-white/70 transition group-hover:text-white">
                          {children}
                        </h3>
                      ),
                    }}
                  />
                  <p className="text-body-small mb-1 text-white">{date}</p>
                  <p className="text-body-small mb-6 text-white/70">{time}</p>
                </div>
                <div className="w-full overflow-hidden rounded-xl">
                  <PrismicNextImage
                    field={image}
                    className="h-[180px] w-full object-cover object-left md:h-[200px] md:w-auto"
                    fallbackAlt=""
                  />
                </div>
              </div>
            </div>
          </PrismicNextLink>
        ))}
      </div>
    </SliceContainer>
  )
}
