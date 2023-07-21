import { type ComponentProps } from 'react'

import styled from 'styled-components'

import { breakpoints, mqs } from '@src/breakpoints'

const PageMaxWidthLimiter = styled.div(({ theme: _ }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'var(--page-x-pad)',
  paddingRight: 'var(--page-x-pad)',
  maxWidth: 'var(--page-max-width)',
}))

export const StandardPageInner = styled.div(() => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: `calc(${breakpoints.md}px - (var(--page-x-pad) * 2))`,
  [mqs.columns]: {
    maxWidth: 1088,
  },
  [mqs.xl]: {
    maxWidth: 1248,
  },
  [mqs.max]: {
    maxWidth: 1432,
  },
}))

export const FullPageWidth = styled(PageMaxWidthLimiter)((_) => ({
  width: '100%',
}))

export function StandardPageWidth({ children, ...props }) {
  return (
    <FullPageWidth {...props}>
      <StandardPageInner>{children}</StandardPageInner>
    </FullPageWidth>
  )
}

const StandardPageSectionSC = styled.div<{
  $padTop?: boolean
  $padBottom?: boolean
}>(({ $padTop: padTop = true, $padBottom: padBottom = true, theme }) => ({
  paddingTop: padTop ? theme.spacing.xxxxlarge : undefined,
  paddingBottom: padBottom ? theme.spacing.xxxxlarge : undefined,
  [mqs.md]: {
    paddingTop: padTop ? theme.spacing.xxxxxlarge : undefined,
    paddingBottom: padBottom ? theme.spacing.xxxxxlarge : undefined,
  },
  [mqs.xxl]: {
    paddingTop: padTop ? theme.spacing.xxxxxxlarge : undefined,
    paddingBottom: padBottom ? theme.spacing.xxxxxxlarge : undefined,
  },
}))

export function StandardPageSection({
  padTop = true,
  padBottom = true,
  ...props
}: {
  padTop?: boolean
  padBottom?: boolean
} & ComponentProps<typeof StandardPageSectionSC>) {
  return (
    <StandardPageSectionSC
      $padBottom={padBottom}
      $padTop={padTop}
      {...props}
    />
  )
}
