import { type ComponentProps } from 'react'

import {
  Button,
  CheckRoundedIcon,
  Chip,
  InvoicesIcon,
} from '@pluralsh/design-system'
import { type GetStaticProps, type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import styled from 'styled-components'

import { directusClient } from '@src/apollo-client'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { StandardFAQSection } from '@src/components/page-sections/StandardFAQSection'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ResponsiveText } from '@src/components/Typography'
import getPricing, { type Plan, type Pricing } from '@src/data/getPricing'
import {
  type FaqItemFragment,
  FaqListDocument,
  type FaqListQuery,
  type FaqListQueryVariables,
} from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { normalizeM2mItems } from '@src/utils/normalizeQuotes'

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
            {price.split(', ').map((line, i, arr) => (
              <>
                {line}
                {i !== arr.length - 1 && <br />}
              </>
            ))}
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
    <StandardPageWidth className="flex flex-col gap-xlarge pb-xxlarge [text-wrap:balance] md:pb-xxxlarge">
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

const features = [
  'Plural platform with enterprise security features',
  'Standard 8am – 5pm and 24/7 enterprise support coverage available',
  'Private Slack or Teams channel',
  'Consultative support with fast initial response times',
  'Rich onboarding and regular check-ins',
]

export default function Pricing({
  faqs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-13.png"
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
              'pb-xxxlarge pt-xxlarge',
              'md:pb-xxxlarge md:pt-xxxxlarge',
              'xxl:pb-xxxxlarge xxl:pt-xxxxlarge'
            )}
          >
            <ResponsiveText
              className="max-w-[1100px]"
              as="h1"
              textStyles={{
                '': 'mTitle2',
                sm: 'mHero2',
                xxl: 'mBigHeader',
              }}
            >
              The Kubernetes lifecycle management platform built for DevOps
              teams at scale.
            </ResponsiveText>
            <Button
              large
              primary
              as={Link}
              href="/contact-sales"
              className="mt-xlarge w-fit"
            >
              Book a demo today
            </Button>
          </StandardPageWidth>
        </div>
      </HeaderPad>
      <div
        className={classNames(
          'bg-fill-zero',
          'flex flex-col',
          'gap-y-large py-xxxxlarge',
          'md:gap-y-large md:py-xxxxxlarge',
          'xxl:gap-y-xlarge xxl:py-xxxxxxlarge',
          'm-auto max-w-[850px]'
        )}
      >
        <div>
          <StandardPageWidth className="pb-xxlarge md:pb-xxxlarge">
            <CenteredSectionHead
              heading="Fair and transparent value-based pricing"
              intro="Plural is priced by the number of services deployed and managed by Plural. 
              Reach out to our sales team for more information."
              introProps={{ className: 'md:px-xxxxlarge' }}
            />
            <ul className="my-xxlarge flex w-full flex-col gap-small">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-medium rounded-large border border-border-fill-two bg-fill-one p-small"
                >
                  <CheckRoundedIcon color="icon-success" />
                  <ResponsiveText
                    as="span"
                    textStyles={{
                      '': 'mBody2Bold',
                    }}
                  >
                    {feature}
                  </ResponsiveText>
                </li>
              ))}
            </ul>
            {/* get quote */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-large border border-border-primary p-xlarge">
              <GetQuoteSC />
              <div className="z-10 flex max-w-[474px] flex-col items-center">
                <ResponsiveText
                  as="h3"
                  textStyles={{
                    '': 'mSubtitle1',
                  }}
                >
                  Get a quote
                </ResponsiveText>
                <ResponsiveText
                  as="p"
                  textStyles={{
                    '': 'mBody1',
                  }}
                  className="mt-small max-w-[474px] text-center"
                >
                  Connect with our sales team to discuss plans, pricing,
                  enterprise agreements, or to schedule a demo.
                </ResponsiveText>
                <Button
                  large
                  primary
                  as={Link}
                  href="/contact-sales"
                  className="mt-xlarge w-full"
                  startIcon={<InvoicesIcon />}
                >
                  Contact sales
                </Button>
              </div>
            </div>
          </StandardPageWidth>
        </div>
        <StandardFAQSection faqs={faqs} />
      </div>
    </>
  )
}

const GetQuoteSC = styled.div(({ theme }) => ({
  overflow: 'hidden',
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  backgroundImage: `url(/images/pricing/quote-bg.png)`,
  backgroundPosition: 'center center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.colors['fill-two'],
}))

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
    metaDescription: 'Flexible plans for every stage of your business',
    ...pricing,
    faqs: normalizeM2mItems(faqData.collapsible_lists?.[0]) || [],
    footerVariant: FooterVariant.kitchenSink,
    errors: combineErrors([pricingError, faqError]),
  })
}
