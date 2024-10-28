import { type GetStaticPropsResult } from 'next'

import { until } from '@open-draft/until'

import { directusClient } from '@src/apollo-client'
import {
  GITHUB_DATA_URL,
  getGithubDataServer,
  isGithubRepoData,
} from '@src/components/GithubStars'
import { REVALIDATE_TIME } from '@src/consts'
import { getSiteSettings } from '@src/data/getSiteSettings'
import {
  ProductPageSlugsDocument,
  type ProductPageSlugsQuery,
  type ProductPageSlugsQueryVariables,
  SiteSettingsDocument,
  type SiteSettingsQuery,
  type SiteSettingsQueryVariables,
  SolutionsSlugsDocument,
  type SolutionsSlugsQuery,
  type SolutionsSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'

import { combineErrors } from './combineErrors'

async function getGlobalProps() {
  const { data: githubData, error: githubError } = await until(() =>
    getGithubDataServer()
  )

  const swrFallback = {}

  if (isGithubRepoData(githubData)) {
    swrFallback[GITHUB_DATA_URL] = githubData
  }

  const { data: solutionsData } = await directusClient.query<
    SolutionsSlugsQuery,
    SolutionsSlugsQueryVariables
  >({
    query: SolutionsSlugsDocument,
  })
  const solutions = solutionsData.solutions_pages

  const { data: productData } = await directusClient.query<
    ProductPageSlugsQuery,
    ProductPageSlugsQueryVariables
  >({
    query: ProductPageSlugsDocument,
  })
  const products = productData.product_pages

  const { data: siteSettingsData } = await directusClient.query<
    SiteSettingsQuery,
    SiteSettingsQueryVariables
  >({
    query: SiteSettingsDocument,
  })
  const siteSettingsQuery = siteSettingsData.site_settings ?? {}

  const siteSettings = getSiteSettings(siteSettingsQuery, solutions, products)

  return {
    siteSettings,
    swrConfig: {
      fallback: swrFallback,
    },
    errors: combineErrors([githubError]),
  }
}
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type GlobalProps = AsyncReturnType<typeof getGlobalProps>

export async function propsWithGlobalSettings<P extends Record<string, any>>(
  props: P,
  additional?: Record<string, any>
): Promise<GetStaticPropsResult<P & { globalProps: GlobalProps }>> {
  const globalProps = await getGlobalProps()

  return {
    props: {
      globalProps,
      ...(props || {}),
    },
    revalidate: REVALIDATE_TIME,
    ...(additional || {}),
  }
}
