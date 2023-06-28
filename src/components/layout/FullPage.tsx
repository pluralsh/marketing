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

export function StandardPage({ children, ...props }) {
  return (
    <FullPage {...props}>
      <StandardPageInner>{children}</StandardPageInner>
    </FullPage>
  )
}

export const FullPage = styled(PageMaxWidthLimiter)((_) => ({
  width: '100%',
}))
