import { type ComponentProps, Fragment } from 'react'

import { Button } from '@pluralsh/design-system'
import Link from 'next/link'

import chroma from 'chroma-js'
import { isEmpty } from 'lodash-es'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { ResponsiveText } from '@src/components/Typography'
import {
  type PlanFeatureValue as LineItemT,
  type Plan,
  type PlansFeatures,
} from '@src/data/getPricing'
import { type Omit$Props } from '@src/utils/typescript'

const PlanFeatureSC = styled.div(({ theme }) => ({
  ...theme.partials.marketingText.body2Bold,
  color: theme.colors['text-light'],

  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  padding: `${theme.spacing.medium}px ${theme.spacing.xsmall}px`,
  borderBottom: theme.borders.default,
  height: '100%',
}))
const LineItemHead = styled(PlanFeatureSC)((_) => ({
  textAlign: 'left',
  justifyContent: 'left',
}))

export function PlanFeature({
  item,
  ...props
}: { item: LineItemT } & ComponentProps<typeof PlanFeatureSC>) {
  const label = item?.label?.split('/').flatMap((value, i, array) =>
    array.length - 1 !== i // check for the last item
      ? [value, <Fragment key={i}>&#8203;/</Fragment>]
      : value
  )

  return (
    <PlanFeatureSC {...props}>
      {item.checked ? (
        <PlanFeatureCheck />
      ) : !isEmpty(label) ? (
        label
      ) : (
        <PlanFeatureX />
      )}
    </PlanFeatureSC>
  )
}

export function PlansFeaturesRow({
  item,
  plans,
  ...props
}: {
  item: PlansFeatures[number]
  plans: Plan[]
  className?: string
}) {
  return (
    <tr {...props}>
      <th scope="row">
        <LineItemHead>{item.label}</LineItemHead>
      </th>
      {plans.map((plan) => (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <td key={plan.key}>
          <PlanFeature item={item.values[plan.key]} />
        </td>
      ))}
    </tr>
  )
}
const PlanFeatureCheckSC = styled.div<{ $variant: 'check' | 'x' }>(
  ({ $variant, theme }) => ({
    width: 26,
    height: 26,
    borderRadius: '50%',
    backgroundColor:
      $variant === 'check' ? theme.colors.green[100] : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      display: 'block',
      width: 12,
      height: 12,
    },
  })
)

export function PlanFeatureCheck(props: Omit$Props<typeof PlanFeatureCheckSC>) {
  return (
    <PlanFeatureCheckSC
      $variant="check"
      {...props}
    >
      <img
        width="12"
        height="12"
        src="/images/icons/check.svg"
      />
    </PlanFeatureCheckSC>
  )
}

export function PlanFeatureX(props: Omit$Props<typeof PlanFeatureCheckSC>) {
  return (
    <PlanFeatureCheckSC
      $variant="x"
      {...props}
    >
      <img
        width="12"
        height="12"
        src="/images/icons/close.svg"
      />
    </PlanFeatureCheckSC>
  )
}
const PlanHeadingSC = styled(PlanFeatureSC)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.medium,
  paddingTop: theme.spacing.xxlarge,
  paddingBottom: theme.spacing.xxlarge,
  borderBottom: 'none',
}))

function PlanHeading({ plan }: { plan?: Plan }) {
  return (
    <PlanHeadingSC>
      {plan && (
        <>
          <ResponsiveText textStyles={{ '': 'mSubtitle2' }}>
            {plan.label}
          </ResponsiveText>
          <Button
            as={Link}
            href={plan.cta.url}
            small
            {...(plan.key === 'pro' ? { primary: true } : { secondary: true })}
          >
            {plan.cta.label}
          </Button>
        </>
      )}
    </PlanHeadingSC>
  )
}
const PlansFeaturesTableSC = styled.table<{ $numPlans: number }>(
  ({ $numPlans, theme }) => ({
    color: theme.colors.text,
    display: 'grid',
    alignItems: 'stretch',
    gridTemplateColumns: `auto ${new Array($numPlans).fill('1fr').join(' ')}`,
    'tbody,thead': {
      display: 'contents',
    },
    'tr,th,td': {
      padding: 0,
      margin: 0,
      border: 'none',
    },
    tr: {
      display: 'contents',
    },
    '.tableItem, .tableHead': {
      borderBottom: theme.borders.default,
    },
    th: {
      paddingLeft: 0,
      textAlign: 'left',
      justifyContent: 'start',
    },
    'td, .tableHead': {
      textAlgin: 'center',
      justifyContent: 'center',
    },
    '.columnHeads': {
      '& >  *': {
        position: 'sticky',
        top: 'var(--top-nav-height)',
        backgroundColor: `${chroma(theme.colors['fill-zero']).alpha(0.6)}`,
        backdropFilter: 'blur(6px)',
      },
    },
    '.tableContent': {
      paddingTop: 500,
      '& > *': {
        // borderBottom: theme.borders.default,
      },
      '& > *:first-child': {
        paddingLeft: 'var(--page-x-pad)',
      },
      '& > *:last-child': {
        paddingRight: 'var(--page-x-pad)',
      },
      [mqs.md]: {
        '& > *:first-child, & > *:last-child': {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    '[colspan="2"]': {
      gridColumn: 'span 2',
    },
  })
)

export function PlansFeaturesTable({
  items,
  plans,
  ...props
}: { items: PlansFeatures; plans: Plan[] } & Omit$Props<
  typeof PlansFeaturesTableSC
>) {
  const isOnePlan = plans.length === 1

  return (
    <PlansFeaturesTableSC
      $numPlans={plans.length}
      {...props}
    >
      <thead>
        <tr className="columnHeads">
          {!isOnePlan && (
            <th className="tableHead">
              <span className="sr-only">Feature</span>
            </th>
          )}
          {plans.map((plan) => (
            <th
              key={plan.key}
              className="tableHead"
              scope="col"
              {...(isOnePlan ? { colSpan: 2, 'aria-colspan': 2 } : {})}
            >
              <PlanHeading plan={plan} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <PlansFeaturesRow
            key={`${item.label}-${i}`}
            className="tableContent"
            plans={plans}
            item={item}
          />
        ))}
      </tbody>
    </PlansFeaturesTableSC>
  )
}
