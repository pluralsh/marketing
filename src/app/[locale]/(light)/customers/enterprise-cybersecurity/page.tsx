import type { Metadata } from 'next'

import { Accent } from '@/components/sections/Section'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { enterpriseCybersecurity } from '@/content/customers'
import { testimonials } from '@/content/site'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata(
  '/customers/enterprise-cybersecurity',
  {
    title: 'Cybersecurity case study | Plural',
    description:
      'How a global cybersecurity leader cut Kubernetes upgrades from 3 months to 1 day with Plural.',
    noindex: true,
  }
)

export default function EnterpriseCybersecurityPage() {
  const { company, facts, usesPlural, atAGlance, image } =
    enterpriseCybersecurity

  return (
    <CaseStudy
      company={company}
      title={
        <>
          Kubernetes upgrades cut from 3 months to <Accent>1 day</Accent>
        </>
      }
      description="A global cybersecurity leader used Plural to automate fleet upgrades, keep SOC 2 and FedRAMP commitments, and free senior engineers for strategic work."
      image={image}
      facts={facts}
      usesPlural={usesPlural}
      atAGlance={atAGlance}
      moreTestimonials={[testimonials.mott, testimonials.capitalOne]}
    >
      <div
        id="challenge"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="text-heading-md text-ink m-0">The challenge</h2>
        <p className="m-0">
          Lifecycle management across a large Kubernetes fleet was a bottleneck.
          Cluster upgrades took up to three months, required senior engineers,
          and diverted them from strategic initiatives.
        </p>
        <p className="m-0">
          Meeting SOC 2 and FedRAMP standards meant extensive manual oversight,
          while routine maintenance left little room for innovation.
        </p>
      </div>
      <div
        id="solution"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="text-heading-md text-ink m-0">The solution</h2>
        <p className="m-0">
          The company adopted Plural to simplify fleet-level operations.
          Automated upgrades, dependency checks, and a clear console cut update
          cycles from three months to one day.
        </p>
        <p className="m-0">
          Compatibility matrices and Open Policy Agent Gatekeeper standardized
          SBOMs and policy across clusters. Automated 30-day patching kept
          FedRAMP commitments without the previous manual grind.
        </p>
        <p className="m-0">
          Complex maintenance shifted to mid-level engineers, so staff engineers
          could focus on higher-value projects.
        </p>
      </div>
      <div
        id="results"
        className="flex scroll-mt-24 flex-col gap-4"
      >
        <h2 className="text-heading-md text-ink m-0">Results</h2>
        <p className="m-0">
          Upgrades that once consumed a quarter now finish in a day. A single
          engineer can manage the fleet that previously needed multiple senior
          staff, and infosec patching deadlines are met consistently.
        </p>
        <p className="m-0">
          The partnership improved operational efficiency and left the team
          positioned to scale Kubernetes deployments without trading off
          compliance or security.
        </p>
      </div>
    </CaseStudy>
  )
}
