import { type ComponentProps } from 'react'

import styled from 'styled-components'

import { type QuoteFragment } from '@src/generated/graphqlDirectus'

import { StandardPageWidth } from './layout/LayoutHelpers'
import { ResponsiveText } from './Typography'

const FeaturedQuoteSC = styled.div(({ theme }) => ({
  paddingTop: theme.spacing.xxxxxxlarge,
  paddingBottom: theme.spacing.xxxxxxlarge,
  // Used fill-two in Product page comp, but think that's a mistake
  // backgroundColor: theme.colors['fill-two'],
  backgroundColor: theme.colors['fill-zero'],
  position: 'relative',
  '.contentArea': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.xlarge,
    textWrap: 'balance',
  },
}))

export function FeaturedQuote({
  quote,
  ...props
}: ComponentProps<typeof FeaturedQuoteSC> & { quote?: QuoteFragment | null }) {
  if (!quote) {
    return null
  }

  return (
    <FeaturedQuoteSC {...props}>
      <img
        alt=""
        aria-hidden
        src="/images/solutions/quote-right-circle.png"
        className="absolute bottom-0 right-0 z-10 w-1/2 max-w-[400px]"
      />
      <img
        alt=""
        aria-hidden
        src="/images/solutions/quote-left-circle.png"
        className="absolute left-0 top-0 z-10 w-1/3 max-w-[400px]"
      />
      <StandardPageWidth className="relative z-20">
        <div className="contentArea">
          <ResponsiveText textStyles={{ '': 'mSubtitle2', md: 'mTitle1' }}>
            "{quote.quote}"
          </ResponsiveText>
          <ResponsiveText
            textStyles={{ '': 'mBody2', md: 'mBody1' }}
            color="text-xlight"
          >
            {[quote.name, quote.title].filter((q) => !!q).join(' | ')}
          </ResponsiveText>
        </div>
      </StandardPageWidth>
    </FeaturedQuoteSC>
  )
}
