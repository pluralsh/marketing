import { type ComponentProps, useId } from 'react'

import { Button, Chip, ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

import classNames from 'classnames'
import styled from 'styled-components'

import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { PricingFAQSection } from '@src/components/page-sections/PricingFAQSection'
import { ScrollToLink } from '@src/components/ScrollToLink'
import { ResponsiveText } from '@src/components/Typography'
import getPricing, { type Plan, type Pricing } from '@src/data/getPricing'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { indexPageStaticPaths } from '@src/utils/staticPaths'

import { PlansFeaturesTable as PlanFeaturesTable } from '../../src/components/page-sections/PlansFeaturesTables'

const DUMMY_PATH_PARAM = 'pricing'

export const getStaticPaths: GetStaticPaths = async () =>
  indexPageStaticPaths(DUMMY_PATH_PARAM)

const PlanCardSC = styled.div(({ theme }) => ({
  '&, .titleArea, .content, .featureList': {
    display: 'flex',
    flexDirection: 'column',
  },
  gap: theme.spacing.xxlarge,
  position: 'relative',
  background: theme.colors['fill-zero'],
  border: theme.borders.default,
  padding: `${theme.spacing.xxlarge}px ${theme.spacing.xlarge}px`,
  borderRadius: theme.borderRadiuses.large,
  '.titleArea': {
    gap: theme.spacing.xxsmall,
  },
  '.content': {
    gap: theme.spacing.large,
  },
  '.featureList': {
    gap: theme.spacing.xsmall,
    li: {
      ...theme.partials.marketingText.body2,
      color: theme.colors.text,
    },
  },
  '.violator': {
    position: 'absolute',
    top: 0,
    transform: 'translateY(-50%)',
  },
}))

export function PlanCard({
  plan: { cta, violator, label, price, features, isFeatured },
  ...props
}: {
  plan: Plan
} & ComponentProps<typeof PlanCardSC>) {
  return (
    <PlanCardSC {...props}>
      {violator?.label && (
        <Chip
          size="large"
          fillLevel={2}
          className="violator"
          severity="success"
        >
          {violator.label}
        </Chip>
      )}
      <div className="content">
        <div className="titleArea">
          <ResponsiveText
            color="text"
            textStyles={{ '': isFeatured ? 'mTitle1' : 'mSubtitle1' }}
          >
            {label}
          </ResponsiveText>
          <ResponsiveText
            color="text-xlight"
            textStyles={{ '': 'mLabel' }}
          >
            {price}
          </ResponsiveText>
        </div>
        {features && (
          <ul className="featureList">
            {features?.map((feature) => (
              <li key={feature.label}>{feature.label}</li>
            ))}
          </ul>
        )}
      </div>

      {cta && (
        <Button
          {...(isFeatured ? { primary: true } : { secondary: true })}
          as={Link}
          href={cta.url}
          className="cta"
        >
          {cta.label}
        </Button>
      )}
    </PlanCardSC>
  )
}

export function PlanCardsSection({ plans }: { plans: Plan[] }) {
  return (
    <StandardPage className="flex flex-col gap-xlarge [text-wrap:balance] pb-xxlarge md:pb-xxxlarge">
      <Columns className="gap-y-xlarge">
        {plans.map((plan) => (
          <EqualColumn key={plan.key}>
            <PlanCard plan={plan} />
          </EqualColumn>
        ))}
      </Columns>
    </StandardPage>
  )
}

export default function Pricing({
  plans,
  plansFeatures,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const compareId = useId()

  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-5.jpg"
      >
        <div
          className={classNames(
            'pb-xlarge',
            'md:pb-xxxxxlarge',
            'xxl:pb-xxxxxxlarge'
          )}
        >
          <StandardPage
            className={classNames(
              'flex flex-col gap-xlarge [text-wrap:balance]',
              'pt-xxlarge pb-xxxlarge',
              'md:pt-xxxxlarge md:pb-xxxlarge',
              'xxl:pt-xxxxlarge xxl:pb-xxxxlarge'
            )}
          >
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
            <ScrollToLink
              className="mt-xxxlarge"
              scrollToTarget={compareId}
            >
              Compare plans
            </ScrollToLink>
          </StandardPage>
          <PlanCardsSection plans={plans} />
        </div>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'py-xxxxlarge gap-y-xxxxlarge',
            'md:py-xxxxxlarge md:gap-y-xxxxxlarge',
            'xxl:py-xxxxxxlarge xxl:gap-y-xxxxxxlarge'
          )}
        >
          <div>
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
                <PlanFeaturesTable
                  items={plansFeatures}
                  plans={plans}
                />
              </StandardPage>
              {/* Desktop Pricing tables */}
              <div className="flex flex-col gap-y-xlarge md:hidden">
                {plans.map((plan) => (
                  <PlanFeaturesTable
                    key={plan.key}
                    plans={[plan]}
                    items={plansFeatures}
                  />
                ))}
              </div>
            </div>
          </div>
          <PricingFAQSection />
        </div>
      </ColorModeProvider>
    </>
  )
}

export type PricingPageProps = Pricing

export const getStaticProps: GetStaticProps<PricingPageProps> = async (
  _context
) => {
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
