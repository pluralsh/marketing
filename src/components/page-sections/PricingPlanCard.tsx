import { type ReactNode } from 'react'

import { Card, type CardProps, Flex, PlusIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

import { type PricingPlanFragment } from '@src/generated/graphqlDirectus'
import { cn } from '@src/utils/cn'

import { CheckIconSC } from './PricingTable'

export function PricingPlanCard({
  plan,
  cta,
  ...props
}: { plan: PricingPlanFragment; cta: ReactNode } & CardProps) {
  const isEnterprise = plan.name === 'enterprise'
  const planDisplayName = {
    sandbox: 'Plural Sandbox',
    enterprise: 'Enterprise',
    pro: 'Pro Plan',
  }[plan.name]

  return (
    <PlanCardSC
      $isEnterprise={isEnterprise}
      {...props}
    >
      <Flex
        flexDirection="column"
        gap="xxsmall"
      >
        <h3
          className={cn('txt-mktg-subtitle-2', {
            'md:txt-mktg-subtitle-1': isEnterprise,
          })}
        >
          {planDisplayName}
        </h3>
        {plan.subtitle && (
          <span className="txt-mktg-label">{plan.subtitle}</span>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        gap="xsmall"
        flex={1}
      >
        {isEnterprise && (
          <Flex gap="small">
            <PlusIcon
              color="icon-light"
              size={12}
            />
            <span className="txt-mktg-body-1">Pro plan perks</span>
          </Flex>
        )}
        {plan.features?.map((feature) => (
          <Flex
            key={feature?.id}
            gap="small"
          >
            <CheckIconSC size={12} />
            <span className="txt-mktg-body-1">{feature?.description}</span>
          </Flex>
        ))}
      </Flex>
      <div className="mt-xlarge">{cta}</div>
    </PlanCardSC>
  )
}

const PlanCardSC = styled(Card)<{ $isEnterprise: boolean }>(
  ({ theme, $isEnterprise }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.large,
    padding: theme.spacing.xxlarge,
    background: $isEnterprise
      ? theme.colors['fill-one']
      : theme.colors['fill-zero'],
  })
)
