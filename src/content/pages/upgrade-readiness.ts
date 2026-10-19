import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const upgradeReadiness = {
  path: '/why-plural/upgrade-readiness',
  meta: {
    noindex: true,
  },
  sections: [
    {
      type: 'hero',
      title: 'Stay Secure and Compliant — Without Upgrade Pain',
      description:
        'Plural automates Kubernetes upgrades with validation, compatibility checks, and safe rollouts — reducing risk and saving engineering time.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/eu-plan-2-d6b98d.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'The Problem',
      title: 'The Cost of a Delay',
      items: [
        {
          body: [
            {
              type: 'p',
              content: ['CVEs left unpatched'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['Deprecated APIs silently break workloads'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['EKS extended support fees pile up'],
            },
          ],
        },
        {
          body: [
            {
              type: 'p',
              content: ['Compliance audits fail due to outdated versions'],
            },
          ],
        },
      ],
    },
    {
      type: 'featureRow',
      eyebrow: 'The Solution',
      title: "Plural's Upgrade Autopilot",
      body: [
        {
          type: 'p',
          content: ['Preflight validation of workloads, addons, CRDs'],
        },
        {
          type: 'p',
          content: ['Cluster addon compatibility checks'],
        },
        {
          type: 'p',
          content: ['API deprecation tracking from your GitOps configs'],
        },
        {
          type: 'p',
          content: ['Smart version selection'],
        },
      ],
      links: [
        {
          label: 'Learn more',
          href: '/products/upgrade-management',
        },
      ],
      image: {
        src: '/images/content/check-add-on-mutual-4c85df.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureGrid',
      title: 'Why Plural Delivers for your Whole Team',
      description: 'Proven results that reduce toil and boost velocity.',
      items: [
        {
          title: 'Stay secure, compliant and under budget',
          body: [
            {
              type: 'p',
              content: [
                'Automate compatibility checks, rollout orchestration, and validation to accelerate your upgrade timeline.',
              ],
            },
          ],
        },
        {
          title: 'Slash upgrade cycles from weeks to day',
          body: [
            {
              type: 'p',
              content: [
                'Automate compatibility checks, rollout orchestration, and validation to accelerate your upgrade timeline.',
              ],
            },
          ],
        },
        {
          title: 'Standardize upgrade process across environments',
          body: [
            {
              type: 'p',
              content: [
                'Eliminate manual research and coordination with intelligent automation that handles every step of the upgrade.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'cta',
      title: 'Your Upgrade Playbook — \nAutomated. Ready to learn more?',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
    },
  ],
} satisfies ContentPage

export default upgradeReadiness
