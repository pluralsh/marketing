import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const gitopsTransition = {
  path: '/gitops-transition',
  meta: {
    title: 'Enterprise Kubernetes management, accelerated.',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Transition to GitOps',
      description: 'GitOps made easy for faster, more reliable deployments',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/fix-instance-type-from-aae9b2.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      body: 'The move to GitOps is transformative for many organizations, offering a consistent, declarative approach to managing infrastructure and deployments. However, doing this at scale can be daunting due to the complexity of managing pipelines, configurations, and automation workflows. Plural simplifies GitOps-based continuous deployment, making it accessible and scalable for teams of any size.',
    },
    {
      type: 'featureRow',
      title: 'Make GitOps adoption easier and more accessible',
      body: [
        {
          type: 'p',
          content: [
            'Transitioning to GitOps is a significant undertaking. Plural reduces the complexity, enabling teams to embrace GitOps without steep learning curves or operational risks.\n\nIntegrated workflows allow you to manage deployments directly from Git repositories',
          ],
        },
        {
          type: 'p',
          content: [
            'Prebuilt automation eliminates the need to manually configure pipelines for continuous delivery',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized management provides visibility into all stages of the GitOps lifecycle from a single interface',
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
      title: 'Make GitOps adoption easier and more accessible',
      body: [
        {
          type: 'p',
          content: [
            'Transitioning to GitOps is a significant undertaking. Plural reduces the complexity, enabling teams to embrace GitOps without steep learning curves or operational risks.\n\nIntegrated workflows allow you to manage deployments directly from Git repositories',
          ],
        },
        {
          type: 'p',
          content: [
            'Prebuilt automation eliminates the need to manually configure pipelines for continuous delivery',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized management provides visibility into all stages of the GitOps lifecycle from a single interface',
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
        src: '/images/content/solutions-enable-visual-19bfb4.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Deploy seamlessly across environments',
      body: [
        {
          type: 'p',
          content: [
            'Managing deployments across development, staging, and production environments can be challenging. Plural automates the process, ensuring smooth and consistent rollouts.\n\nEnvironment-specific templates dynamically configure deployments to match each stage',
          ],
        },
        {
          type: 'p',
          content: [
            'Pull request-driven automation triggers deployments and updates automatically',
          ],
        },
        {
          type: 'p',
          content: [
            'Audit trails provide full visibility into changes for compliance and troubleshooting',
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
      title: 'Simplify multi-cluster GitOps workflows',
      body: [
        {
          type: 'p',
          content: [
            'Scaling GitOps across multiple K8s clusters introduces complexity. Plural streamlines these workflows, making them consistent and manageable.\n\nGitOps-native design enables you to maintain consistent configurations across clusters',
          ],
        },
        {
          type: 'p',
          content: [
            'Cluster-local execution reduces networking overhead by running workflows directly within Kubernetes environments',
          ],
        },
        {
          type: 'p',
          content: [
            'Dynamic scaling handles demand spikes without additional manual configurations',
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
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default gitopsTransition
