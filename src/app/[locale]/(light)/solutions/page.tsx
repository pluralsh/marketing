import type { Metadata } from 'next'

import { NavMenuItem } from '@/components/layout/NavMenuItem'
import { CtaBand } from '@/components/sections/CtaBand'
import { PageHero } from '@/components/sections/PageHero'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { SmartLink } from '@/components/ui/SmartLink'
import { navigation } from '@/content/site'
import { moreIndustries, problemLinks } from '@/content/solutions'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/solutions', {
  title: 'Solutions | Plural',
  description:
    'One platform for every team and environment that runs Kubernetes.',
})

const solutionsMenu = navigation.find((menu) => menu.kind === 'solutions')!

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            One platform, every <Accent>team</Accent>
          </>
        }
        description="Plural’s agents and fleet management fit how your platform, DevOps, and security teams already work, in the cloud, on-prem, and at the edge."
      />
      <Section className="grid gap-10 md:grid-cols-2">
        {solutionsMenu.kind === 'solutions' &&
          solutionsMenu.columns.map((column) => (
            <div key={column.heading}>
              <p className="text-label mb-3">{column.heading}</p>
              <div className="border-line flex flex-col border-t pt-2">
                {column.items.map((item) => (
                  <NavMenuItem
                    key={item.title}
                    item={item}
                  />
                ))}
                {column.heading === 'By industry' &&
                  moreIndustries.map((link) => (
                    <SmartLink
                      key={link.href}
                      href={link.href}
                      className="text-ink hover:bg-surface-hover rounded-sm p-3 pl-[62px] font-medium no-underline"
                    >
                      {link.label}
                    </SmartLink>
                  ))}
              </div>
            </div>
          ))}
      </Section>
      <Section className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="By use case"
          title="Start from the problem you have"
          size="lg"
        />
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-x-8 p-0">
          {problemLinks.map((link) => (
            <li key={link.href}>
              <SmartLink
                href={link.href}
                className="border-line text-ink hover:text-accent-ink flex justify-between border-b py-3.5 no-underline"
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </SmartLink>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title="See Plural on your infrastructure" />
    </>
  )
}
