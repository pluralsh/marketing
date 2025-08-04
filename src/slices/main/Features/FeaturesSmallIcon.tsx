import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

export type FeaturesSmallIconProps = SliceVariationProps<
  Content.FeaturesSlice,
  'smallIcon'
>

export default function FeaturesSmallIcon({ slice }: FeaturesSmallIconProps) {
  const { eyebrow, title, features } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content mt-8 md:mx-4 md:mt-30">
        <div className="grid grid-cols-1 justify-start gap-x-9 gap-y-6 xl:grid-cols-2">
          <div className="xl:col-span-2">
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
      <div className="2xl:content mt-10 mb-8 grid grid-cols-1 gap-x-6 gap-y-6 md:mt-20 md:mb-16 lg:grid-cols-2">
        {features.map(({ image, title, description }, idx) => (
          <div
            key={idx}
            className="border-neutral-000/10 h-fit md:rounded-2xl md:border md:p-4 lg:h-[400px] xl:h-[320px]"
          >
            <div className="flex h-full flex-col items-start justify-between rounded-lg bg-neutral-800 px-4 py-5 md:rounded-xl md:p-10">
              <div className="border-neutral-000/10 flex aspect-[1] h-10 w-10 items-center justify-center rounded-full border">
                <div className="bg-primary-600 flex items-center justify-center rounded-full p-[0.35rem]">
                  <PrismicNextImage
                    field={image}
                    className="h-4 w-4"
                    fallbackAlt=""
                  />
                </div>
              </div>
              <div className="xl:max-w-[450px]">
                <PrismicRichText
                  field={title}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="text-title-large mt-10">{children}</h3>
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
