'use server'

import { Client } from '@hubspot/api-client'
import { getTranslations } from 'next-intl/server'
import queryString from 'query-string'
import * as z from 'zod/v4'

export type NewsletterResponse = {
  success: boolean | null
  error?: {
    type: 'form' | 'captcha' | 'hubspot'
    message: string
  }
}

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_API_SECRET,
})

async function isCaptchaValid(captchaVal: FormDataEntryValue | null) {
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
  } catch {
    return false
  }
}

async function setEmail(email: string | undefined) {
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
    } catch {
      return false
    }
  }

  return true
}

function createErrorResponse(error: {
  type: 'form' | 'hubspot'
  message: string
}) {
  return {
    success: false,
    error,
  }
}

export async function subscribeToNewsletter(
  initialState: NewsletterResponse,
  formData: FormData
): Promise<NewsletterResponse> {
  const t = await getTranslations('Newsletter')
  const validatedData = await z
    .object({
      email: z.email({ message: t('invalidEmail') }),
      recaptcha: z
        .string()
        .min(1, t('captchaFailed'))
        .refine(async (val) => await isCaptchaValid(val), {
          message: t('captchaFailed'),
        }),
    })
    .safeParseAsync({
      email: formData.get('email')?.toString(),
      recaptcha: formData.get('g-recaptcha-response')?.toString(),
    })

  if (validatedData.error) {
    return createErrorResponse({
      type: 'form',
      message: validatedData.error.issues[0].message ?? '',
    })
  }

  const email = validatedData.data?.email
  const emailSuccess = await setEmail(email)

  if (!emailSuccess) {
    return createErrorResponse({
      type: 'hubspot',
      message: t('hubspotFailed'),
    })
  }

  return { success: true }
}
