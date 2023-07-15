import { type ComponentProps } from 'react'

import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { type FaqItemFragment } from '@src/generated/graphqlDirectus'

import { CenteredSectionHead } from '../SectionHeads'

import { FAQList } from './FAQList'

export function StandardFAQSection({
  faqs,
  props,
}: { faqs: (FaqItemFragment | null)[] } & Omit<
  ComponentProps<typeof StandardPageWidth>,
  'children'
>) {
  return (
    <StandardPageWidth {...props}>
      <CenteredSectionHead
        className="mb-xlarge"
        heading="FAQ"
      >
        FAQ
      </CenteredSectionHead>
      <FAQList faqs={faqs} />
    </StandardPageWidth>
  )
}
