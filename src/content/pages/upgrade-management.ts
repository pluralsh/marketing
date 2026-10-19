import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const upgradeManagement = {
  path: '/products/upgrade-management',
  meta: {
    title: 'Upgrade Autopilot',
    description: 'Upgrade Autopilot',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Upgrade Autopilot',
      description:
        'Take the complexity out of Kubernetes upgrades with automated compatibility checks, dependency management, and safe rollout procedures. Save weeks of manual research and testing, even when using managed services like EKS, AKS, and GKE.',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/upgarde-assistant-f2e3eb.jpg',
        width: 942,
        height: 530,
      },
    },
    {
      type: 'featureGrid',
      eyebrow: 'Why You Care',
      title: 'Why Upgrades Break Teams',
      description:
        'Kubernetes upgrades are slow, error-prone, and full of deprecation landmines. Even the best teams burn weeks keeping clusters current.',
      items: [
        {
          title: 'Upgrades Without Guardrails Are Risky',
          body: [
            {
              type: 'p',
              content: [
                'Kubernetes upgrades are messy, error-prone, and full of hidden deprecations. Even with scripts or partial automation, teams lack the guardrails to make upgrades safe, predictable, and repeatable.',
              ],
            },
          ],
        },
        {
          title: 'Weeks of Toil, Zero Velocity',
          body: [
            {
              type: 'p',
              content: [
                'Every upgrade cycle drags on with spreadsheets, changelogs, and trial-and-error testing. Teams lose weeks chasing failures instead of shipping features.',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'featureGrid',
      eyebrow: 'Our Solution',
      title: 'Smarter, Safer Kubernetes Upgrades',
      description:
        'Plural automates the entire upgrade path with preflight checks, add-on compatibility analysis, and AI-driven insights — turning weeks of toil into a predictable, one-click rollout.',
      items: [
        {
          title: 'Automated Pre-flight Checks',
          body: [
            {
              type: 'p',
              content: [
                'Confidently upgrade your Kubernetes clusters with comprehensive pre-flight validation. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Intelligent scanning performs thorough compatibility checks across your entire environment, from core Kubernetes components to third-party addons. ',
              ],
            },
            {
              type: 'p',
              content: ['Eliminate weeks of manual research and testing.'],
            },
          ],
        },
        {
          title: 'API Deprecation Detection',
          body: [
            {
              type: 'p',
              content: [
                'Stay ahead of breaking changes with automated API deprecation tracking. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Upgrade Autopilot continuously monitors your GitOps configurations and cloud provider deployments to identify deprecated APIs. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Proactively address compatibility issues before they impact production.',
              ],
            },
          ],
        },
        {
          title: 'Universal Addon Compatibility Checks',
          body: [
            {
              type: 'p',
              content: [
                'Our extensive compatibility database, easily extendable through CRDs, tracks version requirements for both official and third-party Kubernetes addons.',
              ],
            },
            {
              type: 'p',
              content: [
                'Replace weeks of compatibility research with automated validation.',
              ],
            },
          ],
        },
        {
          title: 'Upgrade Blockers Analysis',
          body: [
            {
              type: 'p',
              content: [
                'Quickly identify and resolve upgrade blockers with our intelligent analysis engine. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Get clear insights into compatibility issues between your current configurations and target versions, with actionable recommendations for resolving conflicts.',
              ],
            },
          ],
        },
        {
          title: 'Smart Version Selection',
          body: [
            {
              type: 'p',
              content: [
                'Make informed upgrade decisions with our version compatibility matrix. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Automatically determine the latest compatible version for your environment based on your current Kubernetes version and addon ecosystem. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Have pull-requests automatically created with appropriate version updates ensuring stable and reliable upgrades across your clusters. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Compatible with brown-field and green-field investments in Kubernetes.',
              ],
            },
          ],
        },
        {
          title: 'Automated Rollout Pipelines',
          body: [
            {
              type: 'p',
              content: [
                'Streamline upgrades across your entire fleet with automated rollout pipelines. ',
              ],
            },
            {
              type: 'p',
              content: [
                'Deploy updates systematically to development, staging, and production clusters using our intelligent orchestration engine, with built-in safety checks and rollback capabilities.',
              ],
            },
          ],
        },
      ],
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

export default upgradeManagement
