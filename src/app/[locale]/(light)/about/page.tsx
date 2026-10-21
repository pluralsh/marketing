import type { Metadata } from 'next'

import Image from 'next/image'

import { TeamGrid } from '@/components/interactive/TeamGrid'
import { CellGrid } from '@/components/sections/CellGrid'
import { PageHero } from '@/components/sections/PageHero'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import {
  aboutHeroPhoto as heroPhoto,
  investors,
  team,
  values,
} from '@/content/company'
import { jobs } from '@/content/jobs'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/about', {
  title: 'About | Plural',
  description:
    'Our mission is to make elite DevOps available to every team by removing tooling complexity.',
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Plural"
        title={
          <>
            Governed by humans. Scaled by <Accent>agents</Accent>.
          </>
        }
        description="That’s how we think platform engineering will work. Our mission is to make elite DevOps available to every team by removing tooling complexity."
        actions={
          <>
            <ButtonLink href="/careers">
              See open roles
              <span className="font-mono text-xs opacity-80">
                {jobs.length}
              </span>
            </ButtonLink>
            <ButtonLink
              href="#team"
              variant="secondary"
            >
              Meet the team
            </ButtonLink>
          </>
        }
      />

      <div className="px-[clamp(12px,2vw,24px)] pb-14">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          width={heroPhoto.width}
          height={heroPhoto.height}
          sizes="(min-width: 1200px) 1150px, 100vw"
          className="aspect-[21/9] w-full rounded-sm object-cover object-[center_35%]"
          priority
        />
      </div>

      <Section className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="What we value"
          title="Five things we hold each other to"
          size="lg"
          className="self-start md:sticky md:top-28"
        />
        <ol className="border-line m-0 list-none border-t p-0">
          {values.map((value, i) => (
            <li key={value.title}>
              {/* Native exclusive accordion: opening one value closes the others. */}
              <details
                name="values"
                open={i === 0}
                className="group border-line border-b"
              >
                <summary className="flex cursor-pointer list-none items-baseline gap-5 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-label">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="group-open:text-accent-ink font-serif text-[26px] leading-tight">
                    {value.title}
                  </span>
                </summary>
                <p className="text-body m-0 pb-5 pl-11">{value.body}</p>
              </details>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="team"
        className="flex flex-col gap-8"
      >
        <TeamGrid
          members={team}
          openRoles={jobs.length}
          heading={
            <SectionHeading
              eyebrow={`The team · ${team.length} people`}
              title="Everyone building Plural"
              description="We work in Kubernetes, Elixir, Go, and React, and we like hard problems in cloud infrastructure."
              size="lg"
            />
          }
        />
      </Section>

      <section className="rule-top">
        <SectionHeading
          eyebrow="Backed by"
          title="Investors who work alongside us"
          size="lg"
          className="px-gutter pt-section pb-10"
        />
        <CellGrid minColumn="220px">
          {investors.map((investor) => (
            <div
              key={investor.name}
              className="px-gutter flex items-center gap-4 py-8 lg:px-8"
            >
              {investor.photo && (
                <Image
                  src={investor.photo}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-xs object-cover"
                />
              )}
              <div className="flex flex-col gap-1">
                <span className="text-xl font-medium">{investor.name}</span>
                <span className="text-muted text-sm">{investor.contact}</span>
              </div>
            </div>
          ))}
        </CellGrid>
      </section>

      <Section className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="We’re hiring"
          title={`${jobs.length} open roles in New York`}
          size="lg"
        />
        <ArrowLink href="/careers">View careers</ArrowLink>
      </Section>
    </>
  )
}
