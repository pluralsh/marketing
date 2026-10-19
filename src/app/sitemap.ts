import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/constants'
import { jobs } from '@/content/jobs'
import { contentPages } from '@/content/pages'

// Hand-built routes under src/app/[locale]/(light|dark). Noindexed pages are omitted.
const STATIC_PATHS = [
  '/about',
  '/careers',
  '/contact',
  '/customers',
  '/pricing',
  '/products/agent-runtime',
  '/products/fleet-scale-gitops',
  '/products/flows',
  '/products/sentinels',
  '/solutions',
  '/solutions/devops-sre',
  '/solutions/edge',
  '/workbenches',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const contentPaths = await Promise.all(
    Object.entries(contentPages).map(async ([path, load]) =>
      (await load()).default.meta.noindex ? null : path
    )
  )

  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    ...[
      ...STATIC_PATHS,
      ...contentPaths.filter((path): path is string => path !== null),
      ...jobs.map((job) => `/careers/hire/${job.slug}`),
    ].map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
