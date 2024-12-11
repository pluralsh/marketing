import { Button } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { PricingPlanCard } from '@src/components/page-sections/PricingPlanCard'
import {
  PlanComparisonTableDesktop,
  PlanComparisonTablesMobile,
} from '@src/components/page-sections/PricingTable'
import { Body1 } from '@src/components/Typography'
import getPricing from '@src/data/getPricing'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Pricing({
  enterprisePlan,
  proPlan,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HeaderPad
      as={GradientBG}
      image={bgGradient}
      mobileImage={bgGradientMobile}
      imageType="custom"
      bgChildren={
        <img
          src="/images/pricing/pricing-circles.svg"
          className="absolute left-1/2 top-[260px] min-w-[1700px] -translate-x-1/2"
        />
      }
    >
      <StandardPageWidth className="py-xxxxxlarge">
        <div className="flex flex-col items-center gap-medium">
          <div className="mb-xxxxxlarge flex max-w-2xl flex-col items-center gap-small">
            <h1 className="txt-mktg-hero-1 text-3xl md:txt-mktg-hero-1">
              Value-based pricing
            </h1>
            <Body1 className="text-center">
              Pricing is based on the number of clusters deployed and managed by
              Plural. Reach out to our sales team for more information.
            </Body1>
            <Button
              as={Link}
              href="#plan-comparison"
              large
              className="mt-medium w-fit"
            >
              Compare plans
            </Button>
          </div>
          <div className="mb-xxlarge flex w-full flex-col gap-medium lg:flex-row">
            <PricingPlanCard
              flex={1}
              plan={proPlan}
              cta={
                <Button
                  as="a"
                  href="https://plural.sh/contact-sales"
                  target="_blank"
                  rel="noopener noreferer"
                  secondary
                >
                  Book a demo
                </Button>
              }
            />
            <PricingPlanCard
              flex={2}
              plan={enterprisePlan}
              cta={
                <Button
                  as="a"
                  href="https://plural.sh/contact-sales"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Contact sales
                </Button>
              }
            />
          </div>
          <div className="contents">
            <PlanComparisonTableDesktop />
            <PlanComparisonTablesMobile />
          </div>
        </div>
      </StandardPageWidth>
    </HeaderPad>
  )
}

export const getStaticProps = async () => {
  const { data, error } = await getPricing()
  const proPlan = data?.pricing_page?.pro_plan
  const enterprisePlan = data?.pricing_page?.enterprise_plan

  if (!proPlan || !enterprisePlan || error) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'Pricing',
    metaDescription: 'Flexible plans for every stage of your business',
    enterprisePlan,
    proPlan,
    footerVariant: FooterVariant.kitchenSink,
  })
}

const bgGradient = `
    radial-gradient(circle 400px at 50% 10%, rgba(112, 117, 245, 0.06) 0%, transparent 75%),
    radial-gradient(circle 600px at 12% 12%, rgba(23, 232, 160, 0.1) 0%, transparent 75%),
    radial-gradient(circle 600px at 88% 12%, rgba(153, 218, 255, 0.1) 0%, transparent 75%),
    linear-gradient(180deg, #0a0a0d 14.61%, #21242C 43.51%, #0a0a0d 72.4%)
  `
const bgGradientMobile = `
    radial-gradient(circle 400px at 50% 10%, rgba(112, 117, 245, 0.08) 0%, transparent 75%),
    linear-gradient(180deg, #0a0a0d 14.61%, #21242C 43.51%, #0a0a0d 72.4%)
  `
