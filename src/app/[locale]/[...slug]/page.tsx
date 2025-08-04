import type { Metadata } from 'next'

import { filter } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { getLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { REQUIRED_PAGE_UID } from '@/constants'
import { components } from '@/slices/main'
import { createClient, getMetadata } from '@/utils/prismicio'

type Params = { slug: string[] }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params

  return getMetadata('page', slug.slice(-1)[0])
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const client = createClient()

  const locale = await getLocale()
  const page = await client
    .getByUID('page', slug.slice(-1)[0], {
      lang: locale,
    })
    .catch(notFound)

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
    />
  )
}

export async function generateStaticParams(): Promise<Params[]> {
  const client = createClient()

  const pages = await client.getAllByType('page', {
    filters: [filter.not('my.page.uid', REQUIRED_PAGE_UID.HOME)],
    lang: '*',
  })

  return pages.map((page) => {
    const [, ...slug] = page.url!.split('/')

    return {
      slug,
      locale: page.lang,
    }
  })
}
