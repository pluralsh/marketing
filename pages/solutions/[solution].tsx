import { Button, ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'
import classNames from 'classnames'

import { CaseStudyFAQSection } from '@pages/applications/[repo]'
import { directusClient } from '@src/apollo-client'
import BasicMarkdown from '@src/components/BasicMarkdown'
import { Checklist2, Checklist2Item } from '@src/components/Checklist'
import { CompanyLogosSection } from '@src/components/CompanyLogos'
import { FeaturedQuote } from '@src/components/FeaturedQuote'
import { FooterVariant } from '@src/components/FooterFull'
import { ColumnsMd, EqualColumn } from '@src/components/layout/Columns'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import BuildStackSection, {
  getStackTabData,
} from '@src/components/page-sections/BuildStackSection'
import { getCaseStudyApps } from '@src/components/page-sections/CaseStudySection'
import { HPWMiniSectionSolutions } from '@src/components/page-sections/HowPluralWorksMiniSection'
import { BasicPageHero } from '@src/components/PageHeros'
import {
  CenteredSectionHead,
  SubsectionHead,
} from '@src/components/SectionHeads'
import { ShadowedCard } from '@src/components/ShadowedCard'
import { Body2, Cta } from '@src/components/Typography'
import { getImageUrl } from '@src/consts/routes'
import { type TinyRepo, getTinyRepos } from '@src/data/getRepos'
import { getStacks } from '@src/data/getStacks'
import {
  type CaseStudyFragment,
  type FaqItemFragment,
  FaqListDocument,
  type FaqListQuery,
  type FaqListQueryVariables,
  type QuoteFragment,
  type SolutionFragment,
  SolutionsDocument,
  type SolutionsQuery,
  type SolutionsQueryVariables,
  SolutionsSlugsDocument,
  type SolutionsSlugsQuery,
  type SolutionsSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'
import {
  type GlobalProps,
  propsWithGlobalSettings,
} from '@src/utils/getGlobalProps'

import { GradientBG } from '../../src/components/layout/GradientBG'
import { HeaderPad } from '../../src/components/layout/HeaderPad'

export type ProviderProps = {
  label?: string | null | undefined
  iconDark: string
  iconLight: string
}

export default function Solution({
  solution,
  caseStudy,
  caseStudyApps,
  faqs,
  featuredQuote,
  buildStackTabs,
  globalProps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  //   const router = useRouter()
  const imageUrl = getImageUrl(solution?.hero_image)

  return (
    <>
      <HeaderPad as={GradientBG}>
        <BasicPageHero
          preHeading="Solution"
          heading={solution.title}
          description={solution.description}
          intro={
            imageUrl ? (
              <div className="-my-xxlarge flex items-center">
                <img src={imageUrl} />
              </div>
            ) : undefined
          }
          ctas={
            <div className="flex">
              <Button
                large
                primary
                as={Link}
                href="https://app.plural.sh/signup"
              >
                Sign up
              </Button>
            </div>
          }
        />
      </HeaderPad>
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-fill-zero">
          <StandardPageWidth>
            <div
              className={classNames(
                'flex flex-col',
                'gap-y-xxxlarge md:gap-y-xxxxlarge xl:md:gap-y-xxxxxlarge'
              )}
            >
              <CenteredSectionHead
                heading={solution.heading_1}
                intro={<BasicMarkdown text={solution.content_1} />}
              />
              <ColumnsMd
                className={classNames('gap-y-large', 'md:items-center')}
              >
                <EqualColumn className="flex flex-col gap-y-large basis-1/2">
                  <SubsectionHead heading={solution.heading_2} />
                  <Body2>
                    <BasicMarkdown text={solution.content_2} />
                  </Body2>
                </EqualColumn>
                <EqualColumn className="basis-1/2">
                  <ShadowedCard
                    className={classNames(
                      'p-large',
                      'flex flex-col gap-y-xlarge'
                    )}
                  >
                    <Checklist2>
                      {solution.bullet_points.map(
                        (bullet) =>
                          bullet?.content && (
                            <Checklist2Item>{bullet.content}</Checklist2Item>
                          )
                      )}
                    </Checklist2>
                    <Cta href="/demo-login">
                      Explore our live demo environment
                    </Cta>
                  </ShadowedCard>
                </EqualColumn>
              </ColumnsMd>
              <CompanyLogosSection
                logos={globalProps.siteSettings?.partner_logos?.items}
              />
            </div>
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
      <HPWMiniSectionSolutions />
      <CaseStudyFAQSection
        caseStudyProps={{ featuredArticle: caseStudy, apps: caseStudyApps }}
        faqProps={{ faqs }}
      />
      <FeaturedQuote quote={featuredQuote} />
      {buildStackTabs && <BuildStackSection tabs={buildStackTabs} />}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await directusClient.query<
    SolutionsSlugsQuery,
    SolutionsSlugsQueryVariables
  >({
    query: SolutionsSlugsDocument,
  })
  const solutions = data.solutions_pages

  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  return {
    paths: solutions.map((solution) => ({
      params: { solution: solution.slug },
    })),
    fallback: 'blocking',
  }
}

export type AppPageProps = {
  solution: SolutionFragment
  faqs: (FaqItemFragment | null)[]
  globalProps: GlobalProps
  caseStudy: CaseStudyFragment | null
  featuredQuote: QuoteFragment | null
  caseStudyApps: TinyRepo[]
  buildStackTabs?: ReturnType<typeof getStackTabData>
}

export const getStaticProps: GetStaticProps<AppPageProps> = async (context) => {
  const slug =
    typeof context?.params?.solution === 'string'
      ? context?.params?.solution
      : null

  if (!slug) {
    return { notFound: true }
  }

  const { data: solutionData, error: solutionError } =
    await directusClient.query<SolutionsQuery, SolutionsQueryVariables>({
      query: SolutionsDocument,
      variables: { slug },
    })
  const solution = solutionData?.solutions_pages?.[0] || null

  if (!solution) {
    return { notFound: true }
  }

  const { data: repos, error: reposError } = await until(() => getTinyRepos())
  const { data: stacks, error: stacksError } = await until(() => getStacks())

  const { data: faqData, error: faqError } = await directusClient.query<
    FaqListQuery,
    FaqListQueryVariables
  >({
    query: FaqListDocument,
    variables: { slug: 'generic' },
  })
  const buildStackTabs = getStackTabData({ repos, stacks })

  return propsWithGlobalSettings({
    solution,
    metaTitle: solution.title || null,
    metaDescription: solution.description || null,
    faqs: faqData.collapsible_lists?.[0]?.items || [],
    caseStudy: solution.case_study || null,
    caseStudyApps: getCaseStudyApps(
      repos,
      (solution.case_study?.stack_apps as string[]) || []
    ),
    featuredQuote: solution.featured_quote || null,
    buildStackTabs,
    footerVariant: FooterVariant.kitchenSink,
    errors: [
      ...(solutionError ? [solutionError] : []),
      ...(faqError ? [faqError] : []),
      ...(reposError ? [reposError] : []),
      ...(stacksError ? [stacksError] : []),
    ],
  })
}
