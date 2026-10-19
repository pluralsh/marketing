import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const retail = {
  path: '/retail',
  meta: {
    title: 'Plural for Retail',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural for Retail',
      description:
        'Power applications with a platform that simplifies Kubernetes management, ensuring uptime, scalability, and secure customer experiences.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/solutions-visual-e4842f.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Retailers depend on Kubernetes to deliver seamless customer experiences, power e-commerce platforms, and manage supply chains. With complex, multi-cluster environments across on-prem, cloud, and hybrid infrastructures, ensuring uptime, scalability, and security can be a challenge—especially during high-demand periods like holiday sales or product launches. By centralizing control, automating upgrades, and ensuring robust security, Plural helps retail IT teams maintain fast, reliable services.',
    },
    {
      type: 'featureRow',
      title: 'Complete visibility across core operations',
      body: [
        {
          type: 'p',
          content: [
            'Retail operations, from online storefronts to POS systems, rely on K8s to deliver seamless performance. Plural ensures centralized visibility to monitor and optimize infrastructure.\n\nReal-time dashboards to track performance across key systems and hybrid environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Log viewing & proactive alerts to resolve issues before they affect customer experiences',
          ],
        },
        {
          type: 'p',
          content: [
            'Insights & automation to optimize resource usage during peak periods, e.g., Black Friday',
          ],
        },
      ],
      image: {
        src: '/images/content/clusters-with-violation-recommended-action-fe809e.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Seamless upgrades, no interruptions',
      body: [
        {
          type: 'p',
          content: [
            'Frequent updates are critical for secure, high-performing retail applications, but downtime can disrupt online sales and store operations. Plural ensures safe, seamless upgrades.\n\nPhased rollouts to validate upgrades in test environments before production deployment',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated workflows for consistent, error-free updates across clusters',
          ],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities to quickly restore services in case of unforeseen issues',
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
      title: 'Faster troubleshooting',
      body: [
        {
          type: 'p',
          content: [
            'Downtime or delays in retail applications can lead to lost sales and customer dissatisfaction. Plural accelerates issue resolution to minimize disruptions.\n\nAI-driven diagnostics identify root causes quickly and provide actionable fixes',
          ],
        },
        {
          type: 'p',
          content: [
            'Faster resolution with centralized visibility into logs & metrics',
          ],
        },
        {
          type: 'p',
          content: [
            'Reduced recovery times keep key platforms & systems running smoothly',
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
      title: 'Enhanced security',
      body: [
        {
          type: 'p',
          content: [
            'Protecting sensitive customer data and meeting security standards are critical in retail. Plural centralizes security management to safeguard systems and prevent breaches.\n\nEgress-only architecture to prevent customer data exposure and secure transaction details',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized SBOM management for maintaining compliance and reducing risk',
          ],
        },
        {
          type: 'p',
          content: [
            'Scalable security policy enforcement to prevent misconfigurations',
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

export default retail
