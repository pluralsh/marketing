import { type ComponentProps, useRef } from 'react'

import { Button, ColorModeProvider } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'
import { type Variants, motion, useInView } from 'framer-motion'
import styled from 'styled-components'
// @ts-expect-error
import useMobileDetect from 'use-mobile-detect-hook'

import { directusClient } from '@src/apollo-client'
import { ArticleCardNoBorder } from '@src/components/ArticleCard'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { LearnAboutPluralSection } from '@src/components/LearnAboutPluralSection'
import { HomePageHero } from '@src/components/PageHeros'
import { TestimonialsSection } from '@src/components/QuoteCards'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { getTinyRepos } from '@src/data/getRepos'
import { getStacks } from '@src/data/getStacks'
import { getStackTabData } from '@src/data/getStackTabData'
import {
  PageHomepageDocument,
  type PageHomepageQuery,
  type PageHomepageQueryVariables,
} from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { normalizeQuotes } from '@src/utils/normalizeQuotes'

import {
  StandardPageSection,
  StandardPageWidth,
} from '../src/components/layout/LayoutHelpers'
import { HomepageFeaturesSection } from '../src/components/page-sections/HomepageFeaturesSection'
import { combineErrors } from '../src/utils/combineErrors'

const HeroImagesSC = styled.div(({ theme: _theme }) => {
  const baseWidth = 1147

  return {
    transformOrigin: 'center',
    position: 'relative',
    width: '100%',
    aspectRatio: '2 / 1',
    '.heroImg': {
      position: 'absolute',
      pointerEvents: 'none',
      img: {
        display: 'block',
        width: '100%',
        boxShadow: `0px 10px 20px 0px rgba(14, 16, 21, 0.30), 0px 3px 6px 0px rgba(14, 16, 21, 0.20)`,
      },
    },
    '.heroImg1': {
      width: `80%`,
      maxWidth: baseWidth,
      left: `50%`,
      top: `0`,
      transform: 'translateX(-50%)',
    },
    '.heroImg2': {
      width: `30%`,
      left: `5%`,
      top: `16%`,
      maxWidth: 413,
    },
    '.heroImg3': {
      width: `32%`,
      right: `8%`,
      top: `-7%`,
      maxWidth: 468,
      overflow: 'hidden',
      borderRadius: _theme.borderRadiuses.large,
    },
  }
})

const heroVariants = ({ delay = 0 }: { delay: number }): Variants => {
  const start = {
    opacity: 0,
  }
  const end = {
    opacity: 1,
  }

  return {
    offscreen: {
      ...start,
      // Need to set zero-length transition here to make sure
      // state is set immediately on page load
      transition: { type: 'linear', duration: 0 },
    },
    onscreen: {
      ...end,
      transition: {
        type: 'spring',
        bounce: 0.15,
        duration: 2.25,
        delay,
      },
    },
    mobile: {
      ...end,
      transition: { type: 'linear', duration: 0 },
    },
  }
}

function HeroIn({ children, inView, className, delay }) {
  const variants = heroVariants({ delay })
  const isMobile = useMobileDetect().isMobile()

  return (
    <motion.div
      className={classNames('heroImg', className)}
      animate={isMobile ? 'mobile' : inView ? 'onscreen' : 'offscreen'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

function HeroImages({ ...props }: ComponentProps<typeof HeroImagesSC>) {
  const ref = useRef<any>(null)

  const inView = useInView(ref, { once: true, margin: '-80px 0px -40%' })
  const stagger = 0.25

  return (
    <HeroImagesSC
      ref={ref}
      {...props}
    >
      <HeroIn
        className="heroImg1"
        inView={inView}
        delay={0 * stagger}
      >
        <img src="/images/homepage/hero-home.png" />
      </HeroIn>
      <HeroIn
        className="heroImg2"
        inView={inView}
        delay={1 * stagger}
      >
        <img src="/images/homepage/hero-popup.png" />
      </HeroIn>
      <HeroIn
        className="heroImg3"
        inView={inView}
        delay={1.75 * stagger}
      >
        <img src="/images/homepage/hero-cpu.png" />
      </HeroIn>
    </HeroImagesSC>
  )
}

const CARD_LAYOUTS = [
  [{ size: 'medium', reverse: false }],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: true },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: true },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: true },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: true },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: true },
  ],
] as const

