import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const financialServices = {
  path: '/financial-services',
  meta: {
    title: 'Plural for Financial Services',
    description: 'Plural for Financial Services',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural for Financial Services',
      description:
        'Achieve reliable, compliant, and efficient Kubernetes operations with Plural’s purpose-built solutions for complex financial environments.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/financial-services-f1d12f.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Financial teams are responsible for managing complex Kubernetes environments that demand strict security, compliance with evolving regulations, and exceptional uptime reliability. These demands become even more daunting with large, multi-cluster deployments spanning on-premises, multi-cloud, or hybrid setups, where maintaining consistent policies and minimizing downtime are critical. Plural addresses these challenges with a scalable platform with centralized policy management, automated troubleshooting, and an egress-only architecture to secure sensitive data.',
    },
    {
      type: 'featureRow',
      title: 'Unified visibility across every cluster',
      body: [
        {
          type: 'p',
          content: [
            'Financial IT teams must manage the complexities of K8s across multi-cloud & hybrid environments to deliver flawless performance. Plural provides centralized visibility to simplify operations.\n\nReal-time dashboards with resource monitoring and infrastructure health insights',
          ],
        },
        {
          type: 'p',
          content: [
            'Built-in log viewing to diagnose and resolve issues before they escalate',
          ],
        },
        {
          type: 'p',
          content: [
            'Proactive alerts & usage metrics to optimize performance and resource efficiency',
          ],
        },
      ],
      image: {
        src: '/images/content/fix-instance-type-from-aae9b2.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Lowered risk in deployments, upgrades, & maintenance',
      body: [
        {
          type: 'p',
          content: [
            'Frequent upgrades and updates are essential but risky in financial environments where uptime is paramount. Plural reduces risk with automated workflows and safeguards.\n\nSafe, phased rollouts to test and validate updates before deployment',
          ],
        },
        {
          type: 'p',
          content: ['Automated workflows for error-free K8s upgrades'],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities & Helm chart integrations for reliable updates',
          ],
        },
      ],
      image: {
        src: '/images/content/pull-based-architecture-fc0180.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Accelerated troubleshooting with AI insights',
      body: [
        {
          type: 'p',
          content: [
            'Any downtime in financial systems can lead to significant financial and reputational risks. Plural’s AI-powered diagnostics help teams resolve issues quickly and confidently.\n\nAI-driven root cause analysis using source code, logs, and API data',
          ],
        },
        {
          type: 'p',
          content: [
            'Rapid identification of issues with precise, actionable recommendations',
          ],
        },
        {
          type: 'p',
          content: [
            'Faster recovery times to maintain uptime for critical financial applications',
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
      title: 'Fortified security & compliance across clusters',
      body: [
        {
          type: 'p',
          content: [
            'Financial services demand robust security and compliance to protect sensitive data and address an evolving patchwork of regulations. Plural centralizes security management to reduce risk.\n\nCentralized SBOM management to simplify compliance across clusters',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated vulnerability detection & monitoring for enhanced CVE visibility',
          ],
        },
        {
          type: 'p',
          content: [
            'Egress-only architecture to safeguard sensitive financial information',
          ],
        },
        {
          type: 'p',
          content: ['Robust RBAC and SSO to ensure secure access'],
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

export default financialServices
