import type { Link, Stat, Testimonial } from './types'

// Site-wide copy: navigation, footer, and proof points reused across pages.

export const URLS = {
  app: 'https://app.plural.sh/',
  login: 'https://app.plural.sh/login',
  docs: 'https://docs.plural.sh/',
  blog: 'https://www.plural.sh/blog',
  github: 'https://github.com/pluralsh/plural',
  releases: 'https://github.com/pluralsh/plural/releases',
  discord: 'https://discord.com/invite/bEBAMXV64s',
  linkedin: 'https://www.linkedin.com/company/pluralsh',
  youtube: 'https://www.youtube.com/@pluralsh',
  x: 'https://x.com/plural_sh',
  contact: '/contact',
  /** Scrolls to the demo form; useful when the form stacks below the fold. */
  bookDemo: '/contact#book-demo',
  workbenchesAnnouncement:
    'https://www.plural.sh/blog/introducing-plural-workbenches-build-your-own-agents-for-devops/',
} as const

export const announcement = {
  label: 'New:',
  text: 'Workbenches are here. Build your own DevOps agents.',
  href: '/workbenches',
}

export type NavItem = {
  title: string
  description: string
  href: string
  /** SVG path for the menu icon (24x24 grid). */
  icon?: string
}

export type NavMenu =
  | {
      label: string
      kind: 'product'
      columns: { heading: string; items: NavItem[] }[]
      feature: { title: string; description: string; href: string }
    }
  | {
      label: string
      kind: 'solutions'
      columns: { heading: string; items: NavItem[] }[]
      feature: { title: string; description: string; href: string }
    }
  | { label: string; kind: 'list'; items: NavItem[] }
  | { label: string; kind: 'link'; href: string }

