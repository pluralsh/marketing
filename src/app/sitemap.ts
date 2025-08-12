import type {
  AbortSignalLike,
  BuildQueryURLArgs,
  Content,
  RequestInitLike,
} from '@prismicio/client'
import type { MetadataRoute } from 'next'

import { filter } from '@prismicio/client'

import type { PrismicMetadata } from '@/types/prismicio'

import { REQUIRED_PAGE_UID, SITE_URL } from '@/constants'
import { createClient, getMetadataAlternateLanguages } from '@/utils/prismicio'

async function getSitemapFileFromDocument<
  TDocumentType extends
    Content.AllDocumentTypes['type'] = Content.AllDocumentTypes['type'],
>(
  documentType: TDocumentType,
  uid: string,
  sitemapFile?: Partial<MetadataRoute.Sitemap[number]>,
  params?: Partial<Omit<BuildQueryURLArgs, 'lang'>> & {
    fetchOptions?: RequestInitLike
    signal?: AbortSignalLike
  }
): Promise<MetadataRoute.Sitemap[number] | null> {
  const client = createClient()

  const document = await client
    .getByUID(documentType, uid, {
      fetch: `${documentType}.__nonexistent-field__`,
      ...params,
    })
    .catch(() => null)

  if (!document) {
    return null
  }

  return {
    url: `${SITE_URL}${document.url}`,
    lastModified: document.last_publication_date,
    ...(document.alternate_languages.length > 0 && {
      alternates: {
        languages: await getMetadataAlternateLanguages(document),
      },
    }),
    ...sitemapFile,
  }
}

async function getSitemapFilesFromDocuments<
  TDocumentType extends
    Content.AllDocumentTypes['type'] = Content.AllDocumentTypes['type'],
>(
  documentType: TDocumentType,
  sitemapFile?: Partial<MetadataRoute.Sitemap[number]>,
  params?: Partial<Omit<BuildQueryURLArgs, 'lang'>> & {
    fetchOptions?: RequestInitLike
    signal?: AbortSignalLike
  }
): Promise<MetadataRoute.Sitemap> {
  const client = createClient()

  const documents = await client
    .getAllByType(documentType, {
      fetch: `${documentType}.meta_noindex`,
      ...params,
    })
    .then((docs) =>
      docs.filter((doc) => !(doc.data as PrismicMetadata).meta_noindex)
    )

  return await Promise.all(
    documents.map(async (doc) => ({
      url: `${SITE_URL}${doc.url}`,
      lastModified: doc.last_publication_date,
      ...(doc.alternate_languages.length > 0 && {
        alternates: {
          languages: await getMetadataAlternateLanguages(doc),
        },
      }),
      ...sitemapFile,
    }))
  )
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    await getSitemapFileFromDocument('page', REQUIRED_PAGE_UID.HOME, {
      changeFrequency: 'weekly',
      priority: 1,
    }),
    ...(await getSitemapFilesFromDocuments(
      'page',
      {
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        filters: [
          filter.not('my.page.uid', REQUIRED_PAGE_UID.HOME),
          filter.not('my.page.meta_noindex', true),
        ],
      }
    )),
  ].filter(Boolean) as MetadataRoute.Sitemap
}
