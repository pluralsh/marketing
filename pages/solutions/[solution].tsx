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
import { FeaturedQuote } from '@src/components/FeaturedQuote'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import BuildStackSection from '@src/components/page-sections/BuildStackSection'
import { getCaseStudyApps } from '@src/components/page-sections/CaseStudySection'
import { HPWMiniSectionSolutions } from '@src/components/page-sections/HowPluralWorksMiniSection'
import { BasicPageHero } from '@src/components/PageHeros'
import SolutionProblem from '@src/components/SolutionProblem'
import { ResponsiveText } from '@src/components/Typography'
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
      {/* solution problems */}
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-fill-zero">
          <div className="flex flex-col gap-xxxxxlarge">
            {innerSolution?.problems.map((problem) => (
              <SolutionProblem
                title={problem.title}
                subtitle={problem.subtitle}
                problem={problem.problem}
                solution={problem.solution}
              />
            ))}
          </div>
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
