import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

type SpacerProps = SliceComponentProps<Content.SpacerSlice>

export default function Spacer({ slice }: SpacerProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        removeSpace: dynamic(() => import('./SpacerRemoveSpace')),
        replaceSpace: dynamic(() => import('./SpacerReplaceSpace')),
      }}
    />
  )
}
