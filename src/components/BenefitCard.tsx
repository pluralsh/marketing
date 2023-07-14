import { type ComponentProps, type ReactNode } from 'react'

import styled from 'styled-components'

import { ShadowedCard } from './ShadowedCard'
import {
  ValueCardContentSC,
  ValueCardIconSC,
  ValueCardTitleSC,
} from './ValueCard'

const BenefitCardSC = styled(ShadowedCard)(({ theme }) => ({
  color: theme.colors.text,
  display: 'flex',
  alignItems: 'start',
  columnGap: theme.spacing.small,
  padding: theme.spacing.xlarge,
  '.right': {
    display: 'flex',
    flexDirection: 'column',
    row: theme.spacing.medium,
  },
}))
const BenefitCardIconSC = styled(ValueCardIconSC)((_) => ({
  color: 'unset',
  img: {
    display: 'block',
    maxWidth: 'unset',
    width: 40,
    height: 40,
  },
}))
const BenefitCardTitleSC = ValueCardTitleSC
const BenefitCardContentSC = ValueCardContentSC

export function BenefitCard({
  iconUrl,
  title,
  children,
  ...props
}: {
  iconUrl: string
  title: ReactNode
  children: ReactNode
} & ComponentProps<typeof BenefitCardSC>) {
  return (
    <BenefitCardSC {...props}>
      <BenefitCardIconSC>
        <img src={iconUrl} />
      </BenefitCardIconSC>
      <div className="right">
        <BenefitCardTitleSC>{title}</BenefitCardTitleSC>
        <BenefitCardContentSC>{children}</BenefitCardContentSC>
      </div>
    </BenefitCardSC>
  )
}
