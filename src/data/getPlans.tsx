import { isEmpty } from 'lodash-es'

import { type PlatformPlan } from '@src/generated/graphqlPlural'

export function normalizePlans({
  platformPlans,
}: {
  platformPlans: PlatformPlan[]
}) {
  const proPlatformPlan =
    platformPlans?.find(
      ({ name, period }) => name === 'Pro' && period === 'MONTHLY'
    ) ?? ({} as PlatformPlan)
  const proYearlyPlatformPlan =
    platformPlans?.find(
      ({ name, period }) => name === 'Pro' && period === 'YEARLY'
    ) ?? ({} as PlatformPlan)

  let clusterMonthlyPricing = 0
  let userMonthlyPricing = 0

  if (proPlatformPlan) {
    const clusterMPCents =
      proPlatformPlan.lineItems?.find(
        (x) => x?.dimension === 'CLUSTER' && x?.period === 'MONTHLY'
      )?.cost || 0
    const userMPCents =
      proPlatformPlan.lineItems?.find(
        (x) => x?.dimension === 'USER' && x?.period === 'MONTHLY'
      )?.cost || 0

    clusterMonthlyPricing = clusterMPCents / 100
    userMonthlyPricing = userMPCents / 100
  }

  const platformPlansContextValue = {
    platformPlans,
    proPlatformPlan,
    proYearlyPlatformPlan,
    clusterMonthlyPricing,
    userMonthlyPricing,
    annualDiscount: 0.1, // Hardcoded for now
  }

  if (isEmpty(platformPlansContextValue?.platformPlans)) return null

  return platformPlansContextValue
}
