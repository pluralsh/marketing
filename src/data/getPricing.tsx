import { until } from '@open-draft/until'

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
}

const freeTier: Plan = {
  key: 'free',
  label: 'Open-source',
  price: 'Free',
  features: [
    { label: 'Free forever' },
    { label: 'Unlimited apps' },
    { label: 'Up to 5 users' },
    { label: 'OAuth integration' },
    { label: 'Community support' },
  ],
  cta: { label: 'Start deploying', url: 'https://app.plural.sh' },
}

const proTier: Plan = {
  key: 'pro',
  label: 'Pro',
  price: '$399 / cluster, + $49 / user / month',
  features: [
    { label: 'Everything in open-source plan' },
    { label: '24 hour SLA’s' },
    { label: 'Advanced user management' },
    { label: 'Audit logs' },
    { label: 'VPN' },
    { label: 'Emergency hotfixes' },
  ],
  cta: {
    label: 'Start free trial',
    url: 'https://app.plural.sh/account/billing',
  },
}

const entTier: Plan = {
  key: 'enterprise',
  label: 'Enterprise',
  price: 'Custom',
  features: [
    { label: 'Everything in Pro plan' },
    { label: '4 hour SLAs' },
    { label: 'Dedicated SRE' },
    { label: 'SSO' },
    { label: 'Commercial license' },
  ],
  cta: { label: 'Contact sales', url: '/contact-sales' },
}

export type LineItem = { label?: string; checked?: boolean }

export type LineItems = {
  label: string
  definition?: string
  values: Record<PricingKey, LineItem>
}[]

const lineItems: LineItems = [
  {
    label: 'Apps',
    values: {
      free: { label: 'Unlimited' },
      pro: { label: 'Unlimited' },
      enterprise: { label: 'Unlimited' },
    },
  },
  {
    label: 'Clusters',
    values: {
      free: { label: 'Free' },
      pro: { label: '$399/cluster/month' },
      enterprise: { label: 'Custom' },
    },
  },
  {
    label: 'User accounts',
    values: {
      free: { label: 'Up to 5 users' },
      pro: { label: '$49/user/month' },
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
      pro: { label: 'Business hours' },
      enterprise: { label: 'Extended' },
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
    label: 'VPN',
    definition: 'Virtual private network',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
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
]

const data: { plans: Plan[]; lineItems: LineItems } = {
  plans: [freeTier, proTier, entTier],
  lineItems,
}

async function getPricingInner() {
  return data
}

export type Pricing = Awaited<ReturnType<typeof getPricingInner>>

export default async function getPricing() {
  return until(() => getPricingInner())
}
