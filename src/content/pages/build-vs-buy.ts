import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const buildVsBuy = {
  path: '/why-plural/build-vs-buy',
  meta: {
    title: 'Build vs Buy Kubernetes Platform | Why Plural',
    description:
      'See the true cost of DIY infrastructure. Plural delivers AI-powered Kubernetes automation, governance, and upgrades out of the box — faster than building in-house.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'The True Cost of DIY Infrastructure',
      description:
        'You could build your own platform — but the time, cost, and capability trade-offs are rarely worth it. Plural gives you battle-tested infrastructure automation, AI-powered operations, and continuous innovation out of the box.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/platform-cloud-integration-architecture-1606b9.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Problem',
      title: 'Why Teams Build',
      items: [
        {
          body: [
            {
              type: 'p',
              content: ['You’ve got a sharp DevOps team.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['You have some scripts and processes already.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: [
                'You think you can control your roadmap better if you build internally.',
              ],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: [
                'You believe your setup and requirements are too complex for vendor software to support.',
              ],
            },
          ],
        },
      ],
      footnote:
        'But soon, you’re not just building – you’re maintaining. Supporting. Explaining. And falling behind.',
    },
    {
      type: 'table',
      title: 'The Real Costs',
      rowLabel: 'Area',
      columns: [
        {
          label: 'Build it Internally',
          emphasized: false,
        },
        {
          label: 'Plural',
          emphasized: true,
        },
      ],
      rows: [
        {
          label: 'Time to Value',
          values: ['6-12 months+', 'Instant'],
        },
        {
          label: 'Configurability',
          values: [
            'High, built custom for usecase',
            'High, built to be configurable from ground up',
          ],
        },
        {
          label: 'Tooling',
          values: [
            'Fragmented, disparate tools and workflows stitched together',
            'yes  Integrated single pane of glass',
          ],
        },
        {
          label: 'AI Diagnostics',
          values: ['Limited, fragmented', 'yes  Built-in + real-time'],
        },
        {
          label: 'Upgrade Automation',
          values: ['Scripts, fragile', 'yes Preflight checks + rollouts'],
        },
        {
          label: 'Cost Optimization',
          values: [
            'Some, visibility not remediation',
            'yes AI-driven with PRs',
          ],
        },
        {
          label: 'Compliance & Guardrails',
          values: ['Manual + error prone', 'yes  Out of the box'],
        },
        {
          label: 'Tech Debt',
          values: ['High, continual maintenance required', 'yes None'],
        },
        {
          label: 'Long-term Cost',
          values: [
            '2-4 FTEs minimum, low cluster-to-people ratio',
            'yes Per cluster pricing',
          ],
        },
      ],
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Solution',
      title: "Buy What You Can't Build",
      description:
        'Building internally means years of toil, brittle scripts, and hidden maintenance costs. Plural delivers hardened automation, AI-powered operations, and governance that no internal team can match — all out of the box.',
      items: [
        {
          title: 'Battle-Tested Upgrade Automation',
          body: [
            {
              type: 'p',
              content: [
                'Avoid fragile scripts and rollouts with preflight checks, compatibility analysis, and safe upgrades proven in production.',
              ],
            },
          ],
        },
        {
          title: 'AI-Native Operations',
          body: [
            {
              type: 'p',
              content: [
                'Plural’s AI leverages live telemetry, not docs, enabling real-time diagnostics, remediation, and workflow automation that go beyond monitoring tools.',
              ],
            },
          ],
        },
        {
          title: 'Unified Platform, Not Patchwork',
          body: [
            {
              type: 'p',
              content: [
                'One control plane to deploy, manage, and troubleshoot — replacing fragmented dashboards, scripts, and one-off integrations.',
              ],
            },
          ],
        },
        {
          title: 'Enterprise-Ready by Default',
          body: [
            {
              type: 'p',
              content: [
                'Built-in RBAC, audit logging, cost optimization, and policy guardrails — the governance and compliance layer that’s painful to replicate in-house.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'cta',
      title: 'Start Solving Platform Problems \nToday. Not next quarter.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default buildVsBuy
