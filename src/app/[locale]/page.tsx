import type { Metadata } from 'next'

import { SliceZone } from '@prismicio/react'

import { REQUIRED_PAGE_UID } from '@/constants'
import { components } from '@/slices/main'
import { getHomepage, getMetadata } from '@/utils/prismicio'

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('page', REQUIRED_PAGE_UID.HOME)
}

// Dev-only: preview the interactive workbench demo on the homepage without
// editing Prismic. The live `exclusive` hero already carries every field the
// `exclusiveDemo` variation renders, so we just swap the variation. For
// production, set the variation in the Prismic Page Builder instead.
const PREVIEW_HERO_DEMO = process.env.NODE_ENV !== 'production'

function withHeroDemoPreview(
  slices: Awaited<ReturnType<typeof getHomepage>>['data']['slices']
) {
  if (!PREVIEW_HERO_DEMO) return slices
  return slices.map((slice) =>
    slice.slice_type === 'hero'
      ? { ...slice, variation: 'exclusiveDemo' }
      : slice
  ) as typeof slices
}

export default async function Index() {
  const home = await getHomepage()

  return (
    <SliceZone
      slices={withHeroDemoPreview(home.data.slices)}
      components={components}
    />
  )
}
