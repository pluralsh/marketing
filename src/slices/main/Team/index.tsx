import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type TeamProps = SliceComponentProps<Content.TeamSlice>

export default function Team({ slice }: TeamProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./TeamDefault')),
        carousel: dynamic(() => import('./TeamCarousel')),
      }}
    />
  )
}
