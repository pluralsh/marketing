import { type ComponentProps } from 'react'

import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { FAQItem } from '@src/components/Typography'

import { CenteredSectionHead } from '../SectionHeads'

export function RepoFAQSection(
  props: Omit<ComponentProps<typeof StandardPageWidth>, 'children'>
) {
  return (
    <StandardPageWidth {...props}>
      <CenteredSectionHead
        className="mb-xlarge"
        heading="FAQ"
      >
        FAQ
      </CenteredSectionHead>
      <div className="flex flex-col gap-y-large">
        <FAQItem label="Do you offer other orchestrators?">
          <p>
            Minim qui eiusmod enim voluptate minim velit. Irure ullamco do
            proident nisi non laboris et. Ipsum ipsum excepteur pariatur magna.
          </p>
        </FAQItem>
        <FAQItem label="How much does it cost to get started?">
          <p>
            Esse aliqua velit enim id consequat ad ad. Aute aliquip deserunt ad
            laboris ipsum. Dolor aliqua ut quis est aute aute ullamco elit
            laborum ex qui. Id excepteur culpa pariatur dolore reprehenderit
            nisi aute aliqua velit mollit.
          </p>
          <p>
            Tempor dolore irure incididunt est aliqua sint ipsum duis deserunt
            elit velit elit occaecat. Proident enim veniam Lorem quis aliquip
            aute cillum cupidatat Lorem reprehenderit anim in esse.
          </p>
        </FAQItem>
        <FAQItem label="Become a partner">
          <p>
            Cillum veniam esse qui aute consectetur adipisicing qui laborum ad
            culpa veniam ex nisi in. Do in adipisicing consequat voluptate
            excepteur cillum occaecat.
          </p>
          <p>
            Irure cillum tempor Lorem sit anim. Sint sunt tempor ex enim. Dolor
            est in commodo fugiat excepteur aliquip exercitation elit voluptate.
          </p>
        </FAQItem>
      </div>
    </StandardPageWidth>
  )
}
