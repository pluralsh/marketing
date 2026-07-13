'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { useRouter } from 'next/navigation'
import {
  SimulatorManager,
  StateEventType,
  disableEventHandler,
  getDefaultMessage,
  onClickHandler,
  simulatorClass,
  simulatorRootClass,
} from '@prismicio/simulator/kit'
import { compressToEncodedURIComponent } from 'lz-string'

const STATE_PARAMS_KEY = 'state'
const simulatorManager = new SimulatorManager()

type SliceSimulatorClientProps = {
  children: ReactNode
  /** Computed on the server from searchParams so SSR matches hydration. */
  hasSlices: boolean
  background?: string | null
  zIndex?: number | null
  className?: string
}

/**
 * Drop-in fix for @slicemachine/adapter-next's SliceSimulator, which reads
 * `window` during render and causes hydration mismatches on #root.
 */
export default function SliceSimulatorClient({
  children,
  hasSlices,
  background = 'none',
  zIndex,
  className,
}: SliceSimulatorClientProps) {
  const [message, setMessage] = useState(() => getDefaultMessage())
  const router = useRouter()

  useEffect(() => {
    simulatorManager.state.on(
      StateEventType.Slices,
      (newSlices) => {
        const url = new URL(window.location.href)
        url.searchParams.set(
          STATE_PARAMS_KEY,
          compressToEncodedURIComponent(JSON.stringify(newSlices))
        )

        window.history.replaceState(null, '', url)
        setTimeout(() => router.refresh(), 0)
      },
      'simulator-slices'
    )
    simulatorManager.state.on(
      StateEventType.Message,
      (newMessage) => setMessage(newMessage),
      'simulator-message'
    )

    simulatorManager.init()

    return () => {
      simulatorManager.state.off(StateEventType.Slices, 'simulator-slices')
      simulatorManager.state.off(StateEventType.Message, 'simulator-message')
    }
  }, [router])

  return (
    <div
      className={[simulatorClass, className].filter(Boolean).join(' ')}
      style={{
        zIndex: zIndex ?? undefined,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        background: background ?? undefined,
      }}
    >
      {message ? (
        <article dangerouslySetInnerHTML={{ __html: message }} />
      ) : hasSlices ? (
        <div
          id="root"
          className={simulatorRootClass}
          onClickCapture={onClickHandler as unknown as React.MouseEventHandler}
          onSubmitCapture={
            disableEventHandler as unknown as React.FormEventHandler
          }
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}
