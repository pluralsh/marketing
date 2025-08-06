import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import SliceVariations from '@/components/SliceVariations'
import dynamic from 'next/dynamic'

export type TiltedParagraphsProps =
  SliceComponentProps<Content.TiltedParagraphsSlice>

export default function OpenPositions({ slice }: TiltedParagraphsProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./Default')),
        withImage: dynamic(() => import('./WithImage')),
        withText: dynamic(() => import('./WithText')),
      }}
    />
  )
}
