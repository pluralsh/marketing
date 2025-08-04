import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type ContactProps = SliceComponentProps<Content.ContactSlice>

export default function Contact({ slice }: ContactProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./ContactDefault')),
      }}
    />
  )
}
