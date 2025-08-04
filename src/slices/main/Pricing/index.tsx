import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type PricingProps = SliceComponentProps<Content.PricingSlice>

export default function Pricing({ slice }: PricingProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        cards: dynamic(() => import('./PricingCards')),
        table: dynamic(() => import('./PricingTable')),
      }}
    />
  )
}
