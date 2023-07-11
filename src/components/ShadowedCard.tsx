import styled from 'styled-components'

export const ShadowedCard = styled.div(({ theme }) => ({
  borderRadius: theme.borderRadiuses.large,
  border: theme.borders.default,
  ...(theme.mode === 'light'
    ? {
        backgroundColor: theme.colors['fill-one'],
        // /* Purple - M/Slight Shadow - M */
        boxShadow:
          '0px 2px 10px 0px rgba(74, 81, 242, 0.04), 0px 1px 3px 0px rgba(74, 81, 242, 0.04)',
      }
    : {
        backgroundColor: theme.colors['fill-zero'],
        /* Purple - M/Moderate Shadow -M */
        boxShadow: `0px 2px 10px 0px rgba(74, 81, 242, 0.08), 0px 2px 7px 1px rgba(74, 81, 242, 0.10)`,
      }),
}))
