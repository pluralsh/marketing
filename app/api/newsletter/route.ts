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

  console.log('captchaVal', captchaVal)

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers,
      body: postBody,
    })
    const response = await res.json()

    console.log('recaptcha success', response)

    return response.success
  } catch (e) {
    // logger.error('Contact: reCAPTCHA:', e)
    console.log('recaptcha error')

    return false
  }
}

const ErrorResponse = (error: { type: string; message: string }) =>
  NextResponse.json(
    {
      error,
    },
    { status: 500 }
  )

export async function POST(req: NextRequest) {
  // console.log('req', req)
  // console.log('req.headers', req.headers)

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

  console.log('validCaptcha', validCaptcha)
  if (!validCaptcha) {
    console.log('send error')

    return ErrorResponse({ type: 'captcha', message: 'Invalid captcha' })
  }

  // const hsFormData = new FormData()

  // hsFormData.set('properties', JSON.stringify())

  console.log('send success')
  const response = await hubspotClient.apiRequest({
    method: 'POST',
    path: '/crm/v3/objects/contacts',
    body: { properties: { email } },
  })

  console.log('response', response)

  return NextResponse.json({ success: true })
}
