'use client'

import { useTranslations } from 'next-intl'
import { useActionState, useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import type { NewsletterResponse } from '@/app/actions'

import { subscribeToNewsletter } from '@/app/actions'
import SvgArrowRight from '@/components/svg/SvgArrowRight'
import Input from '@/components/ui/Input'
import { cn } from '@/utils/cn'

type FooterNewsletterProps = React.ComponentProps<'div'>

const initialState: NewsletterResponse = {
  success: null,
}

export default function FooterNewsletter({
  className,
  ...props
}: FooterNewsletterProps) {
  const t = useTranslations('Newsletter')
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    initialState
  )
  useEffect(() => {
    if (!pending) recaptchaRef.current?.reset()
  }, [pending])

  return (
    <div
      className={cn('md:max-w-[360px]', className)}
      {...props}
    >
      <h2 className="text-title-medium">{t('newsletter')}</h2>
      <p className="mt-3 md:max-w-2xs">{t('description')}</p>
      <form
        className="mt-6"
        action={formAction}
      >
        <div className="relative flex items-center">
          <Input
            type="email"
            name="email"
            required
            placeholder={t('emailPlaceholder')}
            disabled={pending}
            aria-invalid={!!state?.error}
          />
          <button
            disabled={pending}
            type="submit"
            className={cn(
              'text-neutral-000/70 absolute right-2.5 grid size-7.5 cursor-pointer place-items-center rounded-lg bg-neutral-800'
            )}
          >
            <SvgArrowRight />
          </button>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          className="mt-2"
          theme="dark"
          sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY || 'none'}
        />
        <p
          aria-live="polite"
          className="text-caption mt-1 text-[#ff0000]/70"
        >
          {state?.error?.message}
        </p>
        <p
          aria-live="polite"
          className="text-caption text-accent-400 mt-1"
        >
          {state?.success ? t('subscriptionSuccess') : ''}
        </p>
      </form>
    </div>
  )
}
