export const ROOT_TITLE =
  'Plural | Deploy, maintain, and scale the open-source applications you love'
export const PAGE_TITLE_PREFIX = 'Plural | '
export const PAGE_TITLE_SUFFIX = ''
export const getAppMetaDescription = (displayName?: string) => {
  if (!displayName) return undefined

  return `Use Plural to deploy and manage ${displayName} on Kubernetes, in your cloud.`
}

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
