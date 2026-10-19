import type { Metadata } from 'next'

import Image from 'next/image'

import { RoleList } from '@/components/interactive/RoleList'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { PageHero } from '@/components/sections/PageHero'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import { benefits, hiringEmail, teamPhotos } from '@/content/company'
import { jobs } from '@/content/jobs'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/careers', {
  title: 'Careers | Plural',
  description:
    'Join a small team building how every company will manage its infrastructure.',
})

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build what’s <Accent>next</Accent> for infrastructure
          </>
        }
        description="We believe platform engineering will be governed by humans and scaled by agents. Join a small team building how every company will manage its infrastructure."
        actions={
          <>
            <ButtonLink href="#roles">
              See open roles
              <span className="font-mono text-xs opacity-80">
                {jobs.length}
              </span>
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="secondary"
            >
              Meet the team
            </ButtonLink>
          </>
        }
      />

      <Section
        id="roles"
        className="flex flex-col gap-8"
      >
        <RoleList
          roles={jobs.map(({ slug, title, team, location }) => ({
            slug,
            title,
            team,
            location,
          }))}
        />
        <p className="text-body m-0">
          No match right now? Send a general application to{' '}
          <a
            href={`mailto:${hiringEmail}`}
            className="text-accent-ink underline underline-offset-4"
          >
            {hiringEmail}
          </a>
          .
        </p>
      </Section>

      <section className="rule-top">
        <SectionHeading
          eyebrow="Benefits"
          title="Built for the long run"
          size="lg"
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={benefits}
          minColumn="260px"
          emphasis
        />
      </section>

      <Section className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Life at Plural"
          title="A tight-knit team"
          size="lg"
          action={<ArrowLink href="/about">Our values and team</ArrowLink>}
        />
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          {teamPhotos.map((photo, i) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 768px) 50vw, 100vw"
              className={cn(
                'size-full rounded-sm object-cover',
                i === 0 && 'row-span-2',
                i === 4 && 'col-span-2'
              )}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
