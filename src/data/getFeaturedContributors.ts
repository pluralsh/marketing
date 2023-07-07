import { directusClient as client } from '@src/apollo-client'
import {
  FeaturedContributorsDocument,
  type FeaturedContributorsQuery,
  type FeaturedContributorsQueryVariables,
} from '@src/generated/graphqlDirectus'

let cache: FeaturedContributorsQuery['featured_contributors'] | null = null

export async function getFeaturedContributors() {
  const { data, error } = await client.query<
    FeaturedContributorsQuery,
    FeaturedContributorsQueryVariables
  >({
    query: FeaturedContributorsDocument,
  })

  if (data?.featured_contributors) {
    cache = data?.featured_contributors
  }

  return { data: data?.featured_contributors || cache, error }
}
