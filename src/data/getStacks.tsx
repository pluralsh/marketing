import capitalize from 'lodash/capitalize'
import memoizeOne from 'memoize-one'

import { filterMapNodes } from '@src/utils/graphql'

import client from '../apollo-client'
import {
  type FullStackFragment,
  type MinStackFragment,
  StackDocument,
  type StackQuery,
  type StackQueryVariables,
  StacksDocument,
  type StacksQuery,
  type StacksQueryVariables,
} from '../generated/graphqlPlural'

const REMOVE_LIST = ['bootstrap', 'test-harness', 'gcp-config-connector']

export type MinStack = ReturnType<
  typeof normalizeStack<Exclude<MinStackFragment, null | undefined>>
>

export type FullStack = ReturnType<
  typeof normalizeStack<Exclude<FullStackFragment, null | undefined>>
>

export const stacksCache: {
  filtered: MinStack[]
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

function fakeDisplayName(name = '') {
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

function inRemoveList(stackName?: string) {
  return !!REMOVE_LIST.find((name) => name === stackName)
}

function normalizeStack<T extends { name?: string }>(stack: T) {
  return stack

  //   return {
  //     ...stack,
  //     displayName:
  //       ((stack as any).displayName as string) || fakeDisplayName(stack?.name),
  //   }
}

function filterStack<T extends { name?: string } | null | undefined>(
  repo: T
): boolean {
  return !!repo && !inRemoveList(repo?.name)
}

const normalizeStacks = memoizeOne((data: StacksQuery) =>
  filterMapNodes(data?.stacks, filterStack, normalizeStack)
)

export async function getStacks(): Promise<MinStack[]> {
  const { data, error } = await client.query<StacksQuery, StacksQueryVariables>(
    {
      query: StacksDocument,
    }
  )

  if (error) {
    throw new Error(`${error.name}: ${error.message}`)
  }
  const filteredStacks = normalizeStacks(data) as MinStack[]

  if (filteredStacks && filteredStacks.length > 0) {
    stacksCache.filtered = filteredStacks

    return filteredStacks || []
  }

  throw new Error('No repos found')
}

const fullStackCache: Record<string, FullStack> = {}

export async function getStack(repoName: string): Promise<FullStack> {
  const { data, error } = await client.query<StackQuery, StackQueryVariables>({
    query: StackDocument,
    variables: { name: repoName },
  })

  if (error) {
    throw new Error(`${error.name}: ${error.message}`)
  }
  const stack = data.stack
    ? normalizeStack(data.stack)
    : fullStackCache[repoName] || undefined

  if (!filterStack(stack)) throw new Error('No repo found')
  fullStackCache[repoName] = stack

  return stack
}
