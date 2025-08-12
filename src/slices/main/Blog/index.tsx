import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type BlogProps = SliceComponentProps<Content.BlogSlice>

export default function Blog({ slice }: BlogProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./BlogDefault')),
      }}
    />
  )
}
