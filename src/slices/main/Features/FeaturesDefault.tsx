import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

export type FeaturesDefaultProps = SliceVariationProps<
  Content.FeaturesSlice,
  'default'
>

export default function FeaturesDefault({ slice }: FeaturesDefaultProps) {
  const { eyebrow, title, description, features } = slice.primary

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
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="self-end md:max-w-lg">{children}</p>
              ),
            }}
          />
        </div>
      </div>
      <div className="2xl:content mt-10 mb-8 grid grid-cols-1 gap-x-6 gap-y-6 md:mt-20 md:mb-16 md:grid-cols-2">
        {features.map(({ image, title, description }, idx) => (
          <div
            key={idx}
            className="border-neutral-000/10 md:rounded-2xl md:border md:p-4"
          >
            <div className="flex h-full flex-col items-start rounded-lg bg-neutral-800 px-4 py-5 md:rounded-xl md:p-10">
              <PrismicNextImage
                field={image}
                className="h-[180px] w-auto md:h-[200px]"
                fallbackAlt=""
              />
              <div>
                <PrismicRichText
                  field={title}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="text-title-large mt-3 md:mt-18">
                        {children}
                      </h3>
                    ),
                  }}
                />
                <PrismicRichText
                  field={description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="mt-3">{children}</p>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SliceContainer>
  )
}
