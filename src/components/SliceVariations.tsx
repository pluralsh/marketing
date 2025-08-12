import type { SharedSlice } from '@prismicio/client'

import type { SliceVariation, SliceVariationProps } from '@/types/prismicio'

type SliceVariationsProps<Slice extends SharedSlice, Context = unknown> = {
  slice: SliceVariation<Slice, Slice['variation']>
  variations: {
    [Variation in Slice['variation']]: React.ComponentType<
      SliceVariationProps<Slice, Variation, Context>
    >
  }
  context?: Context
}

export default function SliceVariations<
  Slice extends SharedSlice,
  Context = unknown,
>({ slice, variations, context }: SliceVariationsProps<Slice, Context>) {
  const Component: React.ComponentType<
    SliceVariationProps<Slice, Slice['variation'], Context>
  > = variations[slice.variation as keyof typeof variations]

  if (!Component) {
    return null
  }

  return (
    <Component
      slice={slice}
      context={context}
    />
  )
}
