import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const internalDeveloperPlatform = {
  path: '/internal-developer-platform',
  meta: {
    title: 'Enterprise Kubernetes management, accelerated.',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Build an Internal Developer Platform (IDP)',
      description:
        'Empower developers to build consistent, secure, and scalable apps with Kubernetes',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/terraform-stack-4a6394.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'Building an Internal Development Platform (IDP) enables developers to focus on delivering features rather than navigating complex infrastructure. With Plural organizations can create an IDP that simplifies Kubernetes operations while empowering developers with self-service capabilities. Plural automates workflows, enforces policy compliance, and provides centralized control, empowering development teams to access the tools and environments without waiting for infrastructure support.',
    },
    {
      type: 'featureRow',
      title: 'Accelerate developer workflows',
      body: [
        {
          type: 'p',
          content: [
            'Enable developers to access and deploy Kubernetes resources without relying on infrastructure teams. Plural’s self-service model reduces bottlenecks and streamlines development pipelines.\n\nAutomated workflows to eliminate repetitive, manual tasks in the development process',
          ],
        },
        {
          type: 'p',
          content: [
            'Pull request-driven automation to deploy resources across environments seamlessly',
          ],
        },
        {
          type: 'p',
          content: [
            'Integrated quality checks, such as testing and security scans, to ensure compliance and speed',
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
      title: 'Ensure consistent environments across teams',
      body: [
        {
          type: 'p',
          content: [
            'An IDP must provide uniform environments to avoid discrepancies between development, staging, and production. Plural ensures consistency while allowing flexibility for unique team needs.\n\nGitOps-driven workflows for managing Kubernetes configurations',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated YAML and dependency management to reduce configuration drift',
          ],
        },
        {
          type: 'p',
          content: [
            'Standardized Software Bill of Materials (SBOMs) to align environments across clusters',
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
      type: 'featureRow',
      title: 'Empower teams with policy-driven access',
      body: [
        {
          type: 'p',
          content: [
            'Provide developers with the access they need while maintaining compliance and security standards. Plural’s centralized policy management ensures resources are created and used correctly.\n\nRole-Based Access Control (RBAC) integrated with Single Sign-On (SSO)',
          ],
        },
        {
          type: 'p',
          content: [
            'OPA Gatekeeper to enforce compliance during resource creation',
          ],
        },
        {
          type: 'p',
          content: [
            'Real-time auditing & alerts to monitor and enforce policies across clusters',
          ],
        },
      ],
      image: {
        src: '/images/content/financial-services-f1d12f.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Simplify Kubernetes operations',
      body: [
        {
          type: 'p',
          content: [
            'Managing Kubernetes clusters can be overwhelming without the right tools. Plural brings everything developers need into one platform, simplifying the operational complexity.\n\nCentralized dashboard for devs to provision and manage architecture independently',
          ],
        },
        {
          type: 'p',
          content: [
            'Unified platform with controls for resource monitoring, logging, and health checks',
          ],
        },
        {
          type: 'p',
          content: [
            'Versioned deployments with full auditability, ensuring changes are tracked',
          ],
        },
      ],
      image: {
        src: '/images/content/clusters-with-violation-recommended-action-fe809e.svg',
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

export default internalDeveloperPlatform
