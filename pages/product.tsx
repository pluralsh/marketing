import { Button, ColorModeProvider } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import classNames from 'classnames'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { QuickstartDemoCard } from '@src/components/ArticleCard'
import { FeaturedQuote } from '@src/components/FeaturedQuote'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { HPWMiniSectionAppStacks } from '@src/components/page-sections/HowPluralWorksMiniSection'
import { StandardFAQSection } from '@src/components/page-sections/StandardFAQSection'
import { WhatIsPluralSection } from '@src/components/page-sections/WhatIsPluralSection'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { getProductPageData } from '@src/data/getProductPageData'
import { useAnimationPauser } from '@src/hooks/useAnimationPauser'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { TryPluralForFreeSection } from '../src/components/page-sections/TryPluralForFreeSection'
import { HeroMainText } from '../src/components/PageHeros'

export const ArchitectureContentSC = styled(TextLimiter)(({ theme }) => ({
  color: theme.colors['text-light'],
  'h1, h2, h3, h4, h5, h6': {
    ...theme.partials.text.body1Bold,
    marginBottom: theme.spacing.small,
  },
  'p, li': {
    ...theme.partials.text.body2,
  },
  '& :is(p, ul) + :is(p, ul)': {
    marginTop: theme.spacing.medium,
  },
}))

const AnimationWrapSC = styled.div((_) => ({
  flex: 1,
  '& > div': {
    width: '100%',
    position: 'relative',
    height: 0,
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%;',
  },
}))

const HeroAnimationWrapSC = styled(AnimationWrapSC)((_) => ({
  display: 'none',
  height: 0,

  '& > div': {
    paddingBottom: 'calc((455/700) * 100%)',
  },
  [mqs.columns]: {
    display: 'block',
    marginTop: '-32%',
    marginLeft: '-12%',
    marginRight: '-8%',
  },
  [mqs.xl]: {
    marginTop: '-35%',
    marginLeft: '-24%',
    marginRight: '-0%',
  },
  [mqs.max]: {
    marginTop: '-41%',
    marginLeft: '-25%',
    marginRight: '-5%',
  },
}))

export default function Index({
  featuredQuote,
  faqs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useAnimationPauser()

  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        />
      </Head>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-5.jpg"
      >
        <StandardPageWidth>
          <div
            className={classNames(
              'pt-xxxxlarge',
              'pb-xxxlarge',
              'md:pt-xxxxlarge',
              'md:pb-xxxxlarge',
              'lg:pt-xxxxxlarge',
              'lg:pb-xxxxxxlarge',
              'xl:pt-xxxxxxlarge',
              'xl:pb-[240px]'
            )}
          >
            <Columns className="columns:items-center gap-y-xxxlarge">
              <EqualColumn className="justify-start">
                <HeroMainText
                  preHeading="Product"
                  heading="How Plural works"
                  ctas={
                    <div className="flex flex-col gap-medium sm:flex-row">
                      <Button
                        primary
                        large
                        as={Link}
                        href="https://app.plural.sh/login"
                      >
                        Start deploying
                      </Button>
                      <Button
                        secondary
                        large
                        as={Link}
                        href="/demo-login"
                      >
                        Explore demo environment
                      </Button>
                    </div>
                  }
                />
              </EqualColumn>
              <EqualColumn>
                <HeroAnimationWrapSC>
                  <div>
                    <iframe
                      title="hero-animation"
                      data-animation-frame
                      frameBorder="0"
                      src="/animations/hero1-iframe/index.html"
                    />
                  </div>
                </HeroAnimationWrapSC>
              </EqualColumn>
            </Columns>
          </div>
        </StandardPageWidth>
      </HeaderPad>
      <StandardPageSection className="bg-fill-zero">
        <StandardPageWidth>
          <CenteredSectionHead
            heading="How Plural works"
            className="md:mb-xxlarge mb-xxlarge"
          />
          <HPWMiniSectionAppStacks />
        </StandardPageWidth>
      </StandardPageSection>
      <ColorModeProvider mode="light">
        <StandardPageSection
          id="open-positions"
          className="bg-fill-zero"
        >
          <StandardPageWidth>
            <WhatIsPluralSection />
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
      {featuredQuote && <FeaturedQuote quote={featuredQuote} />}
      <ColorModeProvider mode="light">
        <StandardPageSection
          id="open-positions"
          className="bg-fill-zero"
        >
          <div
            className={classNames(
              'flex flex-col',
              'gap-xxxxxlarge md:gap-xxxxxxlarge'
            )}
          >
            <StandardPageWidth>
              <QuickstartDemoCard />
            </StandardPageWidth>
            <TryPluralForFreeSection />

            {faqs && <StandardFAQSection faqs={faqs} />}
            <StandardPageWidth>
              <div
                className={classNames(
                  'flex flex-col gap-xlarge justify-center items-center',
                  'md:flex-row'
                )}
              >
                <a
                  className="block"
                  href="https://landscape.cncf.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-full max-w-[248px]"
                    alt="Cloud Native Landscape logo"
                    src="/images/product/cn-landscape-logo.png"
                  />
                </a>
                <a
                  className="block"
                  href="https://www.cncf.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-full max-w-[248px] md:max-w-[298px]"
                    alt="Cloud Native Computing Foundation logo"
                    src="/images/product/cncf-logo.svg"
                  />
                </a>
                <img
                  className="w-full max-w-[76px]"
                  alt="GDPR certification badge"
                  src="/images/product/gdpr-cert.png"
                />
              </div>
            </StandardPageWidth>
          </div>
        </StandardPageSection>
      </ColorModeProvider>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: pageData, error: pageDataError } = await getProductPageData()

  return propsWithGlobalSettings({
    featuredQuote: pageData?.featured_quote,
    faqs: pageData?.faq?.items,
    footerVariant: FooterVariant.kitchenSink,
    pageTitle: 'How Plural works',
    errors: [...(pageDataError ? [pageDataError] : [])],
  })
}
