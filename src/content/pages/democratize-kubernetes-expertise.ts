import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const democratizeKubernetesExpertise = {
  path: '/democratize-kubernetes-expertise',
  meta: {
    title: 'Democratize Kubernetes Expertise',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Democratize Kubernetes Expertise',
      description:
        'Empower teams of all skill levels to confidently manage Kubernetes',
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
      body: 'The growing demand for K8s expertise often outpaces the available talent, creating a barrier for organizations adopting and scaling K8s. Specialized knowledge is required to manage clusters, troubleshoot issues, and ensure compliance, leaving many teams dependent on a limited pool of experts. Plural democratizes K8s expertise, making advanced capabilities accessible to all teams.',
    },
    {
      type: 'featureRow',
      title: 'Simplify operations with AI-driven insights',
      body: [
        {
          type: 'p',
          content: [
            'Managing K8s can overwhelm teams with limited expertise. Plural’s AI capabilities simplify operations by providing actionable insights and automating troubleshooting.\n\nAI-powered diagnostics identify root causes and recommend precise solutions',
          ],
        },
        {
          type: 'p',
          content: [
            'Proactive anomaly detection predicts and prevents issues before they escalate',
          ],
        },
        {
          type: 'p',
          content: [
            'Deliver insights directly to teams, enabling rapid responses',
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
      title: 'Enable self-service for non-expert teams',
      body: [
        {
          type: 'p',
          content: [
            'Plural empowers teams of any skill level to manage and deploy K8s resources independently, reducing reliance on experts and eliminating bottlenecks.\n\nSelf-service automation allows teams to provision and deploy resources through intuitive workflows',
          ],
        },
        {
          type: 'p',
          content: [
            'Pull request-driven deployments simplify and standardize changes across environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized control ensures compliance while giving teams the freedom to innovate',
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
        src: '/images/content/solutions-enable-visual-19bfb4.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Provide consistent processes across environments',
      body: [
        {
          type: 'p',
          content: [
            'Complexity arises when teams use varied tools and approaches. Plural enforces consistency, enabling even less experienced teams to succeed in managing K8s.\n\nGitOps-driven workflows standardize processes across clusters and environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Universal policy enforcement ensures only compliant resources are deployed',
          ],
        },
        {
          type: 'p',
          content: [
            'Unified dashboards provide visibility into resources, health, and performance',
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
        src: '/images/content/clusters-with-violation-recommended-action-fe809e.svg',
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

export default democratizeKubernetesExpertise
