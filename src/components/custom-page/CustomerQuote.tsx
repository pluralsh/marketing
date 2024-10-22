import { Flex } from '@pluralsh/design-system'

import { type CustomerQuoteComponentFragment } from '@src/generated/graphqlDirectus'

import { Body1, Subtitle2 } from '../Typography'

import { getSpacingClassName } from './common'

export function CustomerQuote({
  spacing,
  quote,
}: CustomerQuoteComponentFragment) {
  return (
    <section className={getSpacingClassName(spacing)}>
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
    </section>
  )
}
