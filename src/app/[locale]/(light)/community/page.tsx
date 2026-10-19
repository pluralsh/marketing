import type { Metadata } from 'next'

import Image from 'next/image'

import { EventList } from '@/components/interactive/EventList'
import { LinkCards } from '@/components/sections/LinkCards'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import {
  channels,
  events,
  MEETUP_CALENDAR,
  SPEAKER_FORM,
} from '@/content/community'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/community', {
  title: 'Community & events | Plural',
  description:
    'Join the monthly Plural x Kubernetes meetup, and find us at KubeCon, Ignite, and re:Invent.',
  noindex: true,
})

export default function CommunityPage() {
  return (
    <>
      <section className="px-gutter grid items-center gap-10 pt-[clamp(48px,7vw,88px)] pb-14 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Eyebrow>Community &amp; events</Eyebrow>
          <h1 className="text-heading-xl m-0 text-[clamp(40px,5.5vw,72px)] text-balance">
            Join us at our next <Accent>meetup</Accent>
          </h1>
          <p className="text-body m-0 text-[17px]">
            We’d love to have you at the next Plural x Kubernetes meetup! These
            monthly gatherings feature guest speakers and a friendly audience of
            platform engineers, app developers, product designers, academics,
            and entrepreneurs deep in the Kubernetes space. Past talks have
            covered security, agentic AI, automation, multi-cluster ops, and
            more. Plus, we’ve got pizza 🍕
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={MEETUP_CALENDAR}>See upcoming meetups</ButtonLink>
            <ButtonLink
              href={SPEAKER_FORM}
              variant="secondary"
            >
              Become a speaker
            </ButtonLink>
          </div>
        </div>
        <Image
          src="/images/team/meetup.jpg"
          alt="A Plural x Kubernetes meetup"
          width={1400}
          height={787}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-[16/10] w-full rounded-sm object-cover"
          priority
        />
      </section>

      <Section
        id="events"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Upcoming"
          title="Where to find us"
          size="lg"
        />
        <EventList events={events} />
      </Section>

      <Section className="flex flex-col items-start gap-5">
        <SectionHeading
          eyebrow="Speak at a meetup"
          title="Have something to share?"
          description="Tell us about a problem you solved, a tool you built, or a lesson from production. Friendly crowd, guaranteed."
          size="lg"
        />
        <ButtonLink
          href={SPEAKER_FORM}
          variant="dark"
        >
          Sign up to speak
        </ButtonLink>
      </Section>

      <section className="rule-top">
        <SectionHeading
          title="Stay up to date"
          size="lg"
          className="px-gutter pt-section pb-10"
        />
        <LinkCards
          items={channels}
          minColumn="180px"
        />
      </section>
    </>
  )
}
