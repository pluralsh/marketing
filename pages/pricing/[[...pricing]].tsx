import { useId } from 'react'

import { Button, ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'

// import { mqs } from '@src/breakpoints'
import { until } from '@open-draft/until'

import { FooterVariant } from '@src/components/FooterFull'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { ResponsiveText, ScrollToLink } from '@src/components/Typography'
import getPricing, { type LineItem, type Plan } from '@src/data/getPricing'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../../src/components/layout/HeaderPad'
import { TextLimiter } from '../../src/components/layout/TextLimiter'

export function PlanCard({ plan }: { plan: Plan }) {
  return <div>Card</div>
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
            md: 'mHero2',
            xxl: 'mBigHeader',
          }}
        >
          Clear and straightforward pricing
        </ResponsiveText>
        <ScrollToLink target={compareId}>Compare plans</ScrollToLink>
      </StandardPage>
      <StandardPage className="flex flex-col gap-xlarge [text-wrap:balance] py-xxlarge md:pt-xxxxlarge md:pb-xxxlarge">
        <ResponsiveText
          className="max-w-[700px]"
          as="h1"
          textStyles={{
            '': 'mTitle2',
            md: 'mHero2',
            xxl: 'mBigHeader',
          }}
        >
          Clear and straightforward pricing
        </ResponsiveText>
        <ScrollToLink target={compareId}>Compare plans</ScrollToLink>
      </StandardPage>
      <ColorModeProvider mode="light">
        <div className="bg-fill-zero pt-xxxxlarge md:pt-xxxxxlarge">
          <StandardPage>
            <div className="pb-xxlarge md:pb-xxxlarge">
              <ResponsiveText
                as="h2"
                color="text-light"
                textStyles={{ '': 'mLabel' }}
              >
                Compare plans
              </ResponsiveText>
              <ResponsiveText
                as="h3"
                textStyles={{ '': 'mSubtitle2', md: 'mHero2' }}
                className="mt-medium"
              >
                Find the plan that is right for your business
              </ResponsiveText>
              <ResponsiveText
                as="p"
                className="mt-xlarge"
                textStyles={{ '': 'mBody1' }}
              >
                Flexible plans for every stage of your business.
              </ResponsiveText>
            </div>
            <div
              className="bg-fill-three"
              id={compareId}
            >
              Line items
            </div>
          </StandardPage>
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

export type PricingPageProps = Awaited<ReturnType<typeof getPricing>>

export const getStaticProps: GetStaticProps<PricingPageProps> = async (
  _context
) => {
  if (_context?.params?.pricing) {
    return { notFound: true }
  }
  const { data: pricing, error: pricingError } = await until(() => getPricing())

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
