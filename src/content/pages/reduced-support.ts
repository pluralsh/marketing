import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const reducedSupport = {
  path: '/reduced-support',
  meta: {
    title: 'Enterprise Kubernetes management, accelerated.',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Reduce Platform Support Burden',
      description:
        'Empower platform teams and developers with AI-powered insights and self-service capabilities for faster issue resolution',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/solutions-visual-e4842f.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      eyebrow: 'Why You Care',
      body: "Supporting and troubleshooting Kubernetes applications is a complex challenge that often creates bottlenecks for both platform teams and developers. SRE, DevOps, and platform engineers spend significant time diagnosing issues and supporting application teams, while developers are blocked waiting for expert assistance. Plural's AI-powered platform transforms this experience by providing intelligent insights and self-service capabilities that accelerate issue resolution and reduce the support burden on platform teams.",
    },
    {
      type: 'featureRow',
      title: 'Accelerate issue resolution with Plural’s AI Copilot',
      body: [
        {
          type: 'p',
          content: [
            "Eliminate hours spent manually collecting and analyzing logs, events, and configurations. Plural's AI automatically identifies root causes and provides actionable remediation steps.\n\nReal-time analysis of logs, events, and configuration data to quickly pinpoint issues",
          ],
        },
        {
          type: 'p',
          content: [
            'AI-generated insights that explain problems in clear, actionable terms',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated PR generation to implement fixes with a single click',
          ],
        },
        {
          type: 'p',
          content: [
            'Chat interface for interactive troubleshooting assistance',
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
      title: 'Enable developer self-service',
      body: [
        {
          type: 'p',
          content: [
            'Give developers the tools they need to diagnose and fix issues independently while maintaining security and compliance controls.\n\nDeveloper portal with role-based access to relevant clusters and services',
          ],
        },
        {
          type: 'p',
          content: [
            'AI-assisted troubleshooting that explains issues in developer-friendly terms',
          ],
        },
        {
          type: 'p',
          content: [
            'Automated PR generation that helps developers implement fixes without deep Kubernetes expertise',
          ],
        },
        {
          type: 'p',
          content: [
            'Built-in governance ensuring changes follow security and compliance policies',
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
      title: 'Unify observability and control',
      body: [
        {
          type: 'p',
          content: [
            'Provide platform teams with comprehensive visibility and control across the entire Kubernetes fleet through a single interface.\n\nCentralized logging with intelligent search and filtering',
          ],
        },
        {
          type: 'p',
          content: [
            'Real-time monitoring of cluster health and resource usage',
          ],
        },
        {
          type: 'p',
          content: ['Integrated cost optimization recommendations'],
        },
        {
          type: 'p',
          content: ['Built-in CVE, policy management and compliance reporting'],
        },
        {
          type: 'p',
          content: [
            'Full audit trail of all changes and actions including Kubernetes API access',
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
      title: 'Reduce platform team burden',
      body: [
        {
          type: 'p',
          content: [
            'Transform how platform teams support the organization by automating routine tasks and enabling developer self-service.\n\nDramatically lower support ticket volume through developer enablement & Plural’s AI copilot',
          ],
        },
        {
          type: 'p',
          content: [
            'Faster issue resolution with AI-powered root cause analysis',
          ],
        },
        {
          type: 'p',
          content: ['Automated remediation of common problems'],
        },
        {
          type: 'p',
          content: ['Built-in guardrails that prevent misconfigurations'],
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
      type: 'featureRow',
      title: 'Streamline Kubernetes operations',
      body: [
        {
          type: 'p',
          content: [
            'Modernize how your organization handles Kubernetes support and troubleshooting with tools that make everyone more productive.\n\nSingle platform combining observability, AI insights, and automation',
          ],
        },
        {
          type: 'p',
          content: [
            'Developer self-service that maintains security and compliance',
          ],
        },
        {
          type: 'p',
          content: ['Significant reduction in MTTR and support burden'],
        },
        {
          type: 'p',
          content: ['Complete visibility and control for platform teams'],
        },
      ],
      links: [
        {
          label: 'Book a demo',
          href: '/contact#book-demo',
        },
      ],
      image: {
        src: '/images/content/solutions-streamline-visual-2c0418.svg',
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
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default reducedSupport
