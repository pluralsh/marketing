import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const insurance = {
  path: '/insurance',
  meta: {
    certificates: true,
    title: 'Plural for Insurance',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural for Insurance',
      description:
        'Streamline multi-cluster Kubernetes operations with a platform built to support insurance workloads, ensure compliance, and maintain high availability.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/insurance-8911f1.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Insurers rely on Kubernetes to support mission-critical functionality like claims processing, risk modeling, and customer portals. Managing complex, multi-cluster deployments across on-premises, cloud, and hybrid environments comes with significant challenges, from regulatory compliance to data security and operational uptime. Through centralized policy enforcement, automated upgrades, secure egress-only architecture, and advanced troubleshooting capabilities, Plural’s reduces operational complexity and risk.',
    },
    {
      type: 'featureRow',
      title: 'Reduced management complexity',
      body: [
        {
          type: 'p',
          content: [
            'Managing K8s clusters that power critical applications across a hybrid infrastructure is no easy task. Plural simplifies operations with a centralized platform to ensure consistency and efficiency.\n\nCentralized dashboards to monitor & enforce compliance across multi-cluster environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Unified controls for streamlined management of critical workflows and deployments',
          ],
        },
        {
          type: 'p',
          content: [
            'Intelligent automation to scale resources seamlessly during demand surges, like claim spikes after natural disasters',
          ],
        },
      ],
      links: [
        {
          label: 'Learn more',
          href: '/contact#book-demo',
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
      title: 'Lowered deployment risks',
      body: [
        {
          type: 'p',
          content: [
            'Updates are essential to ensure security and reliability, but downtime risks disrupting customer experiences (possibly when they need you most). Plural minimizes disruptions by automating deployments and upgrades safely.\n\nSafe, automated K8s upgrades with minimal downtime to keep key systems operational',
          ],
        },
        {
          type: 'p',
          content: [
            'Reliable, repeatable deployments to support evolving business needs',
          ],
        },
        {
          type: 'p',
          content: [
            'Enhanced stability to meet uptime SLAs required for customer-facing insurance services',
          ],
        },
      ],
      links: [
        {
          label: 'Continuous Deployment',
          href: '/products/continuous-deployment',
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
      title: 'Accelerated troubleshooting',
      body: [
        {
          type: 'p',
          content: [
            'Any downtime can have a direct impact on the customer experience and business revenue. Plural helps teams resolve issues faster.\n\nAutomated diagnostics to quickly pinpoint issues',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized visibility of logs & metrics across clusters to simplify root cause analysis',
          ],
        },
        {
          type: 'p',
          content: [
            'Reduced MTTR, ensuring minimal disruption to critical insurance services',
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
      title: 'Beyond industry-standard security',
      body: [
        {
          type: 'p',
          content: [
            'Insurers have been tasked with securing sensitive customer data, which means meeting (if not exceeding) industry standards and addressing regulations. Plural ensures data security & governance across all K8s environments.\n\nEgress-only architecture to protect sensitive customer data from external threats',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized SBOM management to simplify compliance with industry regulations (e.g., GDPR, HIPAA, and state-specific standards)',
          ],
        },
        {
          type: 'p',
          content: [
            'Comprehensive CVE visibility via automated image scanning across clusters',
          ],
        },
        {
          type: 'p',
          content: [
            'Scalable security policy enforcement which maintains consistent compliance and prevent misconfigurations',
          ],
        },
      ],
      image: {
        src: '/images/content/solutions-reduce-visual-5a7486.svg',
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

export default insurance
