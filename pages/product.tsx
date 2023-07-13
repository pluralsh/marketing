import { Button, ColorModeProvider, InlineCode } from '@pluralsh/design-system'
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
import {
  CenteredSectionHead,
  Cta,
  ResponsiveText,
} from '@src/components/Typography'
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

const ArchitectureContentSC = styled(TextLimiter)(({ theme }) => ({
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
            <CenteredSectionHead
              heading="What is Plural?"
              intro={
                <p>
                  Plural is an open-source, unified, application deployment
                  platform that stands up a Kubernetes cluster and selected
                  applications in the cloud provider of your choice. Plural
                  writes all the Helm, Terraform, and YAML needed for your
                  desired infrastructure and deploys it all into production.
                  Plural stores your infrastructure code and configuration in a
                  fresh Git repository of your choosing.
                </p>
              }
              className={classNames('pb-xxxxxxlarge')}
            />
            <Columns className="gap-y-xxlarge">
              <EqualColumn className="flex flex-col gap-y-xlarge">
                <div>
                  <ResponsiveText
                    as="h4"
                    textStyles={{ '': 'mLabel' }}
                    className="mb-medium"
                  >
                    Architecture
                  </ResponsiveText>
                  <ResponsiveText
                    as="h5"
                    textStyles={{ '': 'mHero2' }}
                    className="mb-xlarge"
                  >
                    The Plural architecture has three main components
                  </ResponsiveText>
                </div>
              </EqualColumn>
              <EqualColumn />
            </Columns>
            <Columns className="gap-y-xxlarge">
              <EqualColumn className="flex flex-col gap-y-xlarge">
                <ArchitectureContentSC>
                  <h6>Plural API</h6>
                  <p>
                    The primary responsibility of the Plural API is to store the
                    packages needed for application installation – terraform,
                    helm – and ingesting high-level dependency information about
                    them. This allows us to properly sequence installations and
                    deliver updates that avoid mismatched dependencies.
                  </p>
                  <p>
                    It also can serve as an identity provider for any Plural
                    application, delegating authentication via OpenID Connect,
                    giving seamless login security for all applications.
                  </p>
                </ArchitectureContentSC>
                <ArchitectureContentSC>
                  <h6>Plural CLI</h6>
                  <p>
                    The Plural CLI uses the Plural API as a package manager to
                    generate a fully functional git repository with all the
                    infrastructure as code needed to deploy any of your
                    applications with Plural. This allows you to stand up any
                    open source stack with just{' '}
                    <InlineCode>plural build</InlineCode> and{' '}
                    <InlineCode>plural deploy</InlineCode>, and never even have
                    to give us cloud credentials, since the infrastructure as
                    code lives in your local workstation.
                  </p>
                  <p>
                    It also streamlines things like git secret encryption,
                    dependency-ordering deploys and provides an operational
                    toolkit for accessing databases and logs, watching the
                    status of applications and providing login info.{' '}
                  </p>
                </ArchitectureContentSC>
                <ArchitectureContentSC>
                  <h6>Plural Console</h6>
                  <p>
                    The Plural Console is the operational hub for all
                    applications managed by Plural. It is deployed in-cluster
                    alongside applications and provides a few key features:
                  </p>
                  <BasicUl>
                    <li>
                      Automated upgrades – by subscribing to the API's upgrade
                      websocket
                    </li>
                    <li>
                      Observability – leverages prometheus and loki to provide
                      fully featured dashboards, runbooks and log aggregation.
                    </li>
                    <li>
                      Documentation/Self-serviceability – application docs for
                      advanced configuration settings and usage patterns are
                      available in console, alongside tooling to easily bind
                      users to applications, reconfigure them, and other
                      information needed to get started quickly.
                    </li>
                  </BasicUl>
                </ArchitectureContentSC>
                <Cta href="https://docs.plural.sh">Explore the docs</Cta>
              </EqualColumn>
              <EqualColumn>
                <div
                  className={classNames(
                    'overflow-hidden rounded-large'
                    // `sticky top-[calc(var(--top-nav-height)+16px)]`
                  )}
                >
                  <img
                    className="block w-full"
                    src="/images/product/architecture.png"
                    width="1765"
                    height="2172"
                  />
                </div>
              </EqualColumn>
            </Columns>
          </StandardPageWidth>
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
