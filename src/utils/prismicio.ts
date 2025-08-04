import type {
  BuildQueryURLArgs,
  ClientConfig,
  Content,
  FilledLinkToMediaField,
  LinkToMediaField,
} from '@prismicio/client'
import type { Metadata } from 'next'
import type { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types'

import {
  asImageSrc,
  isFilled,
  createClient as prismicCreateClient,
} from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import { getLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { cache } from 'react'

import type { FetchParams, PrismicMetadata } from '@/types/prismicio'

import { REQUIRED_PAGE_UID, REQUIRED_SINGLE_TYPE, SITE_URL } from '@/constants'
import routes from '@/routes'
import { getLocalePrefix } from '@/utils/routing'

import sm from '../../slicemachine.config.json'

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName

const repositoryUrl = `https://${repositoryName}.prismic.io`

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export function createClient(config: ClientConfig = {}) {
  const client = prismicCreateClient(sm.apiEndpoint || repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    ...config,
  })

  enableAutoPreviews({ client })

  return client
}

export const getPrismicDefaultLanguage = cache(async () => {
  const client = createClient()
  const repository = await client.getRepository()
  return repository.languages.find((lang) => lang.is_master)!.id
})

export const getPrismicLanguages = cache(async () => {
  const client = createClient()
  const repository = await client.getRepository()
  return repository.languages.map((lang) => lang.id)
})

export async function getMetadataAlternateLanguages<
  TDocument extends Content.AllDocumentTypes,
>(document: TDocument): Promise<Languages<string>> {
  const client = createClient()

  const alternateLanguages = await Promise.all(
    document.alternate_languages
      .filter((alt) => alt.uid)
      .map(async (alt) => {
        const alternateDocument = await client.getByUID(
          document.type,
          alt.uid!,
          {
            lang: alt.lang,
            fetch: `${document.type}.__nonexistent-field__`,
          }
        )

        return [alt.lang, `${SITE_URL}${alternateDocument.url}`]
      })
  )

  return Object.fromEntries(alternateLanguages)
}

export async function getHomepage(
  params?: Partial<Omit<BuildQueryURLArgs, 'lang'>> & FetchParams
) {
  const client = createClient()
  const locale = await getLocale()

  try {
    const homepage = await client.getByUID('page', REQUIRED_PAGE_UID.HOME, {
      ...params,
      lang: locale,
    })
    return homepage
  } catch {
    throw new Error(
      `Home page for locale '${locale}' not found in Prismic. Make sure a page with UID '${REQUIRED_PAGE_UID.HOME}' exists and is published.`
    )
  }
}

export async function getSettings() {
  const client = createClient()
  const locale = await getLocale()

  try {
    const settings = await client.getSingle(REQUIRED_SINGLE_TYPE.SETTINGS, {
      lang: locale,
    })
    return settings
  } catch {
    throw new Error(
      `Settings document for locale '${locale}' not found in Prismic. Make sure it exists and is published.\nVisit: ${repositoryUrl}/builder/working?language=${locale}&customTypes=settings`
    )
  }
}

export async function getMetadata(
  documentType: Content.AllDocumentTypes['type'],
  uid: string,
  params?: Partial<Omit<BuildQueryURLArgs, 'lang'>> & FetchParams
): Promise<Metadata> {
  const client = createClient()

  const lang = await getLocale()
  const [langPrefix, settings, document] = await Promise.all([
    getLocalePrefix(lang),
    getSettings(),
    client.getByUID(documentType, uid, { lang, ...params }).catch(notFound),
  ])
  const alternateLanguages = await getMetadataAlternateLanguages(document)

  const url = `${SITE_URL}${langPrefix}${document.url}`

  const {
    meta_title,
    meta_description,
    meta_image,
    meta_keywords,
    meta_noindex,
  } = document.data as PrismicMetadata

  const {
    meta_title_template,
    meta_title: settings_meta_title,
    meta_description: settings_meta_description,
    meta_image: settings_meta_image,
    meta_keywords: settings_meta_keywords,
  } = settings.data

  const title = isFilled.keyText(meta_title) ? meta_title : settings_meta_title
  const description = isFilled.keyText(meta_description)
    ? meta_description
    : settings_meta_description
  const image = isFilled.image(meta_image) ? meta_image : settings_meta_image
  const keywords = isFilled.keyText(meta_keywords)
    ? meta_keywords
    : settings_meta_keywords

  const interpolated_title = isFilled.keyText(meta_title_template)
    ? meta_title_template.replace(/%s/g, title ?? '')
    : title

  return {
    title: interpolated_title ?? undefined,
    description: description ?? undefined,
    keywords: keywords?.trim().split(/,\s*/) ?? undefined,
    robots: meta_noindex ? 'noindex, nofollow' : undefined,
    openGraph: {
      url,
      images: [{ url: asImageSrc(image) ?? '' }],
    },
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
  }
}

export function isVideo(
  linkToMediaField: LinkToMediaField
): linkToMediaField is FilledLinkToMediaField {
  if (linkToMediaField.link_type !== 'Media') {
    return false
  }

  return /\.(mp4|webm)/.test(linkToMediaField.name)
}
