import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const lpDemo = {
  path: '/lp-demo',
  meta: {
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'Simplify your Kubernetes management, streamline your workflows',
      description:
        'Monitor your clusters, simplify upgrades, troubleshoot issues, and manage compliance - all from a single pane of glass.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/homepageherobg-ab8e02.svg',
        width: 1598,
        height: 600,
      },
    },
    {
      type: 'statement',
      body: 'Why DevOps, Cloud, and Platform teams prefer Plural\nTake control of even the most complex Kubernetes environments on a single, powerful platform.',
    },
    {
      type: 'featureRow',
      title: 'From Insight to Action — with AI at the Core',
      body: [
        {
          type: 'p',
          content: [
            'Identify, understand, and resolve complex issues across your environment with AI-powered diagnostics. Analyze your terraform run state, cluster metadata, and the Kubernetes API live state to detect anomalies, predict potential service and IaC failures, and recommend precise solutions. Save valuable time spent on root cause analysis and reduce the need for manual intervention.',
          ],
        },
      ],
      links: [
        {
          label: 'Book a demo',
          href: '/contact',
        },
      ],
      image: {
        src: '/images/content/ai-insights-3a6db8.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Maintain compliance in even the most complex environments',
      body: [
        {
          type: 'p',
          content: [
            'Safeguard your environment with robust, secure, and scalable infrastructure management. Ensure compliance with internal security standards and prevent misconfigurations with a security framework providing centralized SBOM management and scalable policy enforcement.',
          ],
        },
      ],
      links: [
        {
          label: 'Book a demo',
          href: '/contact',
        },
      ],
      image: {
        src: '/images/content/safeguard-8b2379.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Intelligent, Multi-Cloud Fleet-Wide Visibility',
      body: [
        {
          type: 'p',
          content: [
            "Stay on top of your environment's clusters, workloads, and resources in one place. Gain real-time visibility into cluster health, status, and resource usage. Works across public cloud, private cloud, hybrid, and edge managed clusters.",
          ],
        },
      ],
      links: [
        {
          label: 'Book a demo',
          href: '/contact',
        },
      ],
      image: {
        src: '/images/content/cluster-overview-f41ab8.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Smarter, Safer Kubernetes Upgrades',
      body: [
        {
          type: 'p',
          content: [
            'Plural takes the pain out of Kubernetes upgrades with smart version selection, automated API deprecation tracking, and comprehensive configuration validation. Say goodbye to spreadsheets, changelogs, and trial-and-error — Plural handles the complexity for you with preflight checks, addon compatibility analysis, and upgrade-ready insights baked into your GitOps workflows.',
          ],
        },
      ],
      links: [
        {
          label: 'Book a demo',
          href: '/contact',
        },
      ],
      image: {
        src: '/images/content/eu-plan-2-d6b98d.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'stats',
      eyebrow: 'Our impact',
      items: [
        {
          value: '88%',
          label: 'Reduction in operational costs',
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
          value: '~30x',
          label: 'ROI over 3 years',
        },
      ],
    },
    {
      type: 'testimonials',
      items: [
        {
          quote:
            'By adopting Plural for our Kubernetes fleet management solution, we reduced our k8s upgrade cycle from 3 months to 1 day, enabling us to delegate responsibilities more effectively from principal engineers to a single mid-level engineer.',
          name: 'Director of DevOps',
          title: 'Leading global cybersecurity provider',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Ready to see Plural in action?',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default lpDemo
