import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type OpenPositionsProps = SliceComponentProps<Content.OpenPositionsSlice>

export default function OpenPositions({ slice }: OpenPositionsProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./OpenPositionsDefault')),
        singlePosition: dynamic(() => import('./OpenPositionsSinglePosition')),
      }}
    />
  )
}
