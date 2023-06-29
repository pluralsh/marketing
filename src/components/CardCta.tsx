import { type ComponentProps, forwardRef } from 'react'

import { CaretRightIcon, useNavigationContext } from '@pluralsh/design-system'

import styled from 'styled-components'

export const CardCtaSC = styled.a(({ theme }) => ({
  ...theme.partials.marketingText.standaloneLink,
  fontSize: 12,
  display: 'flex',
  flexDirection: 'row',
  columnGap: theme.spacing.small,
  paddingTop: theme.spacing.xsmall,
  paddingBottom: theme.spacing.xsmall,
  '._chevron': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export const CardCta = forwardRef(
  ({ children, ...props }: ComponentProps<any>, ref) => {
    const { Link } = useNavigationContext()

    return (
      <CardCtaSC
        as={Link}
        ref={ref}
        {...props}
      >
        <div>{children}</div>
        <div className="_chevron">
          <CaretRightIcon size={12} />
        </div>
      </CardCtaSC>
    )
  }
)
