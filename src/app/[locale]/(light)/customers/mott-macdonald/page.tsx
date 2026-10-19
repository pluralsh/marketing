import type { Metadata } from 'next'

import Image from 'next/image'

import { CtaBand } from '@/components/sections/CtaBand'
import { Accent, Section } from '@/components/sections/Section'
import { TestimonialGrid } from '@/components/sections/Testimonials'
import { ButtonLink } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { mottMacDonald } from '@/content/customers'
import { testimonials, URLS } from '@/content/site'

export const metadata: Metadata = {
  title: 'Mott MacDonald case study | Plural',
  description:
    'How Mott MacDonald made Plural the foundation of Digital Workspaces, its internal developer platform.',
  robots: { index: false },
}

const toc = [
  { id: 'challenge', label: 'The challenge' },
  { id: 'solution', label: 'The solution' },
  { id: 'results', label: 'Results' },
]

function CaseQuote({ children }: React.PropsWithChildren) {
  return (
    <figure className="border-accent m-0 flex flex-col gap-4 border-l-2 py-2 pl-6">
      <blockquote className="m-0 font-serif text-[clamp(22px,2.4vw,28px)] leading-snug">
        {children}
      </blockquote>
      <figcaption className="text-muted text-sm">
        <span className="text-ink font-medium">
          {mottMacDonald.speaker.name}
        </span>{' '}
        · {mottMacDonald.speaker.title}
      </figcaption>
    </figure>
  )
}

export default function MottMacDonaldPage() {
  const { facts, usesPlural, atAGlance, extensions } = mottMacDonald

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
          <span aria-hidden="true">/</span> Mott MacDonald
        </nav>
        <h1 className="text-heading-xl m-0 max-w-[20ch] text-balance">
          How Mott MacDonald built its developer platform on{' '}
          <Accent>Plural</Accent>
        </h1>
        <p className="text-lead m-0 max-w-[640px]">
          Plural became the foundation of Digital Workspaces, Mott MacDonald’s
          internal developer platform, taking Kubernetes fleet management off
          developers’ plates.
        </p>
      </section>
      <div className="px-[clamp(12px,2vw,24px)] pb-14">
        <Image
          src="/images/customers/mott-macdonald.jpg"
          alt="Mott MacDonald case study"
          width={1600}
          height={1000}
          sizes="(min-width: 1200px) 1150px, 100vw"
          className="aspect-[21/9] w-full rounded-xl object-cover"
          priority
        />
      </div>

      <section className="rule-top grid lg:grid-cols-[320px_1fr]">
        <aside className="px-gutter py-10 lg:sticky lg:top-20 lg:self-start">
          <div className="font-serif text-2xl">Mott MacDonald</div>
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
            href={URLS.contact}
            size="md"
            className="mt-6 w-full"
          >
            Book a demo
          </ButtonLink>
        </aside>
        <article className="border-line text-body px-gutter flex max-w-[760px] flex-col gap-10 py-10 text-[17px] leading-relaxed max-lg:border-t lg:border-l lg:py-14">
          <div className="border-line bg-surface rounded-xl border p-6">
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
          <div
            id="challenge"
            className="flex scroll-mt-24 flex-col gap-4"
          >
            <h2 className="text-heading-md text-ink m-0">The challenge</h2>
            <p className="m-0">
              Mott MacDonald’s digital solutions platform underpins many tools
              and services that all need to integrate cleanly and perform
              consistently. To speed up development, Simon Bell’s team built
              Digital Workspaces, an internal developer platform.
            </p>
            <p className="m-0">
              As the platform grew, so did the work of running its Kubernetes
              clusters. Developers were pulled away from building new
              capabilities to manage infrastructure.
            </p>
          </div>
          <CaseQuote>
            “Our internal teams faced technical challenges in managing
            Kubernetes clusters within Digital Workspaces, leading to
            inefficiencies in innovation.”
          </CaseQuote>
          <div
            id="solution"
            className="flex scroll-mt-24 flex-col gap-4"
          >
            <h2 className="text-heading-md text-ink m-0">The solution</h2>
            <p className="m-0">
              Mott MacDonald made Plural the foundation of Digital Workspaces.
              Plural centralized fleet management behind a simple interface and
              automated a long list of manual tasks, so developers could work
              without touching Kubernetes internals.
            </p>
            <p className="m-0">
              It also extended self-service beyond Kubernetes:
            </p>
            <ol className="border-line m-0 list-none border-t p-0">
              {extensions.map((item, i) => (
                <li
                  key={item.title}
                  className="border-line grid grid-cols-[40px_1fr] gap-x-2 border-b py-4"
                >
                  <span className="text-accent-ink font-mono text-sm leading-7">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink font-medium">{item.title}</span>
                  <span className="col-start-2 text-[15px]">{item.body}</span>
                </li>
              ))}
            </ol>
          </div>
          <div
            id="results"
            className="flex scroll-mt-24 flex-col gap-4"
          >
            <h2 className="text-heading-md text-ink m-0">Results</h2>
            <p className="m-0">
              With Plural doing the heavy lifting, developers moved their effort
              back to innovation and client work. The platform now scales with a
              growing number of clusters, supporting Mott MacDonald’s digital
              transformation without trading off performance or reliability.
            </p>
          </div>
          <CaseQuote>
            “Our teams are now able to deliver new features faster, and we’ve
            reduced the time spent on maintenance by a significant margin.{' '}
            <em className="text-accent-ink">
              This has directly translated into cost savings and increased
              revenue potential.
            </em>
            ”
          </CaseQuote>
          <div className="flex flex-col gap-4">
            <h2 className="text-heading-md text-ink m-0">Beyond Kubernetes</h2>
            <p className="m-0">
              The value reached Mott MacDonald’s wider cloud estate.
              Self-service provisioning now covers databases and data pipelines
              built on open-source tools, giving teams more control with less
              overhead.
            </p>
          </div>
        </article>
      </section>

      <Section className="pb-0">
        <h2 className="text-heading-lg m-0">More from our customers</h2>
      </Section>
      <TestimonialGrid
        items={[testimonials.upgrades, testimonials.capitalOne]}
      />

      <CtaBand
        title={
          <>
            Build your platform on <Accent>Plural</Accent>
          </>
        }
      />
    </>
  )
}
