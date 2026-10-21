import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/constants'

// Noindexed pages opt out with per-page `robots` metadata instead of disallow rules.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
