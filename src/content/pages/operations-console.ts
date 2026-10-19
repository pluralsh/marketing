import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const operationsConsole = {
  path: '/products/operations-console',
  meta: {
    title: 'Operations Console',
    description: 'A unified interface for your entire fleet.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Your Kubernetes Command Center',
      description:
        'A unified, "single pane of glass" interface for your entire Kubernetes fleet. From resource monitoring to log viewing, this feature-rich dashboard ensures efficient and effective Kubernetes operations.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/cluster-overview-f41ab8.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'Your Challenge',
      title: 'The Real Costs of Fragmented Visibility',
      description:
        'Operating Kubernetes at scale exposes gaps that dashboards alone can’t solve. Without unified visibility, proactive insights, and cost control, platform teams end up blind to risk, stuck in firefighting, and drowning in inefficiency.',
      items: [
        {
          title: 'Fragmented Multi-Cloud Visibility',
          body: [
            {
              type: 'p',
              content: [
                'Managing clusters across multiple clouds and regions forces teams into siloed dashboards and manual tracking. It’s nearly impossible to get a consistent, real-time view of versions, zones, and capacity.',
              ],
            },
          ],
        },
        {
          title: 'Risk of Failure at Scale',
          body: [
            {
              type: 'p',
              content: [
                'Incidents often surface too late, when outages are already impacting users. Teams struggle to spot failing resources or understand root causes before problems escalate.',
              ],
            },
          ],
        },
        {
          title: 'Surface-Level Dashboards',
          body: [
            {
              type: 'p',
              content: [
                'Most dashboards only give a partial picture, forcing engineers to juggle tools, secrets, and passwords just to see what’s happening. Drilling from fleet-wide metrics to pod-level details is clunky and inconsistent.',
              ],
            },
          ],
        },
        {
          title: 'Runaway Costs',
          body: [
            {
              type: 'p',
              content: [
                'Without clear visibility, costs balloon across clusters, workloads, and namespaces. Teams lack insight into where money is going or how to keep resource usage under control.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'featureRow',
      eyebrow: 'Our Solution',
      title: 'A Comprehensive Kubernetes Dashboard, Built for the Enterprise',
      body: [
        {
          type: 'p',
          content: [
            'A single pane of glass to explore and operate clusters securely, with the guardrails platform teams require.',
          ],
        },
        {
          type: 'p',
          content: [
            'Access every Kubernetes resource through the console — no hidden layers, just transparent API-backed insights.',
          ],
        },
        {
          type: 'p',
          content: [
            'Ensure every action in the console respects Kubernetes RBAC, so users see and do only what they’re authorized to.',
          ],
        },
        {
          type: 'p',
          content: [
            'Capture a complete, tamper-proof record of all console activity for security and compliance teams.',
          ],
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
      title: 'Proactive Reliability at Scale',
      body: [
        {
          type: 'p',
          content: [
            'Stay ahead of failures with AI-driven health monitoring and automated investigation.',
          ],
        },
        {
          type: 'p',
          content: [
            'Get holistic health scores across your fleet and for each individual cluster.',
          ],
        },
        {
          type: 'p',
          content: [
            'Highlight failing resources before they escalate into major incidents.',
          ],
        },
        {
          type: 'p',
          content: [
            'Use AI to investigate failing resources, explain the root cause, and generate fixes.',
          ],
        },
      ],
      image: {
        src: '/images/content/ai-interactive-visual-b3dcbd.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Fleet-Wide Visibility at a Glance',
      body: [
        {
          type: 'p',
          content: [
            'Track the state of every cluster in your environment with real-time insights that scale with you.',
          ],
        },
        {
          type: 'p',
          content: [
            'Quickly see which clusters are on which versions, and spot upgrade risks before they cause incidents.',
          ],
        },
        {
          type: 'p',
          content: [
            'Map your clusters across regions and zones to ensure resilience and avoid hidden single points of failure.',
          ],
        },
        {
          type: 'p',
          content: [
            'Understand cluster size and capacity at a glance, so scaling decisions are data-driven, not guesswork.',
          ],
        },
      ],
      image: {
        src: '/images/content/visibility-d696a2.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Cost Management Without the Guesswork',
      body: [
        {
          type: 'p',
          content: [
            'Stay on top of infrastructure spend and optimize capacity with AI-driven insights and automation.',
          ],
        },
        {
          type: 'p',
          content: [
            'Break down spend across clusters, workloads, and namespaces to understand where money is going.',
          ],
        },
        {
          type: 'p',
          content: [
            'Identify underutilized resources with actionable insights for more efficient usage.',
          ],
        },
        {
          type: 'p',
          content: [
            "Plural's AI automatically generates and rolls out right-sizing changes through GitOps PRs — keeping humans in the loop.",
          ],
        },
        {
          type: 'p',
          content: [
            'Predict future spend based on usage trends, so you can plan budgets with confidence.',
          ],
        },
      ],
      image: {
        src: '/images/content/ai-cost-visual-cbd6fa.svg',
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

export default operationsConsole
