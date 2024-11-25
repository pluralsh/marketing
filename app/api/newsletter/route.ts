import { type NextRequest, NextResponse } from 'next/server'

import { Client } from '@hubspot/api-client'
import queryString from 'query-string'

import { isValidEmail } from '@src/utils/text'

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_API_SECRET,
})

async function isCaptchaValid(captchaVal) {
  const postBody = queryString.stringify({
    secret: process.env.SITE_RECAPTCHA_SECRET,
    response: captchaVal,
  })
  const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
  })

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers,
      body: postBody,
    })
    const response = await res.json()

    return response.success
  } catch (e) {
    return false
  }
}

async function setEmail(email) {
  const response = await hubspotClient.apiRequest({
    method: 'POST',
    path: '/crm/v3/objects/contacts',
    body: { properties: { email } },
  })

  if (!response.ok) {
    try {
      const body = (await response.json()) as {
        category?: string
        message?: string
      }

      if (body?.category === 'CONFLICT') {
        const contactId = body.message?.match(/Existing ID:\s*(\d+)/)?.[1]

        if (!contactId) {
          return false
        }
        const patchRes = await hubspotClient.apiRequest({
          method: 'PATCH',
          path: `/crm/v3/objects/contacts/${contactId}`,
          body: { properties: { email } },
        })

        if (patchRes.ok) {
          return true
        }

        return false
      }
    } catch (e) {
      return false
    }
  }

  return true
}

const ErrorResponse = (error: {
  type: 'form' | 'captcha' | 'hubspot'
  message: string
}) =>
  NextResponse.json(
    {
      error,
    },
    { status: 500 }
  )

export async function POST(req: NextRequest) {
  let formData: FormData

  try {
    formData = await req.formData()
  } catch (e) {
    return ErrorResponse({ type: 'form', message: `${e}` })
  }
  const email = formData.get('email')

  if (!email || typeof email !== 'string') {
    return ErrorResponse({
      type: 'form',
      message: 'Missing email address',
    })
  }
  if (!isValidEmail(email)) {
    return ErrorResponse({
      type: 'form',
      message: 'Invalid email address',
    })
  }

  const validCaptcha = await isCaptchaValid(
    formData.get('g-recaptcha-response')
  )

  if (!validCaptcha) {
    return ErrorResponse({ type: 'captcha', message: 'Invalid captcha' })
  }

  const success = setEmail(email)

  if (!success) {
    return ErrorResponse({
      type: 'hubspot',
      message: 'Could not create contact',
    })
  }

  return NextResponse.json({ success })
}
