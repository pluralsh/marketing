import type { NextRequest } from 'next/server'

import createMiddleware from 'next-intl/middleware'

import {
  getPrismicDefaultLanguage,
  getPrismicLanguages,
} from '@/utils/prismicio'

import { HEADERS } from './constants'

export default async function middleware(request: NextRequest) {
  const [locales, defaultLocale] = await Promise.all([
    getPrismicLanguages(),
    getPrismicDefaultLanguage(),
  ])

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localeDetection: false,
    localePrefix: 'as-needed',
  })
  const response = handleI18nRouting(request)
  response.headers.set(HEADERS.DEFAULT_LOCALE, defaultLocale)

  return response
}

export const config = {
  // Skip all these paths when matching. Add all paths that are siblings to [locale] folder.
  matcher: ['/((?!api|_next|_vercel|slice-library|slice-simulator|.*\\..*).*)'],
}
