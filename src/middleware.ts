import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import createMiddleware from 'next-intl/middleware'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n/locales'

import { HEADERS } from './constants'

const PROD_BLOCK_LIST = ['/api/preview', '/slice-library', '/slice-simulator']
const I18N_SKIP_LIST = ['/api', '/slice-library', '/slice-simulator', '/_next']

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // block prismic dev related stuff on main prod site
  if (
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod' &&
    PROD_BLOCK_LIST.some((route) => pathname.startsWith(route))
  )
    return NextResponse.redirect(new URL('/not-found', request.url))

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
