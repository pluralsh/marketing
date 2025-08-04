import { getDefaultLocale } from './routing.server'

export function getLocalePrefix(
  locale: string | undefined,
  defaultLocale: string
): string
export function getLocalePrefix(locale?: string): Promise<string>
export function getLocalePrefix(
  locale?: string,
  defaultLocale?: string
): Promise<string> | string {
  function getPrefix(_locale: string, _defaultLocale: string) {
    return _locale === _defaultLocale ? '' : `/${_locale}`
  }

  if (!locale) return ''
  if (defaultLocale) {
    return getPrefix(locale, defaultLocale)
  } else {
    return getDefaultLocale().then((defaultLocale) =>
      getPrefix(locale, defaultLocale)
    )
  }
}

export { getDefaultLocale, localizeUrl } from './routing.server'
