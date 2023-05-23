import {
  type ComponentProps,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { RepositoryCard, usePrevious } from '@pluralsh/design-system'
import Link from 'next/link'

import drop from 'lodash/drop'

import { breakpointIsGreaterOrEqual } from '@src/breakpoints'
import { type MinRepo } from '@src/data/getRepos'

import { useBreakpoint } from './BreakpointProvider'
import { ResponsivePageNavigation } from './ResponsivePageNavigation'

function getPaginatedItems<T>(items: T[], pageIndex = 0, pageSize = 24) {
  const offset = pageIndex * pageSize
  const pageItems = drop(items, offset).slice(0, pageSize)

  return {
    pageIndex,
    pageSize,
    total: items.length,
    totalPages: Math.ceil(items.length / pageSize),
    pageItems,
  }
}

export function RepoCardList({
  repositories,
  repoProps = {},
  urlParams = '',
  size = 'small',
  pageSize = 16,
}: {
  repositories: MinRepo[]
  repoProps?: ComponentProps<typeof RepositoryCard>
  urlParams?: string
  size?: ComponentProps<typeof RepositoryCard>['size']
  pageSize?: number
}) {
  const [cPI, setCurPageIndex] = useState(0)
  const curPageIndex = cPI ?? 0
  const lastPageIndex = usePrevious(curPageIndex) ?? 0
  const { pageItems, totalPages } = useMemo(
    () => getPaginatedItems(repositories, curPageIndex, pageSize),
    [curPageIndex, pageSize, repositories]
  )
  const searchTopRef = useRef<HTMLDivElement>(null)
  const breakpoint = useBreakpoint()

  const scrollOffset = breakpointIsGreaterOrEqual(breakpoint, 'md') ? 130 : 200

  useEffect(() => {
    if (curPageIndex === lastPageIndex) {
      return
    }
    const top = searchTopRef.current?.getBoundingClientRect()?.top

    if (top) {
      window.scrollTo({
        top: top + window.scrollY - scrollOffset,
        behavior: 'smooth',
      })
    }
  }, [curPageIndex, lastPageIndex])

  useEffect(() => {
    setCurPageIndex(0)
  }, [repositories])

  return (
    <div ref={searchTopRef}>
      <div className="grid grid-cols-1 gap-medium md:grid-cols-2 xl:grid-cols-3">
        {pageItems?.map((repository) => (
          <RepositoryCard
            key={repository.id}
            as={Link}
            href={`/applications/${repository.name}${
              urlParams ? `?${urlParams}` : ''
            }`}
            color="text"
            textDecoration="none"
            width="100%"
            title={repository.name}
            imageUrl={(repository.darkIcon || repository.icon) ?? undefined}
            publisher={repository.publisher?.name}
            description={repository.description ?? undefined}
            tags={repository.tags?.flatMap((t) => t?.tag || [])}
            priv={repository.private ?? undefined}
            verified={repository.verified ?? undefined}
            trending={repository.trending ?? undefined}
            releaseStatus={repository.releaseStatus ?? undefined}
            size={size}
            {...repoProps}
          />
        ))}
      </div>
      <ResponsivePageNavigation
        className="mt-xxlarge"
        totalPages={totalPages}
        pageIndex={curPageIndex}
        setPageIndex={setCurPageIndex}
      />
    </div>
  )
}
