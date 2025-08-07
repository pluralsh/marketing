import type { Content } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'
import { PrismicRichText } from '@prismicio/react'
import TiltedParagraphs from '@/components/TiltedParagraphs/TiltedParagraphs'

export type TiltedParagraphsDefaultProps = SliceVariationProps<
  Content.TiltedParagraphsSlice,
  'default'
>

export default function TiltedParagraphsDefault({
  slice,
}: TiltedParagraphsDefaultProps) {
  const { eyebrow, title, items } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content my-14 flex flex-col items-center md:my-30">
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
        <div className="mb-17 flex flex-col items-center gap-6 md:mb-14">
          <TiltedParagraphs items={items} />
        </div>
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}
