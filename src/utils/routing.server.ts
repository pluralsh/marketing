'use server'

import { getLocale } from 'next-intl/server'
import { headers } from 'next/headers'

import { HEADERS } from '@/constants'
import { getPrismicDefaultLanguage } from '@/utils/prismicio'

export async function getDefaultLocale() {
  const headersList = await headers()
  const localeFromHeader = headersList.get(HEADERS.DEFAULT_LOCALE)

  if (localeFromHeader) {
    return localeFromHeader
  }

  return await getPrismicDefaultLanguage()
}

export async function localizeUrl(href: string) {
  if (/^\//.test(href.toString())) {
    const locale = await getLocale()
    const defaultLocale = await getDefaultLocale()
    const prefix = locale === defaultLocale ? '' : `/${locale}`
    return `${prefix}${href}`
  }
  return href
}
