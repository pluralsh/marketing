import { capitalize, isEmpty } from 'lodash-es'
import memoizeOne from 'memoize-one'
import { type SetOptional } from 'type-fest'

import { filterMapNodes } from '@src/utils/graphql'

import client from '../apollo-client'
import {
  type BasicRepoFragment,
  type FullRepoFragment,
  type RecipeFragment,
  type RecipeSectionFragment,
  RepoDocument,
  type RepoQuery,
  type RepoQueryVariables,
  ReposDocument,
  type ReposQuery,
  type ReposQueryVariables,
  type TinyRepoFragment,
  TinyReposDocument,
  type TinyReposQuery,
  type TinyReposQueryVariables,
} from '../generated/graphqlPlural'

const REMOVE_LIST = ['bootstrap', 'test-harness', 'gcp-config-connector']
const ALLOW_LIST = ['kubeflow']

export type BasicRepo = ReturnType<
  typeof normalizeRepo<Exclude<BasicRepoFragment, null | undefined>>
>

export type TinyRepo = ReturnType<typeof normalizeTinyRepo>

export type FullRepo = ReturnType<
  typeof normalizeRepo<Exclude<FullRepoFragment, null | undefined>>
>

export const reposCache: {
  filtered: BasicRepo[]
} = {
  filtered: [],
}

export const tinyReposCache: {
  filtered: TinyRepo[]
} = {
  filtered: [],
}

const replacements = {
  nvidia: 'NVIDIA',
  oauth: 'OAuth',
  sql: 'SQL',
}

const nameMap = {
  console: 'Plural Console',
  'renovate-on-prem': 'Renovate on Prem',
  nocodb: 'NocoDB',
  mongodb: 'MongoDB',
  rabbitmq: 'RabbitMQ',
  n8n: 'n8n',
  mlflow: 'MLflow',
  postgres: 'PostgreSQL',
  'argo-cd': 'Argo CD',
}

export function fakeDisplayName(name = '') {
  let displayName: string =
    nameMap[name] ||
    name
      .split('-')
      .map((word) => capitalize(word))
      .join(' ')

  Object.entries(replacements).forEach(([s, r]) => {
    displayName = displayName.replace(RegExp(s, 'i'), r)
  })

  return displayName
}

function inRemoveList(repoName?: string) {
  return !!REMOVE_LIST.find((name) => name === repoName)
}

function inAllowList(repoName?: string) {
  return !!ALLOW_LIST.find((name) => name === repoName)
}

export function normalizeRepo<
  T extends SetOptional<FullRepoFragment, keyof Omit<FullRepoFragment, 'name'>>,
>(repo: T) {
  const { recipes, ...props } = repo

  const nRecipes = normalizeRecipes(recipes)
  const community: FullRepoFragment['community'] = { ...props.community } || {}

  if (!community?.gitUrl && props.gitUrl) {
    community.gitUrl = props.gitUrl
  }
  if (!community?.homepage && props.homepage) {
    community.homepage = props.homepage
  }

  return {
    ...props,
    ...(nRecipes ? { recipes: nRecipes } : {}),
    ...(recipes ? { recipes } : {}),
    displayName:
      ((repo as any).displayName as string) || fakeDisplayName(repo?.name),
    community: {
      ...community,
    },
  }
}

export function normalizeTinyRepo(repo: TinyRepoFragment) {
  return {
    ...repo,
    displayName:
      ((repo as any).displayName as string) || fakeDisplayName(repo?.name),
  }
}

function filterRepo<
  T extends { name?: string; recipes?: any[] | null } | null | undefined,
>(repo: T): boolean {
  return (
    !!repo &&
    !inRemoveList(repo?.name) &&
    (!isEmpty(repo?.recipes) || inAllowList(repo?.name))
  )
}

function filterTinyRepo<
  T extends { name?: string; recipes?: any[] | null } | null | undefined,
>(repo: T): boolean {
  return !!repo && !inRemoveList(repo?.name)
}

const normalizeRecipes = (recipes: FullRepoFragment['recipes']) =>
  recipes
    ?.filter((recipe): recipe is RecipeFragment => !!recipe && !recipe.private)
    .map((recipe) => {
      const { recipeSections, ...r } = recipe
      const filteredSections = recipeSections?.filter(
        (r): r is RecipeSectionFragment => !!r
      )

      return {
        ...r,
        ...(filteredSections ? { recipeSections: filteredSections } : {}),
      }
    })

const normalizeRepos = memoizeOne((data: ReposQuery) =>
  filterMapNodes(data?.repositories, filterRepo, normalizeRepo)
)

export const normalizeTinyRepos = (data: TinyReposQuery) =>
  filterMapNodes(data?.repositories, filterTinyRepo, normalizeTinyRepo)

export async function getRepos(): Promise<BasicRepo[]> {
  const { data, error } = await client.query<ReposQuery, ReposQueryVariables>({
    query: ReposDocument,
  })

  const filteredRepos: BasicRepo[] | undefined | null = normalizeRepos(data)

  if (filteredRepos && filteredRepos.length > 0) {
    reposCache.filtered = filteredRepos

    return filteredRepos
  }
  if (!isEmpty(reposCache.filtered)) {
    console.warn('getRepos(): No repos returned, using cached data')

    return reposCache.filtered
  }
  if (error) {
    throw new Error(`getRepos() – ${error.name}: ${error.message}`)
  }

  throw new Error('getRepos() – No repos found')
}

export async function getTinyRepos(): Promise<TinyRepo[]> {
  const { data, error } = await client.query<
    TinyReposQuery,
    TinyReposQueryVariables
  >({
    query: TinyReposDocument,
  })

  const filteredRepos: TinyRepo[] | undefined | null = normalizeTinyRepos(data)

  if (filteredRepos && filteredRepos.length > 0) {
    tinyReposCache.filtered = filteredRepos

    return filteredRepos
  }
  if (!isEmpty(tinyReposCache.filtered)) {
    console.warn('getTinyRepos(): No repos returned, using cached data')

    return tinyReposCache.filtered
  }

  if (error) {
    throw new Error(`getTinyRepos() – ${error.name}: ${error.message}`)
  }
  throw new Error('getTinyRepos() – No repos found')
}

const fullRepoCache: Record<string, FullRepo> = {}

export async function getFullRepo(repoName: string): Promise<FullRepo> {
  const { data, error } = await client.query<RepoQuery, RepoQueryVariables>({
    query: RepoDocument,
    variables: { name: repoName },
  })

  if (error) {
    throw new Error(`${error.name}: ${error.message}`)
  }
  const repo = data.repository
    ? normalizeRepo(data.repository)
    : fullRepoCache[repoName] || undefined

  if (!filterRepo(repo)) throw new Error('getFullRepo() – No repo found')
  fullRepoCache[repoName] = repo

  return repo
}
