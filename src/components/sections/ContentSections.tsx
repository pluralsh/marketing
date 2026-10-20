import type {
  ContentSection,
  FeatureRowSection,
  HeroSection,
  RichTextSection,
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
import { RichText, richTextToc } from './RichText'
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
          !section.hideActions && (
            <>
              <ButtonLink
                href={section.cta?.href ?? URLS.bookDemo}
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
          )
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

function TocLinks({ items }: { items: { id: string; label: string }[] }) {
  return items.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className="text-body hover:text-accent-ink text-sm leading-snug no-underline"
    >
      {item.label}
    </a>
  ))
}

function RichTextWithToc({ section }: { section: RichTextSection }) {
  const toc = richTextToc(section.content)

  return (
    <section className="rule-top grid lg:grid-cols-[280px_1fr]">
      <aside className="px-gutter py-8 lg:sticky lg:top-20 lg:max-h-[calc(100vh-5rem)] lg:self-start lg:overflow-y-auto lg:py-14">
        <details className="group lg:hidden">
          <summary className="text-label cursor-pointer list-none">
            On this page{' '}
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-open:rotate-90"
            >
              →
            </span>
          </summary>
          <nav
            aria-label="On this page"
            className="mt-4 flex flex-col gap-2.5"
          >
            <TocLinks items={toc} />
          </nav>
        </details>
        <nav
          aria-label="On this page"
          className="flex flex-col gap-2.5 max-lg:hidden"
        >
          <span className="text-label">On this page</span>
          <TocLinks items={toc} />
        </nav>
      </aside>
      <div className="border-line px-gutter py-section max-lg:border-t lg:border-l">
        <RichText
          content={section.content}
          className="max-w-[72ch] [&>:first-child]:mt-0"
        />
      </div>
    </section>
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
        if (section.toc) {
          return (
            <RichTextWithToc
              key={i}
              section={section}
            />
          )
        }

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
            actions={
              section.cta && (
                <ButtonLink
                  href={section.cta.href}
                  shortcut="B"
                >
                  {section.cta.label}
                </ButtonLink>
              )
            }
          />
        )
    }
  })
}
