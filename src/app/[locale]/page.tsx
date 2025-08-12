import type { Metadata } from 'next'

import { SliceZone } from '@prismicio/react'

import { REQUIRED_PAGE_UID } from '@/constants'
import { components } from '@/slices/main'
import { getHomepage, getMetadata } from '@/utils/prismicio'

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('page', REQUIRED_PAGE_UID.HOME)
}

export default async function Index() {
  const home = await getHomepage()

  return (
    <SliceZone
      slices={home.data.slices}
      components={components}
    />
  )
}
