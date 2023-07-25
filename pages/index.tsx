import {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
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
      img: {
        transform: [
          'rotateY(-10deg)',
          // 'rotateX(0deg)',
          // 'rotateZ(0deg)',
          'translateZ(-100px)',
          'translateX(7%)',
          'translateY(-10px)',
          'scale(1.1)',
        ].join(' '),
      },
    },
    '.heroImg2': {
      width: `${(880.84 * 100) / baseWidth}%`,
      left: `${(0 * 100) / baseWidth}%`,
      top: `${(0 * 100) / baseHeight}%`,
      img: {
        transform: [
          'rotateY(10deg)',
          // 'rotateX(0deg)',
          // 'rotateZ(0deg)',
          // 'translateZ(100px)',
          // 'scale(0.90)',
        ].join(' '),
      },
    },
    '.heroImg3': {
      width: `${(840 * 100) / baseWidth}%`,
      left: `${(563 * 100) / baseWidth}%`,
      top: `${(226 * 100) / baseHeight}%`,
      img: {
        transform: [
          'rotateY(-5deg)',
          // // 'rotateX(0deg)',
          // // 'rotateZ(0deg)',
          'translateZ(100px)',
          'translateX(-2%)',
          'translateY(-2%)',
          'scale(0.90)',
        ].join(' '),
      },
    },
  }
})

function HeroImages({ ...props }: ComponentProps<typeof HeroImagesSC>) {
  return (
    <HeroImagesSC {...props}>
      <div className="heroImg heroImg1">
        <img src="/images/homepage/hero-configuration.png" />
      </div>
      <div className="heroImg heroImg2">
        <img src="/images/homepage/hero-apps.png" />
      </div>
      <div className="heroImg heroImg3">
        <img src="/images/homepage/hero-nodes.png" />
      </div>
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
          heading="Secure, self-hosted applications in your cloud with no compromises"
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
        className="pb-xxxxxlarge -mb-xxxxxlarge"
      >
        <StandardPageSection className="flex flex-col gap-y-xxxlarge">
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
                    <ArticleCardNoBorder
                      className={classNames({ 'columns:col-span-3': medium })}
                      size={medium ? 'medium' : 'small'}
                      reverse={first}
                      {...c}
                    />
                  )
                })}
              </div>
            </StandardPageWidth>{' '}
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
