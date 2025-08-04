import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type SeparatorProps = SliceComponentProps<Content.SeparatorSlice>

export default function Separator({ slice }: SeparatorProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./SeparatorDefault')),
      }}
    />
  )
}
