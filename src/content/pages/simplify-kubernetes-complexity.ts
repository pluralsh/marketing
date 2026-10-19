import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const simplifyKubernetesComplexity = {
  path: '/simplify-kubernetes-complexity',
  meta: {
    title: 'Simplify Kubernetes Complexity',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Simplify Kubernetes Complexity',
      description:
        'Effortlessly simplify the complexities of Kubernetes management with a platform designed to enhance efficiency, reduce operational challenges, and empower your teams to focus on innovation.',
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
      eyebrow: 'Why You Care',
      body: 'Managing K8s environments at scale is a significant challenge. From navigating heterogeneous environments to addressing a global skills gap in Kubernetes expertise, organizations face complexity that can slow innovation and disrupt operations. Plural simplifies Kubernetes management with pull request (PR) automation, AI-driven insights, and a single unified interface.',
    },
    {
      type: 'featureRow',
      title: 'Streamline resource updates and deployments',
      body: [
        {
          type: 'p',
          content: [
            'Manual K8s operations can lead to errors, delays, and inefficiency. Plural leverages PR automation to eliminate tedious manual work, ensuring consistency and speed.\n\nPR-driven workflows to automate resource updates, deployments, and scaling',
          ],
        },
        {
          type: 'p',
          content: [
            'Sequential updates across development, staging, and production environments for safe rollouts',
          ],
        },
        {
          type: 'p',
          content: [
            'Full audit trails of every change stored in Git for complete transparency',
          ],
        },
      ],
      links: [
        {
          label: 'Self-service Automation',
          href: '/products/self-service-automations',
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
      title: 'AI-driven insights for smarter operations',
      body: [
        {
          type: 'p',
          content: [
            'Organizations struggle to find the expertise needed to manage complex K8s environments. Plural’s AI capabilities reduce the learning curve and help teams avoid potential issues.\n\nProactive detection of anomalies and potential failures using real-time telemetry',
          ],
        },
        {
          type: 'p',
          content: [
            'AI-powered diagnostics that provide actionable root-cause analysis and resolution steps',
          ],
        },
        {
          type: 'p',
          content: [
            'Auto-generated recommendations delivered directly to teams',
          ],
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
      title: 'Simplify K8s management with a unified interface',
      body: [
        {
          type: 'p',
          content: [
            'K8s complexity often stems from disconnected tools and fragmented workflows. Plural centralizes everything into a single, intuitive interface, making it easier to monitor and act.\n\nSingle-pane-of-glass dashboard for monitoring cluster health, logs, and resource usage',
          ],
        },
        {
          type: 'p',
          content: [
            'Integrated policy enforcement, ensuring compliance at every stage',
          ],
        },
        {
          type: 'p',
          content: [
            'Flexible tagging and templating to streamline configuration and reduce rework',
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
        src: '/images/content/clusters-with-violation-4a2878.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Conquer heterogeneous environments with confidence',
      body: [
        {
          type: 'p',
          content: [
            'Managing K8s across on-premises, multi-cloud, and hybrid setups introduces challenges. Plural bridges the gap, providing the tools to standardize and scale across environments.\n\nGitOps-driven workflows to maintain consistency across heterogeneous environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated upgrades and compatibility checks for seamless operations',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized policy enforcement to ensure secure, compliant configurations everywhere',
          ],
        },
      ],
      image: {
        src: '/images/content/notifications-f84f6b.svg',
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
          href: 'https://www.plural.sh/blog/introducing-flows-your-teams-microservice-command-center/',
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

export default simplifyKubernetesComplexity
