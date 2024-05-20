import {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
  useRef,
} from 'react'

import {
  Button,
  CloudIcon,
  ClusterIcon,
  ColorModeProvider,
  GitMergeIcon,
  LogsIcon,
  PadlockLockedIcon,
} from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'
import {
  type Variants,
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import styled, { useTheme } from 'styled-components'
// @ts-expect-error
import useMobileDetect from 'use-mobile-detect-hook'

import { directusClient } from '@src/apollo-client'
import { mqs } from '@src/breakpoints'
import { ArticleCardNoBorder } from '@src/components/ArticleCard'
import { CompanyLogosSection } from '@src/components/CompanyLogos'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { LearnAboutPluralSection } from '@src/components/LearnAboutPluralSection'
import { HomePageHero } from '@src/components/PageHeros'
import { TestimonialsSection } from '@src/components/QuoteCards'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ShadowedCard } from '@src/components/ShadowedCard'
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
  const baseWidth = 1432
  const baseHeight = 683

  return {
    transformStyle: 'preserve-3d',
    perspective: '1200px',
    transformOrigin: 'center',
    transform: 'rotateY(-00deg) rotateX(0deg) rotateZ(0deg)',

    position: 'relative',
    width: '100%',
    aspectRatio: '2 / 1',
    '& *': {
      transformStyle: 'preserve-3d',
    },
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
      width: `${(512 * 100) / baseWidth}%`,
      left: `${(960 * 100) / baseWidth}%`,
      top: `${(160 * 100) / baseHeight}%`,
      '.endTransform': {
        transform: [
          'rotateY(-10deg)',
          // 'rotateX(0deg)',
          // 'rotateZ(0deg)',
          'translateZ(00px)',
          'translateX(-2%)',
          'translateY(-10px)',
          'scale(1.07)',
        ].join(' '),
      },
    },
    '.heroImg2': {
      width: `${(1200 * 100) / baseWidth}%`,
      left: `${(-20 * 100) / baseWidth}%`,
      top: `${(-10 * 100) / baseHeight}%`,
      '.endTransform': {
        transform: [
          'rotateY(10deg)',
          // 'rotateX(0deg)',
          // 'rotateZ(0deg)',
          'translateZ(-100px)',
          'translateX(2%)',
          'scale(0.98)',
        ].join(' '),
      },
    },
    '.heroImg3': {
      width: `${(840 * 100) / baseWidth}%`,
      left: `${(563 * 100) / baseWidth}%`,
      top: `${(300 * 100) / baseHeight}%`,
      '.endTransform': {
        transform: [
          'rotateY(-5deg)',
          // 'rotateX(0deg)',
          // 'rotateZ(0deg)',
          'translateZ(100px)',
          'translateX(-4%)',
          'translateY(-2%)',
          'scale(0.90)',
        ].join(' '),
      },
    },
  }
})

const MotionDiv = styled(motion.div)(({ theme: _ }) => ({
  // position: 'absolute',
  // top: 0,
  // right: 0,
  // bottom: 0,
  // left: 0,
  // transformOrigin: '100% 50% -300px',
  // // transformStyle: 'flat',
  // perspective: PERSPECTIVE,
  opacity: 0,
}))

