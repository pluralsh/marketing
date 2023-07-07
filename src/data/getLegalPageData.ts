import { directusClient as client } from '@src/apollo-client'
import {
  LegalPageSlugsDocument,
  type LegalPageSlugsQuery,
  type LegalPageSlugsQueryVariables,
  type MarkdownPageFragment,
  PageLegalDocument,
  type PageLegalQuery,
  type PageLegalQueryVariables,
} from '@src/generated/graphqlDirectus'

let cache: PageLegalQuery['page_legal'] | null = null
let slugsCache: string[] = []

export type LegalPage = Awaited<ReturnType<typeof getLegalPageData>>['data']

export type MarkdownPage = (MarkdownPageFragment | null)[] | null | undefined

export async function getLegalPageData() {
  const { data, error } = await client.query<
    PageLegalQuery,
    PageLegalQueryVariables
  >({
    query: PageLegalDocument,
  })

  if (data?.page_legal) {
    cache = data?.page_legal
  }

  return { data: data?.page_legal || cache, error }
}

function normalizeSlugs(pages?: ({ slug?: string | null } | null)[] | null) {
  return (
    pages
      ?.filter((p): p is { slug: string } => typeof p?.slug === 'string')
      ?.map((p) => p.slug) || []
  )
}

export async function getLegalPageSlugs() {
  const { data, error } = await client.query<
    LegalPageSlugsQuery,
    LegalPageSlugsQueryVariables
  >({
    query: LegalPageSlugsDocument,
  })

  let slugs = slugsCache

  if (data?.page_legal?.pages) {
    slugs = normalizeSlugs(data.page_legal.pages)
    slugsCache = slugs
  }

  return { data: slugs || cache, error }
}
