import {
  type FormEventHandler,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import {
  ArrowRightIcon,
  Input,
  Tooltip,
  usePrevious,
} from '@pluralsh/design-system'

import ReCAPTCHA from 'react-google-recaptcha'

import { isValidEmail } from '@src/utils/text'

import { FooterHeading, FooterNavLink } from './FooterNav'
import { ResponsiveText } from './Typography'

const NEWSLETTER_FORM_NAME = 'newsletter-signup'

export function NewsletterSignupForm() {
  const [email, setEmail] = useState('')
  const prevEmail = usePrevious(email)
  const recaptchaRef = useRef<{ reset: () => void } | null>(null)
  const [recaptchaVal, setRecaptchaVal] = useState('')

  const emailInputId = useId()
  const [response, setResponse] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  useEffect(() => {
    // Clear response if email field is changed,
    if (
      email !== prevEmail &&
      // unless field was changed to empty because of successful submission
      !(response?.type === 'success' && !email)
    ) {
      setResponse(null)
    }
  }, [email, prevEmail, response?.type])

  function setError(error: string | Error) {
    setResponse({
      type: 'error',
      message: `There was a problem subscribing to the newsletter: ${error}`,
    })
  }

  function resetRecaptcha() {
    recaptchaRef?.current?.reset()
    setRecaptchaVal('')
  }

  const submitEmail = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault()
      setResponse(null)

      const formData = new FormData(event.target as HTMLFormElement)

      if (!recaptchaVal) {
        setResponse({
          type: 'error',
          message:
            'Please complete the reCAPTCHA before submitting your email.',
        })

        return
      }

      if (!isValidEmail(formData.get('email')?.toString())) {
        setResponse({
          type: 'error',
          message: 'Please enter a valid email address.',
        })

        return
      }
      const body = new URLSearchParams(formData as any).toString()

      // if (process.env.NODE_ENV === 'development') {
      //   setResponse({
      //     type: 'error',
      //     message: 'Must be server-deployed to submit form.',
      //   })

      //   return
      // }
      fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then((res) => {
          console.log('res', res)
          if (res.ok) {
            setResponse({
              type: 'success',
              message: 'Thank you for subscribing to the newsletter',
            })
            setEmail('')
          } else {
            res.json().then((resObj) => {
              if (resObj?.error?.type === 'captcha') {
                setRecaptchaVal('')
              }
              setError(resObj?.error?.message || 'Unknown issue')
            })
          }
          resetRecaptcha()
        })
        .catch((error) => {
          console.log('error', error)
          setError(error)
          resetRecaptcha()
        })
    },
    [recaptchaVal]
  )

  return (
    <form
      id="email-form"
      onSubmit={submitEmail}
      action="/forms/newsletter.html"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      name={NEWSLETTER_FORM_NAME}
    >
      <input
        type="hidden"
        name="form-name"
        value={NEWSLETTER_FORM_NAME}
      />
      <FooterHeading>Newsletter</FooterHeading>
      <FooterNavLink
        as="p"
        className="mb-medium"
      >
        Be the first to know when we drop something new.
      </FooterNavLink>
      <label
        htmlFor={emailInputId}
        className="sr-only"
      >
        Email
      </label>
      <Input
        id={emailInputId}
        inputProps={{ name: 'email', type: 'email' }}
        placeholder="Email address"
        onChange={(e) => {
          setEmail(e?.target?.value)
        }}
        value={email}
        endIcon={
          <Tooltip
            placement="top"
            label={
              recaptchaVal ? 'Subscribe' : 'Complete reCAPTCHA to subscribe'
            }
          >
            <div>
              <button
                type="submit"
                className="submitButton"
                aria-label="Subscribe"
              >
                <ArrowRightIcon aria-label="Subscribe" />
              </button>
            </div>
          </Tooltip>
        }
      />
      {response && (
        <ResponsiveText
          textStyles={{ '': 'mComponentText' }}
          color={
            response.type === 'error'
              ? 'text-danger-light'
              : 'text-success-light'
          }
          className="mt-small"
        >
          {response.message}
        </ResponsiveText>
      )}
      <div className="mt-small">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY}
          onChange={(val) => {
            setRecaptchaVal(val)
          }}
        />
      </div>
    </form>
  )
}
