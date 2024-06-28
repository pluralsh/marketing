import { Button, ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'

import { directusClient } from '@src/apollo-client'
import { FooterVariant } from '@src/components/FooterFull'
import { StandardPageSection } from '@src/components/layout/LayoutHelpers'
import SolutionDownloadSection from '@src/components/page-sections/SolutionDownloadSection'
import SolutionFeatureSection from '@src/components/page-sections/SolutionFeatureSection'
import { BasicPageHero } from '@src/components/PageHeros'
import SolutionProblem from '@src/components/SolutionProblem'
import { getTinyRepos } from '@src/data/getRepos'
import { getStacks } from '@src/data/getStacks'
import { getStackTabData } from '@src/data/getStackTabData'
import {
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

import { GradientBG } from '../../src/components/layout/GradientBG'
import { HeaderPad } from '../../src/components/layout/HeaderPad'

export type ProviderProps = {
  label?: string | null | undefined
  iconDark: string
  iconLight: string
}

export default function Solution({
  solution,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!solution) return null

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
                as="a"
                secondary
                floating
                href={`/pdfs/solutions/e-books/${solution.slug}.pdf`}
                download
              >
                Download full e-book
              </Button>
            </div>
          }
        />
        {/* upper features */}
        <SolutionFeatureSection
          solution={solution}
          kind="upper"
        />
      </HeaderPad>
      {/* solution problems */}
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-marketing-black">
          <div className="flex flex-col gap-xxxxxlarge">
            {solution?.problems?.map((problem) => (
              <SolutionProblem
                key={problem?.id}
                title={problem?.title}
                subtitle={problem?.subtitle}
                problem={problem?.problem}
                solution={problem?.solution}
              />
            ))}
          </div>
        </StandardPageSection>
      </ColorModeProvider>

      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-marketing-black">
          <SolutionFeatureSection
            solution={solution}
            kind="lower"
          />
        </StandardPageSection>
      </ColorModeProvider>
      <SolutionDownloadSection solution={solution} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await directusClient.query<
    SolutionsSlugsQuery,
    SolutionsSlugsQueryVariables
  >({
    query: SolutionsSlugsDocument,
  })

  if (error) {
    console.error('GraphQL query error in static:', error)
  }

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
  globalProps: GlobalProps
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

  if (solutionError) {
    console.error('GraphQL query error in static:', solutionError)
  }
  const solution = solutionData?.solutions_pages?.[0] || null

  if (!solution) {
    return { notFound: true }
  }

  const { data: repos, error: reposError } = await until(() => getTinyRepos())
  const { data: stacks, error: stacksError } = await until(() => getStacks())

  const buildStackTabs = getStackTabData({ repos, stacks })

  return propsWithGlobalSettings({
    solution,
    metaTitle: `Solution${solution.title ? ` – ${solution.title}` : ''}`,
    metaDescription: solution.description || null,
    buildStackTabs,
    footerVariant: FooterVariant.kitchenSink,
    errors: combineErrors([solutionError, reposError, stacksError]),
  })
}
