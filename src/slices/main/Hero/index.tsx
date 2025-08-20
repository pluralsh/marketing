import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type HeroProps = SliceComponentProps<Content.HeroSlice>

export default function Hero({ slice }: HeroProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./HeroDefault')),
        exclusive: dynamic(() => import('./HeroExclusive')),
        image: dynamic(() => import('./HeroImage')),
        video: dynamic(() => import('./HeroVideo')),
        exclusiveAnimated: dynamic(() => import('./HeroExclusiveAnimated')),
      }}
    />
  )
}
