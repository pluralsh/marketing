import styled from 'styled-components'

import { mqs } from '../breakpoints'

export const MainLink = styled.a.withConfig({
  shouldForwardProp: (prop) => !['isDisabled', 'isSelected'].includes(prop),
})<{ isDisabled?: boolean; isSelected?: boolean }>(({ theme, isSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  ...(isSelected
    ? {
        color: theme.colors.text,
      }
    : {}),
  '*:focus-visible > &': {
    textDecoration: 'underline',
  },
  '&, &:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '&[href]:hover': {
    textDecoration: 'underline',
    color: theme.colors.text,
  },
  padding: `${theme.spacing.small}px var(--link-h-pad)`,
}))

export const SecondaryLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '&:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '&:hover': {
    textDecoration: 'underline',
    color: theme.colors.text,
  },
  padding: `${theme.spacing.xsmall}px ${theme.spacing.medium}px`,
  [mqs.fullHeader]: {
    padding: `${theme.spacing.small}px ${theme.spacing.medium}px`,
  },
}))
