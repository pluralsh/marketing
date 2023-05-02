import { type ComponentProps } from 'react'

import styled from 'styled-components'

const SubtitleInner = styled.h2(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center',
  '._content': {
    paddingLeft: theme.spacing.medium,
    paddingRight: theme.spacing.medium,
    ...theme.partials.text.subtitle2,
  },
  '._border': {
    flexGrow: '1',
    content: '" stuff"',
    borderTop: theme.borders.default,
    minWidth: theme.spacing.xlarge,
  },
}))

export function Subtitle({
  children,
  ...props
}: ComponentProps<typeof SubtitleInner>) {
  return (
    <SubtitleInner {...props}>
      <div
        className="_border"
        aria-hidden
      />
      <div className="_content">{children}</div>
      <div
        className="_border"
        aria-hidden
      />
    </SubtitleInner>
  )
}
