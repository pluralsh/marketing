import type { Metadata } from 'next'

import Image from 'next/image'

import { CtaBand } from '@/components/sections/CtaBand'
import { PageHero } from '@/components/sections/PageHero'
import { Accent, Section } from '@/components/sections/Section'
import { TestimonialGrid } from '@/components/sections/Testimonials'
import { SmartLink } from '@/components/ui/SmartLink'
import { customerStories } from '@/content/customers'
import { testimonials } from '@/content/site'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/customers', {
  title: 'Customers | Plural',
  description:
    'How platform teams run Kubernetes fleets and infra agents on Plural.',
})

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title={
          <>
            Platforms built on <Accent>Plural</Accent>
          </>
        }
        description="How enterprise platform teams cut upgrade cycles, maintenance, and support load."
      />
      <Section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {customerStories.map((story) => (
          <SmartLink
            key={story.href}
            href={story.href}
            className="border-line bg-surface text-ink hover:border-accent group flex flex-col overflow-hidden rounded-xl border no-underline transition-colors"
          >
            <Image
              src={story.image.src}
              alt=""
              width={story.image.width}
              height={story.image.height}
              sizes="(min-width: 1024px) 380px, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-2 p-5">
              <span className="text-label">{story.company}</span>
              <span className="group-hover:text-accent-ink text-xl leading-snug font-medium">
                {story.title}
              </span>
              <span className="text-body text-[15px]">{story.summary}</span>
              <span className="text-accent-ink mt-auto pt-2 text-sm">
                Read the story →
              </span>
            </div>
          </SmartLink>
        ))}
      </Section>
      <TestimonialGrid
        items={[
          testimonials.upgrades,
          testimonials.mott,
          testimonials.capitalOne,
        ]}
      />
      <CtaBand title="Build your platform on Plural" />
    </>
  )
}
