import { capitalize, isEmpty } from 'lodash-es'
import memoizeOne from 'memoize-one'

import { filterMapNodes } from '@src/utils/graphql'

import client from '../apollo-client'
import {
  type FullRepoFragment,
  type MinRepoFragment,
  type RecipeFragment,
  type RecipeSectionFragment,
  RepoDocument,
  type RepoQuery,
  type RepoQueryVariables,
  ReposDocument,
  type ReposQuery,
  type ReposQueryVariables,
} from '../generated/graphqlPlural'

const REMOVE_LIST = ['bootstrap', 'test-harness', 'gcp-config-connector']

export type MinRepo = ReturnType<
  typeof normalizeRepo<Exclude<MinRepoFragment, null | undefined>>
>

export type FullRepo = ReturnType<
  typeof normalizeRepo<Exclude<FullRepoFragment, null | undefined>>
>

export const reposCache: {
  filtered: MinRepo[]
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

function normalizeRepo<T extends Pick<FullRepoFragment, 'name' | 'recipes'>>(
  repo: T
) {
  const { recipes, ...props } = repo

  const nRecipes = normalizeRecipes(recipes)

  return {
    ...props,
    ...(nRecipes ? { recipes: nRecipes } : {}),
    recipes,
    displayName:
      ((repo as any).displayName as string) || fakeDisplayName(repo?.name),
  }
}

function filterRepo<
  T extends { name?: string; recipes?: any[] } | null | undefined
>(repo: T): boolean {
  return !!repo && !inRemoveList(repo?.name) && !isEmpty(repo?.recipes)
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

export async function getRepos(): Promise<MinRepo[]> {
  const { data, error } = await client.query<ReposQuery, ReposQueryVariables>({
    query: ReposDocument,
  })

  if (error) {
    throw new Error(`${error.name}: ${error.message}`)
  }
  const filteredRepos = normalizeRepos(data) as MinRepo[]

  if (filteredRepos && filteredRepos.length > 0) {
    reposCache.filtered = filteredRepos

    return filteredRepos || []
  }

  throw new Error('No repos found')
}

const fullRepoCache: Record<string, FullRepo> = {}

export async function getRepo(repoName: string): Promise<FullRepo> {
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

  if (!filterRepo(repo)) throw new Error('No repo found')
  fullRepoCache[repoName] = repo

  return repo
}
