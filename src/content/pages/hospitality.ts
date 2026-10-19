import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const hospitality = {
  path: '/hospitality',
  meta: {
    title: 'Enterprise Kubernetes management, accelerated.',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural for Hospitality',
      description:
        'Deliver exceptional guest experiences with a platform that simplifies Kubernetes operations, ensuring reliable, scalable, and secure systems across all your services.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/terraform-stack-list-29d30a.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Hospitality providers rely on their technology to support seamless 24/7 guest experiences, from booking systems and property management tools to point-of-sale solutions and loyalty platforms. Managing Kubernetes environments across multi-cloud, on-premises, and hybrid infrastructure can be complex—especially when uptime, security, and scalability are non-negotiable for guest satisfaction. With centralized control, automated upgrades, and AI-powered troubleshooting, Plural helps hospitality providers ensure reliable, secure systems that scale effortlessly during peak travel seasons or large events.',
    },
    {
      type: 'featureRow',
      title: 'Centralized visibility',
      body: [
        {
          type: 'p',
          content: [
            'Reliability is key to delivering exceptional guest experiences. Plural’s Operations Console provides centralized visibility to monitor and optimize K8s infrastructure effectively.\n\nReal-time dashboards to monitor performance across key systems',
          ],
        },
        {
          type: 'p',
          content: [
            'Built-in log viewing & proactive alerts to identify and resolve issues before they escalate',
          ],
        },
        {
          type: 'p',
          content: [
            'Insights & automation to optimize resources during demand spikes, e.g., peak travel seasons',
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
        src: '/images/content/solutions-accelerate-visual-69c6f9.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Reliable upgrades',
      body: [
        {
          type: 'p',
          content: [
            'Upgrading hospitality systems is essential to ensure security and performance, but downtime can frustrate guests. Plural automates upgrades to keep services running smoothly.\n\nPhased rollouts to safely test updates before deploying to production systems',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated workflows for consistent, reliable upgrades without downtime',
          ],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities to quickly recover if unexpected issues arise',
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
        src: '/images/content/api-deprecations-113b01.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Accelerated troubleshooting',
      body: [
        {
          type: 'p',
          content: [
            'Downtime in key hospitality systems can disrupt guest experiences and revenue. Plural accelerates troubleshooting to keep operations running smoothly.\n\nAI-powered diagnostics to pinpoint root causes quickly and suggest actionable fixes',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized visibility into logs and system performance to resolve issues faster',
          ],
        },
        {
          type: 'p',
          content: [
            'Faster recovery times to minimize disruptions to critical guest-facing applications',
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
      title: 'Safeguard guest & employee data',
      body: [
        {
          type: 'p',
          content: [
            'Protecting sensitive guest information, like payment data and personal details, is vital for trust and compliance. Plural centralizes security management to reduce risk and ensure data protection.\n\nEgress-only architecture that safeguards guest data from unauthorized access',
          ],
        },
        {
          type: 'p',
          content: [
            'Robust RBAC to ensure only authorized staff can access critical systems',
          ],
        },
        {
          type: 'p',
          content: [
            'Consistent enforcement of security policies to meet PCI DSS and data privacy standards',
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

export default hospitality
