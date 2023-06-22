import { CheckRoundedIcon } from '@pluralsh/design-system'

import styled, { useTheme } from 'styled-components'

export const Checklist = styled.ul(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.medium,
}))

export const ChecklistItem = styled(({ children, ...props }) => {
  const theme = useTheme()

  return (
    <li {...props}>
      <CheckRoundedIcon
        color={theme.colors['icon-success']}
        size={20}
      />
      {children}
    </li>
  )
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.small,
  ...theme.partials.marketingText.body1Bold,
  color: theme.colors.text,
}))
