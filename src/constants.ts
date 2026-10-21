export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/['"]|\/$/g, '') ||
  'http://localhost:3000'

export const HEADERS = {
  DEFAULT_LOCALE: 'x-default-locale',
}
