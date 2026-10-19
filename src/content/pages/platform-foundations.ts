import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const platformFoundations = {
  path: '/products/platform-foundations',
  meta: {
    title: 'Platform Foundations',
    description: 'Learn more about the platform as a whole.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Platform Foundations',
      description:
        'Plural offers unmatched flexibility and adaptability, allowing organizations to deploy Kubernetes solutions seamlessly across any infrastructure setup. Whether you prefer a SaaS model or a self-hosted environment, Plural’s architecture empowers you to maintain full control over your deployments while optimizing for your specific cloud needs.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/platform-foundations-225e29.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureRow',
      title: 'Pull-based Architecture',
      body: [
        {
          type: 'p',
          content: [
            'Plural’s pull-based architecture enhances security and reliability by allowing clusters to retrieve and apply configurations autonomously, reducing risks associated with direct access.',
          ],
        },
      ],
      image: {
        src: '/images/content/pull-based-architecture-fc0180.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Multi-cloud and Hybrid Compatibility',
      body: [
        {
          type: 'p',
          content: [
            'Plural enables deployment across single, multi-cloud, and hybrid environments, making it easy to integrate with any existing infrastructure strategy.',
          ],
        },
      ],
      image: {
        src: '/images/content/enhanced-security-5d7f94.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Flexible Deployment Options',
      body: [
        {
          type: 'p',
          content: [
            'Plural supports both SaaS and self-hosted configurations, giving you the freedom to select the model that best aligns with your operational requirements and data control needs.',
          ],
        },
      ],
      image: {
        src: '/images/content/platform-foundations-225e29.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'stats',
      eyebrow: 'Our Impact',
      items: [
        {
          value: '88%',
          label: 'Reduction in operational costs',
        },
        {
          value: '95%',
          label: 'Reduction in day-2 operations',
        },
        {
          value: '50%',
          label: 'Increased bandwidth for your engineers',
        },
        {
          value: '50%',
          label: 'ROI over 3 years',
        },
      ],
    },
    {
      type: 'testimonials',
      eyebrow: 'Client Voices',
      items: [
        {
          quote:
            'Plural has significantly enhanced our overall efficiency. It has reduced the time and effort required for cluster management, allowing our developers to focus more on innovation.',
          name: 'Head of Platform Service',
          title: 'Mott MacDonald',
        },
        {
          quote:
            'By adopting Plural for our Kubernetes management solution, we reduced our k8s upgrade cycles from 3 months to 1 day, enabling us to delegate responsibilities more effectively from principal engineers to a single mid-level engineer.',
          name: 'Director of DevOps',
          title: 'Leading Global Cyber Security Provider',
        },
        {
          quote:
            'The widespread adoption of Kubernetes has transformed how enterprises deploy and scale containerized applications. This presents new operational considerations. Plural has its eye on automation, security and addressing controls with large scale enterprises in mind.',
          name: 'Sean Leach',
          title: 'Capital One Ventures',
        },
      ],
    },
    {
      type: 'posts',
      eyebrow: 'Learn More',
      title:
        'Deep dives, best practices, and real-world strategies for Kubernetes at scale',
      items: [
        {
          title:
            'Running Kubernetes at the Edge with Plural: A Practical Guide',
          href: 'https://www.plural.sh/blog/running-kubernetes-at-the-edge-with-plural-a-practical-guide-2/',
        },
        {
          title: 'Product Update | April Edition',
          href: 'https://www.plural.sh/blog/product-updates-2/',
        },
        {
          title: "Introducing Flows: Your Team's Microservice Command Center",
          href: 'https://www.plural.sh/blog/introducing-flows-your-teams-microservice-command-center/',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Enterprise Kubernetes\nmanagement, accelerated.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default platformFoundations
