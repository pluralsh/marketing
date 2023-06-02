import { type GetStaticPropsResult } from 'next'

import { until } from '@open-draft/until'

import { REVALIDATE_TIME } from '@src/consts'
import { getSiteSettings } from '@src/data/getSiteSettings'

import {
  GITHUB_DATA_URL,
  getGithubDataServer,
  isGithubRepoData,
} from './GithubStars'

async function getGlobalProps() {
  const { data: githubData, error: githubError } = await until(() =>
    getGithubDataServer()
  )

  const swrFallback = {}

  if (isGithubRepoData(githubData)) {
    swrFallback[GITHUB_DATA_URL] = githubData
  }

  const siteSettings = await getSiteSettings()

  return {
    siteSettings,
    swrConfig: {
      fallback: swrFallback,
    },
    errors: [...(githubError ? [githubError] : [])],
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
