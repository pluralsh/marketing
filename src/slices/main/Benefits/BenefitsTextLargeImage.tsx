import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

export type BenefitsTextLargeImageProps = SliceVariationProps<
  Content.BenefitsSlice,
  'textLargeImage'
>

export default function BenefitsTextLargeImage({
  slice,
}: BenefitsTextLargeImageProps) {
  const { eyebrow, title, full_bleed_image } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content-full-width mt-5 md:mt-14 md:px-4">
        <Eyebrow
          field={eyebrow}
          className="mb-6"
        />
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-heading-small md:max-w-[596px]">
                {children}
              </h2>
            ),
          }}
        />
      </div>
      <div className="content-full-width my-12 md:my-16">
        <PrismicNextImage
          field={full_bleed_image}
          className="h-[200px] w-full rounded-xl object-cover sm:h-[400px] md:h-[600px]"
          priority
          fallbackAlt=""
        />
      </div>
    </SliceContainer>
  )
}
