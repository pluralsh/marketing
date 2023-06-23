import { StandardPage } from '@src/components/layout/FullPage'
import { AppBody2, ResponsiveText } from '@src/components/Typography'

import { SingleAccordion } from '../SingleAccordion'

export function FAQSection() {
  return (
    <StandardPage className="py-xxxlarge">
      <ResponsiveText
        className="mb-xlarge text-center"
        as="h2"
        textStyles={{ '': 'mTitle1' }}
      >
        FAQ
      </ResponsiveText>
      <div className="flex flex-col gap-y-large">
        <SingleAccordion label="Do you offer other orchestrators?">
          <AppBody2 color="text-light">
            Minim qui eiusmod enim voluptate minim velit. Irure ullamco do
            proident nisi non laboris et. Ipsum ipsum excepteur pariatur magna.
          </AppBody2>
        </SingleAccordion>
        <SingleAccordion label="How much does it cost to get started?">
          <AppBody2 color="text-light">
            Esse aliqua velit enim id consequat ad ad. Aute aliquip deserunt ad
            laboris ipsum. Dolor aliqua ut quis est aute aute ullamco elit
            laborum ex qui. Id excepteur culpa pariatur dolore reprehenderit
            nisi aute aliqua velit mollit. Tempor dolore irure incididunt est
            aliqua sint ipsum duis deserunt elit velit elit occaecat. Proident
            enim veniam Lorem quis aliquip aute cillum cupidatat Lorem
            reprehenderit anim in esse. Non laborum mollit id nostrud veniam
            elit duis adipisicing sunt occaecat adipisicing sit.
          </AppBody2>
        </SingleAccordion>
        <SingleAccordion label="Become a partner">
          <AppBody2 color="text-light">
            Cillum veniam esse qui aute consectetur adipisicing qui laborum ad
            culpa veniam ex nisi in. Do in adipisicing consequat voluptate
            excepteur cillum occaecat. Irure cillum tempor Lorem sit anim. Sint
            sunt tempor ex enim. Dolor est in commodo fugiat excepteur aliquip
            exercitation elit voluptate.
          </AppBody2>
        </SingleAccordion>
      </div>
    </StandardPage>
  )
}
