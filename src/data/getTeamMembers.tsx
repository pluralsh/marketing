import { until } from '@open-draft/until'

import { directusClient as client } from '@src/apollo-client'
import {
  TeamMembersDocument,
  type TeamMembersQuery,
  type TeamMembersQueryVariables,
} from '@src/generated/graphqlDirectus'

const cache: TeamMembersQuery['team_members'] | null = null

export async function getTeamMembersInner() {
  const { data, error } = await client.query<
    TeamMembersQuery,
    TeamMembersQueryVariables
  >({
    query: TeamMembersDocument,
  })

  console.log('error', error)
  console.log('data', data)

  if (error) {
    throw new Error(`${error.name}: ${error.message}`)
  }

  return data?.team_members || cache
}

export async function getTeamMembers() {
  return until(() => getTeamMembersInner())
}
