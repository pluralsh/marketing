import Image from 'next/image'

import type { Testimonial } from '@/content/types'

import { ButtonLink } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { URLS } from '@/content/site'

import { CtaBand } from './CtaBand'
import { Accent, Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { TestimonialGrid } from './Testimonials'

export type CaseStudyFact = { term: string; detail: string }
export type CaseStudyGlance = { title: string; body: string }
export type CaseStudyTocItem = { id: string; label: string }

const DEFAULT_TOC: CaseStudyTocItem[] = [
  { id: 'challenge', label: 'The challenge' },
  { id: 'solution', label: 'The solution' },
  { id: 'results', label: 'Results' },
]

type CaseStudyProps = {
  company: string
  title: React.ReactNode
  description: React.ReactNode
  image: { src: string; alt: string; width: number; height: number }
  facts: CaseStudyFact[]
  usesPlural: string[]
  atAGlance: CaseStudyGlance[]
  /** Article body after the At a glance card (sections, quotes, lists). */
  children: React.ReactNode
  moreTestimonials: Testimonial[]
  toc?: CaseStudyTocItem[]
  ctaTitle?: React.ReactNode
}

export function CaseQuote({
  children,
  name,
  title,
}: React.PropsWithChildren<{ name: string; title: string }>) {
  return (
    <figure className="border-accent m-0 flex flex-col gap-4 border-l-2 py-2 pl-6">
      <blockquote className="m-0 font-serif text-[clamp(22px,2.4vw,28px)] leading-snug">
        {children}
      </blockquote>
      <figcaption className="text-muted text-sm">
        <span className="text-ink font-medium">{name}</span> · {title}
      </figcaption>
    </figure>
  )
}

/** Shared layout for customer case studies (sidebar facts + article). */
export function CaseStudy({
  company,
  title,
  description,
  image,
  facts,
  usesPlural,
  atAGlance,
  children,
  moreTestimonials,
  toc = DEFAULT_TOC,
  ctaTitle = (
    <>
      Build your platform on <Accent>Plural</Accent>
    </>
  ),
}: CaseStudyProps) {
  return (
    <>
      <section className="px-gutter flex flex-col gap-6 pt-[clamp(48px,7vw,88px)] pb-12">
        <nav
          aria-label="Breadcrumb"
          className="text-label"
        >
          <SmartLink
            href="/customers"
            className="text-muted hover:text-ink no-underline"
          >
            Customers
          </SmartLink>{' '}
          <span aria-hidden="true">/</span> {company}
        </nav>
        <h1 className="text-heading-xl m-0 max-w-[20ch] text-balance">
          {title}
        </h1>
        <p className="text-lead m-0 max-w-[640px]">{description}</p>
      </section>
      <div className="px-[clamp(12px,2vw,24px)] pb-14">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1200px) 1150px, 100vw"
          className="aspect-[21/9] w-full rounded-sm object-cover"
          priority
        />
      </div>

      <section className="rule-top grid lg:grid-cols-[320px_1fr]">
        <aside className="px-gutter py-10 lg:sticky lg:top-20 lg:self-start">
          <div className="font-serif text-2xl">{company}</div>
          <dl className="mt-5 flex flex-col gap-4">
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-label">{fact.term}</dt>
                <dd className="m-0 mt-1 text-[15px]">{fact.detail}</dd>
              </div>
            ))}
            <div>
              <dt className="text-label">Uses Plural for</dt>
              <dd className="m-0 mt-2 flex flex-wrap gap-1.5">
                {usesPlural.map((use) => (
                  <span
                    key={use}
                    className="bg-accent-tint text-accent-ink rounded px-2 py-0.5 text-xs"
                  >
                    {use}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <nav
            aria-label="On this page"
            className="border-line mt-8 flex flex-col gap-2 border-t pt-5"
          >
            <span className="text-label">On this page</span>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-ink hover:text-accent-ink text-sm no-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ButtonLink
            href={URLS.bookDemo}
            size="md"
            className="mt-6 w-full"
          >
            Book a demo
          </ButtonLink>
        </aside>
        <article className="border-line text-body px-gutter flex max-w-[760px] flex-col gap-10 py-10 text-[17px] leading-relaxed max-lg:border-t lg:border-l lg:py-14">
          <div className="border-line bg-surface rounded-sm border p-6">
            <span className="text-label">At a glance</span>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              {atAGlance.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-1"
                >
                  <span className="text-accent-ink font-serif text-xl">
                    {item.title}
                  </span>
                  <span className="text-sm">{item.body}</span>
                </div>
              ))}
            </div>
          </div>
          {children}
        </article>
      </section>

      <Section className="pb-0">
        <SectionHeading
          title="More from our customers"
          size="lg"
        />
      </Section>
      <TestimonialGrid
        items={moreTestimonials}
        ruled={false}
      />

      <CtaBand title={ctaTitle} />
    </>
  )
}
