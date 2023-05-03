import { type ComponentProps } from 'react'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

export const Heading1 = styled.h1(({ theme }) => ({
  ...theme.partials.marketingText.title2,
  [mqs.md]: {
    ...theme.partials.marketingText.title1,
  },
  [mqs.xxl]: {
    ...theme.partials.marketingText.hero2,
  },
}))

export const Body1 = styled.p(({ theme }) => ({
  ...theme.partials.marketingText.body1,
}))

const SubtitleWrap = styled.h2((_) => ({
  display: 'flex',
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center',
}))

const SubtitleContent = styled.div(({ theme }) => ({
  paddingLeft: theme.spacing.medium,
  paddingRight: theme.spacing.medium,
  ...theme.partials.marketingText.body2Bold,
  color: theme.colors.text,
}))

const SubtitleBorder = styled((props) => (
  <div
    aria-hidden
    {...props}
  />
))(({ theme }) => ({
  flexGrow: '1',
  borderTop: theme.borders.default,
  minWidth: theme.spacing.xlarge,
}))

export function Subtitle({
  children,
  ...props
}: ComponentProps<typeof SubtitleWrap>) {
  return (
    <SubtitleWrap {...props}>
      <SubtitleBorder />
      <SubtitleContent>{children}</SubtitleContent>
      <SubtitleBorder />
    </SubtitleWrap>
  )
}
