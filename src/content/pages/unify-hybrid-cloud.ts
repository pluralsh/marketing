import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const unifyHybridCloud = {
  path: '/unify-hybrid-cloud',
  meta: {
    title: 'Unify Hybrid Cloud',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Unify Hybrid Cloud',
      description:
        'Streamline Kubernetes management across on-prem, multi-cloud, and hybrid environments',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/financial-services-f1d12f.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Modern organizations rely on hybrid cloud strategies to optimize performance, cost, and scalability. Managing K8s across on-prem, multi-cloud, and hybrid environments, however, introduces significant complexity. Each infrastructure operates with unique configurations, tools, and operational quirks, creating a fragmented and time-consuming management experience. Plural unifies hybrid cloud K8s management by providing a single platform to oversee, maintain, and optimize your entire estate.',
    },
    {
      type: 'featureRow',
      title: 'Simplify hybrid cloud management with a unified platform',
      body: [
        {
          type: 'p',
          content: [
            'Managing K8s across diverse environments can overwhelm even experienced teams. Plural consolidates tools and processes into one intuitive interface for effortless management.\n\nUnified dashboards provide visibility into all clusters, regardless of infrastructure type',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized workflows streamline tasks like provisioning, monitoring, and troubleshooting',
          ],
        },
        {
          type: 'p',
          content: [
            'Integrated automation reduces manual effort, making hybrid operations seamless',
          ],
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
      title: 'Ensure consistency across environments',
      body: [
        {
          type: 'p',
          content: [
            'Hybrid clouds often suffer from configuration drift and inconsistent practices. Plural enforces standardization across all environments, ensuring reliable performance.\n\nGitOps-driven workflows synchronize configurations across on-prem, multi-cloud, and hybrid environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Prebuilt templates dynamically adjust to meet environment-specific needs',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized SBOM management provides visibility into software integrity',
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
        src: '/images/content/terraform-stack-4a6394.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Enable seamless upgrades across hybrid infrastructures',
      body: [
        {
          type: 'p',
          content: [
            'Upgrading K8s clusters in hybrid environments is often complex and risky. Plural simplifies this process with automation and centralized control.\n\nAutomated upgrade workflows ensure safe and consistent rollouts across environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Compatibility checks prevent disruptions by validating configurations and dependencies',
          ],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities allow quick recovery from unexpected issues',
          ],
        },
      ],
      image: {
        src: '/images/content/api-deprecations-113b01.svg',
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
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default unifyHybridCloud
