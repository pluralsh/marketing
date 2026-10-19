import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const iacManagement = {
  path: '/products/iac-management',
  meta: {
    title: 'IaC Management',
    description: 'GitOps strategy for your Terraform workflow.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'IaC Management, Unified',
      description:
        'Implement a GitOps strategy around your Terraform workflow. Use our API’s to create a reusable Terraform, Pulumi or Ansible stack from any git repository in which the code might live, and we’ll handle the rest to ensure it’s deployed on any commit.',
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
      type: 'featureRow',
      title: 'A Single Source of Truth',
      body: [
        {
          type: 'p',
          content: [
            'Plural consolidates Terraform state and Kubernetes state so platform teams no longer have to reconcile fragmented data across multiple systems. Everything lives in one secure, queryable system of record.',
          ],
        },
        {
          type: 'p',
          content: [
            'State changes are indexed and searchable by Plural AI in real-time.',
          ],
        },
      ],
      image: {
        src: '/images/content/seamless-integrations-aeae88.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Kubernetes ↔ Terraform Interoperability',
      body: [
        {
          type: 'p',
          content: [
            'Break down the wall between infrastructure provisioning and cluster operations with Plural’s built-in interoperability.',
          ],
        },
        {
          type: 'p',
          content: [
            'Export Terraform outputs directly into Kubernetes services.',
          ],
        },
        {
          type: 'p',
          content: [
            'Unify your GitOps process into a single declarative commit.',
          ],
        },
      ],
      image: {
        src: '/images/content/ai-enterprise-visual-9ca2bc.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'AI-Powered Semantic Search',
      body: [
        {
          type: 'p',
          content: [
            'Plural indexes your entire infrastructure state for powerful semantic queries and AI-driven workflows.',
          ],
        },
        {
          type: 'p',
          content: [
            'Every Terraform state file (safely pruned of sensitive data) is indexed.',
          ],
        },
        {
          type: 'p',
          content: [
            'Search across infrastructure with natural language questions.',
          ],
        },
        {
          type: 'p',
          content: ['Leverage our semantic layer to power agentic workflows'],
        },
      ],
      image: {
        src: '/images/content/insurance-8911f1.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'GitOps for Every IaC Toolchain',
      body: [
        {
          type: 'p',
          content: [
            'Plural applies GitOps workflows across your entire IaC stack, ensuring consistency, security, and repeatability.',
          ],
        },
        {
          type: 'p',
          content: [
            'Write powerful, declarative self-service provisioning workflows as one commit and one pull request.',
          ],
        },
        {
          type: 'p',
          content: [
            'All infrastructure updates flow through Git for traceability and review.',
          ],
        },
      ],
      image: {
        src: '/images/content/financial-services-f1d12f.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Cloud-Native Security & IAM',
      body: [
        {
          type: 'p',
          content: [
            'Plural integrates directly with cloud-native identity systems to ensure secure, governed automation.',
          ],
        },
        {
          type: 'p',
          content: [
            'Compatible with AWS Workload Identity, EKS, and other IAM providers.',
          ],
        },
        {
          type: 'p',
          content: [
            'Enforces least-privilege access models for IaC workflows.',
          ],
        },
        {
          type: 'p',
          content: [
            'Unified permission layer spans clusters, clouds, and services.',
          ],
        },
      ],
      image: {
        src: '/images/content/notifications-f84f6b.svg',
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

export default iacManagement
