import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import createMiddleware from 'next-intl/middleware'

import {
  getPrismicDefaultLanguage,
  getPrismicLanguages,
} from '@/utils/prismicio'

import { HEADERS } from './constants'

const PROD_BLOCK_LIST = ['/api/preview', '/slice-library', '/slice-simulator']
const I18N_SKIP_LIST = ['/api', '/slice-library', '/slice-simulator', '/_next']

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // block prismic-related stuff on main prod site
  if (
    isMainProdSite(request) &&
    PROD_BLOCK_LIST.some((route) => pathname.startsWith(route))
  )
    return NextResponse.redirect(new URL('/not-found', request.url))

  // skip i18n middleware for API routes and Next internal files/static assets
  if (I18N_SKIP_LIST.some((route) => pathname.startsWith(route)))
    return NextResponse.next()

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

const isMainProdSite = (request: NextRequest) => {
  const requestOrigin = cleanUrl(request.nextUrl.origin)
  const prodOrigin = cleanUrl(process.env.NEXT_PUBLIC_SITE_URL)
  return !!requestOrigin && !!prodOrigin && requestOrigin === prodOrigin
}

const cleanUrl = (url: string | null | undefined) =>
  url ? url.replace(/\/+$/, '') : undefined
