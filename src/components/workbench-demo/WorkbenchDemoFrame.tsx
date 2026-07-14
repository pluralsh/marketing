'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'

import {
  NextButton,
  PrevButton,
} from '@/slices/main/Testimonials/components/CarouselArrowButtons'
import { cn } from '@/utils/cn'

import { activateHeroBookDemoCta } from './bookDemoTarget'
import styles from './WorkbenchDemoFrame.module.css'
import {
  WORKBENCH_DEMO_TOUR_TOTAL,
  getWorkbenchDemoTourBar,
  getWorkbenchDemoTourSrCaption,
  getWorkbenchDemoTourTitle,
} from './workbenchDemoTour'

const DEMO_VIEWPORT_HEIGHT = 624
const CONSOLE_DEMO_URL = 'https://console.plural.sh/workbenches'

type TourStepMessage = {
  step: number
  total: number
  title: string | null
  barVerb: string | null
  barRest: string | null
  srCaption: string | null
}

type WorkbenchDemoFrameProps = {
  className?: string
}

function RefreshIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M10.5 2.5V5H8M1.5 9.5V7H4M10.1 5C9.55 3.35 7.95 2.25 6 2.25C3.65 2.25 1.75 4.15 1.75 6.5C1.75 8.85 3.65 10.75 6 10.75C7.6 10.75 9 9.75 9.7 8.25M1.9 7C2.45 8.65 4.05 9.75 6 9.75C8.35 9.75 10.25 7.85 10.25 5.5C10.25 3.15 8.35 1.25 6 1.25C4.4 1.25 3 2.25 2.3 3.75"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TourRefreshButton(props: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      className={cn(
        'grid h-7.5 w-7.5 cursor-pointer place-items-center rounded-md',
        'border-neutral-000/10 hover:border-neutral-000/24 text-neutral-000 border transition',
        'focus-visible:outline-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
      )}
      {...props}
    >
      <RefreshIcon />
    </button>
  )
}

function BrowserChrome() {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5">
      <div
        className="flex shrink-0 items-center gap-1.5"
        aria-hidden
      >
        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/10 bg-[#0e1015]/80 px-3 py-1.5">
        <svg
          className="size-3.5 shrink-0 text-neutral-500"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M8 1a5 5 0 0 0-5 5v2H2.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H13V6a5 5 0 0 0-5-5Zm-4 7V6a4 4 0 1 1 8 0v2H4Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-caption truncate text-neutral-400">
          {CONSOLE_DEMO_URL}
        </span>
      </div>
    </div>
  )
}

