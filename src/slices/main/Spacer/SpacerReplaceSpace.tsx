'use client'

import type { Content } from '@prismicio/client'

import { useId } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import { getBreakpoint } from '@/utils/css'

type SpacerReplaceSpaceProps = SliceVariationProps<
  Content.SpacerSlice,
  'replaceSpace'
>

/**
 * Removes neighbour slices margins and adds a spacer inbetween.
 */
export default function SpacerReplaceSpace({ slice }: SpacerReplaceSpaceProps) {
  const { height_desktop, height_mobile } = slice.primary
  const heightDesktop = height_desktop ?? height_mobile ?? 0
  const heightMobile = height_mobile ?? height_desktop ?? 0

  const id = useId()
  const breakpointMd = getBreakpoint('md')

  return (
    <>
      <SliceContainer
        as="div"
        id={id}
        slice={slice}
        suppressHydrationWarning
      />
      <style
        global
        jsx
      >
        {`
          section:has(+ #${id}) {
            margin-bottom: 0 !important;
            margin-block-end: 0 !important;
          }

          #${id} + section {
            margin-top: 0 !important;
            margin-block-start: 0 !important;
          }

          #${id} {
            margin-top: ${heightMobile / 16}rem;
          }

          @media (min-width: ${breakpointMd}) {
            #${id} {
              margin-top: ${heightDesktop / 16}rem;
            }
          }
        `}
      </style>
    </>
  )
}
