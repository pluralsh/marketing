import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

import ScrollImageRight from './components/ScrollImageRight'

export type FeaturesImageRightProps = SliceVariationProps<
  Content.FeaturesSlice,
  'imageRight'
>

export default function FeaturesImageRight({ slice }: FeaturesImageRightProps) {
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
      <div className="2xl:content mt-10 mb-16 md:mt-32 md:mb-30">
        <ScrollImageRight features={features} />
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}
