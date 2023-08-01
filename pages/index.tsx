import {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
  useRef,
} from 'react'

import {
  Button,
  CheckedShieldIcon,
  CloudIcon,
  ColorModeProvider,
  LogsIcon,
  PadlockLockedIcon,
} from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import classNames from 'classnames'
import {
  type Variants,
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import styled, { useTheme } from 'styled-components'

import { directusClient } from '@src/apollo-client'
import { mqs } from '@src/breakpoints'
import { ArticleCardNoBorder } from '@src/components/ArticleCard'
import { CompanyLogosSection } from '@src/components/CompanyLogos'
import { FooterVariant } from '@src/components/FooterFull'
import PersonCheck from '@src/components/icons/PersonCheck'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { HomePageHero } from '@src/components/PageHeros'
import { TestimonialsSection } from '@src/components/QuoteCards'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ShadowedCard } from '@src/components/ShadowedCard'
import {
  PageHomepageDocument,
  type PageHomepageQuery,
  type PageHomepageQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { normalizeQuotes } from '@src/utils/normalizeQuotes'

import {
  StandardPageSection,
  StandardPageWidth,
} from '../src/components/layout/LayoutHelpers'
import { HomepageFeaturesSection } from '../src/components/page-sections/HomepageFeaturesSection'

const HeroImagesSC = styled.div(({ theme: _theme }) => {
  const baseWidth = 1432
  const baseHeight = 683

  return {
    transformStyle: 'preserve-3d',
    perspective: '1200px',
    transformOrigin: 'center',
    transform: 'rotateY(-00deg) rotateX(0deg)  rotateZ(0deg)',

    position: 'relative',
    width: '100%',
    aspectRatio: '2 / 1',
    '& *': {
      transformStyle: 'preserve-3d',
    },
    '.heroImg': {
      position: 'absolute',

      img: {
        display: 'block',
        width: '100%',
        boxShadow: `0px 10px 20px 0px rgba(14, 16, 21, 0.30), 0px 3px 6px 0px rgba(14, 16, 21, 0.20)`,
      },
    },
    '.heroImg1': {
      width: `${(512 * 100) / baseWidth}%`,
      left: `${(930 * 100) / baseWidth}%`,
      top: `${(35 * 100) / baseHeight}%`,
      '.endTransform': {
        transform: [
          'rotateY(-10deg)',
          // 'rotateX(0deg)',
          // 'rotateZ(0deg)',
          'translateZ(-100px)',
          'translateX(-2%)',
          'translateY(-10px)',
          'scale(1.07)',
        ].join(' '),
      },
    },
    '.heroImg2': {
      width: `${(880.84 * 100) / baseWidth}%`,
      left: `${(0 * 100) / baseWidth}%`,
      top: `${(0 * 100) / baseHeight}%`,
      '.endTransform': {
        transform: [
          'rotateY(10deg)',
          // 'rotateX(0deg)',
          // 'rotateZ(0deg)',
          'translateX(2%)',
          'scale(0.98)',
        ].join(' '),
      },
    },
    '.heroImg3': {
      width: `${(840 * 100) / baseWidth}%`,
      left: `${(563 * 100) / baseWidth}%`,
      top: `${(226 * 100) / baseHeight}%`,
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

const heroVariants = ({ delay = 0 }: { delay: number }): Variants => ({
  offscreen: {
    opacity: 0,
    translateZ: 350,
    // Need to set zero-length transition here to make sure
    // state is set immediately on page load
    transition: { type: 'linear', duration: 0 },
  },
  onscreen: {
    translateZ: 0,
    // scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.15,
      duration: 2.25,
      delay,
    },
  },
})

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

  return (
    <motion.div
      style={{ translateY }}
      className={classNames('heroImg', className)}
    >
      <div className="endTransform">
        <MotionDiv
          animate={inView ? 'onscreen' : 'offscreen'}
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
        delay={0 * stagger}
        scrollYProgress={scrollYProgress}
        parallax={-1.25}
      >
        <img src="/images/homepage/hero-configuration.png" />
      </HeroIn>
      <HeroIn
        className="heroImg2"
        inView={inView}
        delay={1 * stagger}
        parallax={0}
        scrollYProgress={scrollYProgress}
      >
        <img src="/images/homepage/hero-apps.png" />
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
        heading="Build securely from day zero"
        intro={
          <div className="[text-wrap:balance]">
            We’re not a SaaS. You control everything. No need to share your
            cloud account, keys or data.
          </div>
        }
      />
      <BuildSecurelyGridSC>
        <BuildSecurelyCard
          icon={<CloudIcon />}
          heading="Deployed on your cloud"
        />
        <BuildSecurelyCard
          icon={<PadlockLockedIcon />}
          heading="No need to share your cloud account keys"
        />
        <BuildSecurelyCard
          icon={<CheckedShieldIcon />}
          heading="Security scanned and hardened images"
        />
        <BuildSecurelyCard
          icon={<LogsIcon />}
          heading="Customize deployments to suit your setup"
        />
        <BuildSecurelyCard
          icon={<PersonCheck />}
          heading="User authentication enabled out of the box"
        />
      </BuildSecurelyGridSC>
    </div>
  )
}

export default function Index({
  quotes,
  globalProps,
  articleCards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        position="50% 50%"
        size="cover"
        image="/images/gradients/gradient-bg-2.jpg"
        className="[perspective:1000px]"
      >
        <HomePageHero
          heading={
            <>
              Deploy secure self-hosted applications in your cloud with no
              compromises
            </>
          }
          description={
            <div className="[text-wrap:balance]">
              Build compliant, production-ready, infrastructure faster than
              ever.
            </div>
          }
          ctas={
            <div className="flex gap-large flex-wrap justify-center">
              <Button
                large
                primary
                as={Link}
                href="https://plural.sh"
              >
                Start deploying
              </Button>
              <Button
                large
                secondary
                as={Link}
                href="/demo-login"
              >
                Explore demo environment
              </Button>
            </div>
          }
        />
        <div className="pt-xxxlarge sm:pt-xxxxlarge md:pt-xxxxlarge lg:pt-0 lg:pb-xxlarge">
          <StandardPageWidth>
            <HeroImages />
          </StandardPageWidth>
        </div>
        <StandardPageSection>
          <StandardPageWidth>
            <BuildSecurely />
          </StandardPageWidth>
        </StandardPageSection>
      </HeaderPad>
      <HomepageFeaturesSection />
      <GradientBG
        size="cover"
        position="bottom middle"
        image="/images/gradients/gradient-bg-2.jpg"
        // Needs matching negative top margin in first-item of following section
        className="pb-xxxxxxlarge"
      >
        <StandardPageSection className="flex flex-col gap-y-xxxxxlarge xxl:gap-y-xxxxxxlarge">
          <CompanyLogosSection
            logos={globalProps.siteSettings?.partner_logos?.items}
          />
          <TestimonialsSection quotes={quotes || []} />
        </StandardPageSection>
      </GradientBG>
      <ColorModeProvider mode="light">
        <div className="bg-fill-zero">
          <StandardPageSection padTop={false}>
            <StandardPageWidth className="relative z-[1]">
              <div className="grid grid-cols-1 items-stretch columns:grid-cols-3 gap-xlarge">
                {articleCards?.map((c, i) => {
                  const first = i === 0
                  const last = i === articleCards.length - 1
                  const medium = first || last

                  return (
                    c && (
                      <ArticleCardNoBorder
                        key={c.id}
                        className={classNames({
                          'columns:col-span-3': medium,
                          // Needs matching positive bottom padding in previous section
                          // Negative margin has to be on this first item instead of any wrappers
                          // to visual issue with GradientBackground on Safari
                          '-mt-xxxxxlarge': i === 0,
                        })}
                        size={medium ? 'medium' : 'small'}
                        reverse={first}
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

  const page = data.page_homepage

  return propsWithGlobalSettings({
    metaTitle: 'Secure, self-hosted applications in your cloud',
    metaDescription:
      'Open-source application deployment, faster than ever without sacrificing compliance.',
    articleCards: data.page_homepage?.article_cards || null,
    quotes: normalizeQuotes(page?.quotes),

    footerVariant: FooterVariant.kitchenSink,
    errors: [...(error ? [`${error}`] : [])],
  })
}
