import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import createMiddleware from 'next-intl/middleware'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/locales'

import { HEADERS } from './constants'

const I18N_SKIP_LIST = ['/api', '/_next']

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // skip i18n middleware for API routes and Next internal files/static files (like robots.txt)
  if (
    I18N_SKIP_LIST.some((route) => pathname.startsWith(route)) ||
    pathname.includes('.')
  )
    return NextResponse.next()

  const handleI18nRouting = createMiddleware({
    locales: SUPPORTED_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    localeDetection: false,
    localePrefix: 'as-needed',
  })
  const response = handleI18nRouting(request)
  response.headers.set(HEADERS.DEFAULT_LOCALE, DEFAULT_LOCALE)

  return response
}
