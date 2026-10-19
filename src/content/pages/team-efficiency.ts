import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const teamEfficiency = {
  path: '/why-plural/team-efficiency',
  meta: {
    title: 'Boost Platform Team Efficiency with Plural | AI-Powered Kubernetes',
    description:
      'Plural automates upgrades, incident response, and infra management with AI-powered workflows — saving platform teams 30+ hours a week.',
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'Multiply Your Platform Team’s Impact',
      description:
        'Plural eliminates repetitive work, automates critical workflows, and turns your existing team into a force multiplier.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/plural-git-stack-console-ui-47fa1e.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Problem',
      title: 'Platform Teams are Stretched Thin',
      items: [
        {
          body: [
            {
              type: 'p',
              content: ['Support tickets pile up.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['Upgrades take weeks or months to complete.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: [
                'Infrastructure quickly grows too complex for teams to track.',
              ],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['Devs wait on infra responses.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['CI/CD pipelines drift or break.'],
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
          label: 'Infra visibility',
          values: [
            'Siloed, manual stitching',
            'Unified semantic graph, instant search',
          ],
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
      type: 'featureGrid',
      title: 'Results That Matter',
      description: 'Proven results that reduce toil and boost velocity.',
      items: [
        {
          title: 'Fewer Escalations',
          body: [
            {
              type: 'p',
              content: [
                'Empower developers to resolve common issues on their own so fewer problems reach the platform team.',
              ],
            },
          ],
        },
        {
          title: 'Faster MTTR',
          body: [
            {
              type: 'p',
              content: [
                'AI-assisted root cause analysis and automated fixes slash resolution time from hours to minutes.',
              ],
            },
          ],
        },
        {
          title: 'Happier Developers',
          body: [
            {
              type: 'p',
              content: [
                'Give developers the autonomy to ship and debug confidently, without waiting in DevOps queues.',
              ],
            },
          ],
        },
        {
          title: 'Enablement, Not Gatekeeping',
          body: [
            {
              type: 'p',
              content: [
                'Platform teams become force multipliers, accelerating delivery instead of blocking it.',
              ],
            },
          ],
        },
        {
          title: 'More Time for Strategic Work',
          body: [
            {
              type: 'p',
              content: [
                'Plural automates the repetitive, high-effort tasks that eat up engineering bandwidth',
              ],
            },
          ],
        },
        {
          title: 'Less Firefighting, More Engineering',
          body: [
            {
              type: 'p',
              content: [
                'By automating diagnostics and upgrades, Plural frees your team from constant reactive work',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'cta',
      title: 'Free Your Team From the Platform Treadmill. Ready to learn more?',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default teamEfficiency
