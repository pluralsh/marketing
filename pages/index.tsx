import { Button, ColorModeProvider } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import classNames from 'classnames'

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

export default function Index({
  quotes,
  globalProps,
  articleCards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HeaderPad
      as={GradientBG}
      image="/images/gradients/gradient-bg-2"
    >
      <HomePageHero
        heading="Secure, self-hosted applications in your cloud with no compromises"
        intro="Build compliant, production-ready, infrastructure faster than ever."
        ctas={
          <>
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
          </>
        }
      />
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
    </HeaderPad>
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
    articleCards: data.page_homepage?.article_cards || null,
    quotes: normalizeQuotes(page?.quotes),

    footerVariant: FooterVariant.kitchenSink,
    errors: [...(error ? [`${error}`] : [])],
  })
}
