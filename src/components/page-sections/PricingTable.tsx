import { Button, CheckIcon, CloseIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

import {
  breakpointIsGreaterOrEqual,
  breakpointIsLessThan,
} from '@src/breakpoints'

import { useBreakpoint } from '../contexts/BreakpointProvider'

export function PlanComparisonTableDesktop() {
  const breakpoint = useBreakpoint()

  if (!breakpointIsGreaterOrEqual(breakpoint, 'md')) {
    return null
  }

  return (
    <div
      className="w-full"
      id="plan-comparison"
    >
      <TableGrid $numPlans={plans.length}>
        <HeaderRow>
          <HeaderCell />
          {plans.map((plan) => (
            <HeaderCell
              key={plan.name}
              className={
                plan.name === 'Enterprise' ? 'isEnterprise' : undefined
              }
            >
              {plan.name}
            </HeaderCell>
          ))}
        </HeaderRow>
        {rows.map((rowLabel) => (
          <TableRow key={rowLabel}>
            <ContentCell>{rowLabel !== 'action' && rowLabel}</ContentCell>
            {plans.map((plan) => (
              <ContentCell
                key={plan.name}
                className={
                  plan.name === 'Enterprise' ? 'isEnterprise' : undefined
                }
              >
                {plan.values[rowLabel]}
              </ContentCell>
            ))}
          </TableRow>
        ))}
      </TableGrid>
    </div>
  )
}
export function PlanComparisonTablesMobile() {
  const breakpoint = useBreakpoint()

  if (!breakpointIsLessThan(breakpoint, 'md')) {
    return null
  }

  return (
    <div
      className="flex flex-col gap-xxxlarge"
      id="plan-comparison"
    >
      {plans.map((plan) => (
        <TableGrid
          $numPlans={1}
          key={plan.name}
        >
          <HeaderRow>
            <HeaderCell />
            <HeaderCell
              key={plan.name}
              className={
                plan.name === 'Enterprise' ? 'isEnterprise' : undefined
              }
            >
              {plan.name}
            </HeaderCell>
          </HeaderRow>
          {rows.map((rowLabel) => (
            <TableRow key={rowLabel}>
              <ContentCell>{rowLabel !== 'action' && rowLabel}</ContentCell>
              <ContentCell
                className={
                  plan.name === 'Enterprise' ? 'isEnterprise' : undefined
                }
              >
                {plan.values[rowLabel]}
              </ContentCell>
            </TableRow>
          ))}
        </TableGrid>
      ))}
    </div>
  )
}

export const CheckIconSC = styled(CheckIcon).attrs(() => ({
  color: 'icon-success',
}))``

const TableGrid = styled.div<{ $numPlans: number }>(({ $numPlans }) => ({
  display: 'grid',
  gridTemplateColumns:
    $numPlans === 1 ? '1fr 1.05fr' : `auto repeat(${$numPlans - 1}, 1fr) 2fr`,
  width: '100%',
}))

const HeaderRow = styled.div({
  display: 'contents',
})

const TableRow = styled.div(({ theme }) => ({
  display: 'contents',
  '&:nth-child(even) > *': {
    backgroundColor: theme.colors['fill-zero-selected'],
    '&.isEnterprise': {
      backgroundColor: theme.colors['fill-one-selected'],
    },
  },
}))

const Cell = styled.div(({ theme }) => ({
  background: theme.colors['fill-zero'],
  padding: `${theme.spacing.medium}px ${theme.spacing.large}px`,
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',

  // all cells have default left and bottom borders
  borderLeft: theme.borders.default,
  borderBottom: theme.borders.default,

  // manually add top border to header row cells, right border to last cell in any row
  [`${HeaderRow} &`]: {
    borderTop: theme.borders.default,
  },
  [`${HeaderRow} &:last-child, ${TableRow} &:last-child`]: {
    '&:not(.isEnterprise)': {
      borderRight: theme.borders.default,
    },
  },

  // highlight the whole enterprise plan column with a purple border and brighter background
  '&.isEnterprise': {
    backgroundColor: theme.colors['fill-one'],
    borderRight: theme.borders.default,
    borderLeftColor: theme.colors['border-primary'],
    borderRightColor: theme.colors['border-primary'],
    [`${HeaderRow} &:last-child`]: {
      borderTopColor: theme.colors['border-primary'],
    },
    [`${TableRow}:last-child &:last-child`]: {
      borderBottomColor: theme.colors['border-primary'],
    },
  },

  // border radii around the corners
  [`${HeaderRow} &:first-child`]: {
    borderTopLeftRadius: theme.borderRadiuses.large,
  },
  [`${HeaderRow} &:last-child`]: {
    borderTopRightRadius: theme.borderRadiuses.large,
  },
  [`${TableRow}:last-child &:first-child`]: {
    borderBottomLeftRadius: theme.borderRadiuses.large,
  },
  [`${TableRow}:last-child &:last-child`]: {
    borderBottomRightRadius: theme.borderRadiuses.large,
  },
}))

const HeaderCell = styled(Cell)(({ theme }) => ({
  ...theme.partials.text.subtitle2,
  padding: `${theme.spacing.xlarge}px ${theme.spacing.large}px`,
}))

const ContentCell = styled(Cell)(({ theme }) => ({
  ...theme.partials.text.body2,
  color: theme.colors['text-xlight'],
}))

const rows = [
  'Clusters',
  'Hosting',
  'SLA',
  'SLA Response',
  'Communication',
  'Success Team',
  'Customized Training',
  'Multi-cluster Deployment',
  'CD Pipelines',
  'IaC Management',
  'PR Automations',
  'Git Integrations',
  'Policy Management',
  'GDPR Compliant',
  'SOC 2 Compliant',
  'action', // not shown but used for bottom button
]

const plans = [
  {
    name: 'Pro Plan',
    values: {
      Clusters: 'Up to 10',
      Hosting: 'Plural shared infrastructure',
      SLA: '99.9% uptime',
      'SLA Response': '1 business day response',
      Communication: 'Email support',
      'Success Team': <CloseIcon />,
      'Customized Training': <CloseIcon />,
      'Multi-cluster Deployment': <CheckIconSC />,
      'CD Pipelines': <CheckIconSC />,
      'IaC Management': <CheckIconSC />,
      'PR Automations': <CheckIconSC />,
      'Git Integrations': <CheckIconSC />,
      'Policy Management': <CheckIconSC />,
      'GDPR Compliant': <CheckIconSC />,
      'SOC 2 Compliant': <CheckIconSC />,
      action: (
        <Button
          as="a"
          href="https://app.plural.sh/"
          target="_blank"
          rel="noopener noreferer"
          secondary
          width="100%"
        >
          Sign up
        </Button>
      ),
    },
  },
  {
    name: 'Enterprise',
    values: {
      Clusters: 'Unlimited',
      Hosting: 'Shared, dedicated, or on-prem infrastructure',
      SLA: '99.9% uptime',
      'SLA Response': '1 hour guaranteed response',
      Communication: 'Dedicated Slack or Teams\nOn-demand Calls',
      'Success Team': <CheckIconSC />,
      'Customized Training': <CheckIconSC />,
      'Multi-cluster Deployment': <CheckIconSC />,
      'CD Pipelines': <CheckIconSC />,
      'IaC Management': <CheckIconSC />,
      'PR Automations': <CheckIconSC />,
      'Git Integrations': <CheckIconSC />,
      'Policy Management': <CheckIconSC />,
      'GDPR Compliant': <CheckIconSC />,
      'SOC 2 Compliant': <CheckIconSC />,
      action: (
        <Button
          as="a"
          href="https://plural.sh/contact-sales"
          target="_blank"
          rel="noopener noreferer"
          width="100%"
        >
          Contact sales
        </Button>
      ),
    },
  },
]
