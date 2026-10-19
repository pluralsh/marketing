import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const multiCloudK8SManagement = {
  path: '/multi-cloud-k8s-management',
  meta: {
    title: 'Multi-cloud Kubernetes Management',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Streamline multi-cloud Kubernetes management',
      description:
        'Manage all your cloud environments from a single unified interface',
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
      type: 'statement',
      eyebrow: 'Why You Care',
      body: 'Organizations increasingly rely on multiple cloud providers to optimize costs, improve resilience, and meet operational needs. However, the unique interfaces and operational quirks of each cloud provider can create complexity, making K8s management across clouds time-consuming and error-prone. Plural simplifies multi-cloud K8s management by providing a single interface that works seamlessly across all major cloud providers.',
    },
    {
      type: 'featureRow',
      title: 'One interface for your entire Kubernetes estate',
      body: [
        {
          type: 'p',
          content: [
            'Juggling the unique UIs of different cloud providers is a challenge. Plural consolidates them into a single pane of glass, giving you full visibility and control.\n\nSimplified provisioning across Amazon, Azure, Google, and more in one interface',
          ],
        },
        {
          type: 'p',
          content: [
            'Unified monitoring of all clusters (health, status, and resource usage) in one dashboard',
          ],
        },
        {
          type: 'p',
          content: [
            'Consolidated tools eliminate the need to switch between multiple cloud provider UIs',
          ],
        },
      ],
      links: [
        {
          label: 'Learn more',
          href: '/contact',
        },
      ],
      image: {
        src: '/images/content/cluster-overview-f41ab8.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Simplified maintenance and upgrades',
      body: [
        {
          type: 'p',
          content: [
            'Keeping K8s clusters up-to-date across multiple cloud providers can be tedious and risky. Plural makes it easy to perform maintenance and upgrades directly from a single interface.\n\nAutomated workflows for safe, consistent K8s upgrades across clouds',
          ],
        },
        {
          type: 'p',
          content: [
            'Compatibility checks for YAML configurations and third-party add-ons',
          ],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities to quickly recover from unexpected issues during upgrades',
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
        src: '/images/content/check-add-on-compatibilities-726a05.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Manage heterogeneous environments with confidence',
      body: [
        {
          type: 'p',
          content: [
            'Each cloud provider has its own operational challenges, but Plural standardizes processes to simplify management and reduce errors.\n\nGitOps-driven workflows ensure consistency across clouds',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized policy enforcement to maintain compliance across environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Real-time telemetry and AI-driven insights to proactively address issues',
          ],
        },
      ],
      links: [
        {
          label: 'Platform Foundations',
          href: '/products/platform-foundations',
        },
      ],
      image: {
        src: '/images/content/enhanced-security-5d7f94.svg',
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

export default multiCloudK8SManagement
