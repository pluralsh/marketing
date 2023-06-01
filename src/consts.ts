import { type GlobalPageProps } from '@pages/_app'

import { type MinRepo } from './data/getRepos'

export const ROOT_TITLE =
  'Plural | Deploy, maintain, and scale the open-source applications you love'
export const PAGE_TITLE_PREFIX = 'Plural | '
export const PAGE_TITLE_SUFFIX = ''

export const getAppMeta = (repo: MinRepo): GlobalPageProps => {
  const displayName = repo.displayName || repo.name

  if (!displayName) return {}

  return {
    metaTitle: `Deploying ${displayName} on Kubernetes`,
    metaDescription: `Use Plural to deploy and manage ${displayName} on Kubernetes, in your cloud.`,
  }
}

export const REVALIDATE_TIME = 600

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
