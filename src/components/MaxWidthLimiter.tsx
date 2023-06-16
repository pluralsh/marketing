import styled from 'styled-components'

export const PageMaxWidthLimiter = styled.div(({ theme: _ }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'var(--page-x-pad)',
  paddingRight: 'var(--page-x-pad)',
  maxWidth: 'var(--page-max-width)',
}))
