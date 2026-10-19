import type { Job } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const customerSuccess = {
  slug: 'customer-success',
  title: 'Customer Success Manager',
  location: 'New York',
  team: 'Customer Success',
  meta: {
    title: 'Join The Team',
    description:
      'Explore remote positions in engineering, design, product, marketing, and sales. Join a team building next-gen Kubernetes management tools. Full benefits & flexibility.',
    noindex: false,
  },
  body: [
    {
      type: 'h3',
      content: ['Who we are'],
    },
    {
      type: 'p',
      content: [
        '\nFounded in New York and backed by top-tier venture capital firms, Plural is the AI-native operating system for enterprise infrastructure. The AI era has triggered a 10x explosion in code output, but the infrastructure underneath is still managed at human speed. Plural changes that — giving DevOps and platform teams an agentic execution layer that reasons across their entire estate and takes action faster and safer than any human team can.',
      ],
    },
    {
      type: 'p',
      content: [
        'Our platform unifies the fragmented context spread across Kubernetes, Terraform, Git, observability, ticketing, and the cloud console into a single semantic graph. On top of that graph, we run always-on AI agents that investigate alerts, remediate CVEs, automate fleet-wide upgrades, and close infrastructure tickets — every action grounded in your real environment and surfaced as a reviewable pull request. Most tools stop at observation. Plural executes.',
      ],
    },
    {
      type: 'p',
      content: [
        'The Plural team comprises exceptional talent from industry leaders such as MongoDB, Facebook, Amazon, and Bloomberg. Our values of transparency, inclusivity, open-mindedness, kindness, and excellence drive us to build something genuinely new at the intersection of AI and enterprise infrastructure.',
      ],
    },
    {
      type: 'h3',
      content: ['What we’re looking for'],
    },
    {
      type: 'p',
      content: [
        "\nWe're looking for a Customer Success Manager who treats retention and expansion as a craft, not a quota. This is a high-ownership role on a small team. You'll be the commercial owner of a portfolio enterprise accounts, accountable for adoption, gross retention, and net dollar retention. You'll work shoulder to shoulder with our Forward Deployed Engineers on technical execution, with Sales on expansion, and with Product on what we build next. If you're energised by complex enterprise environments, get satisfaction from making customers genuinely successful, and want to help build the CS function from the ground up — we want to hear from you.",
      ],
    },
    {
      type: 'h3',
      content: ['What you can expect'],
    },
    {
      type: 'ul',
      items: [
        [
          'Own a portfolio of strategic enterprise accounts end-to-end — from kickoff through renewal and expansion — and carry a number for gross retention and NDR.',
        ],
        [
          'Build deep, trusted relationships with platform engineering leaders and the executives who sponsor them.',
        ],
        [
          "Drive measurable business outcomes by translating Plural's capabilities into ROI narratives that platform teams use to defend and grow their footprint internally.",
        ],
        [
          "Run executive business reviews that customers actually want to attend, anchored in usage data, outcomes delivered, and a credible roadmap for what's next.",
        ],
        [
          'Partner with Forward Deployed Engineers to land deployments quickly and with Sales to surface and close expansion opportunities across new teams, environments, and use cases.',
        ],
        [
          'Be the voice of the customer inside Plural — feeding structured feedback to Product and Engineering.',
        ],
        [
          'Work directly with the CEO and CTO on account strategy for our most strategic logos, and help shape how we run CS at the next stage of growth.',
        ],
        [
          'Help build the function — playbooks, health scoring, onboarding motion, tooling, hiring — as we scale from a handful of CSMs to a real team.',
        ],
      ],
    },
    {
      type: 'h3',
      content: ['What you’ll need'],
    },
    {
      type: 'ul',
      items: [
        [
          '4–7 years in Customer Success, Technical Account Management, or post-sales solutions roles at a B2B SaaS company, with a track record of owning enterprise accounts and hitting retention and expansion targets.',
        ],
        [
          "Experience working with technical buyers in DevOps, platform engineering, SRE, or cloud infrastructure — you don't need to write Terraform, but you need to understand what your customers are actually trying to do with it.",
        ],
        [
          'A commercial instinct: you spot expansion before the customer asks for it, and you know how to navigate procurement, security review, and renewal cycles at large regulated enterprises.',
        ],
        [
          'A bias for ownership and structured thinking. Small team, big accounts, lots of unfilled whitespace — you should find that energising, not overwhelming.',
        ],
        [
          'Bonus: prior experience at an early-stage startup, exposure to AI/agent products, or a background in regulated verticals (financial services, healthcare, public sector).',
        ],
      ],
    },
    {
      type: 'h3',
      content: ['What we offer'],
    },
    {
      type: 'ul',
      items: [
        ['Competitive salary, commission, and equity'],
        ['Unlimited PTO'],
        ['Healthcare, vision, and dental'],
        ['Opportunities for international travel'],
        ['A low-ego, high-output superstar team'],
      ],
    },
    {
      type: 'h3',
      content: ['Compensation'],
    },
    {
      type: 'p',
      content: [
        "\nThe base salary range for this position is $150,000 - $200,000 + variable (renewals and expansion based) commission. An individual's base pay depends on various factors including experience, knowledge, skills, and abilities of the applicant, and does not include other forms of compensation, such as equity and commission.",
      ],
    },
  ],
  apply: {
    label: 'hiring@plural.sh',
    href: 'mailto:hiring@plural.sh',
  },
  equality:
    'Plural embraces diversity and equal opportunity. We are committed to building a team that represents a variety of backgrounds, perspectives, and skills. We believe the more inclusive we are, the better our company will be.',
} satisfies Job

export default customerSuccess
