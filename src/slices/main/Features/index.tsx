import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>

export default function Features({ slice }: FeaturesProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./FeaturesDefault')),
        imageRight: dynamic(() => import('./FeaturesImageRight')),
        table: dynamic(() => import('./FeaturesTable')),
        resources: dynamic(() => import('./FeaturesResources')),
        collapsible: dynamic(() => import('./FeaturesCollapsible')),
        smallIcon: dynamic(() => import('./FeaturesSmallIcon')),
      }}
    />
  )
}
