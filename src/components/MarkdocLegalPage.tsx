import React, { type ComponentProps } from 'react'

import {
  Heading,
  List,
  ListItem,
  Paragraph,
} from '@pluralsh/design-system/dist/markdoc/components'
import styled from 'styled-components'

import { TextLimiter } from './layout/TextLimiter'
import MarkdocComponent from './MarkdocContent'

const HeadingSC = styled(Heading)(({ theme, level }) => {
  let styles = {}

  switch (level) {
    case 1:
      styles = {
        ...theme.partials.marketingText.hero1,
        marginTop: theme.spacing.xxxlarge,
        marginBottom: theme.spacing.large,
      }
      break
    case 2:
      styles = {
        ...theme.partials.marketingText.title1,
        marginTop: theme.spacing.xxxlarge,
        marginBottom: theme.spacing.large,
      }
      break
    case 3:
      styles = {
        ...theme.partials.marketingText.subtitle1,
        marginTop: theme.spacing.xxlarge,
        marginBottom: theme.spacing.large,
      }
      break
    case 4:
      styles = {
        ...theme.partials.marketingText.body1Bold,
        marginTop: theme.spacing.large,
      }
      break
  }

  return {
    marginBottom: theme.spacing.xsmall,
    ...styles,
    ':where(h1, h2, h3, h4, h5, h6) + &': {
      marginTop: theme.spacing.xsmall,
    },
    '&:first-child': {
      marginTop: 0,
    },
  }
})

const ParagraphSC = styled(Paragraph)(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  color: theme.colors['text-light'],
}))

const ListItemSC = styled(ListItem)(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  color: theme.colors['text-light'],
}))

const ListSC = styled(List)((_) => ({}))

const legalPageComponents = {
  Heading: HeadingSC,
  Paragraph: ParagraphSC,
  Item: ListItemSC,
  List: ListSC,
}

export function MarkdocLegalPage({
  components,
  ...props
}: ComponentProps<typeof MarkdocComponent>) {
  return (
    <TextLimiter>
      <MarkdocComponent
        {...props}
        components={{ ...legalPageComponents, components }}
      />
    </TextLimiter>
  )
}
