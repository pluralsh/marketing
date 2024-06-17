import { type ComponentProps, forwardRef } from 'react'

import { useNavigationContext } from '@pluralsh/design-system'

import styled, { useTheme } from 'styled-components'

import { productsConfigs } from '@src/data/getProductConfigs'

import { mqs } from '../breakpoints'

import { ResponsiveText } from './Typography'

export const MainLink = forwardRef(
  (props: ComponentProps<typeof MainLinkBase>, ref) => {
    const { Link } = useNavigationContext()

    return (
      <MainLinkBase
        ref={ref}
        as={Link}
        {...props}
      />
    )
  }
)
export const ProductLink = forwardRef(
  (props: ComponentProps<typeof MainLinkBase>, ref) => {
    const { Link } = useNavigationContext()
    const theme = useTheme()

    const itemConfig = productsConfigs[props.id || '']

    return (
      <MainLinkBase
        ref={ref}
        as={Link}
        {...props}
      >
        <div className="h-[40px] w-[40px] rounded-medium border border-grey-750 bg-fill-two p-[10px]">
          {itemConfig?.navIcon}
        </div>
        <div>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2Bold' }}
          >
            {itemConfig?.title}
          </ResponsiveText>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2' }}
            style={{ color: theme.colors['text-light'] }}
          >
            {itemConfig?.navDescription}
          </ResponsiveText>
        </div>
      </MainLinkBase>
    )
  }
)

export const MainLinkBase = styled.a.withConfig({
  shouldForwardProp: (prop) => !['isDisabled', 'isSelected'].includes(prop),
})<{ isDisabled?: boolean; isSelected?: boolean }>(({ theme, isSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xsmall,
  cursor: 'pointer',
  ...(isSelected
    ? {
        color: theme.colors.text,
      }
    : {}),
  [[
    '*:focus-visible > &',
    '*:focus-visible > &:any-link',
    '&:focus-visible',
    '&:any-link:focus-visible',
  ].join(', ')]: {
    textDecoration: 'underline',
    textDecorationColor: theme.colors['border-outline-focused'],
    boxShadow: 'none',
  },
  '&, &:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '&[href]:hover, &:hover': {
    textDecoration: 'underline',
    color: theme.colors.text,
  },
  padding: `${theme.spacing.small}px var(--top-nav-link-h-pad)`,
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
