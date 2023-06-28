import { type ComponentProps } from 'react'

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
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { TeamSection } from '@src/components/page-sections/TeamSection'
import { Cta, ResponsiveText } from '@src/components/Typography'
import { type Plan, type Pricing } from '@src/data/getPricing'
import { getTeamMembers } from '@src/data/getTeamMembers'
import { type TeamMemberFragment } from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../../src/components/layout/HeaderPad'

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
          // as="aside"
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
              <li>{feature.label}</li>
            ))}
          </ul>
        )}
      </div>

      {cta && (
        <Button
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
  teamMembers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-1.jpg"
      >
        <div
          className={classNames(
            'pb-xxxlarge',
            'md:pb-xxxxlarge',
            'xxl:pb-xxxxxxlarge'
          )}
        >
          <StandardPage
            className={classNames(
              'flex flex-col gap-xlarge',
              'pt-xxlarge pb-xxxxxlarge',
              'md:pt-xxxxlarge md:pb-xxxxxlarge',
              'xl:pt-xxxxlarge xl:pb-xxxxxxlarge'
            )}
          >
            <ResponsiveText
              className="mb-medium"
              as="h1"
              color="text-xlight"
              textStyles={{
                '': 'mLabel',
              }}
            >
              Our mission
            </ResponsiveText>
            <Columns className="gap-y-xxxxlarge columns:items-center">
              <EqualColumn>
                <TextLimiter>
                  <ResponsiveText
                    className="[text-wrap:balance]"
                    as="h2"
                    textStyles={{
                      '': 'mHero2',
                      md: 'mHero1',
                    }}
                  >
                    We are building a flexible, scalable solution to application
                    delivery.
                  </ResponsiveText>
                </TextLimiter>
              </EqualColumn>
              <EqualColumn>
                <TextLimiter>
                  <ResponsiveText
                    as="p"
                    textStyles={{ '': 'mBody1' }}
                    color="text-light"
                    className="mb-xlarge"
                  >
                    At Plural, we believe that there is a better way to solve
                    the third major constraint—distributed systems operational
                    cost—that benefits OSS developers and DevOps teams alike.
                  </ResponsiveText>
                  <Cta
                    target="_blank"
                    href="/blog/what-is-plural/"
                  >
                    Read more
                  </Cta>
                </TextLimiter>
              </EqualColumn>
            </Columns>
          </StandardPage>
          <StandardPage>
            <div className="text-center">
              <ResponsiveText
                textStyles={{ '': 'aOverline' }}
                color="text-light"
                className="mb-xxlarge"
              >
                We&rsquo;re backed by incredible investors
              </ResponsiveText>
              <div className="mx-auto flex flex-col gap-y-xxxxlarge items-center md:flex-row md:justify-between md:items:center max-w-[852px]">
                <div>
                  <img
                    className="w-[188px] fill-marketing-white"
                    src="/images/about/primary.svg"
                  />
                </div>
                <div>
                  <img
                    className="w-[214px]"
                    src="/images/about/signalfire.svg"
                  />
                </div>
                <div>
                  <img
                    className="w-[70px]"
                    src="/images/about/susa.png"
                  />
                </div>
              </div>
            </div>
          </StandardPage>
        </div>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'py-xxxxlarge gap-y-xxxxlarge',
            'md:py-xxxxxlarge md:gap-y-xxxxxlarge',
            'xxl:py-xxxxxxlarge xxl:gap-y-xxxxxxlarge',
            'text-text'
          )}
        >
          <TeamSection members={teamMembers} />
        </div>
      </ColorModeProvider>
    </>
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

export type PricingPageProps = { teamMembers: TeamMemberFragment[] }

export const getStaticProps: GetStaticProps<PricingPageProps> = async (
  _context
) => {
  console.log('about page')
  if (_context?.params?.about) {
    return { notFound: true }
  }
  const { data: teamMembers, error: teamMembersError } = await getTeamMembers()

  console.log('teamMembers', teamMembers)

  if (!teamMembers) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'About',
    teamMembers,
    footerVariant: FooterVariant.kitchenSink,
    errors: [...(teamMembersError ? [teamMembersError] : [])],
  })
}
