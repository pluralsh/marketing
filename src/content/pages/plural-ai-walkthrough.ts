import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const pluralAiWalkthrough = {
  path: '/resources/demos/plural-ai-walkthrough',
  meta: {
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural AI Walkthrough',
      description:
        'Take a deep dive into Plural with this 15-minute walkthrough. Explore how its features simplify Kubernetes management, from automated upgrades to compliance enforcement, and see Plural in action managing multi-cluster environments with ease.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      video: {
        youtubeId: 'ef9AuG78W_A',
        title: 'Plural AI Walkthrough',
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

export default pluralAiWalkthrough
