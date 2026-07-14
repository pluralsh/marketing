import videoDemoTabsConfig from './videoDemoTabs.json'

export type VideoDemoTab = {
  id: string
  label: string
  title: string
  embedUrl: string | null
  /** Number of Supademo steps/slides in this demo. */
  slideCount: number
  /**
   * When the final slide is longer than stepDuration (e.g. embedded video),
   * Supademo uses the longer duration — mirror that here.
   */
  lastSlideDurationMs?: number
}

export const VIDEO_DEMO_TABS = videoDemoTabsConfig.tabs as VideoDemoTab[]
export const VIDEO_DEMO_TAB_COUNT = VIDEO_DEMO_TABS.length

/** Matches Supademo Autoplay → Step Duration (ms). */
export const VIDEO_DEMO_STEP_DURATION_MS = videoDemoTabsConfig.stepDurationMs
/** Matches Supademo Autoplay → Transition Delay (ms). */
export const VIDEO_DEMO_TRANSITION_DELAY_MS =
  videoDemoTabsConfig.transitionDelayMs

/**
 * Total tab fill / advance duration for a demo:
 * (N − 1) × stepDuration + lastSlideDuration + (N − 1) × transitionDelay
 * where lastSlideDuration defaults to stepDuration (or longer if video/voiceover).
 */
export function getTabDurationMs(tab: VideoDemoTab): number {
  const slides = Math.max(1, tab.slideCount)
  const lastSlideMs = Math.max(
    VIDEO_DEMO_STEP_DURATION_MS,
    tab.lastSlideDurationMs ?? VIDEO_DEMO_STEP_DURATION_MS
  )
  const priorSlidesMs = (slides - 1) * VIDEO_DEMO_STEP_DURATION_MS
  const transitionsMs = Math.max(0, slides - 1) * VIDEO_DEMO_TRANSITION_DELAY_MS

  return priorSlidesMs + lastSlideMs + transitionsMs
}
