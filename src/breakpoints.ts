import { type Entries } from 'type-fest'

export const breakpointsBase = {
  // First breakpoints in order will be picked by useBreakpoint()
  '': 0,
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1000,
  xl: 1280,
  xxl: 1440,
  maxWidth: 1920,
} as const satisfies Record<string, number>

export const breakpoints = {
  ...breakpointsBase,
  // Additional breakpoints after maxWidth won't be selected by useBreakpoint()
  fullHeader: breakpointsBase.lg,
  fullHeaderWide: breakpointsBase.lg + 60,
  fullHeaderSocial: breakpointsBase.xl,
  columns: breakpointsBase.lg,
}

export type Breakpoints = typeof breakpoints
export type Breakpoint = keyof Breakpoints

type MQ<
  K extends string,
  T extends number
> = `@media screen and (min-width: ${T}px) /* ${K} */`

type MQs<BPs extends Record<string, number>> = {
  [K in keyof BPs]: MQ<K, BPs[K]>
}

export const mqs = Object.fromEntries(
  (Object.entries(breakpoints) as Entries<typeof breakpoints>).map(
    ([key, val]) => [
      key,
      `@media screen and (min-width: ${val}px) /* ${key} */`,
    ]
  )
) as MQs<Breakpoints>

export function breakpointIsGreaterOrEqual(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] >= breakpoints[b]
}

export function breakpointIsLessThan(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] < breakpoints[b]
}
