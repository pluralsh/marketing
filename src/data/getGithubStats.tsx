import { until } from '@open-draft/until'
import { pick } from 'lodash-es'
import { Octokit } from 'octokit'

function reqContribs({
  owner = 'pluralsh',
  repo = 'plural',
  octokit,
}: {
  owner: string
  repo: string
  octokit: Octokit
}) {
  return octokit.rest.repos.listContributors({
    owner,
    repo,
    per_page: 100,
  })
}

const PICK_PROPS = [
  'avatar_url',
  'html_url',
  'login',
  'contributions',
  'id',
] as const

export type CommunityContributor = Pick<
  GHContributorList[number],
  (typeof PICK_PROPS)[number]
>

type GHContributorList = Awaited<ReturnType<typeof reqContribs>>['data']

const filterList = [
  'avaidyanatha',
  'DavidSpek',
  'dherault',
  'dogmar',
  'floreks',
  'maciaszczykm',
  'michaeljguarino',
  'samweaver',
  'swoodward90',
  'BogdanAntoniu78',
  'fabricetriboix',
  'zreigz',
  'plural-bot',
  'rauerhans',
  /* add more later */
]

function normalizeContributors(cList: GHContributorList) {
  const contributors = new Map<string, CommunityContributor>()

  for (const contributor of cList) {
    const { id, type, contributions } = contributor
    const idString = `${id || ''}`

    // Initially filter out bots and users with no contributions
    if (!idString || type.toLowerCase() !== 'user' || !(contributions > 0)) {
      continue
    }
    const original = contributors.get(idString)

    if (!original) {
      contributors.set(idString, pick(contributor, PICK_PROPS))
    } else {
      contributors.set(idString, {
        ...original,
        contributions: (original.contributions ?? 0) + (contributions ?? 0),
      })
    }
  }

  return Array.from(contributors.values())
    .filter(({ login }) => login && !filterList.includes(login))
    .sort((a, b) => b.contributions - a.contributions)
}

export async function getContributors() {
  return until(async () => {
    console.log('until getGithubStats')

    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
      auth: process.env.GITHUB_API_TOKEN,
    })
    const req = (repo: string, owner = 'pluralsh') =>
      until(() => reqContribs({ owner, repo, octokit }))

    const allResponses = await Promise.all([
      req('plural'),
      req('plural-artifacts'),
      req('plural-cli'),
      req('console'),
      req('design-system'),
      req('documentation'),
    ])

    return normalizeContributors(
      allResponses.flatMap((response) => response?.data?.data || [])
    )
  })
}
