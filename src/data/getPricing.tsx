import { until } from '@open-draft/until'
import { produce } from 'immer'

import {
  type NormalizedPlatformPlans,
  getPlaformPlans,
} from './getPlatformPlans'

const keys = ['free', 'pro', 'enterprise'] as const

export type PricingKey = (typeof keys)[number]

export type Plan = {
  key: PricingKey
  label: string
  price: string
  features: {
    label: string
  }[]
  cta: {
    label: string
    url: string
  }
  violator?: { label: string }
  isFeatured?: boolean
}

const freePlanBase: Plan = {
  key: 'free',
  label: 'Open-source',
  price: 'Free',
  features: [
    { label: 'Free forever' },
    { label: 'Unlimited open-source apps' },
    { label: 'Up to 2 users' },
    { label: '1 cluster' },
    { label: 'OAuth integration' },
    { label: 'Community support' },
  ],
  cta: { label: 'Start deploying', url: 'https://app.plural.sh' },
}

const proPlanBase: Plan = {
  key: 'pro',
  label: 'Pro',
  price:
    '$399 / cluster, + $8 / user / month, + $200 / pack of 5 services / month',
  features: [
    { label: 'Everything in Open-source plan' },
    { label: '24 hour SLA’s' },
    { label: 'Continuous Deployment features' },
    { label: 'Multi-cluster management' },
    { label: 'Dev → Prod promotion flows' },
    { label: 'Advanced user management' },
    { label: 'Audit logs' },
    { label: 'VPN' },
    { label: 'Emergency hotfixes' },
  ],
  cta: {
    label: 'Start free trial',
    url: 'https://app.plural.sh/account/billing',
  },
  violator: {
    label: 'Most popular',
  },
  isFeatured: true,
}

const enterprisePlanBase: Plan = {
  key: 'enterprise',
  label: 'Enterprise',
  price: 'Custom',
  features: [
    { label: 'Everything in Pro plan' },
    { label: '4 hour SLAs' },
    { label: 'Dedicated SRE' },
    { label: 'SAML integration' },
    { label: 'Commercial license' },
    { label: 'Cost optimization' },
  ],
  cta: { label: 'Contact sales', url: '/contact-sales' },
}

export type PlanFeatureValue = { label?: string; checked?: boolean }

export type PlansFeatures = {
  key?: string
  label: string
  definition?: string
  values: Record<PricingKey, PlanFeatureValue>
}[]

const plansFeatures: PlansFeatures = [
  {
    label: 'Open-Source Apps',
    values: {
      free: { label: 'Unlimited' },
      pro: { label: 'Unlimited' },
      enterprise: { label: 'Unlimited' },
    },
  },
  {
    key: 'clusters',
    label: 'Clusters',
    values: {
      free: { label: '1 cluster free' },
      pro: { label: '$399/cluster/month' },
      enterprise: { label: 'Unlimited' },
    },
  },
  {
    key: 'users',
    label: 'User accounts',
    values: {
      free: { label: 'Up to 2 users' },
      pro: { label: '$8/user/month' },
      enterprise: { label: 'Unlimited' },
    },
  },
  {
    key: 'services',
    label: 'Services',
    values: {
      free: { checked: false },
      pro: { label: '$200/pack of 5 services/month' },
      enterprise: { label: 'Unlimited' },
    },
  },
  {
    label: 'Roles',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Groups',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Multi-cluster management',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Dev → Prod promotion flows',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'VPN',
    definition: 'Virtual private network',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Backup/Restore',
    definition: 'Point-in-time backup and restore for application databases',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Service accounts',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Discord Forum',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Community support',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Private Slack Connect',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Dedicated SRE',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Onboarding',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Emergency Hotfixes',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'SLAs',
    definition: 'Service-level agreements',
    values: {
      free: { checked: false },
      pro: { label: '24 hours' },
      enterprise: { label: '4 hours' },
    },
  },
  {
    label: 'Coverage',
    values: {
      free: { label: 'Best effort' },
      pro: { label: '9-5 Business hours' },
      enterprise: { label: 'Custom' },
    },
  },
  {
    label: 'Authentication',
    values: {
      free: { label: 'Google OAuth + OIDC' },
      pro: { label: 'Google OAuth + OIDC' },
      enterprise: { label: 'SSO + Google OAuth + OIDC' },
    },
  },
  {
    label: 'Audit logs',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'SOC 2',
    definition: 'Service Organization Controls 2 compliant',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'GDPR',
    definition: 'General Data Protection Regulation compliant',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Compliance reports',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Training',
    values: {
      free: { checked: false },
      pro: { label: 'Available' },
      enterprise: { label: 'Available' },
    },
  },
  {
    label: 'Developer support',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Commercial license',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Invoices',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    label: 'Cost optimization',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
]

async function getPricingInner(
  platformPlans: NormalizedPlatformPlans
): Promise<{
  plans: Plan[]
  plansFeatures: PlansFeatures
}> {
  const { userMonthlyPricing, clusterMonthlyPricing } = platformPlans ?? {}
  const features = produce(plansFeatures, (draft) => {
    const users = draft.find((feature) => feature.key === 'users')
    const clusters = draft.find((feature) => feature.key === 'clusters')

    if (users && typeof userMonthlyPricing === 'number') {
      users.values.pro.label = `$${
        Math.round(userMonthlyPricing * 100) / 100
      }/user/month`
    }
    if (clusters && typeof clusterMonthlyPricing === 'number') {
      clusters.values.pro.label = `$${
        Math.round(clusterMonthlyPricing * 100) / 100
      }/cluster/month`
    }

    return draft
  })
  const proPlan: Plan = {
    ...proPlanBase,
    // TODO: Add this back once APIs are in place
    // ...(clusterMonthlyPricing && userMonthlyPricing
    //   ? {
    //       price: `$${
    //         Math.round(clusterMonthlyPricing * 100) / 100
    //       } / cluster, + $${
    //         Math.round(userMonthlyPricing * 100) / 100
    //       } / user / month`,
    //     }
    //   : {}),
  }

  return {
    plans: [freePlanBase, proPlan, enterprisePlanBase],
    plansFeatures: features,
  }
}

export type Pricing = Awaited<ReturnType<typeof getPricingInner>>

export default async function getPricing() {
  const { data: platformPlans, error } = await until(() => getPlaformPlans())

  return { error, data: await getPricingInner(platformPlans) }
}