export default function WorkbenchDemoFrame({
  className,
}: WorkbenchDemoFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [step, setStep] = useState(0)
  const [total, setTotal] = useState(WORKBENCH_DEMO_TOUR_TOTAL)
  const [loaded, setLoaded] = useState(false)
  const [fromIframe, setFromIframe] = useState<TourStepMessage | null>(null)
  const statusId = useId()

  const iframeMatchesStep = fromIframe?.step === step
  const stepTitle =
    iframeMatchesStep && fromIframe.title
      ? fromIframe.title
      : getWorkbenchDemoTourTitle(step)
  const barFromConfig = getWorkbenchDemoTourBar(step)
  const barVerb =
    iframeMatchesStep && fromIframe.barVerb
      ? fromIframe.barVerb
      : barFromConfig.verb
  const barRest =
    iframeMatchesStep && fromIframe.barRest
      ? fromIframe.barRest
      : barFromConfig.rest
  const srCaption =
    iframeMatchesStep && fromIframe.srCaption
      ? fromIframe.srCaption
      : getWorkbenchDemoTourSrCaption(step)
  const onFirstStep = step <= 0
  const onLastStep = step >= total - 1

  const postAdvance = useCallback((nextStep: number) => {
    const win = iframeRef.current?.contentWindow
    if (!win) return
    win.postMessage(
      { type: 'workbench-demo-advance', step: nextStep },
      window.location.origin
    )
  }, [])

  const goToStep = useCallback(
    (nextStep: number) => {
      const clamped = Math.max(0, Math.min(nextStep, total - 1))
      setStep(clamped)
      postAdvance(clamped)
    },
    [postAdvance, total]
  )

  const handleNext = useCallback(() => {
    goToStep(step + 1)
  }, [goToStep, step])

  const resetDemo = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    iframe.src = '/workbench-demo/index.html'
    setStep(0)
    setTotal(WORKBENCH_DEMO_TOUR_TOTAL)
    setFromIframe(null)
    setLoaded(false)
  }, [])

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return

      if (event.data?.type === 'workbench-demo-book-demo') {
        activateHeroBookDemoCta()
        return
      }

      if (event.data?.type !== 'workbench-demo-step') return

      const next = Number(event.data.step)
      const nextTotal = Number(event.data.total)
      const maxTotal =
        Number.isFinite(nextTotal) && nextTotal > 0
          ? nextTotal
          : WORKBENCH_DEMO_TOUR_TOTAL
      if (Number.isFinite(next) && next >= 0 && next < maxTotal) {
        setStep(next)
      }
      if (Number.isFinite(nextTotal) && nextTotal > 0) {
        setTotal(nextTotal)
      }

      setFromIframe({
        step: Number.isFinite(next) ? next : 0,
        total: Number.isFinite(nextTotal)
          ? nextTotal
          : WORKBENCH_DEMO_TOUR_TOTAL,
        title: typeof event.data.title === 'string' ? event.data.title : null,
        barVerb:
          typeof event.data.barVerb === 'string' ? event.data.barVerb : null,
        barRest:
          typeof event.data.barRest === 'string' ? event.data.barRest : null,
        srCaption:
          typeof event.data.srCaption === 'string'
            ? event.data.srCaption
            : typeof event.data.caption === 'string'
              ? event.data.caption
              : null,
      })
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <section
      className={cn(className)}
      aria-label="Interactive workbench walkthrough"
    >
      <div
        className={styles.tourCaption}
        role="region"
        aria-labelledby={statusId}
      >
        <p
          id={statusId}
          className="text-body-small text-neutral-000 mx-auto max-w-3xl leading-snug"
        >
          Step {step + 1} of {total} · {barVerb} {barRest}
        </p>
        <p
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {stepTitle}. {srCaption}
        </p>
      </div>

      <div className={styles.showcaseFrame}>
        <div className={styles.browser}>
          <div className={styles.browserBar}>
            <BrowserChrome />
          </div>
          <div className={styles.browserViewport}>
            {!loaded && (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center bg-[#171a21] text-neutral-300"
                style={{ height: DEMO_VIEWPORT_HEIGHT }}
                aria-live="polite"
              >
                Loading demo…
              </div>
            )}
            <iframe
              ref={iframeRef}
              src="/workbench-demo/index.html"
              title="Plural workbench interactive demo"
              style={{
                height: DEMO_VIEWPORT_HEIGHT,
                maxHeight: 'min(68vh, 676px)',
              }}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </div>

      <nav
        className={styles.tourNav}
        aria-label={`Walkthrough controls, step ${step + 1} of ${total}`}
      >
        <PrevButton
          type="button"
          disabled={!loaded || onFirstStep}
          onClick={() => goToStep(step - 1)}
          aria-label="Previous step"
        />
        <div
          className={styles.tourDots}
          role="group"
          aria-label={`Progress, step ${step + 1} of ${total}`}
        >
          {Array.from({ length: total }, (_, i) => {
            const title = getWorkbenchDemoTourTitle(i)
            const isCurrent = i === step
            return (
              <button
                key={title}
                type="button"
                disabled={!loaded}
                onClick={() => goToStep(i)}
                aria-label={`Go to step ${i + 1} of ${total}: ${title}`}
                aria-current={isCurrent ? 'step' : undefined}
                className={cn(
                  'focus-visible:outline-primary-600 h-1.5 w-6 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  isCurrent ? 'bg-primary-600' : 'bg-white/20 hover:bg-white/35'
                )}
              />
            )
          })}
        </div>
        {onLastStep ? (
          <TourRefreshButton
            type="button"
            disabled={!loaded}
            onClick={resetDemo}
            aria-label="Restart demo"
          />
        ) : (
          <NextButton
            type="button"
            disabled={!loaded}
            onClick={handleNext}
            aria-label="Next step"
          />
        )}
      </nav>
    </section>
  )
}
