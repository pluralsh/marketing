import type { Content } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'
import SliceContainer from '@/components/SliceContainer'

export type TiltedParagraphsWithImageProps = SliceVariationProps<
  Content.TiltedParagraphsSlice,
  'withImage'
>

export default function TiltedParagraphs({
  slice,
}: TiltedParagraphsWithImageProps) {
  const {} = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    ></SliceContainer>
  )
}
