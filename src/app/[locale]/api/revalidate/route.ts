import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

import type { PrismicWebhookData } from '@/types/prismicio'

const secretKey = process.env.PRISMIC_WEBHOOK_SECRET

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as PrismicWebhookData
    if (secretKey && data.secret !== secretKey) {
      throw new Error('Invalid secret key')
    }

    revalidateTag('prismic')

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (e) {
    console.error('Revalidation failed:', e)
    return NextResponse.json({ revalidated: false, now: Date.now() })
  }
}
