import { type ComponentProps } from 'react'

import { A } from 'honorable'

import styled from 'styled-components'

import { SingleAccordion } from '../SingleAccordion'
import { AppBody2, Heading2 } from '../Typography'

function MarketplaceExtrasUnstyled(props: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <Heading2 className="mb-xlarge">
        Don’t see what you’re looking for?
      </Heading2>
      <div className="flex flex-col gap-large">
        <SingleAccordion label="Request an application">
          <AppBody2 color="text-light">
            Minim qui eiusmod enim voluptate minim velit. Irure ullamco do
            proident nisi non laboris et. Ipsum ipsum excepteur pariatur magna.
          </AppBody2>
        </SingleAccordion>
        <SingleAccordion label="Adding an application">
          <AppBody2
            color="text-light"
            className="mb-small"
          >
            Join our contributors. Add a new application to the Plural catalog.
            Check out our{' '}
            <A
              inline
              href="https://www.plural.sh/blog/paying-for-oss-contributions/"
              target="_blank"
              rel="noreferrer"
            >
              documentation
            </A>{' '}
            on how to get started with adding an application.
          </AppBody2>
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
    </div>
  )
}

export const MarketplaceExtras = styled(MarketplaceExtrasUnstyled)((_) => ({}))
