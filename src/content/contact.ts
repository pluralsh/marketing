import type { HubSpotFormProps } from '@/components/interactive/hubspot/HubSpotForm'

import { testimonials, URLS } from './site'

export const demoForm: HubSpotFormProps = {
  region: 'na1',
  portalId: '22363579',
  formId: '234b5476-6ee0-4a32-a677-aa1f0d318e9c',
}

export const demoAgenda = [
  'Map your clusters, stack, and goals',
  'Watch agents run the use cases you pick',
  'Leave with a plan sized to your estate',
]

export const demoQuotes = [
  {
    ...testimonials.upgrades,
    quote: 'We reduced our k8s upgrade cycles from 3 months to 1 day.',
  },
  testimonials.capitalOne,
]

export const otherWays = [
  { label: 'Pricing', title: 'Compare plans →', href: '/pricing' },
  {
    label: 'Already a customer?',
    title: 'Get help in the docs →',
    href: URLS.docs,
  },
  { label: 'Community', title: 'Join us on Discord →', href: URLS.discord },
]
