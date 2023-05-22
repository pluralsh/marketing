import { type ComponentProps } from 'react'

import { A } from 'honorable'

import styled from 'styled-components'

import { SingleAccordion } from './SingleAccordion'
import { AppBody2, Heading2 } from './Typography'

function MarketplaceExtrasUnstyled(props: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <Heading2 className="mb-xlarge">
        Don’t see what you’re looking for?
      </Heading2>
      <SingleAccordion label="Adding an application">
        <AppBody2 color="text-light">
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
      </SingleAccordion>
    </div>
  )
}

export const MarketplaceExtras = styled(MarketplaceExtrasUnstyled)((_) => ({}))
