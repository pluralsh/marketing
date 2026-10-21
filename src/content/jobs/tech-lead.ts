import type { Job } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const techLead = {
  slug: 'tech-lead',
  title: 'Engineering Lead',
  location: 'New York',
  team: 'Engineering',
  meta: {
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
        "\nWe're looking for a dynamic Tech Lead who is both comfortable engaging directly with customers and working with the engineering team to improve efficiency and output. This role requires a unique blend of technical prowess, customer-facing skills, stakeholder management, and a collaborative spirit, as you'll be working closely with our CTO and CEO to showcase the transformative impact of our solutions and make our customer support scalable.",
      ],
    },
    {
      type: 'p',
      content: [
        'The ideal candidate will possess a deep understanding of Kubernetes, cloud environments, and infrastructure management, combined with the ability to communicate complex concepts to a variety of audiences.',
      ],
    },
    {
      type: 'p',
      content: [
        "If you're passionate about driving technological adoption, building strong customer relationships, and playing a pivotal role in our growth story, we want to hear from you.",
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
          'Play a pivotal role in securing pilot wins by getting hands on keyboard and implementing solutions, directly influencing the success and growth of Plural.',
        ],
        [
          'Work closely with Plural’s leadership, including the CTO and CEO, gaining unique insights and contributing to high-level strategic decisions.',
        ],
        [
          "Be part of a forward-thinking team that's pushing the boundaries of Kubernetes management.",
        ],
        [
          'Develop and nurture strong relationships with clients, understanding their needs and use cases, and demonstrating how our solutions can solve their challenges.',
        ],
        [
          'Enhance your expertise in Kubernetes, cloud environments, and infrastructure management through hands-on experience and challenges.',
        ],
        [
          'Contribute to the shaping of our product and services based on customer feedback.',
        ],
        [
          'Join a supportive team that values innovation, open communication, and shared success.',
        ],
        [
          'Help build and scale the forward deployment and customer support function by identifying and implementing best practices, processes, and tools, and contributing to the hiring and onboarding of additional team members as this function grows.',
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
        ['+5 years of experience in software engineering'],
        ['Deep kubernetes knowledge'],
        [
          'Excellent communication skills with ability to engage with customers directly',
        ],
        [
          'Comfort in building relationships and driving adoption of technical products.',
        ],
        ["A bachelor's degree in a relevant discipline"],
      ],
    },
    {
      type: 'h3',
      content: ['Nice-to-haves'],
    },
    {
      type: 'ul',
      items: [
        [
          'Experience programming elixir, haskell, or another functional language (our server side code is currently written in elixir)',
        ],
        [
          'Experience with golang and the kubernetes ecosystem, we currently maintain 2 core kubernetes operators and a few others for auxiliary user experiences, alongside a golang CLI',
        ],
        ['Experience at startups'],
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
        [
          'Opportunities for international travel\nA low-ego, high-output superstar team',
        ],
      ],
    },
    {
      type: 'h3',
      content: ['Compensation'],
    },
    {
      type: 'p',
      content: [
        "\nThe base salary range for this position is $175,000 - $200,000. An individual's base pay depends on various factors including experience, knowledge, skills, and abilities of the applicant, and does not include other forms of compensation, such as equity and commission.",
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

export default techLead
