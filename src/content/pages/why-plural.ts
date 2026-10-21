import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const whyPlural = {
  path: '/why-plural',
  meta: {
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'Why Leading Platform Teams Choose Plural',
      description:
        'Skip the endless tooling decisions, half-built internal platforms, and long DevOps backlogs. Plural is the AI-native control plane that helps you move faster, stay secure, and operate infrastructure with confidence. Plural gives you the speed of automation, the leverage of AI, and the peace of mind of years of battle-tested infrastructure intelligence – all in one platform.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/platform-foundations-225e29.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Problem',
      title: 'You could...',
      items: [
        {
          body: [
            {
              type: 'p',
              content: ['Write your own scripts.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['Build a dev portal.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: [
                'Maintain dashboards across Prometheus, Grafana, Terraform, GitOps, and more...',
              ],
            },
          ],
        },
      ],
      footnote:
        "But at some point, the stack becomes a burden, not a boost. You're maintaining internal tools instead of delivering outcomes.",
    },
    {
      type: 'table',
      title: 'Plural Gives You Leverage — Not Just Tools',
      description:
        'See how building your own platform stacks up against what Plural has to offer.',
      columns: [
        {
          label: 'Without Plural',
          emphasized: false,
        },
        {
          label: 'With Plural',
          emphasized: true,
        },
      ],
      rows: [
        {
          values: [
            'Build + maintain automation in-house',
            'Instant – Powerful workflows out of the box',
          ],
        },
        {
          values: [
            'Spend hours debugging issues manually',
            'Get AI-powered root cause analysis and fix generation',
          ],
        },
        {
          values: [
            'Delay upgrades due to risk',
            'Run safe, validated rollouts with Upgrade Autopilot',
          ],
        },
        {
          values: [
            'Chase cost overruns',
            'Right-size infra automatically with AI insights',
          ],
        },
        {
          values: [
            'Manage tickets + handoffs',
            'Empower devs with self-service and guardrails',
          ],
        },
      ],
    },
    {
      type: 'featureGrid',
      title: 'Why Plural Delivers for your Whole Team',
      items: [
        {
          eyebrow: 'For VPS',
          title: 'Faster developer delivery',
          body: [
            {
              type: 'p',
              content: [
                'Unblock teams with less platform friction and a lower \nlearning curve.',
              ],
            },
          ],
        },
        {
          eyebrow: 'For VPS',
          title: 'Improved security & compliance',
          body: [
            {
              type: 'p',
              content: ['Up-to-date clusters, audit logs and policy controls.'],
            },
          ],
        },
        {
          eyebrow: 'For VPS',
          title: 'Reduced cost',
          body: [
            {
              type: 'p',
              content: ['Cut infra waste, platform sprawl, and ticket volume.'],
            },
          ],
        },
        {
          eyebrow: 'For Engineers',
          title: 'Streamlined operations',
          body: [
            {
              type: 'p',
              content: ['Less toil, more time to innovate.'],
            },
          ],
        },
        {
          eyebrow: 'For Engineers',
          title: 'Smart automation',
          body: [
            {
              type: 'p',
              content: [
                "Automation that's actually helpful, improved by the full context of your fleet.",
              ],
            },
          ],
        },
        {
          eyebrow: 'For Engineers',
          title: 'Built-in AI helper',
          body: [
            {
              type: 'p',
              content: ['AI thats context-aware and infrastructure-literate'],
            },
          ],
        },
      ],
    },
    {
      type: 'table',
      eyebrow: 'The Solution',
      title: 'Plural Automates the Grind',
      description:
        'The Plural Effect – Impact on your team in Hours and Dollars',
      rowLabel: 'Task',
      columns: [
        {
          label: 'Without Plural',
          emphasized: false,
        },
        {
          label: 'With Plural',
          emphasized: true,
        },
      ],
      rows: [
        {
          label: 'Diagnosing incidents',
          values: ['Hours', 'Minutes'],
        },
        {
          label: 'Kubernetes upgrades',
          values: ['Weeks', '1-click rollout'],
        },
        {
          label: 'Fixing config issues',
          values: ['Hours', 'Automatically generated PR’s'],
        },
        {
          label: 'Cost audit + right sizing',
          values: ['Rarely', 'Continuous'],
        },
        {
          label: 'Support tickets/week',
          values: ['Platform team bottleneck', 'Self-service + AI fixes'],
        },
        {
          label: 'Onboarding new devs',
          values: ['Days/weeks', 'Hours (AI guided)'],
        },
      ],
      footnote:
        '*Estimated time saved per platform engineer: 30+ hours/week\n*Engineering cost saved per quarter: $75-100K',
    },
    {
      type: 'cta',
      title:
        'Stop maintaining internal tooling.\nStart delivering platform outcomes.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default whyPlural
