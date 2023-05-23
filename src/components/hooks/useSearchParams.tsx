import {
  type ReadonlyURLSearchParams,
  useSearchParams as useNextSearchParams,
} from 'next/navigation'
import { useRouter } from 'next/router'

export type SetSearchParams = (
  params:
    | ConstructorParameters<typeof URLSearchParams>[0]
    | ((params: URLSearchParams) => URLSearchParams)
) => void

export const useSearchParams = (): [
  ReadonlyURLSearchParams,
  SetSearchParams
] => {
  const router = useRouter()
  const searchParams = useNextSearchParams()

  return [
    searchParams,
    (p) => {
      const oldParams = new URLSearchParams(searchParams.toString())
      const newParams =
        typeof p === 'function' ? p(oldParams) : new URLSearchParams(p)

      router.replace({ ...router, query: newParams.toString() }, undefined, {
        shallow: true,
      })
    },
  ]
}
