import {
  type GetStaticPaths,
  type GetStaticPropsContext,
  type InferGetStaticPropsType,
} from 'next'

import { directusClient } from '@src/apollo-client'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'
import {
  SolutionPageDocument,
  type SolutionPageQuery,
  type SolutionPageQueryVariables,
  SolutionPageSlugsDocument,
  type SolutionPageSlugsQuery,
  type SolutionPageSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Solution({
  solution,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CustomComponents components={solution.custom_components ?? []} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await directusClient.query<
    SolutionPageSlugsQuery,
    SolutionPageSlugsQueryVariables
  >({
    query: SolutionPageSlugsDocument,
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug =
    typeof context?.params?.solution === 'string'
      ? context?.params?.solution
      : null

  if (!slug) {
    return { notFound: true }
  }

  const { data: solutionData, error: solutionError } =
    await directusClient.query<SolutionPageQuery, SolutionPageQueryVariables>({
      query: SolutionPageDocument,
      variables: { slug },
    })

  if (solutionError) {
    console.error('GraphQL query error in static: ', solutionError)
  }
  const solution = solutionData?.solutions_pages?.[0] || null

  if (!solution) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    solution,
    metaTitle: solution.meta_title,
    metaDescription: solution.meta_description,
    metaImage: solution.meta_image,
    footerVariant: FooterVariant.kitchenSink,
    errors: combineErrors([solutionError]),
  })
}
