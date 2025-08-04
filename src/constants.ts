export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'http://localhost:3000'

export const REQUIRED_PAGE_UID = {
  HOME: 'home',
} as const

export const REQUIRED_SINGLE_TYPE = {
  SETTINGS: 'settings',
} as const

export const NONEXISTENT_FIELD = '__nonexistent-field__'

export const HEADERS = {
  DEFAULT_LOCALE: 'x-default-locale',
}
