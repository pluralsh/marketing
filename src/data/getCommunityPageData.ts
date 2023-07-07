import { directusClient as client } from '@src/apollo-client'
import {
  type CalloutFragment,
  PageCommunityDocument,
  type PageCommunityQuery,
  type PageCommunityQueryVariables,
} from '@src/generated/graphqlDirectus'

let cache: PageCommunityQuery['page_community'] | null = null

export type CommunityPage = Awaited<
  ReturnType<typeof getCommunityPageData>
>['data']

export type Callouts = (CalloutFragment | null)[] | null | undefined

export async function getCommunityPageData() {
  const { data, error } = await client.query<
    PageCommunityQuery,
    PageCommunityQueryVariables
  >({
    query: PageCommunityDocument,
  })

  if (data?.page_community) {
    cache = data?.page_community
  }

  return { data: data?.page_community || cache, error }
}
