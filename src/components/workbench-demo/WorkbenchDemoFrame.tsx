'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

import { activateHeroBookDemoCta } from './bookDemoTarget'
import {
  WORKBENCH_DEMO_TOUR_STEPS,
  WORKBENCH_DEMO_TOUR_TOTAL,
  getWorkbenchDemoTourBar,
  getWorkbenchDemoTourSrCaption,
  getWorkbenchDemoTourTitle,
} from './workbenchDemoTour'

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

export default function WorkbenchDemoFrame({
  className,
}: WorkbenchDemoFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [step, setStep] = useState(0)
  const [total, setTotal] = useState(WORKBENCH_DEMO_TOUR_TOTAL)
  const [loaded, setLoaded] = useState(false)
  const [fromIframe, setFromIframe] = useState<TourStepMessage | null>(null)
  const progressId = useId()
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
  const onLastStep = step >= WORKBENCH_DEMO_TOUR_TOTAL - 1

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
      const clamped = Math.max(
        0,
        Math.min(nextStep, WORKBENCH_DEMO_TOUR_TOTAL - 1)
      )
      setStep(clamped)
      postAdvance(clamped)
    },
    [postAdvance]
  )

  const handleNext = useCallback(() => {
    goToStep(step + 1)
  }, [goToStep, step])

  const handleBack = useCallback(() => {
    goToStep(step - 1)
  }, [goToStep, step])

  const handleBookDemo = useCallback(() => {
    activateHeroBookDemoCta()
  }, [])

  const resetDemo = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    iframe.src = '/workbench-demo/index.html'
    setStep(0)
    setTotal(WORKBENCH_DEMO_TOUR_TOTAL)
    setFromIframe(null)
  }, [])

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return
      if (event.data?.type !== 'workbench-demo-step') return

      const next = Number(event.data.step)
      const nextTotal = Number(event.data.total)
      if (
        Number.isFinite(next) &&
        next >= 0 &&
        next < WORKBENCH_DEMO_TOUR_TOTAL
      ) {
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
    <div
      className={cn(
        'relative my-3 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_24px_80px_rgba(0,0,0,0.45)]',
        className
      )}
      role="region"
      aria-label="Interactive workbench walkthrough"
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-neutral-800/80 px-4 py-2.5">
        <p
          id={statusId}
          className="text-body-small min-w-0 flex-1 leading-snug text-neutral-300"
        >
          <span className="font-medium text-neutral-400 tabular-nums">
            Step {step + 1} of {total}
          </span>
          <span
            className="text-neutral-500"
            aria-hidden
          >
            {' '}
            ·{' '}
          </span>
          <strong className="text-neutral-000 font-semibold">{barVerb}</strong>
          <span> {barRest}</span>
        </p>
        <p
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {stepTitle}. {srCaption}
        </p>
        <div
          id={progressId}
          className="flex shrink-0 items-center gap-2"
          role="group"
          aria-label={`Walkthrough progress, step ${step + 1} of ${total}`}
        >
          {!onFirstStep ? (
            <Button
              type="button"
              variant="alt"
              size="small"
              onClick={handleBack}
              className="shrink-0"
            >
              Back
            </Button>
          ) : null}
          {Array.from({ length: total }, (_, i) => {
            const title = WORKBENCH_DEMO_TOUR_STEPS[i]?.title ?? `Step ${i + 1}`
            const isCurrent = i === step
            return (
              <button
                key={i}
                type="button"
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
          {onLastStep ? (
            <Button
              type="button"
              variant="alt"
              size="small"
              onClick={handleBookDemo}
              className="shrink-0"
            >
              Book a demo
            </Button>
          ) : (
            <Button
              type="button"
              variant="alt"
              size="small"
              onClick={handleNext}
              className="shrink-0"
            >
              Next
            </Button>
          )}
          <Button
            type="button"
            variant="alt"
            size="small"
            onClick={resetDemo}
          >
            Restart
          </Button>
        </div>
      </div>

      <div className="relative">
        {!loaded && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-900 text-neutral-300"
            aria-live="polite"
          >
            Loading demo…
          </div>
        )}
        <iframe
          ref={iframeRef}
          src="/workbench-demo/index.html"
          title="Plural workbench interactive demo"
          className="block w-full border-0"
          style={{ height: 'min(72vh, 680px)', minHeight: 520 }}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}
