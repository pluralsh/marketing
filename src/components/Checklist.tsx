import { CheckRoundedIcon } from '@pluralsh/design-system'

import styled, { useTheme } from 'styled-components'

import { PlanFeatureCheck } from './page-sections/PlansFeaturesTables'

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
        className="icon"
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
  textWrap: 'balance',
  '.icon': { flexShrink: 0 },
}))

// Larger variant currently styled for light theme only
// Used on Solutions pages
export const Checklist2 = styled.ul(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
}))

const Checklist2ItemSC = styled.li(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.medium,
  ...theme.partials.marketingText.subtitle2,
  color: theme.colors.text,
  textWrap: 'balance',
  '.icon': {
    flexShrink: 0,
  },
}))

export function Checklist2Item({ children, ...props }) {
  return (
    <Checklist2ItemSC {...props}>
      {/* @ts-expect-error */}
      <PlanFeatureCheck className="icon" />
      {children}
    </Checklist2ItemSC>
  )
}
