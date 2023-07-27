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
  '.contentArea': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.xlarge,
    textWrap: 'balance',
  },
  '.stars': {
    display: 'flex',
    gap: theme.spacing.xsmall,
    alignItems: 'center',
  },
}))

const IconStarSC = styled.img((_) => ({
  width: 20,
  height: 20,
}))

function IconStar() {
  return <IconStarSC src="/images/icons/star.svg" />
}

export function FeaturedQuote({
  quote,
  ...props
}: ComponentProps<typeof FeaturedQuoteSC> & { quote?: QuoteFragment | null }) {
  if (!quote) {
    return null
  }

  return (
    <FeaturedQuoteSC {...props}>
      <StandardPageWidth>
        <div className="contentArea">
          <div className="stars">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </div>
          <ResponsiveText
            textStyles={{ '': 'mHero2', md: 'mHero1', xl: 'mBigHeader' }}
          >
            {quote.quote}
          </ResponsiveText>
          <ResponsiveText
            textStyles={{ '': 'mBody1Bold' }}
            color="text-xlight"
          >
            {[quote.name, quote.title].filter((q) => !!q).join(' | ')}
          </ResponsiveText>
        </div>
      </StandardPageWidth>
    </FeaturedQuoteSC>
  )
}
