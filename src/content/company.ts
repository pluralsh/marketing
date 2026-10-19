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

export type TeamMember = {
  name: string
  role: string
  group: TeamGroup
  /** Square headshot in /public; falls back to initials when missing. */
  photo?: string
}

export const team: TeamMember[] = [
  {
    name: 'Sam Weaver',
    role: 'CEO & Co-founder',
    group: 'Leadership',
    photo: '/images/people/sam-weaver.jpg',
  },
  {
    name: 'Michael Guarino',
    role: 'CTO & Co-founder',
    group: 'Leadership',
    photo: '/images/people/michael-guarino.jpg',
  },
  {
    name: 'Aaron Smallberg',
    role: 'Chief of Staff',
    group: 'Leadership',
    photo: '/images/people/aaron-smallberg.jpg',
  },
  {
    name: 'Marcin Maciszczyk',
    role: 'Fullstack Engineer',
    group: 'Engineering & product',
    photo: '/images/people/marcin-maciszczyk.jpg',
  },
  {
    name: 'Sebastian Florek',
    role: 'Fullstack Engineer',
    group: 'Engineering & product',
    photo: '/images/people/sebastian-florek.jpg',
  },
  {
    name: 'Lukasz Zajaczkowski',
    role: 'Software Engineer',
    group: 'Engineering & product',
    photo: '/images/people/lukasz-zajaczkowski.jpg',
  },
  {
    name: 'Kinjal Haldar',
    role: 'Software Engineer',
    group: 'Engineering & product',
    photo: '/images/people/kinjal-haldar.jpg',
  },
  {
    name: 'Anna Nguyen',
    role: 'Senior Product Designer',
    group: 'Engineering & product',
    photo: '/images/people/anna-nguyen.jpg',
  },
  {
    name: 'John Blackwell',
    role: 'Sales Engineer',
    group: 'Go-to-market',
    photo: '/images/people/john-blackwell.jpg',
  },
  {
    name: 'Christopher Akinrinade',
    role: 'Sales Engineer',
    group: 'Go-to-market',
    photo: '/images/people/christopher-akinrinade.jpg',
  },
  {
    name: 'Paul Ciolino',
    role: 'Account Executive',
    group: 'Go-to-market',
    photo: '/images/people/paul-ciolino.jpg',
  },
  {
    name: 'Connor Murphy',
    role: 'Sales Development Representative',
    group: 'Go-to-market',
    photo: '/images/people/connor-murphy.jpg',
  },
  {
    name: 'Alex Jacoboski',
    role: 'Sales Development Representative',
    group: 'Go-to-market',
    photo: '/images/people/alex-jacoboski.jpg',
  },
  {
    name: 'David Greeley',
    role: 'Sales Development Representative',
    group: 'Go-to-market',
    photo: '/images/people/david-greeley.jpg',
  },
]

export const investors: { name: string; contact: string; photo?: string }[] = [
  {
    name: 'Primary Ventures',
    contact: 'Brian Schecter, Partner',
    photo: '/images/people/brian-schecter.jpg',
  },
  {
    name: 'SignalFire',
    contact: 'Oana Olteanu, Partner',
    photo: '/images/people/oana-olteanu.jpg',
  },
  {
    name: 'Capital One Ventures',
    contact: 'Sean Leach, Partner',
    photo: '/images/people/sean-leach.jpg',
  },
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

// Order matters: with dense packing this fills a 4×3 desktop grid and a
// 2-column mobile grid without gaps. Portrait shots are tall so faces and
// subjects at the bottom of the frame both stay visible.
export const teamPhotos: TeamPhoto[] = [
  {
    src: '/images/team/kubecon-booth.jpg',
    alt: 'Presenting at the Plural KubeCon booth',
    width: 1200,
    height: 1754,
    span: 'tall',
  },
  {
    src: '/images/team/billiards-night.jpg',
    alt: 'The team at a pool and ping-pong game night',
    width: 1024,
    height: 420,
    span: 'wide',
    position: 'center top',
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
    src: '/images/team/team-dinner.jpg',
    alt: 'The team out to dinner',
    width: 1200,
    height: 900,
  },
  {
    src: '/images/team/robot-dog.jpg',
    alt: 'Two teammates looking at a robot dog',
    width: 1200,
    height: 1600,
    span: 'tall',
    position: '40% center',
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
    src: '/images/team/pizza-party.jpg',
    alt: 'Pizza party at the office',
    width: 1200,
    height: 943,
  },
]

export const aboutHeroPhoto = {
  src: '/images/team/kubecon-eu-team.jpg',
  alt: 'The Plural team at the Plural conference booth',
  width: 2400,
  height: 1800,
}

export const hiringEmail = 'hiring@plural.sh'
