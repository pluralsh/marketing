export const values = [
  {
    title: 'Transparency',
    body: 'We share open, honest information about our processes, products, and decisions, and we keep our community and stakeholders in the loop.',
  },
  {
    title: 'Kindness and respect',
    body: 'We foster a supportive, inclusive environment where everyone is treated with empathy and dignity, and we lift each other up inside the team and across the community.',
  },
  {
    title: 'Inclusivity',
    body: 'We value every community member’s contributions and work to remove barriers, so everyone has an equal opportunity to succeed.',
  },
  {
    title: 'Excellence',
    body: 'We hold a high bar for our products and experiences, embrace hard problems, and keep looking for ways to exceed expectations.',
  },
  {
    title: 'Open mindedness and exploration',
    body: 'We stay curious, question our assumptions, and explore new ideas and technologies to find better ways to work.',
  },
]

export type TeamGroup = 'Leadership' | 'Engineering & product' | 'Go-to-market'

export const team: { name: string; role: string; group: TeamGroup }[] = [
  { name: 'Sam Weaver', role: 'CEO & Co-founder', group: 'Leadership' },
  { name: 'Michael Guarino', role: 'CTO & Co-founder', group: 'Leadership' },
  { name: 'Aaron Smallberg', role: 'Chief of Staff', group: 'Leadership' },
  {
    name: 'Marcin Maciszczyk',
    role: 'Fullstack Engineer',
    group: 'Engineering & product',
  },
  {
    name: 'Sebastian Florek',
    role: 'Fullstack Engineer',
    group: 'Engineering & product',
  },
  {
    name: 'Lukasz Zajaczkowski',
    role: 'Software Engineer',
    group: 'Engineering & product',
  },
  {
    name: 'Kinjal Haldar',
    role: 'Software Engineer',
    group: 'Engineering & product',
  },
  {
    name: 'Anna Nguyen',
    role: 'Senior Product Designer',
    group: 'Engineering & product',
  },
  { name: 'John Blackwell', role: 'Sales Engineer', group: 'Go-to-market' },
  {
    name: 'Christopher Akinrinade',
    role: 'Sales Engineer',
    group: 'Go-to-market',
  },
  { name: 'Paul Ciolino', role: 'Account Executive', group: 'Go-to-market' },
  {
    name: 'Connor Murphy',
    role: 'Sales Development Representative',
    group: 'Go-to-market',
  },
  {
    name: 'Alex Jacoboski',
    role: 'Sales Development Representative',
    group: 'Go-to-market',
  },
  {
    name: 'David Greeley',
    role: 'Sales Development Representative',
    group: 'Go-to-market',
  },
]

export const investors = [
  { name: 'Primary Ventures', contact: 'Brian Schecter, Partner' },
  { name: 'SignalFire', contact: 'Oana Olteanu, Partner' },
  { name: 'Capital One Ventures', contact: 'Sean Leach, Partner' },
  { name: 'Venture Guides', contact: 'Investor' },
]

export const benefits = [
  {
    title: 'Unlimited PTO',
    body: 'Plus sick leave and generous parental leave. Breaks make us better at the work.',
  },
  {
    title: 'Fully covered benefits',
    body: 'Health, vision, and dental insurance, plus a 401k, covered by Plural.',
  },
  {
    title: 'Growth budget',
    body: 'Reimbursement for personal and career development, plus conferences and networking events.',
  },
]

export type TeamPhoto = {
  src: string
  alt: string
  width: number
  height: number
  /** Gallery tile shape; defaults to a single cell. */
  span?: 'tall' | 'wide'
  /** CSS object-position, to keep faces in frame when the tile crops. */
  position?: string
}

// Order matters: with dense packing this fills a 4×3 desktop grid (tall tiles
// on the outer columns) and a 2-column mobile grid without gaps.
export const teamPhotos: TeamPhoto[] = [
  {
    src: '/images/team/kubecon-booth.jpg',
    alt: 'Presenting at the Plural KubeCon booth',
    width: 1200,
    height: 1754,
    span: 'tall',
  },
  {
    src: '/images/team/team-dinner.jpg',
    alt: 'The team out to dinner',
    width: 1200,
    height: 900,
    span: 'wide',
  },
  {
    src: '/images/team/kubecon-eu-booth-waving.jpg',
    alt: 'Teammates working the Plural conference booth',
    width: 768,
    height: 1024,
    span: 'tall',
    position: '60% center',
  },
  {
    src: '/images/team/pizza-party.jpg',
    alt: 'Pizza party at the office',
    width: 1200,
    height: 943,
  },
  {
    src: '/images/team/robot-dog.jpg',
    alt: 'Two teammates looking at a robot dog',
    width: 1200,
    height: 1600,
  },
  {
    src: '/images/team/kcd-conference.jpg',
    alt: 'The team at KCD',
    width: 1200,
    height: 900,
    span: 'wide',
    position: 'center 20%',
  },
  {
    src: '/images/team/team-game-night.jpg',
    alt: 'The team at a pool and ping-pong game night',
    width: 1024,
    height: 420,
    span: 'wide',
  },
]

export const aboutHeroPhoto = {
  src: '/images/team/kubecon-eu-booth.jpg',
  alt: 'The Plural team at the Plural conference booth',
  width: 2400,
  height: 1800,
}

export const hiringEmail = 'hiring@plural.sh'
