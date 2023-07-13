import { type ReactNode } from 'react'

import styled from 'styled-components'

import { StandardPageWidth } from './layout/LayoutHelpers'
import { ResponsiveText } from './Typography'

const MassiveQuoteSC = styled.div(({ theme }) => ({
  paddingTop: theme.spacing.xxxxxxlarge,
  paddingBottom: theme.spacing.xxxxxxlarge,
  backgroundColor: theme.colors['fill-two'],
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

const IconStarSC = styled.img.attrs({ src: '/images/icons/star.svg' })((_) => ({
  width: 20,
  height: 20,
}))

export function MassiveQuote({
  content,
  attributions,
}: {
  content: ReactNode
  attributions: ReactNode[]
}) {
  return (
    <MassiveQuoteSC>
      <StandardPageWidth>
        <div className="contentArea">
          <div className="stars">
            <IconStarSC />
            <IconStarSC />
            <IconStarSC />
            <IconStarSC />
            <IconStarSC />
          </div>
          <ResponsiveText
            textStyles={{ '': 'mHero2', md: 'mHero1', xl: 'mBigHeader' }}
          >
            {content}
          </ResponsiveText>
          <ResponsiveText
            textStyles={{ '': 'mBody1Bold' }}
            color="text-xlight"
          >
            {attributions.join(' | ')}
          </ResponsiveText>
        </div>
      </StandardPageWidth>
    </MassiveQuoteSC>
  )
}
