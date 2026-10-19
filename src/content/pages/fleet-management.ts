import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const fleetManagement = {
  path: '/fleet-management',
  meta: {
    title: 'Kubernetes Fleet Management',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Kubernetes Fleet Management',
      description:
        'Centralized control for simplified and scalable Kubernetes operations',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/cluster-overview-f41ab8.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      eyebrow: 'Why You Care',
      body: 'Kubernetes is powerful but complex. Managing clusters at scale, ensuring security, and maintaining consistency across environments can overwhelm even experienced teams. Fragmented tools and manual processes add to the burden, making efficient K8s management a significant challenge. Plural centralizes K8s management, streamlining operations across on-premises, multi-cloud, and hybrid environments.',
    },
    {
      type: 'featureRow',
      title: 'Streamline operations with a single management platform',
      body: [
        {
          type: 'p',
          content: [
            'Fragmented tools and workflows make Kubernetes management unnecessarily complex. Plural consolidates everything into one intuitive platform for greater efficiency.\n\nUnified dashboards provide visibility into all clusters and their status across environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized workflows simplify provisioning, scaling, and troubleshooting',
          ],
        },
        {
          type: 'p',
          content: [
            'Pull request-driven automation standardizes operations and reduces manual effort',
          ],
        },
      ],
      links: [
        {
          label: 'Operations Console',
          href: '/products/operations-console',
        },
      ],
      image: {
        src: '/images/content/solutions-accelerate-visual-69c6f9.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Maintain consistency across environments',
      body: [
        {
          type: 'p',
          content: [
            'Consistency is critical for managing Kubernetes clusters effectively. Plural enforces standards across on-prem, cloud, and hybrid deployments.\n\nGitOps-driven workflows ensure uniform configurations across all environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Universal policy enforcement prevents misconfigurations and ensures compliance',
          ],
        },
        {
          type: 'p',
          content: [
            'Environment-specific templates adapt deployments to specific infrastructure needs',
          ],
        },
      ],
      links: [
        {
          label: 'IaC Management',
          href: '/products/iac-management',
        },
      ],
      image: {
        src: '/images/content/solutions-enable-visual-19bfb4.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Gain real-time insights for smarter management',
      body: [
        {
          type: 'p',
          content: [
            'Managing Kubernetes without clear visibility leads to inefficiencies and missed opportunities for optimization. Plural provides actionable insights that keep your clusters performing at their best.\n\nAI-powered telemetry monitors cluster health and identifies potential issues proactively',
          ],
        },
        {
          type: 'p',
          content: [
            'Performance dashboards deliver real-time metrics for resource usage and workload performance',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated alerts notify teams of critical events, enabling faster response times',
          ],
        },
      ],
      image: {
        src: '/images/content/solutions-unify-visual-3845f6.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Simplify upgrades and maintenance',
      body: [
        {
          type: 'p',
          content: [
            'Frequent updates and maintenance cycles can disrupt operations if not managed carefully. Plural makes these processes safe, efficient, and stress-free.\n\nAutomated upgrade workflows streamline cluster updates and reduce downtime',
          ],
        },
        {
          type: 'p',
          content: [
            'Compatibility checks validate configurations to ensure smooth rollouts',
          ],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities allow quick recovery from unexpected issues',
          ],
        },
      ],
      links: [
        {
          label: 'Upgrade Management',
          href: '/products/upgrade-management',
        },
      ],
      image: {
        src: '/images/content/check-add-on-mutual-incompatibilities-b963c0.svg',
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
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default fleetManagement
