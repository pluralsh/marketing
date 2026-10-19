import type {
  ContentSection,
  FeatureRowSection,
  HeroSection,
} from '@/content/types'

import { ButtonLink } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { URLS } from '@/content/site'

import { ComparisonTable } from './ComparisonTable'
import { CtaBand } from './CtaBand'
import { FeatureCells } from './FeatureCells'
import { FeatureRow } from './FeatureRow'
import { MediaFrame } from './MediaFrame'
import { PageHero } from './PageHero'
import { PostGrid } from './PostGrid'
import { RichText } from './RichText'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { StatGrid } from './StatGrid'
import { TestimonialGrid } from './Testimonials'
import { YouTubeEmbed } from './YouTubeEmbed'

function Hero({ section }: { section: HeroSection }) {
  const { eyebrow } = section

  return (
    <>
      <PageHero
        eyebrow={
          typeof eyebrow === 'object' ? (
            <SmartLink
              href={eyebrow.href}
              className="text-accent-ink no-underline"
            >
              {eyebrow.label} →
            </SmartLink>
          ) : (
            eyebrow
          )
        }
        title={section.title}
        description={section.description}
        actions={
          <>
            <ButtonLink
              href={section.cta?.href ?? URLS.contact}
              shortcut="B"
            >
              {section.cta?.label ?? 'Book a demo'}
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
      />
      {section.video ? (
        <div className="px-gutter pb-14">
          <YouTubeEmbed
            id={section.video.youtubeId}
            title={section.video.title}
          />
        </div>
      ) : (
        section.image && (
          <div className="px-gutter pb-14">
            <MediaFrame image={section.image} />
          </div>
        )
      )}
    </>
  )
}

function FeatureRows({ rows }: { rows: FeatureRowSection[] }) {
  return (
    <Section className="flex flex-col gap-[clamp(56px,7vw,96px)]">
      {rows.map((row, i) => (
        <FeatureRow
          key={i}
          eyebrow={row.eyebrow}
          title={row.title}
          reverse={row.layout === 'imageLeft'}
          className={row.layout === 'stacked' ? 'md:grid-cols-1' : undefined}
          media={row.image && <MediaFrame image={row.image} />}
        >
          {row.body && (
            <RichText
              content={row.body}
              className="text-base"
            />
          )}
          {row.links && row.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {row.links.map((link) => (
                <ButtonLink
                  key={link.href}
                  href={link.href}
                  variant="secondary"
                  size="md"
                >
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          )}
        </FeatureRow>
      ))}
    </Section>
  )
}

/** Consecutive feature rows read as one section, so render them together. */
function groupRows(sections: ContentSection[]) {
  const groups: (ContentSection | FeatureRowSection[])[] = []

  for (const section of sections) {
    const last = groups.at(-1)

    if (section.type === 'featureRow' && Array.isArray(last)) last.push(section)
    else groups.push(section.type === 'featureRow' ? [section] : section)
  }

  return groups
}

/** Renders a data-driven page (see `src/content/pages`). */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return groupRows(sections).map((section, i) => {
    if (Array.isArray(section)) {
      return (
        <FeatureRows
          key={i}
          rows={section}
        />
      )
    }

    switch (section.type) {
      case 'hero':
        return (
          <Hero
            key={i}
            section={section}
          />
        )
      case 'statement':
        return (
          <Section
            key={i}
            className="flex flex-col gap-5"
          >
            {section.eyebrow && (
              <p className="text-eyebrow m-0">{section.eyebrow}</p>
            )}
            <p className="text-heading-md m-0 max-w-[48ch] text-pretty whitespace-pre-line">
              {section.body}
            </p>
          </Section>
        )
      case 'featureGrid':
        return (
          <section
            key={i}
            className="rule-top"
          >
            {(section.title || section.eyebrow) && (
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
                size="lg"
                className="px-gutter pt-section pb-10"
              />
            )}
            <FeatureCells
              minColumn="260px"
              items={section.items.map((item) => ({
                eyebrow: item.eyebrow,
                title: item.title,
                href: item.href,
                body: item.body && (
                  <RichText
                    content={item.body}
                    className="text-[15px]"
                  />
                ),
              }))}
            />
            {section.footnote && (
              <p className="text-body border-line px-gutter m-0 border-t py-6">
                {section.footnote}
              </p>
            )}
          </section>
        )
      case 'stats':
        return (
          <StatGrid
            key={i}
            items={section.items}
          />
        )
      case 'testimonials':
        return (
          <TestimonialGrid
            key={i}
            items={section.items}
          />
        )
      case 'table':
        return (
          <Section
            key={i}
            className="flex flex-col gap-8"
          >
            {section.title && (
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
                size="lg"
              />
            )}
            <ComparisonTable
              caption={section.title}
              rowLabel={section.rowLabel}
              columns={section.columns}
              rows={section.rows}
            />
            {section.footnote && (
              <p className="text-label m-0 whitespace-pre-line">
                {section.footnote}
              </p>
            )}
          </Section>
        )
      case 'richText':
        return (
          <Section key={i}>
            <RichText
              content={section.content}
              className="max-w-[72ch]"
            />
          </Section>
        )
      case 'posts':
        return (
          <PostGrid
            key={i}
            title={section.title}
            posts={section.items}
          />
        )
      case 'cta':
        return (
          <CtaBand
            key={i}
            title={section.title}
          />
        )
    }
  })
}
