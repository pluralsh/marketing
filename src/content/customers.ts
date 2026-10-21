export const customerStories = [
  {
    company: 'Mott MacDonald',
    title: 'How Mott MacDonald built its developer platform on Plural',
    summary:
      'Plural became the foundation of Digital Workspaces, taking Kubernetes fleet management off developers’ plates.',
    href: '/customers/mott-macdonald',
    image: {
      src: '/images/customers/mott-macdonald.jpg',
      width: 1600,
      height: 1000,
    },
  },
  {
    company: 'Global cybersecurity leader',
    title: 'Kubernetes upgrades cut from 3 months to 1 day',
    summary:
      'Upgrades moved from principal engineers to a single mid-level engineer.',
    href: '/customers/enterprise-cybersecurity',
    image: {
      src: '/images/content/cyber-case-study-48b74a.jpg',
      width: 848,
      height: 530,
    },
  },
  {
    company: 'Fortune 50 financial services company',
    title: 'Kubernetes maintenance reduced by 95%',
    summary:
      'Governed, auditable change across a regulated, large-scale estate.',
    href: '/customers/large-enterprise-financial-services',
    image: {
      src: '/images/content/plural-fs-701915.jpg',
      width: 848,
      height: 530,
    },
  },
]

export const mottMacDonald = {
  company: 'Mott MacDonald',
  facts: [
    {
      term: 'Industry',
      detail: 'Engineering, management, and development consultancy',
    },
    { term: 'Footprint', detail: 'Global' },
    {
      term: 'Platform',
      detail: 'Digital Workspaces, an internal developer platform',
    },
    { term: 'Led by', detail: 'Simon Bell, Head of Platform Services' },
  ],
  usesPlural: ['Fleet management', 'Self-service infra', 'Data provisioning'],
  atAGlance: [
    { title: 'Faster delivery', body: 'Teams ship new features faster.' },
    {
      title: 'Less maintenance',
      body: 'Significantly less time spent keeping clusters running.',
    },
    {
      title: 'Room to grow',
      body: 'More clusters without losing performance or reliability.',
    },
  ],
  extensions: [
    {
      title: 'Kubernetes fleet management',
      body: 'One place to run every cluster.',
    },
    {
      title: 'Hardened GitHub repos',
      body: 'Provisioned to meet strict cybersecurity standards.',
    },
    {
      title: 'Data solutions',
      body: 'Databases and data engineering tooling on demand.',
    },
  ],
  speaker: {
    name: 'Simon Bell',
    title: 'Head of Platform Services, Mott MacDonald',
  },
  image: {
    src: '/images/customers/mott-macdonald.jpg',
    alt: 'Mott MacDonald case study',
    width: 1600,
    height: 1000,
  },
}

export const enterpriseCybersecurity = {
  company: 'Global cybersecurity leader',
  facts: [
    { term: 'Industry', detail: 'Cybersecurity' },
    { term: 'Footprint', detail: 'Global' },
    {
      term: 'Compliance',
      detail: 'SOC 2 and FedRAMP',
    },
    {
      term: 'Challenge',
      detail: 'Fleet-wide Kubernetes upgrades taking up to 3 months',
    },
  ],
  usesPlural: [
    'Automated upgrades',
    'Policy & compliance',
    'Fleet lifecycle management',
  ],
  atAGlance: [
    {
      title: '3 months → 1 day',
      body: 'Cluster upgrades that used to take a quarter now finish in a day.',
    },
    {
      title: 'Senior time freed',
      body: 'Routine maintenance shifted from staff engineers to mid-level engineers.',
    },
    {
      title: 'FedRAMP ready',
      body: 'Automated 30-day patching keeps clusters inside compliance windows.',
    },
  ],
  image: {
    src: '/images/content/cyber-case-study-48b74a.jpg',
    alt: 'Cybersecurity case study',
    width: 848,
    height: 530,
  },
}

export const largeEnterpriseFinancialServices = {
  company: 'Fortune 50 financial services company',
  facts: [
    { term: 'Industry', detail: 'Financial services' },
    { term: 'Footprint', detail: 'Multi-cloud and on-premises' },
    {
      term: 'Scale',
      detail: 'Hundreds of Kubernetes clusters',
    },
    {
      term: 'Compliance',
      detail: 'PCI and SOC 2',
    },
  ],
  usesPlural: [
    'Self-service provisioning',
    'GitOps workflows',
    'AI-powered troubleshooting',
  ],
  atAGlance: [
    {
      title: '95% less maintenance',
      body: 'Routine Kubernetes tasks automated across the estate.',
    },
    {
      title: '88% lower overhead',
      body: 'Centralized control cut day-to-day management cost.',
    },
    {
      title: '~30x ROI',
      body: '$2M in annual savings over three years.',
    },
  ],
  image: {
    src: '/images/content/plural-fs-701915.jpg',
    alt: 'Financial services case study',
    width: 848,
    height: 530,
  },
}
