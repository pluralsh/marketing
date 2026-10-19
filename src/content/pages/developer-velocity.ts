import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const developerVelocity = {
  path: '/why-plural/developer-velocity',
  meta: {
    title:
      'Boost Developer Velocity with Plural | AI-Powered Kubernetes Platform',
    description:
      'Unblock your developers with AI-powered troubleshooting, service catalogs, and self-service workflows. Plural cuts ticket load and accelerates delivery.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'How Plural Unblocks Your Developers',
      description:
        'When your DevOps team stops being the bottleneck, your developers start shipping faster.',
      cta: {
        label: 'Book a demo',
        href: '/contact#book-demo',
      },
      image: {
        src: '/images/content/terraform-stack-deployment-status-ui-d4a19f.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Problem',
      title: 'Sound Familiar?',
      items: [
        {
          body: [
            {
              type: 'p',
              content: ['Developers can’t debug issues themselves.'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['Platform team is underwater with tickets'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['Fixes take days because no one knows what to change'],
            },
          ],
        },
      ],
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Solution',
      title: 'Plural Enables Developer Velocity',
      description:
        'Plural gives developers direct access to the tools and insights they need — without waiting on platform teams. AI-driven troubleshooting, self-service workflows, and a clean portal into infrastructure help reduce ticket load and speed up delivery.',
      items: [
        {
          title: 'Flows That Empower Developers',
          body: [
            {
              type: 'p',
              content: [
                'Provide a clean, intuitive portal where developers can see and interact with their infrastructure without needing deep Kubernetes knowledge.',
              ],
            },
          ],
        },
        {
          title: 'AI-Powered Troubleshooting',
          body: [
            {
              type: 'p',
              content: [
                'Plural AI explains issues in plain language and guides developers to fixes, reducing reliance on SREs for day-to-day debugging',
              ],
            },
          ],
        },
        {
          title: 'Service Catalog for Self-Service',
          body: [
            {
              type: 'p',
              content: [
                'Expose golden paths and pre-approved infrastructure through a built-in catalog, enabling developers to provision services safely and consistently.',
              ],
            },
          ],
        },
        {
          title: 'Pull Requests, Not Bottlenecks',
          body: [
            {
              type: 'p',
              content: [
                'Changes are auto-generated as PRs, keeping humans in the loop while cutting the time from bug to fix from days to hours.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'featureGrid',
      title: 'Results That Matter',
      description: 'Proven results that reduce toil and boost velocity.',
      items: [
        {
          title: 'Fewer Tickets',
          body: [
            {
              type: 'p',
              content: [
                'Developers spend less time waiting on infra help thanks to self-service tooling and intelligent automation.',
              ],
            },
          ],
        },
        {
          title: 'More Confident Devs',
          body: [
            {
              type: 'p',
              content: [
                'Clear explanations and safe defaults empower developers to make changes without fear of breaking things.',
              ],
            },
          ],
        },
        {
          title: 'Shorter Feedback Loops',
          body: [
            {
              type: 'p',
              content: [
                'Rapid validation and AI-powered troubleshooting reduce time from code to production.',
              ],
            },
          ],
        },
        {
          title: 'Accelerators, Not Blockers',
          body: [
            {
              type: 'p',
              content: [
                'Shift from reactive firefighting to proactive enablement across the org.',
              ],
            },
          ],
        },
        {
          title: 'Higher Deployment Frequency',
          body: [
            {
              type: 'p',
              content: [
                'Consistent environments and automated checks unlock faster, safer releases.',
              ],
            },
          ],
        },
        {
          title: 'Less Context Switching',
          body: [
            {
              type: 'p',
              content: [
                'Developers stay focused on building, with infrastructure complexity abstracted behind intuitive interfaces.',
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
        href: '/contact#book-demo',
      },
    },
  ],
} satisfies ContentPage

export default developerVelocity
