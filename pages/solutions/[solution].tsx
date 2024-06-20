import {
  ArrowRightIcon,
  Button,
  ColorModeProvider,
  IconFrame,
} from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'

import { CaseStudyFAQSection } from '@pages/applications/[repo]'
import { directusClient } from '@src/apollo-client'
import BasicMarkdown from '@src/components/BasicMarkdown'
import { Checklist2, Checklist2Item } from '@src/components/Checklist'
import { CompanyLogosSection } from '@src/components/CompanyLogos'
import { FeaturedQuote } from '@src/components/FeaturedQuote'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, ColumnsMd, EqualColumn } from '@src/components/layout/Columns'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import BuildStackSection from '@src/components/page-sections/BuildStackSection'
import { getCaseStudyApps } from '@src/components/page-sections/CaseStudySection'
import { HPWMiniSectionSolutions } from '@src/components/page-sections/HowPluralWorksMiniSection'
import { BasicPageHero } from '@src/components/PageHeros'
import {
  CenteredSectionHead,
  SubsectionHead,
} from '@src/components/SectionHeads'
import { ShadowedCard } from '@src/components/ShadowedCard'
import { Body2, Cta, ResponsiveText } from '@src/components/Typography'
import { getImageUrl } from '@src/consts/routes'
import { type TinyRepo, getTinyRepos } from '@src/data/getRepos'
import { getSolutionConfigs } from '@src/data/getSolutionsConfigs'
import { getStacks } from '@src/data/getStacks'
import { getStackTabData } from '@src/data/getStackTabData'
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
import { cn as classNames } from '@src/utils/cn'
import { combineErrors } from '@src/utils/combineErrors'
import {
  type GlobalProps,
  propsWithGlobalSettings,
} from '@src/utils/getGlobalProps'
import { normalizeM2mItems } from '@src/utils/normalizeQuotes'

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

  const innerSolution = getSolutionConfigs()[solution.slug]

  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        image="/images/solutions/solutions-background.png"
      >
        <BasicPageHero
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
                as={Link}
                href="/contact-sales"
              >
                Book a demo
              </Button>
            </div>
          }
        />
        <StandardPageWidth
          className={classNames(
            'flex flex-col gap-xlarge [text-wrap:balance]',
            'pb-xxxlarge pt-xxlarge',
            'md:pb-xxxlarge md:pt-xxxxlarge',
            'xxl:pb-xxxxlarge xxl:pt-xxxxlarge'
          )}
        >
          <ResponsiveText
            className="m-auto mb-xxxlarge text-center"
            as="h2"
            textStyles={{
              '': 'mTitle2',
              sm: 'mHero2',
              xxl: 'mBigHeader',
            }}
          >
            Strategic deployment in healthcare
          </ResponsiveText>
          <Columns>
            {innerSolution?.features.map((item) => (
              <EqualColumn
                className="mb-xxxxlarge flex flex-col rounded-large border border-fill-two p-xlarge"
                style={{
                  background:
                    'radial-gradient(50% 26.3% at 50% 100%, rgba(150, 154, 248, 0.09) 0%, rgba(150, 154, 248, 0.00) 100%), linear-gradient(74deg, #252932 19.58%, #171A21 248.88%)',
                }}
              >
                <ResponsiveText
                  className="flex items-center"
                  as="h3"
                  textStyles={{
                    '': 'mSubtitle2',
                  }}
                >
                  <IconFrame
                    icon={item.icon}
                    type="floating"
                    size="large"
                    className="mr-xsmall"
                  />
                  {item.title}
                </ResponsiveText>
                <ResponsiveText
                  className="mb-xxlarge mt-large"
                  textStyles={{
                    '': 'mBody2',
                  }}
                >
                  {item.description}
                </ResponsiveText>
                <Button
                  clickable
                  href={item.linkUrl}
                  as={Link}
                  className="mt-auto"
                  tertiary
                  padding="none"
                  endIcon={<ArrowRightIcon />}
                >
                  {item.linkTitle}
                </Button>
              </EqualColumn>
            ))}
          </Columns>
        </StandardPageWidth>
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
                <EqualColumn className="flex basis-1/2 flex-col gap-y-large">
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
                        (bullet, i) =>
                          bullet?.content && (
                            <Checklist2Item key={i}>
                              {bullet.content}
                            </Checklist2Item>
                          )
                      )}
                    </Checklist2>
                    <Cta href="/contact-sales">Book a demo today</Cta>
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
    metaTitle: `Solution${solution.title ? ` – ${solution.title}` : ''}`,
    metaDescription: solution.description || null,
    faqs: normalizeM2mItems(faqData.collapsible_lists?.[0]) || [],
    caseStudy: solution.case_study || null,
    caseStudyApps: getCaseStudyApps(
      repos,
      (solution.case_study?.stack_apps as string[]) || []
    ),
    featuredQuote: solution.featured_quote || null,
    buildStackTabs,
    footerVariant: FooterVariant.kitchenSink,
    errors: combineErrors([solutionError, faqError, reposError, stacksError]),
  })
}
