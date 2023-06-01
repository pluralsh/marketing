import { type Entries } from 'type-fest'

export const breakpoints = {
  // First breakpoints in order will be picked by useBreakpoint()
  '': 0,
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1000,
  xl: 1280,
  xxl: 1440,
  maxWidth: 1920,
  // Additional breakpoints after maxWidth won't be selected by useBreakpoint()
  fullHeader: 1000,
  fullHeaderWide: 1060,
  fullHeaderSocial: 1280,
} as const satisfies Record<string, number>

export type Breakpoints = typeof breakpoints
export type Breakpoint = keyof Breakpoints

type MQ<T extends number> = `@media screen and (min-width: ${T}px)`

type MQs<BPs extends Record<string, number>> = {
  [K in keyof BPs]: MQ<BPs[K]>
}

export const mqs = Object.fromEntries(
  (Object.entries(breakpoints) as Entries<typeof breakpoints>).map(
    ([key, val]) => [key, `@media screen and (min-width: ${val}px)`]
  )
) as MQs<Breakpoints>

export function breakpointIsGreaterOrEqual(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] >= breakpoints[b]
}

export function breakpointIsLessThan(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] < breakpoints[b]
}
