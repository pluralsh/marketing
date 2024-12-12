export const PAGE_TITLE_PREFIX = 'Plural | '

export const DISCORD_LINK = 'https://discord.com/invite/bEBAMXV64s'

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
