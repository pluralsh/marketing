import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

export default function CallToAction({ slice }: CallToActionProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./CallToActionDefault')),
      }}
    />
  )
}
