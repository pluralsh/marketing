import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const kubernetesCostSavings = {
  path: '/kubernetes-cost-savings',
  meta: {
    title: 'Kubernetes Cost Savings',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Kubernetes Cost Savings',
      description:
        'Reduce Kubernetes overhead with smarter, more efficient management',
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
      body: 'Managing Kubernetes at scale can quickly become expensive. High operational overhead, inefficient resource utilization, and the need for specialized expertise often inflate costs. Organizations require a solution that streamlines operations while minimizing unnecessary expenses. Plural helps you achieve significant operational cost savings by automating repetitive tasks, optimizing resource allocation, and simplifying complex workflows.',
    },
    {
      type: 'featureRow',
      title: 'Automate repetitive tasks',
      body: [
        {
          type: 'p',
          content: [
            'Manual Kubernetes operations can lead to inefficiencies and wasted effort. Plural automates key processes to reduce the time and resources spent on routine tasks.\n\nAutomated provisioning eliminates the need for manual cluster setup and maintenance',
          ],
        },
        {
          type: 'p',
          content: [
            'Pull request-driven workflows streamline updates, deployments, and scaling',
          ],
        },
        {
          type: 'p',
          content: [
            'Prebuilt templates simplify configurations and reduce onboarding time for new environments',
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
        src: '/images/content/seamless-integrations-aeae88.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Optimize resource utilization across environments',
      body: [
        {
          type: 'p',
          content: [
            'Over-provisioning and resource waste are common cost drivers in K8s environments. Plural provides the tools to monitor and optimize usage for maximum efficiency.\n\nReal-time telemetry offers actionable insights into resource consumption and utilization',
          ],
        },
        {
          type: 'p',
          content: [
            'Dynamic scaling policies adjust resources automatically to meet workload demands',
          ],
        },
        {
          type: 'p',
          content: [
            'Performance dashboards help identify underutilized or misallocated resources',
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
      title: 'Reduce reliance on specialized expertise',
      body: [
        {
          type: 'p',
          content: [
            'Hiring and retaining K8s experts is costly and challenging. Plural democratizes Kubernetes management, enabling teams of all skill levels to handle complex operations effectively.\n\nAI-powered diagnostics simplify troubleshooting and reduce the need for advanced expertise',
          ],
        },
        {
          type: 'p',
          content: [
            'Self-service tools empower developers to manage resources independently',
          ],
        },
        {
          type: 'p',
          content: [
            'Centralized workflows make K8s accessible to non-expert teams',
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
        src: '/images/content/terraform-stack-4a6394.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Streamline upgrades and maintenance',
      body: [
        {
          type: 'p',
          content: [
            'Frequent updates and maintenance cycles can strain budgets and resources. Plural’s automation reduces the cost and time associated with these essential tasks.\n\nAutomated upgrade workflows simplify maintenance and minimize downtime',
          ],
        },
        {
          type: 'p',
          content: [
            'Compatibility checks reduce the risk of costly errors during upgrades',
          ],
        },
        {
          type: 'p',
          content: [
            'Rollback capabilities provide a safety net for faster issue resolution',
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
        src: '/images/content/check-add-on-compatibilities-726a05.svg',
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

export default kubernetesCostSavings
