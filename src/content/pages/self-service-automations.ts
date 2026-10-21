import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const selfServiceAutomations = {
  path: '/products/self-service-automations',
  meta: {
    title: 'Self-Service Kubernetes Automation',
    description:
      'Enable developer velocity with repeatable golden paths for infrastructure and application provisioning. Plural’s self-service automation helps platform teams cut support burden, scale reliably, and deliver consistent Kubernetes operations across every environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Self-service for Developers, Without the Bottlenecks',
      description:
        'Empower engineers with repeatable, auditable workflows while platform teams focus on higher-value enablement instead of ad-hoc requests.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/product-ai-powered-visual-4d512b.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'Your Challenge',
      title: 'From Tickets to Autonomy',
      description:
        'Building true self-service isn’t just about exposing APIs — it’s about creating workflows that are repeatable, governed, and resilient at scale. Without that foundation, platform teams drown in one-off requests while developers lose trust in the paths provided.',
      items: [
        {
          title: 'Golden Paths, Not One-Offs',
          body: [
            {
              type: 'p',
              content: [
                'Without standardized golden paths, every team provisions differently, leading to drift, wasted cycles, and fragile environments.',
              ],
            },
          ],
        },
        {
          title: 'Platform Teams Overloaded',
          body: [
            {
              type: 'p',
              content: [
                'Endless support and provisioning requests bury platform teams, slowing their ability to focus on scale and innovation.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'featureRow',
      eyebrow: 'Our Solution',
      title: 'GitOps-Driven Self-Service',
      body: [
        {
          type: 'p',
          content: [
            'Enable developers to move fast without breaking consistency. Every workflow runs through GitOps, so changes are auditable, compliant, and reusable across teams.',
          ],
        },
        {
          type: 'p',
          content: [
            'Integrates with Plural’s GitOps engine to enable self-service via pull request',
          ],
        },
        {
          type: 'p',
          content: [
            'Developers can provision infrastructure on their own while platform teams maintain governance and reliability',
          ],
        },
      ],
      image: {
        src: '/images/content/ai-instant-visual-1aa456.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Service Catalogs Built for Scale',
      body: [
        {
          type: 'p',
          content: [
            'Stop reinventing provisioning patterns in every team. Define golden paths once—whether pre-built or custom—and reuse them across your organization for speed and standardization.',
          ],
        },
        {
          type: 'p',
          content: [
            'Use the default service catalog to get started quickly with data infrastructure, app deployment, and more',
          ],
        },
        {
          type: 'p',
          content: [
            'Create your own service catalog to codify internal best practices and ensure consistent, compliant rollouts',
          ],
        },
      ],
      image: {
        src: '/images/content/seamless-integrations-aeae88.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Free Platform Engineers from Tedious Support',
      body: [
        {
          type: 'p',
          content: [
            'Give engineers intelligent guardrails that reduce friction and support tickets. With AI assistance, self-service becomes faster, safer, and easier to adopt at scale.',
          ],
        },
        {
          type: 'p',
          content: [
            'Integration with Plural AI to generate Terraform, troubleshoot errors, and recommend the right services',
          ],
        },
      ],
      image: {
        src: '/images/content/ai-intelligent-visual-ade0a2.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
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
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default selfServiceAutomations
