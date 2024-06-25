import { Button, ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'

import { directusClient } from '@src/apollo-client'
import { FeaturedQuote } from '@src/components/FeaturedQuote'
import { FooterVariant } from '@src/components/FooterFull'
import { StandardPageSection } from '@src/components/layout/LayoutHelpers'
import { getCaseStudyApps } from '@src/components/page-sections/CaseStudySection'
import SolutionDownloadSection from '@src/components/page-sections/SolutionDownloadSection'
import SolutionFeatureSection from '@src/components/page-sections/SolutionFeatureSection'
import { BasicPageHero } from '@src/components/PageHeros'
import SolutionProblem from '@src/components/SolutionProblem'
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
  featuredQuote,
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
        className="pb-xxxxxlarge lg:pb-xxxxxxlarge"
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
            <div className="flex flex-col gap-medium md:flex-row md:gap-large">
              <Button
                large
                as={Link}
                href="/contact-sales"
              >
                Book a demo
              </Button>
              <Button
                large
                as={Link}
                secondary
                floating
                href="/contact-sales"
              >
                Download full e-book
              </Button>
            </div>
          }
        />
        {/* upper features */}
        <SolutionFeatureSection
          slug={solution.slug}
          kind="upper"
        />
      </HeaderPad>
      {/* solution problems */}
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-marketing-black">
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

      <FeaturedQuote quote={featuredQuote} />

      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-marketing-black">
          <SolutionFeatureSection
            slug={solution.slug}
            kind="lower"
          />
        </StandardPageSection>
      </ColorModeProvider>
      <SolutionDownloadSection slug={solution.slug} />
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
