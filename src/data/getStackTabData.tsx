import { type getTinyRepos } from '@src/data/getRepos'
import { type getStacks } from '@src/data/getStacks'

export const getStackTabData = ({
  repos,
  stacks,
}: {
  repos?: Awaited<ReturnType<typeof getTinyRepos>> | null
  stacks?: Awaited<ReturnType<typeof getStacks>> | null
}) => [
  {
    label: 'Data',
    key: 'data',
    stacks: stacks?.filter((stack) => ['data'].includes(stack.name)),
    apps: repos?.filter((repo) =>
      [
        'airbyte',
        'dagster',
        'growthbook',
        'clickhouse',
        'datahub',
        'posthog',
        'jitsu',
        'lightdash',
      ].includes(repo.name)
    ),
  },
  {
    label: 'DevOps',
    key: 'devops',
    stacks: stacks?.filter((stack) => ['devops'].includes(stack.name)),
    apps: repos?.filter((repo) =>
      [
        'argo-cd',
        'sentry',
        'grafana',
        'kubecost',
        'bytebase',
        'jenkins',
        'istio',
        'kubeflow',
      ].includes(repo.name)
    ),
  },
  {
    label: 'Security',
    key: 'security',
    stacks: stacks?.filter((stack) => ['security'].includes(stack.name)),
    apps: repos?.filter((repo) =>
      ['kubescape', 'istio', 'vault', 'hydra', 'oauth2-proxy'].includes(
        repo.name
      )
    ),
  },
]
