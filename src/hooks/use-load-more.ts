import type {
  BuildQueryURLArgs,
  Client,
  PrismicDocument,
  Query,
} from '@prismicio/client'

import { useEffect, useState } from 'react'

import { createClient } from '@/utils/prismicio'

type PrismicClientHookState = 'idle' | 'loading' | 'loaded' | 'failed'

export type UseLoadMoreProps<
  TDocument extends PrismicDocument = PrismicDocument,
  TDocumentType extends TDocument['type'] = TDocument['type'],
  Q extends Query<TDocument> = Query<TDocument>,
> = {
  initialDocuments: Q
  resetDeps?: React.DependencyList
  prismic: {
    documentType: TDocumentType
    params?: Partial<BuildQueryURLArgs>
  }
}

type UseLoadMoreResult<TDocument extends PrismicDocument = PrismicDocument> = {
  results: TDocument[]
  page: number
  end: boolean
  totalResults: number
  state: PrismicClientHookState
  error?: Error
  loadMore: () => void
  reset: () => void
}

export function useLoadMore<
  TDocument extends PrismicDocument = PrismicDocument,
  TDocumentType extends TDocument['type'] = TDocument['type'],
  Q extends Query<TDocument> = Query<TDocument>,
>({
  initialDocuments,
  resetDeps = [],
  prismic,
}: UseLoadMoreProps<
  TDocument,
  TDocumentType,
  Q
>): UseLoadMoreResult<TDocument> {
  const client: Client<TDocument> = createClient()
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(
    initialDocuments.total_results_size
  )
  const [loadedDocuments, setLoadedDocuments] = useState(
    initialDocuments.results
  )
  const [state, setState] = useState<PrismicClientHookState>('idle')
  const [error, setError] = useState<Error>()
  const [end, setEnd] = useState(
    initialDocuments.results_size === initialDocuments.total_results_size
  )

  const fetch = (page: number) =>
    client.getByType<TDocument>(prismic.documentType, {
      ...prismic.params,
      page,
    })

  const loadMore = async (_page?: number) => {
    if (end && typeof page === 'undefined') {
      setState('loaded')
      return
    }

    try {
      const nextPage = _page ?? page + 1
      setPage(nextPage)

      setState('loading')
      const documents = await fetch(nextPage)
      setState('loaded')

      setTotalResults(documents.total_results_size)
      setEnd(documents.next_page === null)
      setLoadedDocuments((prev) =>
        nextPage === 1 ? documents.results : [...prev, ...documents.results]
      )
    } catch (err) {
      setState('failed')
      setError(err as Error)
    }
  }

  const reset = () => {
    setPage(1)
    setTotalResults(initialDocuments.total_results_size)
    setLoadedDocuments(initialDocuments?.results ?? [])
    setEnd(
      initialDocuments?.results_size === initialDocuments?.total_results_size
    )
    setState('idle')
    setError(undefined)
  }

  useEffect(() => {
    if (resetDeps.some((dep) => !!dep)) loadMore(1)
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...resetDeps])

  return {
    results: loadedDocuments,
    page,
    end,
    totalResults,
    state,
    error,
    loadMore,
    reset,
  }
}
