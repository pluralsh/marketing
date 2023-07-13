import { type ComponentProps } from 'react'

import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { FAQItem, ResponsiveText } from '@src/components/Typography'

export function PricingFAQSection(
  props: Omit<ComponentProps<typeof StandardPageWidth>, 'children'>
) {
  return (
    <StandardPageWidth {...props}>
      <ResponsiveText
        className="mb-xlarge text-center"
        as="h2"
        textStyles={{ '': 'mTitle1' }}
      >
        FAQ
      </ResponsiveText>
      <div className="flex flex-col gap-y-large">
        <FAQItem label="Do you offer implementation services?">
          <p>Yes, talk to us about the package that is right for you.</p>
        </FAQItem>
        <FAQItem label="Can I sign up with credit card?">
          <p>Yes, signing up for Pro tier can be done with a credit card.</p>
        </FAQItem>
        <FAQItem label="Do you provide invoices?">
          <p>Yes, our custom plan provides invoices.</p>
        </FAQItem>
      </div>
    </StandardPageWidth>
  )
}
