import { useCallback } from 'react'

import { PAGE_HEADER_ID } from '../PageHeader'

export const useScrollTo = (
  idOrElt: string | HTMLElement,
  options: ScrollToOptions & { offset?: number } = {}
) => {
  const { offset, ...scrollToOptions } = options

  return useCallback(() => {
    const headerHeight =
      document.getElementById(PAGE_HEADER_ID)?.getBoundingClientRect().height ??
      0
    const scrollOffset = headerHeight + (offset ?? 0)

    let elt: string | HTMLElement | null = idOrElt

    if (typeof idOrElt === 'string') {
      elt = document.getElementById(idOrElt)
    }
    if (!(elt instanceof HTMLElement)) {
      return
    }

    const top = elt.getBoundingClientRect()?.top

    if (top) {
      window.scrollTo({
        top: top + window.scrollY - scrollOffset,
        behavior: 'smooth',
        ...scrollToOptions,
      })
    }
  }, [idOrElt, offset, scrollToOptions])
}
