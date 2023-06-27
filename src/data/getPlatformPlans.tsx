import { isEmpty } from 'lodash-es'

import client from '@src/apollo-client'
import {
  type PlatformPlan,
  PlatformPlansDocument,
  type PlatformPlansQuery,
  type PlatformPlansQueryVariables,
} from '@src/generated/graphqlPlural'

export function normalizePlans(
  platformPlans: PlatformPlansQuery['platformPlans']
) {
  const proPlatformPlan =
    platformPlans?.find((plan) => {
      const { name, period } = plan || {}

      return name === 'Pro' && period === 'MONTHLY'
    }) ?? ({} as PlatformPlan)
  // const proYearlyPlatformPlan =
  //   platformPlans?.find((plan) => {
  //     const { name, period } = plan || {}

  //     return name === 'Pro' && period === 'YEARLY'
  //   }) ?? ({} as PlatformPlan)

  let clusterMonthlyPricing: number | null = null
  let userMonthlyPricing: number | null = null

  if (proPlatformPlan) {
    const clusterMPCents =
      proPlatformPlan.lineItems?.find(
        (x) => x?.dimension === 'CLUSTER' && x?.period === 'MONTHLY'
      )?.cost || null
    const userMPCents =
      proPlatformPlan.lineItems?.find(
        (x) => x?.dimension === 'USER' && x?.period === 'MONTHLY'
      )?.cost || null

    clusterMonthlyPricing =
      typeof clusterMPCents === 'number' ? clusterMPCents / 100 : null
    userMonthlyPricing =
      typeof userMPCents === 'number' ? userMPCents / 100 : null
  }

  const platformPlansContextValue = {
    platformPlans,
    // proPlatformPlan,
    // proYearlyPlatformPlan,
    clusterMonthlyPricing,
    userMonthlyPricing,
    // annualDiscount: 0.1, // Hardcoded for now
  }

  if (isEmpty(platformPlansContextValue?.platformPlans)) return null

  return platformPlansContextValue
}

export type NormalizedPlatformPlans = ReturnType<typeof normalizePlans>

let plansCache: NormalizedPlatformPlans = null

export async function getPlaformPlans(): Promise<NormalizedPlatformPlans> {
  const { data, error } = await client.query<
    PlatformPlansQuery,
    PlatformPlansQueryVariables
  >({
    query: PlatformPlansDocument,
  })

  if (error) {
    throw new Error(`${error.name}: ${error.message}`)
  }
  const plans = data?.platformPlans
    ? normalizePlans(data?.platformPlans)
    : plansCache || null

  plansCache = plans

  return plans
}
