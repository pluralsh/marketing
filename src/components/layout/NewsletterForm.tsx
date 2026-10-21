'use client'

import { useTranslations } from 'next-intl'
import { useActionState, useEffect, useId, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import type { NewsletterResponse } from '@/app/actions'

import { subscribeToNewsletter } from '@/app/actions'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

import type { Theme } from './SiteShell'

const initialState: NewsletterResponse = { success: null }

export function NewsletterForm({ theme }: { theme: Theme }) {
  const t = useTranslations('Newsletter')
  const id = useId()
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  // Only load the captcha once someone starts to subscribe.
  const [engaged, setEngaged] = useState(false)
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    initialState
  )

  useEffect(() => {
    if (!pending) recaptchaRef.current?.reset()
  }, [pending])

  return (
    <form
      action={formAction}
      className="flex min-w-0 flex-col gap-2.5"
    >
      <label
        htmlFor={id}
        className="text-label"
      >
        {t('newsletter')}
      </label>
      <div className="flex flex-wrap gap-1.5">
        <Input
          id={id}
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          disabled={pending}
          aria-invalid={!!state?.error}
          onFocus={() => setEngaged(true)}
          className="min-w-0 flex-[999_1_160px]"
        />
        <Button
          type="submit"
          variant="dark"
          size="md"
          disabled={pending}
          className="flex-[1_0_auto] font-medium"
        >
          Subscribe
        </Button>
      </div>
      {engaged && (
        <ReCAPTCHA
          ref={recaptchaRef}
          theme={theme}
          size="compact"
          sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY || 'none'}
        />
      )}
      <p
        aria-live="polite"
        className="text-label"
      >
        {state?.error ? (
          <span className="text-danger">{state.error.message}</span>
        ) : state?.success ? (
          <span className="text-success">{t('subscriptionSuccess')}</span>
        ) : null}
      </p>
    </form>
  )
}
