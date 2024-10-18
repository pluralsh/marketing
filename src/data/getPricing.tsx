import { directusClient } from '@src/apollo-client'
import {
  PricingPageDocument,
  type PricingPageQuery,
  type PricingPageQueryVariables,
} from '@src/generated/graphqlDirectus'

export default async function getPricing() {
  const { data, error } = await directusClient.query<
    PricingPageQuery,
    PricingPageQueryVariables
  >({ query: PricingPageDocument })

  return { data, error }
}
