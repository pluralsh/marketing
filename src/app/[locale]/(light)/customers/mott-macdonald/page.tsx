import type { Metadata } from 'next'

import { Accent } from '@/components/sections/Section'
import { CaseQuote, CaseStudy } from '@/components/sections/CaseStudy'
import { mottMacDonald } from '@/content/customers'
import { testimonials } from '@/content/site'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/customers/mott-macdonald', {
  title: 'Mott MacDonald case study | Plural',
  description:
    'How Mott MacDonald made Plural the foundation of Digital Workspaces, its internal developer platform.',
  noindex: true,
})

export default function MottMacDonaldPage() {
  const { facts, usesPlural, atAGlance, extensions, speaker, image, company } =
    mottMacDonald

  return (
    <CaseStudy
      company={company}
      title={
        <>
          How Mott MacDonald built its developer platform on{' '}
          <Accent>Plural</Accent>
        </>
      }
      description="Plural became the foundation of Digital Workspaces, Mott MacDonald’s internal developer platform, taking Kubernetes fleet management off developers’ plates."
      image={image}
      facts={facts}
      usesPlural={usesPlural}
      atAGlance={atAGlance}
      moreTestimonials={[testimonials.upgrades, testimonials.capitalOne]}
    >
      <div
        id="challenge"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="text-heading-md text-ink m-0">The challenge</h2>
        <p className="m-0">
          Mott MacDonald’s digital solutions platform underpins many tools and
          services that all need to integrate cleanly and perform consistently.
          To speed up development, Simon Bell’s team built Digital Workspaces,
          an internal developer platform.
        </p>
        <p className="m-0">
          As the platform grew, so did the work of running its Kubernetes
          clusters. Developers were pulled away from building new capabilities
          to manage infrastructure.
        </p>
      </div>
      <CaseQuote
        name={speaker.name}
        title={speaker.title}
      >
        “Our internal teams faced technical challenges in managing Kubernetes
        clusters within Digital Workspaces, leading to inefficiencies in
        innovation.”
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
        <p className="m-0">It also extended self-service beyond Kubernetes:</p>
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
      <CaseQuote
        name={speaker.name}
        title={speaker.title}
      >
        “Our teams are now able to deliver new features faster, and we’ve
        reduced the time spent on maintenance by a significant margin.{' '}
        <em className="text-accent-ink">
          This has directly translated into cost savings and increased revenue
          potential.
        </em>
        ”
      </CaseQuote>
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-md text-ink m-0">Beyond Kubernetes</h2>
        <p className="m-0">
          The value reached Mott MacDonald’s wider cloud estate. Self-service
          provisioning now covers databases and data pipelines built on
          open-source tools, giving teams more control with less overhead.
        </p>
      </div>
    </CaseStudy>
  )
}
