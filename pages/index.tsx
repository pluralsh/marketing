import { type ComponentProps, useRef, useState } from 'react'

import { Button, CloseIcon } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'
import { type Variants, motion } from 'framer-motion'
import styled from 'styled-components'
// @ts-expect-error
import useMobileDetect from 'use-mobile-detect-hook'

import { directusClient } from '@src/apollo-client'
import { BareModal } from '@src/components/BareModal'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import ArticleSection from '@src/components/page-sections/articleSection'
import { QuoteSection } from '@src/components/page-sections/QuoteSection'
import { HomePageHero } from '@src/components/PageHeros'
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

import { StandardPageWidth } from '../src/components/layout/LayoutHelpers'
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
      '&::after': {
        content: `''`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        boxShadow: 'inset 0px -200px 600px rgba(0,0,0,0.3)',
        pointerEvents: 'none',
      },
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

function HeroIn({ children, className, delay }) {
  const variants = heroVariants({ delay })
  const isMobile = useMobileDetect().isMobile()

  return (
    <motion.div
      className={classNames('heroImg', className)}
      animate={isMobile ? 'mobile' : 'onscreen'}
      variants={variants}
      initial="offscreen"
    >
      {children}
    </motion.div>
  )
}

function HeroImages({ ...props }: ComponentProps<typeof HeroImagesSC>) {
  const ref = useRef<any>(null)

  const stagger = 0.25

  return (
    <HeroImagesSC
      ref={ref}
      {...props}
    >
      <HeroIn
        className="heroImg1"
        delay={0 * stagger}
      >
        <img
          src="/images/homepage/hero-home.png"
          aria-hidden
        />
      </HeroIn>
      <HeroIn
        className="heroImg2"
        delay={1 * stagger}
      >
        <img
          src="/images/homepage/hero-popup.png"
          aria-hidden
        />
      </HeroIn>
      <HeroIn
        className="heroImg3"
        delay={1.75 * stagger}
      >
        <img
          src="/images/homepage/hero-cpu.png"
          aria-hidden
        />
      </HeroIn>
    </HeroImagesSC>
  )
}

export default function Index({
  articleCards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <HeaderPad
        as={GradientBG}
        position="50% 50%"
        size="cover"
        image="/images/gradients/gradient-bg-14.png"
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
        <div className="pb-xxxxlarge pt-xxxlarge sm:pt-xxxxlarge md:pb-xxxxxxlarge md:pt-xxxxlarge lg:pt-0 ">
          <StandardPageWidth>
            <HeroImages />
            <Button
              large
              floating
              className="group mx-auto mb-xxxxxxlarge w-fit"
              onClick={() => setShowVideo(true)}
            >
              Watch demo video
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-small text-fill-primary group-hover:text-fill-primary-hover"
                aria-hidden
              >
                <rect
                  x="0.726562"
                  width="41.0404"
                  height="41.0404"
                  rx="20.5202"
                  fill="currentColor"
                />
                <g clipPath="url(#clip0_490_2681)">
                  <path
                    d="M27.6062 21.297L16.7291 28.0793C16.2897 28.3531 15.793 27.9073 15.793 27.2387V13.8015C15.793 13.1328 16.2897 12.687 16.7291 12.9609L27.6062 19.6158C28.1348 19.9406 28.1348 20.9722 27.6062 21.297V21.297Z"
                    fill="#DFE2E7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_490_2681">
                    <rect
                      width="16.4162"
                      height="16.4162"
                      fill="white"
                      transform="translate(13.0391 12.3125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Button>
            <BareModal
              open={showVideo}
              onClose={() => setShowVideo(false)}
              closeButton={false}
              className="mx-auto flex w-[90%] items-center justify-center"
              style={{ height: 'fit-content', overflow: 'visible' }}
            >
              <div
                className="relative h-0 w-full self-center pb-[56.25%]" /* 16:9 aspect ratio */
              >
                <Button
                  className="left-1/2 top-full z-10 mt-large -translate-x-1/2"
                  large
                  floating
                  startIcon={<CloseIcon />}
                  onClick={() => setShowVideo(false)}
                  style={{ position: 'absolute' }}
                >
                  Close
                </Button>
                <iframe
                  className="absolute left-0 top-0 h-full w-full rounded-large border border-fill-three"
                  src="https://www.youtube.com/embed/W8KCaiZRV3M?si=co3ld2bFbqH6RpZb"
                  title="YouTube video player"
                  allow="autoplay"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </BareModal>
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
              className="text-center"
            />
          </StandardPageWidth>
        </div>
      </HeaderPad>
      <QuoteSection
        title="Delivering value to DevOps and Platform Engineering teams"
        quote={`By adopting Plural for our Kubernetes fleet management solution, we
        reduced our k8s upgrade cycle from 9 months to 1 day, enabling us to
        delegate responsibilities more effectively from principal engineers to a single mid-level engineer.`}
        attribution="Director DevOps, Leading Global Cybersecurity Provider"
      />
      <HomepageFeaturesSection />
      <ArticleSection articleCards={articleCards} />
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
