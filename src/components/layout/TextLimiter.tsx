import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

export const TextLimiter = styled.div(({ theme: _ }) => ({
  maxWidth: 896,

  [mqs.columns]: {
    maxWidth: 896,
  },
}))
