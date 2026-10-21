import type { Metadata } from 'next'

import { SITE_URL } from '@/constants'

export const OG_IMAGE = {
  url: '/api/og',
  width: 1200,
  height: 630,
  alt: 'Plural | AI for infrastructure',
}

/** Site-wide defaults; set on the root layout so every route inherits them. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: 'Plural',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
}

type PageMeta = {
  title?: string
  description?: string
  noindex?: boolean
}

/**
 * Per-page metadata with a canonical URL and social previews. Next replaces
 * `openGraph` and `twitter` wholesale rather than merging them with the
 * layout's, so the image has to be repeated here.
 */
export function pageMetadata(
  path: string,
  { title, description, noindex }: PageMeta
): Metadata {
  return {
    title,
    description,
    robots: noindex ? { index: false } : undefined,
    alternates: { canonical: path },
    openGraph: {
      siteName: 'Plural',
      type: 'website',
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}
