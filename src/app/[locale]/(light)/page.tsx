import type { Metadata } from 'next'

import { BacklogGraph } from '@/components/interactive/backlog/BacklogGraph'
import { UseCaseTabs } from '@/components/interactive/UseCaseTabs'
import { CellGrid } from '@/components/sections/CellGrid'
import { CtaBand } from '@/components/sections/CtaBand'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { LogoWordmarks } from '@/components/sections/LogoWordmarks'
import { PageHero } from '@/components/sections/PageHero'
import { PostGrid } from '@/components/sections/PostGrid'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { StatGrid } from '@/components/sections/StatGrid'
import { TestimonialGrid } from '@/components/sections/Testimonials'
import { ButtonLink } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { HomeDemo } from '@/components/video-demo/HomeDemo'
import {
  audiences,
  enterpriseFeatures,
  pillars,
  agentUseCases,
} from '@/content/home'
import { impactStats, testimonials, URLS } from '@/content/site'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/', {
  title: 'Plural | AI for infrastructure',
  description:
    'Clear upgrades, incidents, CVEs, and tickets with infra agents grounded in production. They run in your environment, and every change lands as a PR you review.',
})

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="AI for infrastructure"
        size="display"
        title={
          <>
            Backlog <Accent>zero</Accent>
          </>
        }
        description="Clear upgrades, incidents, CVEs, and tickets with infra agents grounded in production. They run in your environment, and every change lands as a PR you review."
        actions={
          <>
            <ButtonLink
              href={URLS.contact}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={URLS.docs}
              variant="secondary"
              shortcut="D"
            >
              Read the docs
            </ButtonLink>
          </>
        }
      >
        <BacklogGraph />
      </PageHero>

      <FeatureCells items={pillars} />

      <div className="rule-top px-[clamp(12px,2vw,24px)] pt-6 pb-14">
        <HomeDemo />
      </div>

      <Section className="py-8">
        <LogoWordmarks />
      </Section>

      <TestimonialGrid
        items={[
          testimonials.upgrades,
          testimonials.mott,
          testimonials.capitalOne,
        ]}
      />

      <Section
        id="product"
        className="flex flex-col gap-9"
      >
        <SectionHeading
          eyebrow="The product"
          title="Agents for whatever DevOps throws at you"
          description="Bundle your tools, your runbooks, and purpose-built subagents for observability, infrastructure analysis, and code changes."
        />
        <UseCaseTabs items={agentUseCases} />
      </Section>

      <section className="rule-top">
        <SectionHeading
          eyebrow="Built for the enterprise"
          title="Safe enough for the hardest problems in infrastructure"
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={enterpriseFeatures}
          minColumn="260px"
        />
      </section>

      <StatGrid items={impactStats} />

      <CellGrid minColumn="320px">
        {audiences.map((audience) => (
          <div
            key={audience.heading}
            className="px-gutter flex flex-col gap-4.5 py-12"
          >
            <Eyebrow>{audience.heading}</Eyebrow>
            <ul className="m-0 flex list-none flex-col p-0 text-[17px]">
              {audience.points.map((point) => (
                <li
                  key={point}
                  className="border-line border-b py-3 last:border-b-0"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CellGrid>

      <PostGrid />

      <CtaBand
        title={
          <>
            Enterprise infra management, <Accent>accelerated</Accent>
          </>
        }
        description="See agents work on your own clusters in a 30-minute demo."
        actions={
          <>
            <ButtonLink
              href={URLS.contact}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={URLS.github}
              variant="secondary"
              shortcut="G"
            >
              View on GitHub
            </ButtonLink>
          </>
        }
      />
    </>
  )
}
