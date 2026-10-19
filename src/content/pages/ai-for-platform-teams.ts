import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const aiForPlatformTeams = {
  path: '/ai-for-platform-teams',
  meta: {
    title: 'Enterprise Kubernetes management, accelerated.',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'AI for Platform Teams',
      description:
        'Faster troubleshooting. Smarter decisions. Less manual toil.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/ai-insights-3a6db8.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      eyebrow: 'Why You Care',
      body: 'Kubernetes operations are noisy, complex, and often reactive. Plural’s integrated AI removes the guesswork by analyzing real-time telemetry across your fleet — surfacing root causes, recommending precise fixes, and generating pull requests to implement them. It’s like adding your most experienced SRE to every incident, on every cluster, instantly.',
    },
    {
      type: 'featureRow',
      title: 'Diagnose issues in real time',
      body: [
        {
          type: 'p',
          content: [
            'Stop losing hours combing through logs and YAML. Plural’s AI identifies the root cause, explains what happened, and shows you how to fix it.-\n\nAnalyze logs, events, and configs as issues occur',
          ],
        },
        {
          type: 'p',
          content: ['Get clear explanations of what’s broken and why'],
        },
        {
          type: 'p',
          content: ['See supporting evidence behind every diagnostic'],
        },
        {
          type: 'p',
          content: [
            'Detect issues before they hit production with proactive alerting',
          ],
        },
      ],
      image: {
        src: '/images/content/solutions-accelerate-visual-69c6f9.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Generate fixes, not just insights',
      body: [
        {
          type: 'p',
          content: [
            'AI doesn’t just tell you what’s wrong — it shows you how to fix it. With deep GitOps integration, Plural can generate pull requests automatically.-\n\nIdentify exactly which files and lines need changes',
          ],
        },
        {
          type: 'p',
          content: ['Generate configuration updates automatically'],
        },
        {
          type: 'p',
          content: [
            'Cross reference Kubernetes issues, logs and GitOps code to find errors reliably',
          ],
        },
        {
          type: 'p',
          content: ['Submit PRs that fit directly into your Git workflows'],
        },
      ],
      image: {
        src: '/images/content/ai-intelligent-visual-ade0a2.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Ask anything, get answers',
      body: [
        {
          type: 'p',
          content: [
            'Plural’s interactive assistant is always on. It understands your environment and gives contextual responses to your questions — from basic Kubernetes concepts to advanced debugging.\n\nNatural language interface for troubleshooting',
          ],
        },
        {
          type: 'p',
          content: ['Explain errors, failures, or Kubernetes internals'],
        },
        {
          type: 'p',
          content: ['Surface trends and anomalies across your fleet'],
        },
        {
          type: 'p',
          content: [
            'Automated and secure RAG with live cluster data — not generic docs',
          ],
        },
      ],
      image: {
        src: '/images/content/solutions-visual-e4842f.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Proactively reduce risk',
      body: [
        {
          type: 'p',
          content: [
            'Avoid downtime and outages before they start. Plural’s AI continuously scans for potential risks and misconfigurations — helping your team stay ahead of incidents.\n\nAlert on dangerous patterns or deprecated APIs',
          ],
        },
        {
          type: 'p',
          content: [
            'Suggest upgrades or patch-level fixes before they’re urgent',
          ],
        },
        {
          type: 'p',
          content: ['Identify underutilized resources and cost inefficiencies'],
        },
        {
          type: 'p',
          content: ['Catch config drift across environments'],
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
      title: 'Empower every team, not just experts',
      body: [
        {
          type: 'p',
          content: [
            'With the help of Plural AI you can democratize platform knowledge across your org.\n\nHelp developers self-serve infrastructure issues',
          ],
        },
        {
          type: 'p',
          content: ['Reduce bottlenecks on your platform team'],
        },
        {
          type: 'p',
          content: ['Make Kubernetes more accessible to every engineer'],
        },
        {
          type: 'p',
          content: ['Shorten onboarding time for new team members'],
        },
      ],
      image: {
        src: '/images/content/explain-with-ai-b502e7.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Built for secure, enterprise-grade environments',
      body: [
        {
          type: 'p',
          content: [
            'Plural’s AI respects your boundaries. It’s designed for organizations that care deeply about security, compliance, and data integrity.\n\nIntegrates with OpenAI, Anthropic, Amazon Bedrock, and Google Vertex AI with a bring your own LLM approach',
          ],
        },
        {
          type: 'p',
          content: ['All cluster data stays within your environment'],
        },
        {
          type: 'p',
          content: ['Full RBAC enforcement and audit logging'],
        },
        {
          type: 'p',
          content: ['Agent-based deployment with egress-only traffic'],
        },
      ],
      links: [
        {
          label: 'Book a demo',
          href: '/contact#book-demo',
        },
      ],
      image: {
        src: '/images/content/security-overwiew-323297.svg',
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

export default aiForPlatformTeams
