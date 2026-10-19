import type { Metadata } from 'next'

import { ClusterEstimator } from '@/components/interactive/ClusterEstimator'
import { CellGrid } from '@/components/sections/CellGrid'
import { CheckList } from '@/components/sections/CheckList'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { CtaBand } from '@/components/sections/CtaBand'
import { Faq } from '@/components/sections/Faq'
import { PageHero } from '@/components/sections/PageHero'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import {
  includedFeatures,
  planComparison,
  plans,
  pricingFaq,
} from '@/content/pricing'
import { cn } from '@/utils/cn'

export const metadata: Metadata = {
  title: 'Pricing | Plural',
  description:
    'You pay for the clusters Plural deploys and manages. Pro and Enterprise run the same platform.',
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Priced per&nbsp;<Accent>cluster</Accent>
          </>
        }
        description="You pay for the clusters Plural deploys and manages. Pro and Enterprise run the same platform. Enterprise adds scale, hosting options, and hands-on support."
      />

      <CellGrid minColumn="300px">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'px-gutter flex flex-col gap-4 py-9 lg:px-8',
              plan.highlighted &&
                'bg-surface shadow-[inset_0_2px_0_var(--accent)]'
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="m-0 text-xl font-medium">{plan.name}</h2>
              {plan.badge && (
                <span className="bg-accent-tint text-accent-ink rounded px-2 py-0.5 font-mono text-xs">
                  {plan.badge}
                </span>
              )}
            </div>
            <div>
              <span className="text-heading-lg">{plan.price}</span>{' '}
              {plan.priceNote && (
                <span className="text-muted text-sm">{plan.priceNote}</span>
              )}
            </div>
            <p className="text-body m-0 text-[15px]">{plan.summary}</p>
            <CheckList
              items={plan.features}
              className="text-[15px]"
            />
            {plan.estimator && <ClusterEstimator />}
            <ButtonLink
              href={plan.cta.href}
              shortcut={plan.cta.shortcut}
              variant={plan.highlighted ? 'primary' : 'secondary'}
              className="mt-auto"
            >
              {plan.cta.label}
            </ButtonLink>
          </div>
        ))}
      </CellGrid>

      <Section className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <SectionHeading
          eyebrow="Included in Pro and Enterprise"
          title="The full platform, on every paid plan"
          size="lg"
          className="self-start"
        />
        <CheckList
          items={includedFeatures}
          className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] content-start gap-x-6 gap-y-3 text-[17px]"
        />
      </Section>

      <Section
        id="plan-comparison"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Pro vs Enterprise"
          title="Only six things change"
          size="lg"
        />
        <ComparisonTable
          caption="Pro and Enterprise plan differences"
          columns={planComparison.columns}
          rows={planComparison.rows}
        />
      </Section>

      <Faq items={pricingFaq} />

      <CtaBand
        title="Not sure which plan fits?"
        description="Tell us about your clusters and we’ll size it with you."
      />
    </>
  )
}
