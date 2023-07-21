import { type Maybe } from 'graphql/jsutils/Maybe'

import { type QuoteListFragment } from '@src/generated/graphqlDirectus'

import { notNil } from './typescript'

export type M2mList<ItemType> = Maybe<{
  items?: Maybe<Maybe<{ item?: Maybe<ItemType> }>[]>
}>

export function normalizeM2mItems<I>(itemList: M2mList<I>): I[] | null {
  return itemList?.items?.map((i) => i?.item).filter(notNil) || null
}

export function normalizeQuotes<T extends QuoteListFragment>(
  quotes: T | null | undefined
) {
  return normalizeM2mItems(quotes)
}
