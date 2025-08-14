import type { RequestInit } from 'next/dist/server/web/spec-extension/request'
import type { NextRequest } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ORIGIN = process.env.GTM_SERVER_CONTAINER_URL || ''

function targetUrl(req: NextRequest, parts: string[] = []) {
  const src = new URL(req.url)
  const base = ORIGIN.endsWith('/') ? ORIGIN.slice(0, -1) : ORIGIN
  const suffix = parts.length ? `/${parts.join('/')}` : ''
  const url = new URL(`${base}${suffix}`)
  url.search = src.search
  return url
}

async function forward(
  method: 'GET' | 'POST',
  req: NextRequest,
  parts: string[] = []
) {
  const url = targetUrl(req, parts)
  const headers = new Headers(req.headers)
  headers.set('X-Forwarded-For', req.headers.get('x-forwarded-for') || '')
  headers.set('User-Agent', req.headers.get('user-agent') || '')
  headers.set('Accept-Language', req.headers.get('accept-language') || '')
  headers.set('Referer', req.headers.get('referer') || '')
  headers.delete('host')

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
