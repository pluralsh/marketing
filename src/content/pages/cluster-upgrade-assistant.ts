import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const clusterUpgradeAssistant = {
  path: '/resources/demos/cluster-upgrade-assistant',
  meta: {
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural Upgrade Assistant',
      description:
        "Explore a demo of Plural's upgrade assistant, including key features such as API Deprecation Detection, Add-On Compatibility Checking, Automated Add-On Upgrades (via PRs and Plural global services), and Automated Terraform Upgrade PR Generation.",
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      video: {
        youtubeId: 'fJmTrELoAKU',
        title: 'Plural Upgrade Assistant',
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

export default clusterUpgradeAssistant
