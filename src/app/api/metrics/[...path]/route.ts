import type { RequestInit } from 'next/dist/server/web/spec-extension/request'
import type { NextRequest } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ORIGIN = process.env.GTM_SERVER_CONTAINER_URL || ''

function targetUrl(req: NextRequest, parts: string[] = []): URL | null {
  if (!ORIGIN) return null

  let origin: URL
  try {
    origin = new URL(ORIGIN)
  } catch {
    return null
  }

  // Reject path segments that could escape the configured origin (SSRF).
  if (
    parts.some(
      (part) =>
        part === '' ||
        part === '.' ||
        part === '..' ||
        part.includes('\\') ||
        part.includes(':') ||
        part.includes('/')
    )
  ) {
    return null
  }

  const url = new URL(origin.href)
  if (parts.length) {
    const basePath = origin.pathname.replace(/\/$/, '')
    url.pathname = `${basePath}/${parts.map(encodeURIComponent).join('/')}`
  }
  url.search = new URL(req.url).search

  if (url.origin !== origin.origin) return null
  return url
}

async function forward(
  method: 'GET' | 'POST',
  req: NextRequest,
  parts: string[] = []
) {
  const url = targetUrl(req, parts)
  if (!url) return new Response('Bad request', { status: 400 })

  const headers = new Headers()
  headers.set('X-Forwarded-For', req.headers.get('x-forwarded-for') || '')
  headers.set('User-Agent', req.headers.get('user-agent') || '')
  headers.set('Accept-Language', req.headers.get('accept-language') || '')
  headers.set('Referer', req.headers.get('referer') || '')
  const contentType = req.headers.get('content-type')
  if (contentType) headers.set('Content-Type', contentType)

  const init: RequestInit = {
    method,
    headers,
    redirect: 'manual',
    duplex: 'half',
  }
  if (method === 'POST') init.body = req.body

  const res = await fetch(url, init)
  return new Response(res.body, { status: res.status, headers: res.headers })
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  if (!ORIGIN)
    return new Response('Server container URL not configured', { status: 500 })

  const { path } = await params
  return forward('GET', req, path || [])
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  if (!ORIGIN)
    return new Response('Server container URL not configured', { status: 500 })

  const { path } = await params
  return forward('POST', req, path || [])
}
