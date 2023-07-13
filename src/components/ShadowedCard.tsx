import styled from 'styled-components'

import { mShadows } from '@src/styles/extraStyles'

export const ShadowedCard = styled.div(({ theme }) => ({
  borderRadius: theme.borderRadiuses.large,
  border: theme.borders.default,
  ...(theme.mode === 'light'
    ? {
        backgroundColor: theme.colors['fill-one'],
        boxShadow: mShadows.purple.slight,
      }
    : {
        backgroundColor: theme.colors['fill-zero'],
        boxShadow: mShadows.purple.moderate,
      }),
}))
