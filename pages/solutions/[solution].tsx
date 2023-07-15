import { Button } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

import { directusClient } from '@src/apollo-client'
import { FooterVariant } from '@src/components/FooterFull'
import { BasicPageHero } from '@src/components/PageHeros'
import { getImageUrl } from '@src/consts/routes'
import { getRepos } from '@src/data/getRepos'
import {
  type FaqItemFragment,
  FaqListDocument,
  type FaqListQuery,
  type FaqListQueryVariables,
  type SolutionFragment,
  SolutionsDocument,
  type SolutionsQuery,
  type SolutionsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

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
  //   const router = useRouter()

  return (
    <HeaderPad as={GradientBG}>
      <BasicPageHero
        preHeading="Solution"
        heading={solution.title}
        description={solution.description}
        intro={
          solution.hero_image ? (
            <div className="-my-xxlarge flex items-center">
              <img src={getImageUrl(solution.hero_image)} />
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
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  const repos = (await getRepos()) || []

  return {
    paths: repos.map((repo) => ({ params: { repo: repo?.name } })),
    fallback: true,
  }
}

export type AppPageProps = {
  solution: SolutionFragment
  faqs: (FaqItemFragment | null)[]
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

  const { data: faqData, error: faqError } = await directusClient.query<
    FaqListQuery,
    FaqListQueryVariables
  >({
    query: FaqListDocument,
    variables: { slug: 'generic' },
  })

  return propsWithGlobalSettings({
    solution,
    metaTitle: solution.title,
    metaDescription: solution.description,
    faqs: faqData.collapsible_lists?.[0]?.items || [],
    footerVariant: FooterVariant.kitchenSink,
    errors: [
      ...(solutionError ? [solutionError] : []),
      ...(faqError ? [faqError] : []),
    ],
  })
}
