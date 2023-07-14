import { type ComponentProps } from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { FAQItem, Heading2 } from '../Typography'

function MarketplaceExtrasUnstyled(props: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <Heading2 className="mb-xlarge">
        Don’t see what you’re looking for?
      </Heading2>
      <div className="flex flex-col gap-large">
        <FAQItem label="Request an application">
          <p>
            Don't see what you are looking for? You can view our{' '}
            <a
              href="https://github.com/orgs/pluralsh/projects/2/views/2"
              target="_blank"
              rel="noreferrer"
            >
              application roadmap
            </a>
            or make a{' '}
            <a
              href="https://github.com/pluralsh/plural/issues/new/choose"
              target="_blank"
              rel="noreferrer"
            >
              roadmap request
            </a>{' '}
            on GitHub.
          </p>
        </FAQItem>
        <FAQItem label="Adding an application">
          <p>
            Join our contributors. Add a new application to the Plural catalog.
            Check out our{' '}
            <a
              href="https://www.plural.sh/blog/paying-for-oss-contributions/"
              target="_blank"
              rel="noreferrer"
            >
              documentation
            </a>{' '}
            on how to get started with adding an application.
          </p>
        </FAQItem>
        <FAQItem label="Become a partner">
          <p>
            <Link href="/contact">Contact us</Link> to apply to become a cloud
            provider, technology partner, or professional service partner.
          </p>
        </FAQItem>
      </div>
    </div>
  )
}

export const MarketplaceExtras = styled(MarketplaceExtrasUnstyled)((_) => ({}))
