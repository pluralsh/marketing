import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type LogotypesProps = SliceComponentProps<Content.LogotypesSlice>

export default function Logotypes({ slice }: LogotypesProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./LogotypesDefault')),
        threeItems: dynamic(() => import('./LogotypesThreeItems')),
      }}
    />
  )
}
