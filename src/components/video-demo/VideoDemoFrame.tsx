'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { cn } from '@/utils/cn'

import styles from './VideoDemoFrame.module.css'
import {
  VIDEO_DEMO_AUTOPLAY_MS,
  VIDEO_DEMO_TABS,
  type VideoDemoTab,
} from './videoDemoTabs'

type VideoDemoFrameProps = {
  className?: string
}

function IncidentIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M8 1.75 14.25 13.5H1.75L8 1.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.5v3.25M8 11.5h.01"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CveIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M8 1.75c2.2 1.1 3.75 1.35 5.25 1.35v4.4c0 3.05-2.05 5.2-5.25 6.25-3.2-1.05-5.25-3.2-5.25-6.25v-4.4C4.25 3.1 5.8 2.85 8 1.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M5.75 8.1 7.2 9.55 10.35 6.4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TicketIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M2.5 5.25A1.75 1.75 0 0 1 4.25 3.5h7.5A1.75 1.75 0 0 1 13.5 5.25v1.1a1.35 1.35 0 0 0 0 2.3v1.1A1.75 1.75 0 0 1 11.75 11.5h-7.5A1.75 1.75 0 0 1 2.5 9.75v-1.1a1.35 1.35 0 0 0 0-2.3v-1.1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M6 6.25h4M6 9.75h4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SpendIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M3.25 11.5 6.5 8.25l2.25 2.25 4-4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 6.5h2.5v2.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const TAB_ICONS: Record<
  VideoDemoTab['id'],
  (props: React.ComponentProps<'svg'>) => React.ReactElement
> = {
  'incident-response': IncidentIcon,
  'cve-remediation': CveIcon,
  'ticket-integration': TicketIcon,
  'optimize-spend': SpendIcon,
}

export default function VideoDemoFrame({ className }: VideoDemoFrameProps) {
  const labelId = useId()
  const initialIndex = Math.max(
    0,
    VIDEO_DEMO_TABS.findIndex((tab) => tab.embedUrl)
  )
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const [progressKey, setProgressKey] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  // Keep visited embeds mounted so tab switches don't tear down iframes
  // (Supademo can mutate the DOM and trigger removeChild errors on unmount).
  const [mountedTabs, setMountedTabs] = useState(() => new Set([initialIndex]))
  const reduceMotionRef = useRef(false)

  const goToTab = useCallback((index: number, fromUser = false) => {
    setActiveIndex(index)
    setMountedTabs((prev) => {
      if (prev.has(index)) return prev
      const next = new Set(prev)
      next.add(index)
      return next
    })
    setProgressKey((key) => key + 1)
    if (fromUser) setAutoplay(true)
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduceMotionRef.current = query.matches
    const onChange = () => {
      reduceMotionRef.current = query.matches
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!autoplay || reduceMotionRef.current) return

    const timeout = window.setTimeout(() => {
      goToTab((activeIndex + 1) % VIDEO_DEMO_TABS.length)
    }, VIDEO_DEMO_AUTOPLAY_MS)

    return () => window.clearTimeout(timeout)
  }, [activeIndex, autoplay, goToTab, progressKey])

  return (
    <div
      className={cn(styles.showcaseFrame, className)}
      style={
        {
          '--video-demo-autoplay-ms': `${VIDEO_DEMO_AUTOPLAY_MS}ms`,
          // 1 = natural size; >1 zooms the Supademo UI (crops edges)
          '--demo-scale': 1.05,
        } as React.CSSProperties
      }
    >
      <div className={styles.demoViewport}>
        {VIDEO_DEMO_TABS.map((tab, index) => {
          if (!mountedTabs.has(index)) return null

          const isActive = index === activeIndex

          return (
            <div
              key={tab.id}
              className={cn(
                styles.demoPanel,
                !isActive && styles.demoPanelHidden
              )}
              role="tabpanel"
              id={isActive ? `${labelId}-panel` : undefined}
              aria-labelledby={`${labelId}-tab-${tab.id}`}
              aria-hidden={!isActive}
              inert={!isActive ? true : undefined}
            >
              {tab.embedUrl ? (
                <iframe
                  src={tab.embedUrl}
                  title={tab.title}
                  loading="lazy"
                  allow="clipboard-write"
                  allowFullScreen
                />
              ) : (
                <div className={styles.placeholder}>
                  <div>
                    <p className="text-neutral-000 text-lg font-medium">
                      {tab.label}
                    </p>
                    <p className="text-neutral-000/60 mt-2 text-sm">
                      Supademo embed coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <nav
        className={styles.tabNav}
        role="tablist"
        aria-label="Product demos"
      >
        {VIDEO_DEMO_TABS.map((tab, index) => {
          const isActive = index === activeIndex
          const Icon = TAB_ICONS[tab.id]

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${labelId}-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`${labelId}-panel`}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                styles.tabButton,
                isActive && styles.tabButtonActive
              )}
              onClick={() => goToTab(index, true)}
            >
              <span
                className={styles.tabProgressTrack}
                aria-hidden={!isActive}
              >
                <span
                  key={isActive ? progressKey : `${tab.id}-idle`}
                  className={cn(
                    styles.tabProgressFill,
                    isActive && autoplay && styles.tabProgressFillActive
                  )}
                  role={isActive ? 'progressbar' : undefined}
                  aria-valuemin={isActive ? 0 : undefined}
                  aria-valuemax={isActive ? 100 : undefined}
                  aria-label={
                    isActive ? `${tab.label} autoplay progress` : undefined
                  }
                />
              </span>
              <span className={styles.tabLabel}>
                {Icon ? (
                  <span className={styles.tabIcon}>
                    <Icon />
                  </span>
                ) : null}
                {tab.label}
              </span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
