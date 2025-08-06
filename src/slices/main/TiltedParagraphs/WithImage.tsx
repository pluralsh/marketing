import type { Content } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'
import { PrismicRichText } from '@prismicio/react'
import TiltedParagraphs from '@/components/TiltedParagraphs/TiltedParagraphs'
import { PrismicNextImage } from '@prismicio/next'

export type TiltedParagraphsWithImageProps = SliceVariationProps<
  Content.TiltedParagraphsSlice,
  'withImage'
>

export default function TiltedParagraphsWithImage({
  slice,
}: TiltedParagraphsWithImageProps) {
  const { title, eyebrow, items, image } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content my-14 flex flex-col items-center md:mt-30">
        <Eyebrow
          field={eyebrow}
          className="mb-6"
        />
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-heading-small mb-12">{children}</h3>
            ),
          }}
        />
        <div className="flex flex-col items-center gap-6">
          <TiltedParagraphs items={items} />
        </div>
      </div>
      <div className="max-content-width mb-4">
        <PrismicNextImage
          field={image}
          className="max-h-[600px] w-full rounded-lg object-cover"
          priority
          fallbackAlt=""
        />
      </div>
    </SliceContainer>
  )
}
