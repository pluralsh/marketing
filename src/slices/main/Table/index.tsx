import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import dynamic from 'next/dynamic'

import SliceVariations from '@/components/SliceVariations'

export type TableProps = SliceComponentProps<Content.TableSlice>

export default function Table({ slice }: TableProps) {
  return (
    <SliceVariations
      slice={slice}
      variations={{
        default: dynamic(() => import('./TableDefault')),
      }}
    />
  )
}
