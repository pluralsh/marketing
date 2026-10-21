import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const flows = {
  path: '/resources/demos/flows',
  meta: {
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural Flows Walkthrough',
      description:
        'Explore Flows, a holistic application developer experience, integrating GitOps, log aggregation, timeseries metrics, and the full Plural AI suite for automated troubleshooting and remediation.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      video: {
        youtubeId: '1OX8OXEilyg',
        title: 'Plural Flows',
      },
    },
    {
      type: 'cta',
      title: 'Enterprise Kubernetes\nmanagement, accelerated.',
      cta: {
        label: 'Book now',
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default flows
