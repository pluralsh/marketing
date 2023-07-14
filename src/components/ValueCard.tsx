import { type ComponentProps, type ReactNode } from 'react'

import styled from 'styled-components'

import { ShadowedCard } from './ShadowedCard'

const ValueCardSC = styled(ShadowedCard)(({ theme }) => ({
  color: theme.colors.text,
  display: 'flex',

  flexDirection: 'column',
  padding: theme.spacing.xlarge,
  rowGap: theme.spacing.small,
  '.top': {
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing.medium,
  },
}))

export const ValueCardIconSC = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing.small,
  border: theme.borders.default,
  borderRadius: theme.borderRadiuses.medium,
  background: theme.colors['fill-zero'],
  color: theme.colors['icon-secondary'],
  img: {
    display: 'block',
    maxWidth: 'unset',
    width: 24,
    height: 24,
  },
}))

export const ValueCardTitleSC = styled.h4(({ theme }) => ({
  ...theme.partials.marketingText.subtitle2,
}))
export const ValueCardContentSC = styled.p(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  color: theme.colors.text,
}))

export function ValueCard({
  iconUrl,
  title,
  children,
  ...props
}: {
  iconUrl: string
  title: ReactNode
  children: ReactNode
} & ComponentProps<typeof ValueCardSC>) {
  return (
    <ValueCardSC {...props}>
      <div className="top">
        <ValueCardIconSC>
          <img src={iconUrl} />
        </ValueCardIconSC>
        <ValueCardTitleSC>{title}</ValueCardTitleSC>
      </div>
      <ValueCardContentSC>{children}</ValueCardContentSC>
    </ValueCardSC>
  )
}
