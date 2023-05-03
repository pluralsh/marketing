export type Breakpoint =
  | ''
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'fullHeader'
  | 'maxWidth'
  | 'showSocial'

export const breakpoints: Record<Breakpoint, number> = {
  '': 0,
  sm: 640,
  md: 768,
  lg: 1000,
  xl: 1280,
  xxl: 1440,
  maxWidth: 1920,
  fullHeader: 1000,
  showSocial: 1280,
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
