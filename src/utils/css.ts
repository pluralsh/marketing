/**
 * Returns the value of a Tailwind breakpoint.
 * @param name The name of the breakpoint.
 * @param asNumber Whether to return the value as a number or string (string includes units).
 * @returns The value of the Tailwind breakpoint.
 */
export function getBreakpoint(name: string, asNumber: true): number
export function getBreakpoint(name: string, asNumber?: false): string
export function getBreakpoint(
  name: string,
  asNumber?: boolean
): string | number {
  const breakpointValue =
    typeof window !== 'undefined'
      ? getComputedStyle(document.documentElement)
          .getPropertyValue(`--breakpoint-${name}`)
          ?.trim()
      : '0'

  if (asNumber) {
    return Number.parseInt(breakpointValue)
  }

  return breakpointValue
}
