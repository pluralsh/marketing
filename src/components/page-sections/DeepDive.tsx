import styled from 'styled-components'

import { Overline } from '@src/components/Typography'

import { DeepDiveButton } from './HomepageFeaturesSection'

const DeepDiveSC = styled.ul(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
  ul: {
    textAlign: 'center',
    textWrap: 'balance',
    ...theme.partials.reset.list,
    margin: `${-theme.spacing.large / 2}px`,
    li: {
      ...theme.partials.reset.li,
      display: 'inline-block',
      margin: `${theme.spacing.large / 2}px`,
    },
  },
}))

export function DeepDive() {
  return (
    <DeepDiveSC>
      <Overline
        className="text-center"
        as="h3"
      >
        Deep dive into the product
      </Overline>
      <ul>
        <DeepDiveButton href="/product">How Plural works</DeepDiveButton>
        <DeepDiveButton href="https://www.youtube.com/@pluralsh/videos">
          Demo videos
        </DeepDiveButton>
        <DeepDiveButton href="https://docs.plural.sh/getting-started/quickstart">
          Quickstart guide
        </DeepDiveButton>
        <DeepDiveButton href="https://docs.plural.sh/operations/security">
          Security concepts
        </DeepDiveButton>
        <DeepDiveButton href="/marketplace">Application catalog</DeepDiveButton>
      </ul>
    </DeepDiveSC>
  )
}
