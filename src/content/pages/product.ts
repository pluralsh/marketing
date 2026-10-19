import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const product = {
  path: '/product',
  meta: {
    title: 'Our platform',
    description: 'A single platform to manage your entire Kubernetes fleet',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'The Kubernetes Management Platform that puts AI to work',
      description:
        'Monitor, act, and troubleshoot your K8s environment, all from a single pane of glass.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      video: {
        youtubeId: 'W8KCaiZRV3M',
        title: 'Plural Fleet management April 2024',
      },
    },
    {
      type: 'featureRow',
      eyebrow: 'Our Platform',
      title: 'A single platform to manage your entire Kubernetes fleet',
      image: {
        src: '/images/content/product-ourplatform-fe02a1.svg',
        width: 1392,
        height: 600,
      },
      layout: 'stacked',
    },
    {
      type: 'featureRow',
      title: 'AI-powered Insights & Troubleshooting',
      body: [
        {
          type: 'p',
          content: [
            'Use AI with real-time code and infrastructure telemetry to automatically identify, diagnose, and resolve complex Kubernetes issues. Analyze terraform run state, cluster metadata and the kubernetes api live state to receive root-cause insights and precise fix recommendations, guiding teams directly to the files needing updates. Receive immediate, actionable insights, enabling continuous monitoring and rapid response across clusters via Slack or directly in the platform.',
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
        src: '/images/content/product-ai-powered-visual-b17567.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Upgrade Management',
      body: [
        {
          type: 'p',
          content: [
            'Enable safe, standardized workflows for Kubernetes cluster upgrades, operationalizing the process at scale with embedded expertise and open-source data. Conduct scanning checks that all YAML configurations are compatible with the next Kubernetes version. Verify compatibility for third-party add-ons and resolves mutual incompatibilities, simplifying the complexity of managing dependencies across clusters.',
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
        src: '/images/content/product-upgrade-visual-5671a6.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Self-service automation',
      body: [
        {
          type: 'p',
          content: [
            'Plural’s self-service automation simplifies the integration and deployment of code changes across Kubernetes clusters by leveraging pull requests (PRs) as triggers for automated release pipelines. With sequential GitOps-driven deployments across development, staging, and production, Plural automates the release process while maintaining a comprehensive audit trail in Git. Integrated quality checks, including automated testing, linting, and security scanning, ensure that only high-quality, compliant code reaches production.',
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
        src: '/images/content/product-selfservice-visual-38ce4e.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Operations Console',
      body: [
        {
          type: 'p',
          content: [
            'Plural’s operational console provides a unified dashboard for monitoring and managing Kubernetes clusters, offering visibility into resources, logs, and overall cluster health. With centralized RBAC and SSO integration, Plural ensures secure access while simplifying cluster setup with standardized Software Bills of Materials (SBOMs) and essential add-ons across the fleet. Flexible tagging and templating options further streamline operations, allowing teams to target clusters efficiently and reduce reconfiguration efforts across environments.',
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
        src: '/images/content/product-operations-visual-0fdd62.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'IaC Management',
      body: [
        {
          type: 'p',
          content: [
            'Enable a secure, streamlined GitOps strategy for Terraform, Pulumi, or Ansible stacks, automating deployments from any Git repository upon commit. Simplify approvals with Terraform plans in PRs, eliminating the need for engineers to apply changes locally with elevated permissions. Built for security and scale, the engine runs Kubernetes-specific workflows on clusters local to the resources they manage, supports custom deployments, and offers egress-only networking for secure, scalable infrastructure management.',
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
        src: '/images/content/product-iac-visual-1231aa.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Continuous deployment',
      body: [
        {
          type: 'p',
          content: [
            'Efficiently manage and deploy services across Kubernetes clusters using a flexible tagging system for precise targeting. Use dynamic templating to configure services on-the-fly and eliminate repetitive cluster-specific adjustments, like IAM role annotations and hostnames. Ensure seamless, secure deployments from Git repositories.',
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
        src: '/images/content/product-continuous-visual-8c6f10.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Platform Foundations',
      body: [
        {
          type: 'p',
          content: [
            'Flexibly deploy across any infrastructure setup, whether SaaS or self-hosted. Easily integrate with existing infrastructure strategies (single/multi-cloud and hybrid environments). Further enhances security and reliability with a pull-based architecture allowing clusters to autonomously retrieve and apply configurations, minimizing the need for direct access.',
          ],
        },
      ],
      links: [
        {
          label: 'Learn more',
          href: '/contact-sales',
        },
      ],
      image: {
        src: '/images/content/product-platform-visual-53b075.svg',
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

export default product