const QuoteSectionSC = styled.div(({ theme: _theme }) => ({
  backgroundColor: `${_theme.colors['action-primary']}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: `${_theme.spacing.large}px`,
  padding: `${_theme.spacing.xxxxxlarge}px ${_theme.spacing.large}px`,
  flexWrap: 'wrap',
  '.quoteContainer': {
    maxWidth: '40%',
    minWidth: '257px',
    color: 'white',
    position: 'relative',
    '.leftQuote': {
      position: 'absolute',
      top: '0px',
      left: 0,
      transform: 'translate(-120%, -120%)',
      width: '25px',
    },
    '.rightQuote': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: 'translate(50%, 50%)',
      width: '25px',
    },
  },
  '.titleContainer': {
    width: '300px',
  },
}))

function QuoteSection() {
  return (
    <QuoteSectionSC>
      <div className="titleContainer">
        <h3 className="text-4xl font-bold text-marketing-white sm:text-3xl">
          Delivering value to DevOps and platform engineering teams
        </h3>
      </div>
      <div className="quoteContainer">
        <svg
          width="38"
          height="34"
          viewBox="0 0 38 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="leftQuote hidden md:block"
          aria-hidden="true"
        >
          <path
            d="M14.45 0.699997V7.6C11.45 8.8 8.15 11.2 8.15 18.85H14.6V33.7H0.65V18.55C0.65 8.8 5.75 2.49999 14.45 0.699997ZM37.1 0.699997V7.6C34.1 8.8 30.8 11.2 30.8 18.85H37.25V33.7H23.3V18.55C23.3 8.8 28.4 2.49999 37.1 0.699997Z"
            fill="#C5C9D3"
          />
        </svg>

        <p
          className="mb-xlarge max-w-lg text-lg md:text-xl"
          style={{ color: 'white' }}
        >
          By adopting Plural for our Kubernetes fleet management solution, we
          reduced our k8s upgrade cycle from 9 months to 1 day, enabling us to
          delegate responsibilities more effectively from principal engineers to
          mid-level engineer
        </p>
        <span>Director DevOps, Leading Global Cybersecurity Provider</span>
        <svg
          width="37"
          height="34"
          viewBox="0 0 37 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rightQuote hidden md:block"
          aria-hidden="true"
        >
          <path
            d="M22.8312 33.3V26.4C25.8312 25.2 29.1312 22.8 29.1312 15.15H22.6812V0.300003H36.6312V15.45C36.6312 25.2 31.5312 31.5 22.8312 33.3ZM0.18125 33.3V26.4C3.18125 25.2 6.48125 22.8 6.48125 15.15H0.0312475V0.300003H13.9812V15.45C13.9812 25.2 8.88125 31.5 0.18125 33.3Z"
            fill="#C5C9D3"
          />
        </svg>
      </div>
    </QuoteSectionSC>
  )
}

export default function Index({
  quotes,
  // featuredQuote,
  // buildStackTabs,
  articleCards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        position="50% 50%"
        size="cover"
        image="/images/gradients/gradient-bg-10.png"
      >
        <HomePageHero
          heading={<>Managing Kubernetes can be a cluster—</>}
          description={
            <div className="[text-wrap:balance]">
              Plural reduces cluster upgrade cycles from months to hours at
              enterprise scale with streamlined dependency management.
            </div>
          }
          ctas={
            <div className="flex flex-wrap justify-center gap-large">
              <Button
                large
                primary
                as={Link}
                href="/contact-sales"
              >
                Book a demo today
              </Button>
            </div>
          }
        />
        <div className="pt-xxxlarge sm:pt-xxxxlarge md:pt-xxxxlarge lg:pb-xxlarge lg:pt-0">
          <StandardPageWidth>
            <HeroImages />
            <Button
              large
              floating
              as={Link}
              href="/contact-sales"
              className="mx-auto mb-xxxxxxlarge w-fit"
            >
              Watch demo video
            </Button>
            <CenteredSectionHead
              heading={
                <div>
                  Enterprise Kubernetes <br /> management, accelerated.
                </div>
              }
              intro={
                <p>
                  Plural is designed for DevOps and platform engineering teams
                  to automate and streamline the lifecycle management of
                  Kubernetes fleets. Plural provides a single pane of glass
                  interface for managing multiple clusters, automating upgrades,
                  and provides advanced monitoring and security features, making
                  Kubernetes accessible to engineers of all skill levels and
                  reducing upgrade times.
                </p>
              }
              className="mb-xxxxlarge text-center"
            />
          </StandardPageWidth>
        </div>
      </HeaderPad>
      <QuoteSection />
      <HomepageFeaturesSection />
      {/* <DevOpsEfficiencySection /> */}
      {/* <FeaturedQuote quote={featuredQuote} /> */}
      {/* {buildStackTabs && <BuildStackSection tabs={buildStackTabs} />} */}
      <GradientBG
        size="cover"
        position="bottom middle"
        image="/images/gradients/gradient-bg-2.jpg"
      >
        <StandardPageSection className="flex flex-col gap-y-xxxxxlarge xxl:gap-y-xxxxxxlarge">
          <TestimonialsSection quotes={quotes || []} />
        </StandardPageSection>
      </GradientBG>
      <ColorModeProvider mode="light">
        <div className="bg-fill-zero">
          <StandardPageSection>
            <StandardPageWidth className="relative z-[1]">
              <div className="grid grid-cols-1 items-stretch gap-xlarge columns:grid-cols-3">
                {articleCards?.map((c, i) => {
                  const size =
                    CARD_LAYOUTS[articleCards.length]?.[i]?.size || 'medium'
                  const reverse =
                    CARD_LAYOUTS[articleCards.length]?.[i]?.reverse || false

                  return (
                    c && (
                      <ArticleCardNoBorder
                        key={c.id}
                        className={classNames({
                          'columns:col-span-3': size === 'medium',
                        })}
                        size={size}
                        reverse={reverse}
                        {...{
                          author: c.author,
                          ctas: c.ctas,
                          date: c.date,
                          description: c.description,
                          heading: c.heading,
                          thumbnail: c.thumbnail,
                          url: c.url,
                          videoUrl: c.videoUrl,
                        }}
                      />
                    )
                  )
                })}
              </div>
            </StandardPageWidth>
          </StandardPageSection>
        </div>
      </ColorModeProvider>
      <GradientBG
        size="cover"
        position="bottom middle"
        image="/images/gradients/gradient-bg-2.jpg"
      >
        <StandardPageSection className="flex flex-col gap-y-xxxxxlarge xxl:gap-y-xxxxxxlarge">
          <LearnAboutPluralSection />
        </StandardPageSection>
      </GradientBG>
    </>
  )
}

export const getStaticProps = async () => {
  const { data, error } = await directusClient.query<
    PageHomepageQuery,
    PageHomepageQueryVariables
  >({
    query: PageHomepageDocument,
  })
  const { data: repos, error: reposError } = await until(() => getTinyRepos())
  const { data: stacks, error: stacksError } = await until(() => getStacks())

  const buildStackTabs = getStackTabData({ repos, stacks })

  const page = data.page_homepage

  return propsWithGlobalSettings({
    metaTitle: 'Secure, self-hosted applications in your cloud',
    metaDescription:
      'Open-source application deployment, faster than ever without sacrificing compliance.',
    articleCards: data.page_homepage?.article_cards || null,
    quotes: normalizeQuotes(page?.quotes),
    featuredQuote: page?.featured_quote || null,
    buildStackTabs,
    footerVariant: FooterVariant.kitchenSink,
    errors: combineErrors([error, stacksError, reposError]),
  })
}
