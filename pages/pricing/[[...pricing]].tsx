import { type ComponentProps, useId } from 'react'

import { Button, ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

import chroma from 'chroma-js'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { ResponsiveText, ScrollToLink } from '@src/components/Typography'
import getPricing, {
  type LineItem,
  type LineItems,
  type Plan,
  type Pricing,
} from '@src/data/getPricing'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { type Omit$Props } from '@src/utils/typescript'

import { HeaderPad } from '../../src/components/layout/HeaderPad'

export function PlanCard({ plan }: { plan: Plan }) {
  return <div>{plan.label}</div>
}

const LineItemSC = styled.div(({ theme }) => ({
  ...theme.partials.marketingText.body2Bold,
  color: theme.colors['text-light'],

  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  padding: `${theme.spacing.medium}px ${theme.spacing.xsmall}px`,
  borderBottom: theme.borders.default,
}))

const LineItemHead = styled(LineItemSC)((_) => ({
  textAlign: 'left',
  justifyContent: 'left',
}))

export function LineItem({
  item,
  ...props
}: { item: LineItem } & ComponentProps<typeof LineItemSC>) {
  return (
    <LineItemSC {...props}>
      {item.checked ? (
        <LineItemCheck />
      ) : item.label ? (
        item.label
      ) : (
        <LineItemX />
      )}
    </LineItemSC>
  )
}

export function LineItemRow({
  item,
  plans,
  ...props
}: {
  item: LineItems[number]
  plans: Plan[]
  className?: string
}) {
  return (
    <tr {...props}>
      <th scope="row">
        <LineItemHead>{item.label}</LineItemHead>
      </th>
      {plans.map((plan) => (
        <td key={plan.key}>
          <LineItem item={item.values[plan.key]} />
        </td>
      ))}
    </tr>
  )
}

const LineItemCheckSC = styled.div<{ $variant: 'check' | 'x' }>(
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

export function LineItemCheck(props: Omit$Props<typeof LineItemCheckSC>) {
  return (
    <LineItemCheckSC
      $variant="check"
      {...props}
    >
      <img
        width="12"
        height="12"
        src="/images/icons/check.svg"
      />
    </LineItemCheckSC>
  )
}

export function LineItemX(props: Omit$Props<typeof LineItemCheckSC>) {
  return (
    <LineItemCheckSC
      $variant="x"
      {...props}
    >
      <img
        width="12"
        height="12"
        src="/images/icons/close.svg"
      />
    </LineItemCheckSC>
  )
}

const PlanHeadingSC = styled(LineItemSC)(({ theme }) => ({
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

const LineItemsTableSC = styled.table<{ $numPlans: number }>(
  ({ $numPlans, theme }) => ({
    color: theme.colors.text,
    display: 'grid',
    alignItems: 'stretch',
    gridTemplateColumns: `auto ${new Array($numPlans).fill('1fr').join(' ')}`,
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
        backgroundColor: `${chroma(theme.colors['fill-one']).alpha(0.6)}`,
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

function LineItemsTable({
  items,
  plans,
  ...props
}: { items: LineItems; plans: Plan[] } & Omit$Props<typeof LineItemsTableSC>) {
  const isOnePlan = plans.length === 1

  return (
    <LineItemsTableSC
      $numPlans={plans.length}
      {...props}
    >
      <tr className="columnHeads">
        {!isOnePlan && (
          <td className="tableHead">
            <PlanHeading />
          </td>
        )}
        {plans.map((plan) => (
          <th
            className="tableHead"
            scope="col"
            key={plan.key}
            {...(isOnePlan ? { colSpan: 2, 'aria-colspan': 2 } : {})}
          >
            <PlanHeading plan={plan} />
          </th>
        ))}
      </tr>
      {items.map((item, i) => (
        <LineItemRow
          className="tableContent"
          key={`${item.label}-${i}`}
          plans={plans}
          item={item}
        />
      ))}
    </LineItemsTableSC>
  )
}

export default function Pricing({
  plans,
  lineItems,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const compareId = useId()

  return (
    <HeaderPad
      as={GradientBG}
      image="/images/gradients/gradient-bg-5.jpg"
    >
      <StandardPage className="flex flex-col gap-xlarge [text-wrap:balance] py-xxlarge md:pt-xxxxlarge md:pb-xxxlarge">
        <ResponsiveText
          className="max-w-[700px]"
          as="h1"
          textStyles={{
            '': 'mTitle2',
            sm: 'mHero2',
            xxl: 'mBigHeader',
          }}
        >
          Clear and straightforward pricing
        </ResponsiveText>
        <ScrollToLink target={compareId}>Compare plans</ScrollToLink>
      </StandardPage>
      <StandardPage className="flex flex-col gap-xlarge [text-wrap:balance] py-xxlarge md:pt-xxxxlarge md:pb-xxxlarge">
        <Columns>
          {plans.map((plan) => (
            <EqualColumn key={plan.key}>
              <PlanCard plan={plan} />
            </EqualColumn>
          ))}
        </Columns>
      </StandardPage>
      <ColorModeProvider mode="light">
        <div className="bg-fill-zero pt-xxxxlarge md:pt-xxxxxlarge">
          <StandardPage>
            <div className="pb-xxlarge md:pb-xxxlarge text-center">
              <ResponsiveText
                as="h2"
                color="text-light"
                textStyles={{ '': 'mLabel' }}
              >
                Compare plans
              </ResponsiveText>
              <ResponsiveText
                as="h3"
                textStyles={{ '': 'mSubtitle2', sm: 'mHero2' }}
                color="text"
                className="mt-medium "
              >
                Find the plan that is right for your business
              </ResponsiveText>
              <ResponsiveText
                as="p"
                className="mt-xlarge"
                color="text-light"
                textStyles={{ '': 'mBody1' }}
              >
                Flexible plans for every stage of your business.
              </ResponsiveText>
            </div>
          </StandardPage>

          <div id={compareId}>
            {/* Desktop Pricing table */}
            <StandardPage className="hidden md:block">
              <LineItemsTable
                items={lineItems}
                plans={plans}
              />
            </StandardPage>
            {/* Desktop Pricing tables */}
            <div className="flex flex-col gap-y-xlarge md:hidden">
              {plans.map((plan) => (
                <LineItemsTable
                  key={plan.key}
                  plans={[plan]}
                  items={lineItems}
                />
              ))}
            </div>
          </div>
        </div>
      </ColorModeProvider>
    </HeaderPad>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  return {
    paths: [{ params: {} }],
    fallback: true,
  }
}

export type PricingPageProps = Pricing

export const getStaticProps: GetStaticProps<PricingPageProps> = async (
  _context
) => {
  if (_context?.params?.pricing) {
    return { notFound: true }
  }
  const { data: pricing, error: pricingError } = await getPricing()

  if (!pricing) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'Pricing',
    ...pricing,
    footerVariant: FooterVariant.kitchenSink,
    errors: [...(pricingError ? [pricingError] : [])],
  })
}
