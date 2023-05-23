export type Breakpoint =
  | ''
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'maxWidth'
  | 'fullHeader'
  | 'fullHeaderWide'
  | 'fullHeaderSocial'

export const breakpoints: Record<Breakpoint, number> = {
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
}

export const mqs = Object.fromEntries(
  Object.entries(breakpoints).map(([key, val]) => [
    key,
    `@media screen and (min-width: ${val}px)`,
  ])
) as Record<Breakpoint, string>

export function breakpointIsGreaterOrEqual(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] >= breakpoints[b]
}

export function breakpointIsLessThan(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] < breakpoints[b]
}
