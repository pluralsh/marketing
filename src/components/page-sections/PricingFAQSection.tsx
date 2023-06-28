import { type ComponentProps } from 'react'

import { StandardPage } from '@src/components/layout/FullPage'
import { AppBody2, ResponsiveText } from '@src/components/Typography'

import { SingleAccordion } from '../SingleAccordion'

export function PricingFAQSection(
  props: Omit<ComponentProps<typeof StandardPage>, 'children'>
) {
  return (
    <StandardPage {...props}>
      <ResponsiveText
        className="mb-xlarge text-center"
        as="h2"
        textStyles={{ '': 'mTitle1' }}
      >
        FAQ
      </ResponsiveText>
      <div className="flex flex-col gap-y-large">
        <SingleAccordion label="Do you offer implementation services?">
          <AppBody2 color="text-light">
            Yes, talk to us about the package that is right for you.
          </AppBody2>
        </SingleAccordion>
        <SingleAccordion label="Can I sign up with credit card?">
          <AppBody2 color="text-light">
            Yes, signing up for Pro tier can be done with a credit card.
          </AppBody2>
        </SingleAccordion>
        <SingleAccordion label="Do you provide invoices?">
          <AppBody2 color="text-light">
            Yes, our custom plan provides invoices.
          </AppBody2>
        </SingleAccordion>
      </div>
    </StandardPage>
  )
}
