import videoDemoTabsConfig from './videoDemoTabs.json'

export type VideoDemoTab = {
  id: string
  label: string
  title: string
  embedUrl: string | null
}

export const VIDEO_DEMO_TABS = videoDemoTabsConfig.tabs as VideoDemoTab[]
export const VIDEO_DEMO_AUTOPLAY_MS = videoDemoTabsConfig.autoplayMs
export const VIDEO_DEMO_TAB_COUNT = VIDEO_DEMO_TABS.length
