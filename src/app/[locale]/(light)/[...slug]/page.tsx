import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { ContentSections } from '@/components/sections/ContentSections'
import { contentPages } from '@/content/pages'
import { SUPPORTED_LOCALES } from '@/i18n/locales'

type Params = { locale: string; slug: string[] }

// Only the pages registered in src/content/pages exist; anything else 404s.
export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    Object.keys(contentPages).map((path) => ({
      locale,
      slug: path.split('/').filter(Boolean),
    }))
  )
}

async function loadPage(slug: string[]) {
  const load = contentPages[`/${slug.join('/')}`]

  return load ? (await load()).default : null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const page = await loadPage((await params).slug)
  const hero = page?.sections.find((section) => section.type === 'hero')

  return {
    title: page?.meta.title ?? (hero ? `${hero.title} | Plural` : undefined),
    description: page?.meta.description ?? hero?.description,
    robots: page?.meta.noindex ? { index: false } : undefined,
  }
}

export default async function ContentPage({
  params,
}: {
  params: Promise<Params>
}) {
  const page = await loadPage((await params).slug)

  if (!page) notFound()

  return <ContentSections sections={page.sections} />
}
