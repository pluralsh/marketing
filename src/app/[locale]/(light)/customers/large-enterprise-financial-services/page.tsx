import type { Metadata } from 'next'

import { Accent } from '@/components/sections/Section'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { largeEnterpriseFinancialServices } from '@/content/customers'
import { testimonials } from '@/content/site'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata(
  '/customers/large-enterprise-financial-services',
  {
    title: 'Financial services case study | Plural',
    description:
      'How a Fortune 50 financial services company cut Kubernetes maintenance by 95% with Plural.',
    noindex: true,
  }
)

export default function LargeEnterpriseFinancialServicesPage() {
  const { company, facts, usesPlural, atAGlance, image } =
    largeEnterpriseFinancialServices

  return (
    <CaseStudy
      company={company}
      title={
        <>
          Kubernetes maintenance reduced by <Accent>95%</Accent>
        </>
      }
      description="A Fortune 50 financial services company standardized Kubernetes at scale with Plural—automating routine work, strengthening compliance, and unlocking ~30x ROI."
      image={image}
      facts={facts}
      usesPlural={usesPlural}
      atAGlance={atAGlance}
      moreTestimonials={[testimonials.upgrades, testimonials.mott]}
    >
      <div
        id="challenge"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="text-heading-md text-ink m-0">The challenge</h2>
        <p className="m-0">
          Hundreds of clusters across multi-cloud and on-premises environments
          supported thousands of applications. Inconsistent tooling caused
          configuration drift and security risk.
        </p>
        <p className="m-0">
          Strict PCI and SOC 2 requirements blocked developer self-service.
          Long, manual upgrade cycles and limited fleet visibility drove high
          operational cost, with senior engineers stuck on routine maintenance.
        </p>
      </div>
      <div
        id="solution"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="text-heading-md text-ink m-0">The solution</h2>
        <p className="m-0">
          Plural gave the institution centralized, self-hosted control:
          automated cluster lifecycle management, GitOps workflows, and
          AI-powered troubleshooting.
        </p>
        <p className="m-0">
          Guardrailed self-service let developers provision environments in
          hours instead of weeks. Automated compliance reporting, audit trails,
          and standardized security controls simplified PCI and SOC 2.
        </p>
        <p className="m-0">
          Maintenance shifted to mid-level engineers, freeing senior talent for
          revenue-generating work.
        </p>
      </div>
      <div
        id="results"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="text-heading-md text-ink m-0">Results</h2>
        <p className="m-0">
          Plural automated 95% of routine tasks and cut Kubernetes management
          overhead by 88%. Security incidents dropped 75%, while environment
          setup went from weeks to hours.
        </p>
        <p className="m-0">
          The program delivered $2M in annual savings and roughly 30x ROI over
          three years—leaving the organization ready to scale securely in a
          regulated market.
        </p>
      </div>
    </CaseStudy>
  )
}
