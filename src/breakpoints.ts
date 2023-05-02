export type Breakpoint =
  | ''
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'twoColumn'
  | 'fullHeader'
  | 'threeColumn'
  | 'maxWidth'

export const breakpoints: Record<Breakpoint, number> = {
  '': 0,
  sm: 640,
  md: 768,
  lg: 1000,
  xl: 1280,
  '2xl': 1588,
  twoColumn: 1000,
  fullHeader: 1000,
  threeColumn: 1280,
  maxWidth: 1588,
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
