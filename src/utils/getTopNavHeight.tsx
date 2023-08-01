export function getTopNavHeight() {
  return Number(
    getComputedStyle(document.documentElement)
      ?.getPropertyValue('--top-nav-height')
      ?.replace(/[^0-9]/g, '') || 0
  )
}
