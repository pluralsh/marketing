import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type TextMediaProps = SliceComponentProps<Content.TextMediaSlice>

export default function TextMedia({ slice }: TextMediaProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        textScrollReveal: dynamic(() => import('./TextMediaTextScrollReveal')),
      }}
    />
  )
}
