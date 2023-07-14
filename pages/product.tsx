import { Button, ColorModeProvider } from '@pluralsh/design-system'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import classNames from 'classnames'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { MassiveQuote } from '@src/components/MassiveQuote'
import { RepoFAQSection } from '@src/components/page-sections/RepoFAQSection'
import { WhatIsPluralSection } from '@src/components/page-sections/WhatIsPluralSection'
import { QuickstartDemoCard } from '@src/components/QuickstartDemoCard'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { useAnimationPauser } from '@src/hooks/useAnimationPauser'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HowPluralWorksSection } from '../src/components/page-sections/HowPluralWorksSection'
import { HeroMainText } from '../src/components/PageHeros'

export const BasicUl = styled.ul(({ theme }) => {
  const indent = theme.spacing.large

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xsmall,
    li: {
      position: 'relative',
      marginLeft: indent,
      '::before': {
        textAlign: 'center',
        width: indent,
        position: 'absolute',
        content: '"•"',
        left: -indent,
      },
    },
  }
})

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

export const StandardPageSection = styled.div(({ theme }) => ({
  paddingTop: theme.spacing.xxxxlarge,
  paddingBottom: theme.spacing.xxxxlarge,
  [mqs.md]: {
    paddingTop: theme.spacing.xxxxxlarge,
    paddingBottom: theme.spacing.xxxxxlarge,
  },
  [mqs.xxl]: {
    paddingTop: theme.spacing.xxxxxxlarge,
    paddingBottom: theme.spacing.xxxxxxlarge,
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

export default function Index() {
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
          <HowPluralWorksSection />
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
      <MassiveQuote
        content={
          <>
            This is awesome. You saved me hours of further DevOps work for our
            v1 release. Just to say, I really love Plural.
          </>
        }
        attributions={['Ismael Goulani', 'Co-foundeer of MODEO']}
      />
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
            <StandardPageWidth>
              <div className={classNames('flex flex-col gap-xlarge')}>
                <CenteredSectionHead heading="Try Plural for free" />
                <div className="flex justify-center">
                  <Button
                    secondary
                    large
                    as="a"
                    href="https://app.plural.sh/signup"
                    target="_blank"
                  >
                    Sign up now
                  </Button>
                </div>
              </div>
            </StandardPageWidth>
            <RepoFAQSection />
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

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
    pageTitle: 'How Plural works',
  })
