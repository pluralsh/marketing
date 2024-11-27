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
  GetGlobalDataDocument,
  type GetGlobalDataQuery,
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

  const { data, error } = await directusClient.query<GetGlobalDataQuery>({
    query: GetGlobalDataDocument,
  })

  const siteSettings = getSiteSettings(
    data.site_settings ?? {},
    data.solutions_pages,
    data.product_pages,
    data.resource_pages
  )

  return {
    siteSettings,
    swrConfig: {
      fallback: swrFallback,
    },
    errors: combineErrors([githubError, error]),
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
