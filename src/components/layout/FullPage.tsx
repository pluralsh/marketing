import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { PageMaxWidthLimiter } from '@src/components/MaxWidthLimiter'

export const StandardPageInner = styled.div(() => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 1088,
  [mqs.xl]: {
    maxWidth: 1248,
  },
  [mqs.xxl]: {
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
