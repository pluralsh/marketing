import { type GlobalPageProps } from '@pages/_app'

import { type MinRepo } from './data/getRepos'
import { type MinStack } from './data/getStacks'

export const ROOT_TITLE =
  'Plural | Deploy, maintain, and scale the open-source applications you love'
export const PAGE_TITLE_PREFIX = 'Plural | '
export const PAGE_TITLE_SUFFIX = ''

export const getAppMeta = (repo: MinRepo): GlobalPageProps => {
  const displayName = repo.displayName || repo.name

  if (!displayName) return {}

  return {
    metaTitleFull: `Deploying ${displayName} on Kubernetes`,
    metaDescription: `Use Plural to deploy and manage ${displayName} on Kubernetes, in your cloud.`,
  }
}

export const getStackMeta = (stack: MinStack): GlobalPageProps => {
  const displayName = stack.displayName || stack.name

  if (!displayName) return {}

  return {
    metaTitleFull: `Deploying ${displayName} stack on Kubernetes`,
    metaDescription: `Use Plural to deploy and manage the ${displayName} stack on Kubernetes, in your cloud.`,
  }
}

export const REVALIDATE_TIME = 600 // in seconds

const PROVIDER_ICON_DIR = '/images/providers'
const ProviderIcons = {
  GCP: `gcp`,
  AWS: `aws`,
  AZURE: `azure`,
  EQUINIX: `equinix`,
  KIND: `kind`,
  GENERIC: `chart`,
} as const

export const getProviderIcon = ({
  provider,
  mode = 'dark',
}: {
  provider: string | null | undefined
  mode: 'dark' | 'light'
}) =>
  `${PROVIDER_ICON_DIR}/${
    ProviderIcons[provider?.toUpperCase() || 'GENERIC'] ?? ProviderIcons.GENERIC
  }-${mode}.png`

export const QUICKSTART_VIDEO_URL =
  'https://www.youtube.com/watch?v=mFDA-718RhI'
