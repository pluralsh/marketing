import { Flex } from '@pluralsh/design-system'

import { type CustomerQuoteComponentFragment } from '@src/generated/graphqlDirectus'

import { Body1, Subtitle2 } from '../Typography'

export function CustomerQuote({ quote }: CustomerQuoteComponentFragment) {
  return (
    <div className="py-xlarge">
      <Flex
        width="50%"
        margin="auto"
        textAlign="center"
        flexDirection="column"
        gap="large"
      >
        <Subtitle2>"{quote?.quote}"</Subtitle2>
        <Body1 $color="text-light">- {quote?.author_text}</Body1>
      </Flex>
    </div>
  )
}
