import { type ComponentProps, useId } from 'react'

import { Button, Chip, ColorModeProvider } from '@pluralsh/design-system'
import { type GetStaticProps, type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import classNames from 'classnames'
import styled from 'styled-components'

import { directusClient } from '@src/apollo-client'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { StandardFAQSection } from '@src/components/page-sections/StandardFAQSection'
import { ScrollToLink } from '@src/components/ScrollToLink'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ResponsiveText } from '@src/components/Typography'
import getPricing, { type Plan, type Pricing } from '@src/data/getPricing'
import {
  type FaqItemFragment,
  FaqListDocument,
  type FaqListQuery,
  type FaqListQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { PlansFeaturesTable as PlanFeaturesTable } from '../src/components/page-sections/PlansFeaturesTables'

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
    <StandardPageWidth className="flex flex-col gap-xlarge [text-wrap:balance] pb-xxlarge md:pb-xxxlarge">
      <Columns className="gap-y-xlarge">
        {plans.map((plan) => (
          <EqualColumn key={plan.key}>
            <PlanCard plan={plan} />
          </EqualColumn>
        ))}
      </Columns>
    </StandardPageWidth>
  )
}

export default function Pricing({
  plans,
  plansFeatures,
  faqs,
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
          <StandardPageWidth
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
          </StandardPageWidth>
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
            <StandardPageWidth className="pb-xxlarge md:pb-xxxlarge">
              <CenteredSectionHead
                preHeading="Compare plans"
                heading="Find the plan that is right for your business"
                intro="Flexible plans for every stage of your business."
              />
            </StandardPageWidth>
            <div id={compareId}>
              {/* Desktop Pricing table */}
              <StandardPageWidth className="hidden md:block">
                <PlanFeaturesTable
                  items={plansFeatures}
                  plans={plans}
                />
              </StandardPageWidth>
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
          <StandardFAQSection faqs={faqs} />
        </div>
      </ColorModeProvider>
    </>
  )
}

export type PricingPageProps = Pricing & { faqs: (FaqItemFragment | null)[] }

export const getStaticProps: GetStaticProps<PricingPageProps> = async (
  _context
) => {
  const { data: pricing, error: pricingError } = await getPricing()
  const { data: faqData, error: faqError } = await directusClient.query<
    FaqListQuery,
    FaqListQueryVariables
  >({
    query: FaqListDocument,
    variables: { slug: 'pricing' },
  })

  if (!pricing) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'Pricing',
    ...pricing,
    faqs: faqData.collapsible_lists?.[0]?.items || [],
    footerVariant: FooterVariant.kitchenSink,
    errors: [
      ...(pricingError ? [pricingError] : []),
      ...(faqError ? [faqError] : []),
    ],
  })
}