export const navigation: NavMenu[] = [
  {
    label: 'Product',
    kind: 'product',
    columns: [
      {
        heading: 'Products',
        items: [
          {
            title: 'Workbenches',
            description: 'Build-your-own agents for DevOps',
            icon: 'M4 5h16v14H4z M4 9h16 M9 9v10',
            href: '/workbenches',
          },
          {
            title: 'Agent Runtime',
            description: 'Run coding agents on your own clusters',
            icon: 'M7 8l-4 4 4 4 M17 8l4 4-4 4 M14 4l-4 16',
            href: '/products/agent-runtime',
          },
          {
            title: 'Agent-Ready Observability',
            description: 'Low-cost logs, metrics, and traces on S3',
            icon: 'M3 12h4l3-8 4 16 3-8h4',
            href: '/products/observability',
          },
          {
            title: 'Fleet Scale GitOps',
            description:
              'Implement GitOps across IaC and K8s, even at thousand-cluster scale',
            icon: 'M6 3v12 M18 9a3 3 0 1 0 0-6a3 3 0 1 0 0 6z M6 21a3 3 0 1 0 0-6a3 3 0 1 0 0 6z M18 9a9 9 0 0 1-9 9',
            href: '/products/fleet-scale-gitops',
          },
          {
            title: 'Sentinels',
            description: 'Automated infrastructure validation',
            icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z M9 12l2 2 4-4',
            href: '/products/sentinels',
          },
          {
            title: 'Flows',
            description: 'A command center for your microservices',
            icon: 'M5 4a2 2 0 1 0 0 4a2 2 0 1 0 0-4z M19 16a2 2 0 1 0 0 4a2 2 0 1 0 0-4z M7 6h6a4 4 0 0 1 4 4v6',
            href: '/products/flows',
          },
        ],
      },
      {
        heading: 'Capabilities',
        items: [
          {
            title: 'AI troubleshooting',
            description: 'Root cause from live telemetry',
            icon: 'M12 3v4 M12 17v4 M3 12h4 M17 12h4 M6 6l2.5 2.5 M15.5 15.5L18 18 M18 6l-2.5 2.5 M8.5 15.5L6 18',
            href: '/products/ai-powered-platform',
          },
          {
            title: 'Upgrade autopilot',
            description: 'Automated Kubernetes upgrades',
            icon: 'M12 19V5 M5 12l7-7 7 7',
            href: '/products/upgrade-management',
          },
          {
            title: 'Self-service automation',
            description: 'PR-driven automations for your fleet',
            icon: 'M4 12a8 8 0 0 1 14-5.3 M20 12a8 8 0 0 1-14 5.3 M18 3v4h-4 M6 21v-4h4',
            href: '/products/self-service-automations',
          },
          {
            title: 'IaC management',
            description: 'GitOps for Terraform, Pulumi, and Ansible',
            icon: 'M4 4h16v16H4z M8 9l3 3-3 3 M13 15h3',
            href: '/products/iac-management',
          },
          {
            title: 'Continuous deployment',
            description: 'Get code to clusters with ease',
            icon: 'M4 12h14 M13 6l6 6-6 6',
            href: '/products/continuous-deployment',
          },
          {
            title: 'Platform foundations',
            description: 'Enterprise-grade security and scale',
            icon: 'M3 20h18 M5 20V10l7-5 7 5v10 M9 20v-6h6v6',
            href: '/products/platform-foundations',
          },
        ],
      },
    ],
    feature: {
      title: 'Platform overview',
      description: 'How agents, GitOps, and the fleet console fit together',
      href: '/product',
    },
  },
  {
    label: 'Solutions',
    kind: 'solutions',
    columns: [
      {
        heading: 'By team',
        items: [
          {
            title: 'Platform engineering',
            description: 'Multiply your platform team’s impact',
            icon: 'M12 3l9 5-9 5-9-5z M3 13l9 5 9-5',
            href: '/internal-developer-platform',
          },
          {
            title: 'DevOps & SRE',
            description: 'Ship upgrades, not outages',
            icon: 'M3 12h4l3-8 4 16 3-8h4',
            href: '/solutions/devops-sre',
          },
          {
            title: 'Engineering leaders',
            description: 'Unblock developers and cut infra cost',
            icon: 'M4 20V12 M10 20V6 M16 20v-4 M2 20h20',
            href: '/why-plural/developer-velocity',
          },
          {
            title: 'Security & compliance',
            description: 'Patch CVEs fast and prove compliance',
            icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z',
            href: '/security-and-compliance',
          },
        ],
      },
      {
        heading: 'By industry',
        items: [
          {
            title: 'Edge computing',
            description: 'Kubernetes where connectivity is intermittent',
            icon: 'M12 2v4 M12 18v4 M4.9 4.9l2.8 2.8 M16.3 16.3l2.8 2.8 M2 12h4 M18 12h4 M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z',
            href: '/solutions/edge',
          },
          {
            title: 'Financial services',
            description: 'Governed, auditable change at scale',
            icon: 'M3 10h18 M5 10v8 M10 10v8 M14 10v8 M19 10v8 M3 21h18 M12 3l9 5H3z',
            href: '/financial-services',
          },
          {
            title: 'Healthcare',
            description: 'Secure, compliant platforms for patient data',
            icon: 'M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11z',
            href: '/healthcare',
          },
          {
            title: 'Retail',
            description: 'Uptime and scale through peak demand',
            icon: 'M4 7h16l-1.5 12h-13z M9 7V5a3 3 0 0 1 6 0v2',
            href: '/retail',
          },
        ],
      },
    ],
    feature: {
      title: 'Explore all solutions',
      description: 'One platform, every team and environment',
      href: '/solutions',
    },
  },
  { label: 'Pricing', kind: 'link', href: '/pricing' },
  {
    label: 'Resources',
    kind: 'list',
    items: [
      {
        title: 'Blog',
        description: 'Product updates and Kubernetes guides',
        href: URLS.blog,
      },
      { title: 'Docs', description: 'Set up and run Plural', href: URLS.docs },
      {
        title: 'Customers',
        description: 'How teams run their platforms on Plural',
        href: '/customers',
      },
      {
        title: 'Community & events',
        description: 'Meetups, conferences, and Discord',
        href: '/community',
      },
      {
        title: 'Build vs. buy',
        description: 'The true cost of DIY infrastructure',
        href: '/why-plural/build-vs-buy',
      },
      {
        title: 'Releases',
        description: 'What shipped, on GitHub',
        href: URLS.releases,
      },
    ],
  },
  {
    label: 'Company',
    kind: 'list',
    items: [
      {
        title: 'About',
        description: 'Our mission, team, and investors',
        href: '/about',
      },
      {
        title: 'Careers',
        description: 'Open roles in New York',
        href: '/careers',
      },
      {
        title: 'Contact sales',
        description: 'Book a demo or ask a question',
        href: URLS.bookDemo,
      },
    ],
  },
]

