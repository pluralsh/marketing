import { type ComponentProps } from 'react'

import { Button, ColorModeProvider } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import classNames from 'classnames'
import styled from 'styled-components'

import { directusClient } from '@src/apollo-client'
import { ArticleCardNoBorder } from '@src/components/ArticleCard'
import { CompanyLogosSection } from '@src/components/CompanyLogos'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { HomePageHero } from '@src/components/PageHeros'
import { TestimonialsSection } from '@src/components/QuoteCards'
import { Body1, Heading1 } from '@src/components/Typography'
import {
  PageHomepageDocument,
  type PageHomepageQuery,
  type PageHomepageQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { normalizeQuotes } from '@src/utils/normalizeQuotes'

import {
  StandardPageSection,
  StandardPageSectionBtm,
  StandardPageWidth,
} from '../src/components/layout/LayoutHelpers'

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
        <StandardPageWidth>
          <HeroImages />
        </StandardPageWidth>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-fill-zero">
          <StandardPageWidth>
            <div className="flex flex-col gap-x-medium gap-y-xlarge ">
              <Heading1>Home page</Heading1>
              <Body1>This is some body text</Body1>
            </div>
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
      <GradientBG
        size="cover"
        position="bottom middle"
        image="/images/gradients/gradient-bg-2.jpg"
        className="pb-xxxxxlarge -my-xxxxxlarge"
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
          <StandardPageSectionBtm>
            <StandardPageWidth className="relative z-[1]">
              <div className="grid grid-cols-1 items-stretch columns:grid-cols-3 gap-xlarge">
                {articleCards?.map((c, i) => {
                  const small = !(i === 0 || i === articleCards.length - 1)

                  return (
                    <ArticleCardNoBorder
                      className={classNames({ 'columns:col-span-3': !small })}
                      size={small ? 'small' : 'medium'}
                      {...c}
                    />
                  )
                })}
              </div>
            </StandardPageWidth>{' '}
          </StandardPageSectionBtm>
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
