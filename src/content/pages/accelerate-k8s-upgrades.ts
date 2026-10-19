import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const accelerateK8SUpgrades = {
  path: '/accelerate-k8s-upgrades',
  meta: {
    title: 'Enterprise Kubernetes management, accelerated.',
    description:
      'Use Plural to simplify upgrades, manage compliance, improve visibility, and streamline troubleshooting for your Kubernetes environment.',
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Accelerate Kubernetes Upgrades',
      description:
        'Upgrade faster, stay secure, and reduce engineering overhead',
      cta: {
        label: 'Book a demo',
        href: '/contact',
      },
      image: {
        src: '/images/content/solutions-visual-e4842f.svg',
        width: 687,
        height: 530,
      },
    },
    {
      type: 'statement',
      eyebrow: 'The Problem',
      body: 'Even with managed Kubernetes services like EKS, GKE, and AKS, upgrading at scale is a painful, high-stakes process. Plural takes the complexity out of upgrades with automated compatibility checks, dependency validation, and orchestrated rollouts across your fleet — so your team can move faster without putting stability, security, or compliance at risk.',
    },
    {
      type: 'featureRow',
      title: 'Managing upgrades still takes weeks — even on managed platforms',
      body: [
        {
          type: 'p',
          content: [
            'Kubernetes control planes might be automated, but the hard parts are still on your team. Compatibility, deprecations, add-ons, workloads — it’s all on you. Without automation, upgrades demand:\n\nWeeks of Research: Mapping compatibility across versions, addons, CRDs, and manifests',
          ],
        },
        {
          type: 'p',
          content: [
            'Manual Validation: Testing third-party integrations, node pools, and configs by hand',
          ],
        },
        {
          type: 'p',
          content: [
            'Repetitive Engineering Work: Burning your most senior engineers on dependency and rollout scripting',
          ],
        },
        {
          type: 'p',
          content: [
            'Constant Risk Management: Balancing security patches against potential production breakage',
          ],
        },
      ],
      image: {
        src: '/images/content/managed-platforms-b8ec89.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Why delaying upgrades is even more expensive',
      body: [
        {
          type: 'p',
          content: [
            'Postponing upgrades introduces hidden — and not-so-hidden — costs:\n\nSecurity vulnerabilities from unpatched CVEs',
          ],
        },
        {
          type: 'p',
          content: ['Failed compliance audits due to unsupported versions'],
        },
        {
          type: 'p',
          content: [
            'Cloud provider penalties (like EKS extended support fees)',
          ],
        },
        {
          type: 'p',
          content: [
            'Forced obsolescence: due to inability to use the latest software',
          ],
        },
        {
          type: 'p',
          content: [
            'Performance degradation and brittle infrastructure With Plural, you can move fast and stay protected.',
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
      type: 'statement',
      eyebrow: 'How Plural Can Help',
      body: "You don't have to do it alone.",
    },
    {
      type: 'featureRow',
      title: 'Run preflight checks across your environment',
      body: [
        {
          type: 'p',
          content: [
            'Validate every component before upgrading — from core workloads to edge-case addons.\n\nScan GitOps-based configurations for compatibility',
          ],
        },
        {
          type: 'p',
          content: ['Analyze CRDs, third-party addons, and cluster settings'],
        },
        {
          type: 'p',
          content: ['Identify issues before they impact production'],
        },
        {
          type: 'p',
          content: ['Replace manual QA cycles with smart, automated checks'],
        },
      ],
      image: {
        src: '/images/content/automated-pre-flight-670a11.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Catch deprecated APIs before they break things',
      body: [
        {
          type: 'p',
          content: [
            'Upgrades are notorious for introducing breakage due to API deprecations. Plural watches for them continuously — and alerts you early.\n\nMonitor usage of deprecated APIs across Git repos and clusters',
          ],
        },
        {
          type: 'p',
          content: ['Prevent CI/CD failures and cluster misbehavior'],
        },
        {
          type: 'p',
          content: [
            'Keep workloads running smoothly on every supported version',
          ],
        },
      ],
      image: {
        src: '/images/content/api-deprecations-113b01.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageLeft',
    },
    {
      type: 'featureRow',
      title: 'Resolve upgrade blockers in minutes, not days',
      body: [
        {
          type: 'p',
          content: [
            'Plural surfaces upgrade blockers across environments and shows you how to fix them.\n\nUnderstand the root causes behind upgrade failures',
          ],
        },
        {
          type: 'p',
          content: ['See a prioritized list of blockers and their impact'],
        },
        {
          type: 'p',
          content: [
            'Get clear, actionable remediation guidance and automatically created pull-requests to resolve blockers',
          ],
        },
        {
          type: 'p',
          content: [
            'Save hours of cross-team coordination and trial-and-error debugging',
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
        src: '/images/content/solutions-streamline-visual-2c0418.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Manage complex addon compatibility automatically',
      body: [
        {
          type: 'p',
          content: [
            'Add-on and CRD mismatches are one of the most painful parts of upgrades. Plural tracks them all — and validates compatibility for you.\n\nUse an extensible compatibility database covering official and third-party addons',
          ],
        },
        {
          type: 'p',
          content: [
            'Understand version requirements and interdependencies at a glance',
          ],
        },
        {
          type: 'p',
          content: ['Avoid surprises during rollout'],
        },
        {
          type: 'p',
          content: ['Spend less time reading changelogs, more time shipping'],
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
      type: 'featureRow',
      title: 'Upgrade smarter with intelligent version selection',
      body: [
        {
          type: 'p',
          content: [
            'Stop guessing which version to target. Plural automatically recommends the latest compatible release based on your current state and ecosystem.\n\nCross-reference Kubernetes version compatibility with your addons, workloads, and CRDs',
          ],
        },
        {
          type: 'p',
          content: [
            'Autogenerate pull requests to update manifests with the right version',
          ],
        },
        {
          type: 'p',
          content: ['Confidently upgrade greenfield and brownfield clusters'],
        },
        {
          type: 'p',
          content: ['Avoid regressions and configuration drift'],
        },
      ],
      image: {
        src: '/images/content/smart-version-selection-de7d52.svg',
        width: 690,
        height: 530,
      },
      layout: 'imageRight',
    },
    {
      type: 'featureRow',
      title: 'Roll out safely across your fleet',
      body: [
        {
          type: 'p',
          content: [
            'Upgrades are more than one-off events — they’re fleet-wide operations. Plural handles the coordination.\n\nAutomate phased rollouts across dev, staging, and prod',
          ],
        },
        {
          type: 'p',
          content: ['Configure rollback logic and safety checks'],
        },
        {
          type: 'p',
          content: ['Monitor progress and get alerts during rollout'],
        },
        {
          type: 'p',
          content: ['Standardize upgrades without writing custom tooling'],
        },
      ],
      image: {
        src: '/images/content/compatibility-checks-fd6cee.svg',
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

export default accelerateK8SUpgrades
