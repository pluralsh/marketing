import type { Content } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'
import SliceContainer from '@/components/SliceContainer'

export type TiltedParagraphsDefaultProps = SliceVariationProps<
  Content.TiltedParagraphsSlice,
  'default'
>

export default function TiltedParagraphs({
  slice,
}: TiltedParagraphsDefaultProps) {
  const {} = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    ></SliceContainer>
  )
}
