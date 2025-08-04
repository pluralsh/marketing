import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type StatsProps = SliceComponentProps<Content.StatsSlice>

export default function Stats({ slice }: StatsProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./StatsDefault')),
      }}
    />
  )
}
