import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>

export default function Benefits({ slice }: BenefitsProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        imageTextLeft: dynamic(() => import('./BenefitsImageTextLeft')),
        imageTextRight: dynamic(() => import('./BenefitsImageTextRight')),
        textLargeImage: dynamic(() => import('./BenefitsTextLargeImage')),
      }}
    />
  )
}
