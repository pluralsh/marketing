'use client'

import type { Content } from '@prismicio/client'

import { useId } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'

type SpacerRemoveSpaceProps = SliceVariationProps<
  Content.SpacerSlice,
  'removeSpace'
>

/**
 * Removes neighbour margin(s) from the previous and/or next slice.
 */
export default function SpacerRemoveSpace({ slice }: SpacerRemoveSpaceProps) {
  const { direction } = slice.primary
  const id = useId()

  return (
    <>
      <SliceContainer
        slice={slice}
        id={id}
        className="contents"
      />
      <style
        global
        jsx
      >
        {`
          ${direction === 'Previous' || direction === 'Both'
            ? `section:has(+ #${id}) {
            margin-bottom: 0 !important;
            margin-block-end: 0 !important;
          }`
            : ``}

          ${direction === 'Next' || direction === 'Both'
            ? `#${id} + section {
            margin-top: 0 !important;
            margin-block-start: 0 !important;
          }`
            : ``}
        `}
      </style>
    </>
  )
}
