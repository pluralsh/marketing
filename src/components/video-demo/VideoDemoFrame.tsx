'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { cn } from '@/utils/cn'

import {
  CostManagementIcon,
  TicketIcon,
  WarningIcon,
  WarningShieldIcon,
} from './consoleIcons'
import styles from './VideoDemoFrame.module.css'
import {
  VIDEO_DEMO_TABS,
  getTabDurationMs,
  type VideoDemoTab,
} from './videoDemoTabs'

type VideoDemoFrameProps = {
  className?: string
}

const TAB_ICONS: Record<
  VideoDemoTab['id'],
  (props: React.ComponentProps<'svg'>) => React.ReactElement
> = {
  'incident-response': WarningIcon,
  'cve-remediation': WarningShieldIcon,
  'ticket-integration': TicketIcon,
  'optimize-spend': CostManagementIcon,
}

export default function VideoDemoFrame({ className }: VideoDemoFrameProps) {
  const labelId = useId()
  const initialIndex = Math.max(
    0,
    VIDEO_DEMO_TABS.findIndex((tab) => tab.embedUrl)
  )
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const [progressKey, setProgressKey] = useState(0)
  // Bump per-tab to remount Supademo when revisiting (no embed restart API).
  const [tabPlaybackKeys, setTabPlaybackKeys] = useState<
    Record<string, number>
  >({})
  // Keep visited embeds mounted so tab switches don't tear down iframes
  // (Supademo can mutate the DOM and trigger removeChild errors on unmount).
  const [mountedTabs, setMountedTabs] = useState(() => new Set([initialIndex]))
  const mountedTabsRef = useRef(mountedTabs)
  mountedTabsRef.current = mountedTabs

  const activeTab = VIDEO_DEMO_TABS[activeIndex]
  const tabDurationMs = getTabDurationMs(activeTab)

  const goToTab = useCallback((index: number) => {
    const tab = VIDEO_DEMO_TABS[index]
    if (mountedTabsRef.current.has(index)) {
      setTabPlaybackKeys((keys) => ({
        ...keys,
        [tab.id]: (keys[tab.id] ?? 0) + 1,
      }))
    }
    setActiveIndex(index)
    setProgressKey((key) => key + 1)
    setMountedTabs((prev) => {
      if (prev.has(index)) return prev
      const next = new Set(prev)
      next.add(index)
      return next
    })
  }, [])

  // Railway-style: fill matches Supademo autoplay length, then advance.
  // Timer (not animationend) so advance is reliable across browsers.
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      goToTab((activeIndex + 1) % VIDEO_DEMO_TABS.length)
    }, tabDurationMs)

    return () => window.clearTimeout(timeout)
  }, [activeIndex, progressKey, goToTab, tabDurationMs])

  return (
    <div
      className={cn(styles.showcaseFrame, className)}
      style={
        {
          '--video-demo-tab-ms': `${tabDurationMs}ms`,
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
              id={`${labelId}-panel-${tab.id}`}
              aria-labelledby={`${labelId}-tab-${tab.id}`}
              aria-hidden={!isActive}
              inert={!isActive ? true : undefined}
            >
              {tab.embedUrl ? (
                <iframe
                  key={`${tab.id}-${tabPlaybackKeys[tab.id] ?? 0}`}
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
              aria-controls={`${labelId}-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                styles.tabButton,
                isActive && styles.tabButtonActive
              )}
              onClick={() => goToTab(index)}
            >
              {isActive ? (
                <span
                  key={progressKey}
                  className={styles.tabProgressFill}
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${tab.label} demo progress`}
                />
              ) : null}
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
