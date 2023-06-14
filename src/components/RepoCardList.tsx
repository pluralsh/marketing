import {
  Children,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  EmptyState,
  StackCard as PluralStackCard,
  RepositoryCard,
  usePrevious,
} from '@pluralsh/design-system'
import Link from 'next/link'

import { drop, isEmpty } from 'lodash-es'

import { getStackRepos } from '@pages/marketplace'
import { breakpointIsGreaterOrEqual } from '@src/breakpoints'
import { type MinRepo, fakeDisplayName } from '@src/data/getRepos'
import { type MinStack } from '@src/data/getStacks'

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
  children,
  pageSize = 24,
}: {
  children: ReactNode
  pageSize?: number
}) {
  const [cPI, setCurPageIndex] = useState(0)
  const curPageIndex = cPI ?? 0
  const lastPageIndex = usePrevious(curPageIndex) ?? 0
  const childArray = useMemo(() => Children.toArray(children), [children])
  const { pageItems, totalPages } = useMemo(
    () => getPaginatedItems(childArray, curPageIndex, pageSize),
    [curPageIndex, pageSize, childArray]
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
  }, [curPageIndex, lastPageIndex, scrollOffset])

  useEffect(() => {
    setCurPageIndex(0)
  }, [childArray])

  return (
    <div ref={searchTopRef}>
      {isEmpty(pageItems) ? (
        <EmptyState
          width="100%"
          message="No apps match your search criteria"
        />
      ) : (
        <div className="grid grid-cols-1 gap-medium md:grid-cols-2 xl:grid-cols-6">
          {pageItems}
        </div>
      )}
      <ResponsivePageNavigation
        className="mt-xxlarge"
        totalPages={totalPages}
        pageIndex={curPageIndex}
        setPageIndex={setCurPageIndex}
      />
    </div>
  )
}

export function RepoCard({
  repository: repo,
  urlParams,
  wideFeatures = true,
  ...props
}: {
  repository: MinRepo
  urlParams?: string
  wideFeatures: boolean
}) {
  const featuredLabel = repo.trending ? 'Trending' : undefined

  return (
    <RepositoryCard
      className={
        featuredLabel && wideFeatures
          ? 'md:col-span-2 lg:col-span-1 xl:col-span-3'
          : 'xl:col-span-2'
      }
      variant="marketing"
      as={Link}
      href={`/applications/${repo.name}${urlParams ? `?${urlParams}` : ''}`}
      color="text"
      textDecoration="none"
      width="100%"
      title={fakeDisplayName(repo.name)}
      imageUrl={(repo.darkIcon || repo.icon) ?? undefined}
      publisher={repo.publisher?.name}
      description={repo.description ?? undefined}
      tags={repo.tags?.flatMap((t) => t?.tag || [])}
      priv={repo.private ?? undefined}
      verified={repo.verified ?? undefined}
      featuredLabel={featuredLabel}
      releaseStatus={repo.releaseStatus ?? undefined}
      size="small"
      {...props}
    />
  )
}

export function StackCard({
  stack,
  urlParams,
  ...props
}: {
  stack: MinStack
  urlParams?: string
  wideFeatures: boolean
}) {
  const apps = getStackRepos(stack)?.map((repo) => ({
    name: fakeDisplayName(repo.name),
    imageUrl: repo.darkIcon || repo.icon || '',
  }))

  return (
    <PluralStackCard
      className="xl:col-span-2"
      as={Link}
      href={`/stack/${stack.name}${urlParams ? `?${urlParams}` : ''}`}
      color="text"
      textDecoration="none"
      width="100%"
      title={stack.displayName || stack.name}
      description={stack.description ?? undefined}
      size="small"
      apps={apps}
      {...props}
    />
  )
}
