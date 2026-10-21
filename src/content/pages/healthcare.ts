import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const healthcare = {
  path: '/healthcare',
  meta: {
    certificates: true,
    title: 'Enterprise Kubernetes management, accelerated.',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Plural for Healthcare',
      description:
        'Simplify Kubernetes operations to ensure secure, compliant, and reliable systems for healthcare workloads like EHR, telehealth, and medical data applications.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/terraform-stack-4a6394.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Healthcare providers depend on Kubernetes to power critical systems that support patient care, data access, and clinical workflows. However, managing complex, multi-cluster Kubernetes environments across hybrid and multi-cloud infrastructure brings challenges such as ensuring uptime, protecting sensitive health data, and maintaining strict compliance with regulations. Plural simplifies Kubernetes management with centralized policy enforcement, automated upgrades, advanced troubleshooting, and secure egress-only architecture.',
    },
    {
      type: 'featureRow',
      title: 'Comprehensive visibility into critical systems',
      body: [
        {
          type: 'p',
          content: [
            'Healthcare systems depend on K8s to keep vital applications like EHR and telehealth running smoothly. Plural delivers centralized visibility to monitor performance and prevent disruptions.\n\nReal-time dashboards and resource monitoring to track performance across hybrid and multi-cloud environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Log viewing & proactive alerts to detect and resolve issues before they impact patient care',
          ],
        },
        {
          type: 'p',
          content: [
            'Optimized resource management to handle demand spikes, ensuring critical services remain available',
          ],
        },
      ],
      image: {
        src: '/images/content/clusters-with-violation-4a2878.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Seamless upgrades with minimal risk',
      body: [
        {
          type: 'p',
          content: [
            'Upgrading healthcare systems is necessary for security and performance, but can inject risks for critical workflows. Plural automates updates to ensure reliability without downtime.\n\nSafe, phased rollouts to test and validate upgrades without interrupting critical operations',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated workflows deliver consistent, error-free updates',
          ],
        },
        {
          type: 'p',
          content: [
            'Recover quickly in case of unexpected issues with rollback capabilities',
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
      type: 'featureRow',
      title: 'Accelerated issue resolution',
      body: [
        {
          type: 'p',
          content: [
            'When healthcare applications experience issues, delays can affect patient care. Plural’s AI-powered tools accelerate troubleshooting so teams can resolve problems quickly.\n\nAI-driven root cause analysis using logs, source code, and API data',
          ],
        },
        {
          type: 'p',
          content: [
            'Clear, actionable recommendations to resolve issues with minimal manual effort',
          ],
        },
        {
          type: 'p',
          content: [
            'Reduced recovery times to keep systems like EHRs and imaging applications operational',
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
      title: 'Stronger security to protect sensitive data',
      body: [
        {
          type: 'p',
          content: [
            'With strict regulations like HIPAA, healthcare organizations need robust data security. Plural centralizes controls to safeguard ePHI and ensure compliance across environments.\n\nEgress-only architecture to prevent exposure of sensitive patient data',
          ],
        },
        {
          type: 'p',
          content: ['RBAC & SSO integration, which secures access'],
        },
        {
          type: 'p',
          content: [
            'Auditing tools for simplifying compliance reporting and meeting regulatory requirements',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized SBOM management to simplify compliance and maintain software integrity',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated CVE detection & monitoring to proactively identify vulnerabilities',
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

export default healthcare
