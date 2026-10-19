import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { RichText } from '@/components/sections/RichText'
import { Section } from '@/components/sections/Section'
import { ButtonLink } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { hiringEmail } from '@/content/company'
import { getJob, jobs } from '@/content/jobs'
import { SUPPORTED_LOCALES } from '@/i18n/locales'

type Params = { locale: string; slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    jobs.map(({ slug }) => ({ locale, slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const job = getJob((await params).slug)

  return {
    title: `${job?.title} | Careers at Plural`,
    description: job?.meta.description,
  }
}

export default async function JobPage({ params }: { params: Promise<Params> }) {
  const job = getJob((await params).slug)

  if (!job) notFound()

  const apply = job.apply ?? {
    label: hiringEmail,
    href: `mailto:${hiringEmail}`,
  }

  return (
    <>
      <section className="px-gutter flex flex-col gap-6 pt-[clamp(48px,7vw,88px)] pb-12">
        <nav
          aria-label="Breadcrumb"
          className="text-label"
        >
          <SmartLink
            href="/careers"
            className="text-muted hover:text-ink no-underline"
          >
            Careers
          </SmartLink>{' '}
          <span aria-hidden="true">/</span> {job.team}
        </nav>
        <h1 className="text-heading-xl m-0">{job.title}</h1>
        <p className="text-muted m-0 font-mono text-sm">
          {job.team} · {job.location}
        </p>
        <div>
          <ButtonLink href={apply.href}>Apply</ButtonLink>
        </div>
      </section>
      <Section className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <RichText content={job.body} />
        <aside className="border-line bg-surface flex flex-col gap-3 self-start rounded-xl border p-6 lg:sticky lg:top-28">
          <h2 className="m-0 text-lg font-medium">To apply</h2>
          <p className="text-body m-0 text-sm">
            Reach out at{' '}
            <a
              href={apply.href}
              className="text-accent-ink underline underline-offset-4"
            >
              {apply.label}
            </a>
          </p>
          {job.equality && (
            <p className="text-muted m-0 text-xs">{job.equality}</p>
          )}
        </aside>
      </Section>
    </>
  )
}
