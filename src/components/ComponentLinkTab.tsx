import { type ComponentProps, type Ref, forwardRef } from 'react'

import { type TabBaseProps } from '@pluralsh/design-system'

import styled from 'styled-components'

const ComponentLinkTabSC = styled.button<{ $active: boolean }>(
  ({ theme, $active }) => ({
    ...theme.partials.reset.button,
    ...theme.partials.marketingText.componentLink,
    borderRadius: theme.borderRadiuses.medium,
    padding: `${theme.spacing.xsmall}px ${theme.spacing.medium}px`,
    '&, &:focus, &:focus-visible': {
      color: $active
        ? theme.colors['action-primary']
        : theme.colors['text-light'],
      outline: 'none',
      boxShadow: 'none',
    },
    '&:focus-visible': {
      textDecoration: 'underline',
    },
  })
)

export const ComponentLinkTab = forwardRef(
  (
    {
      active,
      children,
      textValue,
      ...props
    }: TabBaseProps & ComponentProps<typeof ComponentLinkTabSC>,
    ref: Ref<any>
  ) => (
    <ComponentLinkTabSC
      $active={active}
      ref={ref}
      {...props}
    >
      {children || textValue}
    </ComponentLinkTabSC>
  )
)
