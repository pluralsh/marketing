import { type ComponentProps } from 'react'

import { Chip, FillLevelProvider } from '@pluralsh/design-system'

import { isEmpty } from 'lodash-es'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { type Callouts } from '@src/data/getCommunityPageData'
import { type CalloutFragment } from '@src/generated/graphqlDirectus'

import { TextLimiter } from '../layout/TextLimiter'
import { Cta } from '../Typography'

const CalloutCardSC = styled.div(({ theme }) => ({
  background: theme.colors['fill-two'],
  border: theme.borders['fill-one'],
  borderRadius: theme.borderRadiuses.large,
  padding: theme.spacing.xlarge,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
  '.columns': {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    rowGap: theme.spacing.medium,
    columnGap: theme.spacing.large,
    [mqs.md]: {
      flexDirection: 'row-reverse',
    },
  },
  '.mainArea': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.small,
    flexGrow: 1,
  },
  '.title': {
    ...theme.partials.marketingText.title1,
  },
  '.content': {
    ...theme.partials.marketingText.body2,
    color: theme.colors['text-xlight'],
  },
  '.ctas': {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
}))

function CalloutCard({
  callout,
  ...props
}: { callout: CalloutFragment } & ComponentProps<typeof CalloutCardSC>) {
  return (
    <CalloutCardSC {...props}>
      <FillLevelProvider value={2}>
        <div className="columns">
          {callout.category && (
            <div className="category">
              <Chip severity="info">{callout.category}</Chip>
            </div>
          )}
          <div className="mainArea">
            {callout.title && (
              <TextLimiter className="title">{callout.title}</TextLimiter>
            )}
            {callout.content && (
              <TextLimiter className="content">{callout.content}</TextLimiter>
            )}{' '}
          </div>

          {!isEmpty(callout?.ctas) && (
            <div className="ctas">
              {callout?.ctas?.map(
                (cta) =>
                  !!cta?.url && (
                    <Cta
                      target="_blank"
                      href={cta.url}
                    >
                      {cta.label || cta.url}
                    </Cta>
                  )
              )}
            </div>
          )}
        </div>
      </FillLevelProvider>
    </CalloutCardSC>
  )
}

export default function CalloutsSection({ callouts }: { callouts: Callouts }) {
  return (
    <div className="flex flex-col gap-medium">
      {(callouts || []).map(
        (c) =>
          c && (
            <CalloutCard
              key={c.id}
              callout={c}
            />
          )
      )}
    </div>
  )
}