const heroVariants = ({ delay = 0 }: { delay: number }): Variants => {
  const start = {
    translateZ: 350,
    opacity: 0,
  }
  const end = {
    translateZ: 0,
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

function HeroIn({
  children,
  inView,
  className,
  delay,
  scrollYProgress,
  parallax,
}) {
  const variants = heroVariants({ delay })
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${20 * parallax}%`, `${-20 * parallax}%`]
  )
  const isMobile = useMobileDetect().isMobile()

  return (
    <motion.div
      style={{ translateY }}
      className={classNames('heroImg', className)}
    >
      <div className="endTransform">
        <MotionDiv
          animate={isMobile ? 'mobile' : inView ? 'onscreen' : 'offscreen'}
          variants={variants}
        >
          {children}
        </MotionDiv>
      </div>
    </motion.div>
  )
}

function HeroImages({ ...props }: ComponentProps<typeof HeroImagesSC>) {
  const ref = useRef<any>(null)

  const inView = useInView(ref, { once: true, margin: '-80px 0px -40%' })
  const stagger = 0.25

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <HeroImagesSC
      ref={ref}
      {...props}
    >
      <HeroIn
        className="heroImg1"
        inView={inView}
        delay={1 * stagger}
        scrollYProgress={scrollYProgress}
        parallax={-1.25}
      >
        <img src="/images/homepage/hero-configuration.png" />
      </HeroIn>
      <HeroIn
        className="heroImg2"
        inView={inView}
        delay={0 * stagger}
        parallax={0}
        scrollYProgress={scrollYProgress}
      >
        <img src="/images/homepage/hero-services.png" />
      </HeroIn>
      <HeroIn
        className="heroImg3"
        inView={inView}
        delay={1.75 * stagger}
        parallax={0.75}
        scrollYProgress={scrollYProgress}
      >
        <img src="/images/homepage/hero-nodes.png" />
      </HeroIn>
    </HeroImagesSC>
  )
}

const BuildSecurelyCardSC = styled(ShadowedCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '',
  textAlign: 'center',
  ...theme.partials.text.body2Bold,
  color: theme.colors['text-light'],
  '& > *': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    paddingLeft: theme.spacing.medium,
    paddingRight: theme.spacing.medium,
    maxWidth: 240,
    marginLeft: 'auto',
    marginRight: 'auto',
    '&:first-child': {
      paddingTop: theme.spacing.xlarge,
    },
    '&:last-child': {
      paddingBottom: theme.spacing.xlarge,
    },
  },
}))

function BuildSecurelyCard({
  icon,
  heading,
  ...props
}: {
  icon: ReactElement
  heading: ReactNode
} & ComponentProps<typeof BuildSecurelyCardSC>) {
  const theme = useTheme()
  const iconClone = cloneElement(icon, {
    size: 48,
    color: theme.colors['icon-primary'],
  })

  return (
    <BuildSecurelyCardSC {...props}>
      <div>{iconClone}</div>
      <div className="text">{heading}</div>
    </BuildSecurelyCardSC>
  )
}

const BuildSecurelyGridSC = styled.div(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing.medium,
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  textWrap: 'balance',
  [mqs.xs]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    '& > *': {
      '&:nth-child(n + 5)': {
        gridColumn: 'span 2',
      },
    },
  },
  [mqs.md]: {
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
    '& > *': {
      '&, &:nth-child(n)': {
        gridColumn: 'span 2',
      },
      '&:nth-child(n+4)': {
        gridColumn: 'span 3',
      },
    },
  },
  [mqs.lg]: {
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    '& > *': {
      '&, &:nth-child(n)': {
        gridColumn: 'span 1',
      },
    },
  },
}))

function BuildSecurely() {
  return (
    <div className="flex flex-col gap-y-xxxxlarge">
      <CenteredSectionHead
        heading="Secure, flexible, and easy"
        intro={
          <div className="[text-wrap:balance]">
            Secure and scalable pull-based architecture. A single pane of glass
            to understand and maintain complex Kubernetes fleets.
          </div>
        }
      />
      <BuildSecurelyGridSC>
        <BuildSecurelyCard
          icon={<PadlockLockedIcon />}
          heading="Self-hosted and secure in your cloud"
        />
        <BuildSecurelyCard
          icon={<CloudIcon />}
          heading="Multi-cloud and multi-cluster support"
        />
        <BuildSecurelyCard
          icon={<GitMergeIcon />}
          heading="Build release pipelines with no scripts"
        />
        <BuildSecurelyCard
          icon={<LogsIcon />}
          heading="Fully customizable with resources defined in Git"
        />
        <BuildSecurelyCard
          icon={<ClusterIcon />}
          heading="Full visibility into your service and cluster fleet"
        />
      </BuildSecurelyGridSC>
    </div>
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

export default function Index({
  quotes,
  // featuredQuote,
  // buildStackTabs,
  articleCards,
  globalProps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        position="50% 50%"
        size="cover"
        image="/images/gradients/gradient-bg-2.jpg"
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
          </StandardPageWidth>
        </div>
        <StandardPageSection>
          <StandardPageWidth>
            <BuildSecurely />
          </StandardPageWidth>
          <CompanyLogosSection
            className="pt-xxxxxlarge"
            logos={globalProps.siteSettings?.partner_logos?.items}
          />
        </StandardPageSection>
      </HeaderPad>
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
