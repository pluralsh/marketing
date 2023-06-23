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
  key: 'free',
  label: 'Open-source',
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
  key: 'free',
  label: 'Open-source',
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

export type LineItem =
  | { label: string }
  | { checked: boolean }
  | { label: string; checked: boolean }

export type LineItems = {
  name: string
  definition?: string
  values: Record<PricingKey, LineItem>
}[]

const lineItems: LineItems = [
  {
    name: 'Apps',
    values: {
      free: { label: 'Unlimited' },
      pro: { label: 'Unlimited' },
      enterprise: { label: 'Unlimited' },
    },
  },
  {
    name: 'Clusters',
    values: {
      free: { label: 'Free' },
      pro: { label: '$399/cluster/month' },
      enterprise: { label: 'Custom' },
    },
  },
  {
    name: 'User accounts',
    values: {
      free: { label: 'Up to 5 users' },
      pro: { label: '$49/user/month' },
      enterprise: { label: 'Unlimited' },
    },
  },
  {
    name: 'Roles',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Groups',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Service accounts',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Discord Forum',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Community support',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Private Slack Connect',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Dedicated SRE',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Onboarding',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Emergency Hotfixes',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'SLAs',
    definition: 'Service-level agreements',
    values: {
      free: { checked: false },
      pro: { label: '24 hours' },
      enterprise: { label: '4 hours' },
    },
  },
  {
    name: 'Coverage',
    values: {
      free: { label: 'Best effort' },
      pro: { label: 'Business hours' },
      enterprise: { label: 'Extended' },
    },
  },
  {
    name: 'Authentication',
    values: {
      free: { label: 'Google OAuth + OIDC' },
      pro: { label: 'Google OAuth + OIDC' },
      enterprise: { label: 'SSO + Google OAuth + OIDC' },
    },
  },
  {
    name: 'VPN',
    definition: 'Virtual private network',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Audit logs',
    values: {
      free: { checked: false },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'SOC 2',
    definition: 'Service Organization Controls 2 compliant',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'GDPR',
    definition: 'General Data Protection Regulation compliant',
    values: {
      free: { checked: true },
      pro: { checked: true },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Compliance reports',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Training',
    values: {
      free: { checked: false },
      pro: { label: 'Available' },
      enterprise: { label: 'Available' },
    },
  },
  {
    name: 'Developer support',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Commercial license',
    values: {
      free: { checked: false },
      pro: { checked: false },
      enterprise: { checked: true },
    },
  },
  {
    name: 'Invoices',
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

export default async function getPricing() {
  return data
}
