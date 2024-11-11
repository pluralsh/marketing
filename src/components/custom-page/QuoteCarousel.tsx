import { type QuoteCarouselComponentFragment } from '@src/generated/graphqlDirectus'
import { normalizeQuotes } from '@src/utils/normalizeQuotes'

import { QuoteSection } from '../page-sections/QuoteSection'

export function QuoteCarousel({
  title,
  quotes,
}: QuoteCarouselComponentFragment) {
  return (
    <QuoteSection
      title={title ?? ''}
      quotes={normalizeQuotes(quotes) ?? []}
    />
  )
}
