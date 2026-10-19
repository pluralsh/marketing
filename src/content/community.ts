import { URLS } from './site'

export const MEETUP_CALENDAR = 'https://luma.com/calendar/cal-pjLWe4MB6JYHP4G'
export const SPEAKER_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSe-Xez5GS0cgDdNK6X0RO6SJC4skDDJlrvVaD9p1VAU6bT-MQ/viewform?usp=header'

export type CommunityEvent = {
  type: 'Meetup' | 'Conference'
  name: string
  where: string
  /** ISO dates; recurring events have none. */
  start?: string
  end?: string
  dateLabel: { month: string; days: string }
  href: string
  cta?: string
}

export const events: CommunityEvent[] = [
  {
    type: 'Meetup',
    name: 'Plural × Kubernetes meetup',
    where: 'New York',
    dateLabel: { month: 'MONTHLY', days: '🍕' },
    href: MEETUP_CALENDAR,
    cta: 'RSVP on Luma ↗',
  },
  {
    type: 'Conference',
    name: 'KubeCon + CloudNativeCon North America',
    where: 'Salt Lake City',
    start: '2026-11-09',
    end: '2026-11-12',
    dateLabel: { month: 'NOV', days: '9–12' },
    href: 'https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america-2026/',
  },
  {
    type: 'Conference',
    name: 'Microsoft Ignite',
    where: 'San Francisco',
    start: '2026-11-17',
    end: '2026-11-20',
    dateLabel: { month: 'NOV', days: '17–20' },
    href: 'https://ignite.microsoft.com/en-US/home',
  },
  {
    type: 'Conference',
    name: 'AWS re:Invent',
    where: 'Las Vegas',
    start: '2026-11-30',
    end: '2026-12-04',
    dateLabel: { month: 'NOV–DEC', days: '30–4' },
    href: 'https://aws.amazon.com/events/reinvent/',
  },
]

export const channels = [
  { label: 'Discord', title: 'Chat with the community', href: URLS.discord },
  { label: 'GitHub', title: 'Star and contribute', href: URLS.github },
  { label: 'YouTube', title: 'Talks and demos', href: URLS.youtube },
  { label: 'LinkedIn', title: 'Company news', href: URLS.linkedin },
  { label: 'X', title: 'Quick updates', href: URLS.x },
  { label: 'Docs', title: 'Learn the platform', href: URLS.docs },
]
