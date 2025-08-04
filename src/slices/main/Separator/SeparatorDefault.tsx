import type { Content } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'

export type SeparatorDefaultProps = SliceVariationProps<
  Content.SeparatorSlice,
  'default'
>

export default function SeparatorDefault({ slice }: SeparatorDefaultProps) {
  return (
    <SliceContainer
      role="separator"
      as="div"
      slice={slice}
      className="grid-container"
    >
      <div className="separator" />
    </SliceContainer>
  )
}
