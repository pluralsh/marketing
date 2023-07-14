import styled from 'styled-components'

import { mShadows } from '@src/styles/extraStyles'

export const ShadowedCard = styled.div<{ $clickable?: boolean }>(
  ({ $clickable = false, theme }) => ({
    borderRadius: theme.borderRadiuses.large,
    border: theme.borders.default,
    transition: 'all 0.2s ease',
    ...(theme.mode === 'light'
      ? {
          backgroundColor: theme.colors['fill-one'],
          boxShadow: mShadows.purple.slight,
          ...($clickable
            ? {
                '&:hover': {
                  boxShadow: mShadows.purple.moderate,
                },
              }
            : {}),
        }
      : {
          backgroundColor: theme.colors['fill-zero'],
          boxShadow: mShadows.purple.moderate,
          ...($clickable
            ? {
                '&:hover': {
                  boxShadow: mShadows.light.modal,
                },
              }
            : {}),
        }),
  })
)
