import type { Metadata } from 'next'

import { HubSpotForm } from '@/components/interactive/hubspot/HubSpotForm'
import { LinkCards } from '@/components/sections/LinkCards'
import { LogoWordmarks } from '@/components/sections/LogoWordmarks'
import { Accent } from '@/components/sections/Section'
import { Quote } from '@/components/sections/Testimonials'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { demoAgenda, demoForm, demoQuotes, otherWays } from '@/content/contact'
import { customerLogos } from '@/content/site'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/contact', {
  title: 'Book a demo | Plural',
  description:
    'See how Plural agents clear upgrades, incidents, CVEs, and tickets across your clusters.',
})

export default function ContactPage() {
  return (
    <>
      <section className="px-gutter grid gap-12 py-[clamp(48px,7vw,88px)] lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-7">
          <Eyebrow>Book a demo</Eyebrow>
          <h1 className="text-heading-xl m-0 text-[clamp(40px,5.5vw,72px)] text-balance">
            See Plural on <Accent>your</Accent> infrastructure
          </h1>
          <p className="text-lead m-0 max-w-[560px]">
            We’ll walk through how Plural fits your stack, and how agents clear
            upgrades, incidents, CVEs, and tickets across your clusters.
          </p>
          <ol className="border-line m-0 flex list-none flex-col border-t p-0">
            {demoAgenda.map((step, i) => (
              <li
                key={step}
                className="border-line flex gap-4 border-b py-3.5 text-[17px]"
              >
                <span className="text-accent-ink font-mono text-sm leading-7">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="grid gap-8 sm:grid-cols-2">
            {demoQuotes.map((quote) => (
              <Quote
                key={quote.quote}
                testimonial={quote}
                className="[&_blockquote]:text-lg"
              />
            ))}
          </div>
          <LogoWordmarks
            logos={customerLogos.filter(({ name }) => name !== 'Justos')}
            className="[&_ul]:gap-x-8 [&_ul]:text-lg"
          />
        </div>
        <div
          id="book-demo"
          className="border-line-strong bg-surface shadow-menu scroll-mt-24 self-start rounded-xl border p-[clamp(20px,3vw,32px)]"
        >
          <h2 className="m-0 text-2xl font-medium">Tell us about your setup</h2>
          <p className="text-muted mt-1.5 mb-6 text-sm">
            We’ll reach out to find a time that works.
          </p>
          <HubSpotForm {...demoForm} />
        </div>
      </section>
      <LinkCards items={otherWays} />
    </>
  )
}
