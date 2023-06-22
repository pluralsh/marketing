import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

export const TextLimiter = styled.div(({ theme: _ }) => ({
  maxWidth: 600,

  [mqs.columns]: {
    maxWidth: 600,
  },
}))
