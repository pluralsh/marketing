/** Contact slice anchor when hero CTA uses `#book-demo`. */
export const BOOK_DEMO_FORM_ID = 'book-demo'

export const HERO_BOOK_DEMO_CTA_ATTR = 'data-hero-book-demo-cta'

/** Reuse the hero Prismic CTA — same href, target, and navigation. */
export function activateHeroBookDemoCta(): void {
  document
    .querySelector<HTMLAnchorElement>(`[${HERO_BOOK_DEMO_CTA_ATTR}]`)
    ?.click()
}
