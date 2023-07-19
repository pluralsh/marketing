import { type QuoteListFragment } from '@src/generated/graphqlDirectus'

import { notNil } from './typescript'

export function normalizeQuotes<T extends QuoteListFragment>(
  quotes: T | null | undefined
) {
  return quotes?.items?.map((q) => q?.item).filter(notNil) || null
}
