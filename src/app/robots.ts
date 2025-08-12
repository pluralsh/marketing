import type { MetadataRoute } from 'next'

import { filter } from '@prismicio/client'

import { SITE_URL } from '@/constants'
import { createClient } from '@/utils/prismicio'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const client = createClient()

  const pages = await client
    .getAllByType('page', {
      filters: [filter.at('my.page.meta_noindex', true)],
      lang: '*',
    })
    .then((pages) => pages.map((page) => `${page.url!}/`))

  const disallowedURLs = [...pages]

  return {
    rules: {
      userAgent: '*',
      disallow: disallowedURLs,
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
