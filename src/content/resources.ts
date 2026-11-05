// Downloadable reports, guides, and datasheets for /resources/reports-and-guides.
// PDFs live in public/resources; covers in public/images/resources.

export type AssetKind = 'Guides' | 'Case studies' | 'Datasheets'

export type ResourceAsset = {
  kind: AssetKind
  /** Small caps label on the card. */
  type: string
  title: string
  blurb: string
  cta: string
  href: string
  cover: { src: string; alt: string; width: number; height: number }
}

export const featuredGuide = {
  type: 'Evaluation guide',
  title: 'Evaluating infrastructure autonomy',
  intro: [
    'Most platform teams are being asked the same question this year, usually by someone from senior leadership in the organization: “what is our plan for AI in infrastructure?” The question is harder than it looks, because the market has converged on a single word, autonomy, and different vendors use it to mean very different things.',
    'This guide gives you a way to compare different systems and tools. It sets out:',
  ],
  highlights: [
    {
      count: '5',
      title: 'Five stages of infrastructure autonomy',
      detail: 'so you can locate where your team operates today',
    },
    {
      count: '6',
      title: 'Six evaluation criteria',
      detail: 'that determine which stage a system can actually reach',
    },
    {
      count: '15',
      title: 'A set of questions',
      detail: 'to take into vendor calls',
    },
  ],
  tagline: 'Walk into your next AI conversation with a plan.',
  audience:
    'CTOs, VPs and heads of platform engineering, DevOps leads, and SRE leads.',
  cta: 'Get the evaluation guide',
  href: '/resources/Plural-Evaluating-Infrastructure-Autonomy.pdf',
  fileInfo: 'PDF · 17 pages · 137 KB',
  cover: {
    src: '/images/resources/evaluating-infrastructure-autonomy.png',
    alt: 'Cover of Evaluating Infrastructure Autonomy, a Plural evaluation guide',
    width: 935,
    height: 1210,
  },
  contents: [
    'Why autonomy is now a platform decision',
    'The infrastructure autonomy curve',
    'What to evaluate: six criteria',
    'Questions to take into the room',
    'Comparing approaches to infrastructure autonomy',
    'How Plural approaches this',
  ],
}

export const assets: ResourceAsset[] = [
  {
    kind: 'Guides',
    type: 'Evaluation guide',
    title: featuredGuide.title,
    blurb:
      'A vendor-neutral framework for putting agents to work on your estate.',
    cta: featuredGuide.cta,
    href: featuredGuide.href,
    cover: {
      ...featuredGuide.cover,
      alt: 'Cover of Evaluating Infrastructure Autonomy',
    },
  },
  {
    kind: 'Case studies',
    type: 'Case study',
    title:
      'How a Fortune 50 financial services company reduced Kubernetes maintenance by 95%',
    blurb:
      '88% less Kubernetes overhead, $2M in annual savings, and ~30x ROI over three years.',
    cta: 'Read the case study',
    href: '/resources/Plural-Financial-Services-Case-Study.pdf',
    cover: {
      src: '/images/resources/financial-services-case-study.jpg',
      alt: 'Cover of the Plural financial services case study',
      width: 700,
      height: 906,
    },
  },
  {
    kind: 'Datasheets',
    type: 'Datasheet',
    title: 'What is Plural?',
    blurb:
      'One pane of glass for Kubernetes: GitOps deployment, IaC, monitoring, self-service, and AI agents across your fleet.',
    cta: 'Get the datasheet',
    href: '/resources/Plural-What-Is-Plural-Datasheet.pdf',
    cover: {
      src: '/images/resources/what-is-plural-datasheet.jpg',
      alt: 'Cover of the What is Plural? datasheet',
      width: 700,
      height: 906,
    },
  },
]
