import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>

export default function Testimonials({ slice }: TestimonialsProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        animationSlider: dynamic(() => import('./TestimonialsAnimationSlider')),
      }}
    />
  )
}