export const footer: { heading: string; links: Link[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Log in', href: URLS.login },
      { label: 'Workbenches', href: '/workbenches' },
      { label: 'Agent Runtime', href: '/products/agent-runtime' },
      { label: 'Observability', href: '/products/observability' },
      { label: 'Fleet Scale GitOps', href: '/products/fleet-scale-gitops' },
      { label: 'Sentinels', href: '/products/sentinels' },
      { label: 'Flows', href: '/products/flows' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'GitHub', href: URLS.github },
      { label: 'Releases', href: URLS.releases },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Customers', href: '/customers' },
      { label: 'Contact', href: URLS.bookDemo },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Docs', href: URLS.docs },
      { label: 'Blog', href: URLS.blog },
      { label: 'Community', href: '/community' },
      { label: 'Resource center', href: '/resources' },
    ],
  },
  {
    heading: 'Social',
    links: [
      { label: 'LinkedIn', href: URLS.linkedin },
      { label: 'YouTube', href: URLS.youtube },
      { label: 'X', href: URLS.x },
      { label: 'Discord', href: URLS.discord },
    ],
  },
]

export const legalLinks: Link[] = [
  { label: 'Privacy', href: '/legal/privacy-policy' },
  { label: 'Terms', href: '/legal/terms-and-conditions' },
]

export const certificates = [
  {
    label: 'CNCF member',
    alt: 'Cloud Native Computing Foundation',
    src: '/images/certificates/cncf.svg',
  },
  {
    label: 'SOC 2 compliant',
    alt: 'AICPA SOC',
    src: '/images/certificates/soc2.svg',
  },
  {
    label: 'GDPR compliant',
    alt: 'GDPR',
    src: '/images/certificates/gdpr.png',
  },
]

export type CustomerLogo = {
  name: string
  src: string
  /** Display size in px at the default 22px logo-row font size. */
  width: number
  height: number
}

// Single-color artwork; rendered as a mask so it takes the surrounding text color.
export const customerLogos: CustomerLogo[] = [
  {
    name: 'Fortune 100 Cybersecurity Company',
    src: '/images/logos/fortune.svg',
    width: 136,
    height: 42,
  },
  {
    name: 'Capital One Ventures',
    src: '/images/logos/capitalone.svg',
    width: 136,
    height: 42,
  },
  {
    name: 'Solo.io',
    src: '/images/logos/solo-io.svg',
    width: 124,
    height: 28,
  },
  {
    name: 'Alloy',
    src: '/images/logos/alloy.svg',
    width: 136,
    height: 42,
  },
  {
    name: 'Justos',
    src: '/images/logos/justos.svg',
    width: 100,
    height: 31,
  },
  {
    name: 'Mott MacDonald',
    src: '/images/logos/mott-macdonald.png',
    width: 81,
    height: 69,
  },
]

export const testimonials = {
  upgrades: {
    quote:
      'We reduced our k8s upgrade cycles from 3 months to 1 day, and delegated them from principal engineers to a single mid-level engineer.',
    name: 'Director of DevOps',
    title: 'Global cybersecurity provider',
  },
  mott: {
    quote:
      'Plural has significantly enhanced our overall efficiency. Our developers focus more on innovation.',
    name: 'Head of Platform Service',
    title: 'Mott MacDonald',
  },
  capitalOne: {
    quote:
      'Plural has its eye on automation, security and controls, with large-scale enterprises in mind.',
    name: 'Sean Leach',
    title: 'Capital One Ventures',
  },
} satisfies Record<string, Testimonial>

export const impactStats: Stat[] = [
  { value: '88%', label: 'Lower operational costs' },
  { value: '95%', label: 'Less day-2 operations work' },
  { value: '80%', label: 'More engineering bandwidth' },
  { value: '~30x', label: 'ROI over 3 years' },
]

export const latestPosts = [
  {
    tag: 'Newest',
    title: 'Introducing Plural Workbenches: build-your-own agents for DevOps',
    description:
      'Always-on agents that investigate alerts, fix environment issues, and close tickets.',
    href: URLS.workbenchesAnnouncement,
  },
  {
    tag: 'Guide',
    title: 'Running at the edge with Plural: a practical guide',
    description:
      'Kubernetes where connectivity is intermittent and expertise is remote.',
    href: 'https://www.plural.sh/blog/running-kubernetes-at-the-edge-with-plural-a-practical-guide-2/',
  },
  {
    tag: 'Product',
    title: 'Introducing Flows: your team’s microservice command center',
    description: 'Group related microservices and their pipeline in one place.',
    href: 'https://www.plural.sh/blog/introducing-flows-your-teams-microservice-command-center/',
  },
]
