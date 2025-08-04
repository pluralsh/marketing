import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

export type HeroExclusiveProps = SliceVariationProps<
  Content.HeroSlice,
  'exclusive'
>

export default function HeroExclusive({ slice }: HeroExclusiveProps) {
  const {
    eyebrow,
    eyebrow_emphasized,
    title,
    description,
    cta,
    full_bleed_image,
  } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content pt-5 pb-12 md:pt-14 md:pb-14">
        <Eyebrow
          field={eyebrow}
          emphasized={eyebrow_emphasized}
          className="mb-6"
        />
        <PrismicRichText
          field={title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-heading-large">{children}</h1>
            ),
          }}
        />
        <div className="mt-6 flex flex-col gap-x-4 gap-y-6 md:mt-8 md:flex-row md:justify-between">
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-body-medium max-w-lg">{children}</p>
              ),
            }}
          />
          {cta && (
            <PrismicButton
              field={cta}
              size="large"
              className="self-start"
            />
          )}
        </div>
      </div>
      <div className="separator" />
      <div>
        <PrismicNextImage
          field={full_bleed_image}
          className="my-3 h-[200px] w-full rounded-xl object-cover sm:h-[400px] md:h-[600px]"
          priority
          fallbackAlt=""
        />
      </div>
    </SliceContainer>
  )
}
