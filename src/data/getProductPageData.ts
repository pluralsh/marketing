import { directusClient as client } from '@src/apollo-client'
import {
  type CalloutFragment,
  PageProductDocument,
  type PageProductQuery,
  type PageProductQueryVariables,
} from '@src/generated/graphqlDirectus'

let cache: PageProductQuery['page_product'] | null = null

export type ProductPage = Awaited<ReturnType<typeof getProductPageData>>['data']

export type Callouts = (CalloutFragment | null)[] | null | undefined

export async function getProductPageData() {
  const { data, error } = await client.query<
    PageProductQuery,
    PageProductQueryVariables
  >({
    query: PageProductDocument,
  })

  if (data?.page_product) {
    cache = data?.page_product
  }

  return { data: data?.page_product || cache, error }
}
