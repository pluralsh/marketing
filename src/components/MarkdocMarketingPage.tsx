import React, { type ComponentProps, type ReactNode } from 'react'

import { collectHeadings } from '@pluralsh/design-system/dist/markdoc'
import {
  Heading,
  List,
  ListItem,
  Paragraph,
} from '@pluralsh/design-system/dist/markdoc/components'
import styled from 'styled-components'

import { TextLimiter } from './layout/TextLimiter'
import MarkdocComponent from './MarkdocContent'
import { TableOfContents } from './TableOfContent'

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

const HrSC = styled.hr(({ theme }) => ({
  border: 'none',
  borderTop: theme.borders.default,
  width: '66.66%',
  minWidth: `min(320px, 100% - ${theme.spacing.large * 2}px)`,
  maxWidth: '800px',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: theme.spacing.xxxlarge,
  marginBottom: theme.spacing.xxxlarge,
}))

const pageComponents = {
  Heading: HeadingSC,
  Paragraph: ParagraphSC,
  Item: ListItemSC,
  List: ListSC,
  Hr: HrSC,
}

export function MarkdocMarketingPage({
  components,
  preContent,
  postContent,
  ...props
}: ComponentProps<typeof MarkdocComponent> & {
  preContent?: ReactNode
  postContent?: ReactNode
}) {
  const toc = props.markdoc?.content
    ? collectHeadings(props.markdoc?.content as any)
    : null

  return (
    <div className="w-[100] flex gap-xlarge justify-between">
      <TextLimiter className="basis-[896px]">
        {preContent}
        <MarkdocComponent
          {...props}
          components={{ ...pageComponents, components }}
        />
        {postContent}
      </TextLimiter>
      {toc && (
        <div className="hidden relative basis-[200px] flex-grow flex-shrink-0 columns:block">
          <TableOfContents toc={toc} />
        </div>
      )}
    </div>
  )
}
