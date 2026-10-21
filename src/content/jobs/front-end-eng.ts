import type { Job } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const frontEndEng = {
  slug: 'front-end-eng',
  title: 'Front End Engineer',
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
        "\nWe're looking for a dynamic React/Fullstack Engineer to help build out our user experience and turn DevOps from a rickety, archaic practice to a modern, pleasant experience. We're excited to recruit individuals who are ready to have a significant impact on the Plural platform at its earliest stages and partner closely with a small team to build quickly.  We believe one of our main competitive advantages is attention to detail in our frontend experience and want to invest heavily in that function.",
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
          'Build a beautiful UI on top of a modern, scalable gitops deployment engine, enhance our deployment pipeline interface, build cost management dashboards for kubernetes fleets, build a complete kubernetes dashboard, and much, much more.',
        ],
        ['Use of modern React + Apollo GraphQl for the front end'],
        [
          'Work on the cutting edge of cloud-native computing by extensively leveraging Kubernetes',
        ],
        [
          'Opportunity to work in Elixir server-side or kubernetes level golang code as well',
        ],
        ['Lean team with huge opportunities for growth as the team scales up'],
      ],
    },
    {
      type: 'h3',
      content: ['What you’ll need'],
    },
    {
      type: 'ul',
      items: [
        ['2+ yrs React experience'],
        ['Knowledge of js build systems (yarn, babel, etc)'],
        ['Knowledge of modern source control (git)'],
        ['react animation/svg knowledge (nivo, recharts, react motion)'],
        ['GraphQl (apollo, relay, subscriptions)'],
      ],
    },
    {
      type: 'h3',
      content: ['Nice-to-haves'],
    },
    {
      type: 'ul',
      items: [
        ['Kubernetes experience - (core api, CRDs, operator framework, helm)'],
        ['elixir/phoenix/absinthe experience'],
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
        "\nThe base salary range for this position is $140,000 - $180,000. An individual's base pay depends on various factors including experience, knowledge, skills, and abilities of the applicant, and does not include other forms of compensation, such as equity and commission.",
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

export default frontEndEng
