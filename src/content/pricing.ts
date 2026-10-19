import { URLS } from './site'

export type Plan = {
  name: string
  badge?: string
  price: string
  priceNote?: string
  summary: string
  features: string[]
  cta: { label: string; href: string; shortcut: string }
  highlighted?: boolean
  /** Shows the cluster estimator (Pro only). */
  estimator?: boolean
}

export const PRO_BASE_PRICE = 450
export const PRO_CLUSTER_PRICE = 250
export const PRO_MAX_CLUSTERS = 10

export const plans: Plan[] = [
  {
    name: 'Sandbox',
    price: 'Free',
    priceNote: 'for 14 days',
    summary: 'Test drive the platform with all essential components.',
    features: ['All essential platform components', 'Upgrade at any time'],
    cta: { label: 'Start free', href: URLS.contact, shortcut: 'S' },
  },
  {
    name: 'Pro',
    badge: '30-day free trial',
    price: `$${PRO_BASE_PRICE}`,
    priceNote: '/mo for 1 cluster',
    summary: `+$${PRO_CLUSTER_PRICE}/mo per additional cluster. Self-serve, for agile teams.`,
    features: [
      `Up to ${PRO_MAX_CLUSTERS} clusters`,
      'Hosted on Plural cloud',
      'Pay monthly, no commitment',
    ],
    cta: { label: 'Get started', href: URLS.app, shortcut: 'P' },
    highlighted: true,
    estimator: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    summary:
      'Based on clusters and support needs. For teams with strict deployment requirements.',
    features: [
      'Everything in Pro',
      'Unlimited clusters',
      'Shared, dedicated, or on-prem hosting',
      '1-hour guaranteed response',
    ],
    cta: { label: 'Contact sales', href: URLS.contact, shortcut: 'C' },
  },
]

export const includedFeatures = [
  'Multi-cluster deployment',
  'CD pipelines',
  'IaC management',
  'PR automations',
  'Git integrations',
  'Policy management',
  '99.9% uptime SLA',
  'SOC 2 compliant',
  'GDPR compliant',
]

export const planComparison = {
  columns: [{ label: 'Pro' }, { label: 'Enterprise', emphasized: true }],
  rows: [
    { label: 'Clusters', values: ['Up to 10', 'Unlimited'] },
    {
      label: 'Hosting',
      values: ['Plural shared infrastructure', 'Shared, dedicated, or on-prem'],
    },
    {
      label: 'Support response',
      values: ['1 business day', '1 hour, guaranteed'],
    },
    {
      label: 'Support channel',
      values: ['Email', 'Dedicated Slack or Teams, on-demand calls'],
    },
    { label: 'Success team', values: ['—', 'Dedicated'] },
    { label: 'Training', values: ['—', 'Customized'] },
  ],
}

export const pricingFaq = [
  {
    question: 'How is pricing calculated?',
    answer: `By the number of clusters Plural deploys and manages. Pro starts at $${PRO_BASE_PRICE}/mo for one cluster, plus $${PRO_CLUSTER_PRICE}/mo for each additional cluster, up to ${PRO_MAX_CLUSTERS}.`,
  },
  {
    question: 'What’s the difference between Pro and Enterprise?',
    answer:
      'Same platform. Enterprise adds unlimited clusters, dedicated or on-prem hosting, a 1-hour guaranteed response, a dedicated success team, and customized training.',
  },
  {
    question: 'Can I try Plural first?',
    answer:
      'Yes. Sandbox is free for 14 days. Pro comes with a 30-day free trial.',
  },
  {
    question: 'Do I have to sign a contract?',
    answer:
      'Not for Pro. You pay monthly with no commitment and can upgrade at any time. Enterprise pricing is set with our sales team.',
  },
]
