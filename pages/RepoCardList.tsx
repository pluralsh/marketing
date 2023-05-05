import {
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
  useMemo,
  useState,
} from 'react'

import {
  Button,
  CaretLeftIcon,
  CaretRightIcon,
  RepositoryCard,
} from '@pluralsh/design-system'
import Link from 'next/link'

import classNames from 'classnames'
import drop from 'lodash/drop'
import styled, { useTheme } from 'styled-components'

import { mqs } from '@src/breakpoints'
import { type MinRepo } from '@src/data/getRepos'

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

function PageButton({ selected, ...props }) {
  const theme = useTheme()

  return (
    <Button
      secondary
      minWidth={40}
      backgroundColor={
        selected ? theme.colors['fill-one-selected'] : 'transparent'
      }
      {...{
        '&:hover': {
          backgroundColor: selected
            ? theme.colors['fill-one-hover']
            : theme.colors['fill-zero-hover'],
        },
      }}
      {...props}
    />
  )
}

export function RepoCardList({
  repositories,
  repoProps = {},
  urlParams = '',
  size = 'small',
  pageSize = 24,
}: {
  repositories: MinRepo[]
  repoProps?: ComponentProps<typeof RepositoryCard>
  urlParams?: string
  size?: ComponentProps<typeof RepositoryCard>['size']
  pageSize: number
}) {
  const [pageIndex, setPageIndex] = useState(0)
  const { pageItems, totalPages } = useMemo(
    () => getPaginatedItems(repositories, pageIndex, pageSize),
    [pageIndex, pageSize, repositories]
  )

  return (
    <div>
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
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </div>
  )
}

const ResponsivePageNavigation = styled(ResponsivePageNavigationUnstyled)(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: theme.spacing.xlarge,
    '&._small': {
      gap: theme.spacing.xsmall,
    },
    '&._medium': {
      display: 'none',
    },
    [mqs.md]: {
      '&._medium': {
        display: 'flex',
      },
      '&._small': {
        display: 'none',
      },
    },
  })
)

type PageNavigationProps = {
  variant?: 'small'
  totalPages: number
  pageIndex: number
  setPageIndex: Dispatch<SetStateAction<number>>
  className?: string
}

function ResponsivePageNavigationUnstyled(props: PageNavigationProps) {
  return (
    <>
      <PageNavigation
        variant="small"
        {...props}
      />
      <PageNavigation {...props} />
    </>
  )
}

function PageNavigation({
  variant,
  totalPages,
  pageIndex,
  setPageIndex,
  className,
}: PageNavigationProps) {
  const maxPageButtons = variant === 'small' ? 7 : 7
  const pages = Array.from({ length: totalPages }, (_, i) => i)
  const firstPages = pages.slice(0, 1)
  const lastPages = pages.slice(-1)
  // let middlePages = pages
  //   .slice(firstPages.length, -lastPages.length)

  //   console.log('middlePages f', middlePages)

  const middlePages = pages.slice(
    Math.max(1, pageIndex - 1),
    Math.min(totalPages - 1, pageIndex + 2)
  )

  console.log('pages', pages)
  console.log('firstPages', firstPages)
  console.log('lastPages', lastPages)
  console.log('middlePages', middlePages)

  return (
    <div
      className={classNames(className, {
        _small: variant === 'small',
        _medium: variant !== 'small',
      })}
    >
      <Button
        disabled={pageIndex === 0}
        startIcon={variant === 'small' ? undefined : <CaretLeftIcon />}
        tertiary
        onClick={() => {
          setPageIndex(Math.max(0, pageIndex - 1))
        }}
        {...(variant === 'small'
          ? {
              small: true,
              padding: 0,
              width: 32,
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
              'aria-label': 'Previous',
            }
          : {})}
      >
        {variant === 'small' ? <CaretLeftIcon /> : 'Previous'}
      </Button>
      <div className="flex flex-row gap-small">
        {firstPages.map((i) => (
          <PageButton
            small={variant === 'small' ? true : undefined}
            selected={i === pageIndex}
            onClick={() => {
              setPageIndex(i)
            }}
          >
            {i + 1}
          </PageButton>
        ))}
        {totalPages > maxPageButtons ? (
          <>
            {middlePages[0] !== firstPages[firstPages.length - 1] + 1 && (
              <div className="flex content-center items-center">···</div>
            )}
            {middlePages.map((i) => (
              <PageButton
                small={variant === 'small' ? true : undefined}
                selected={i === pageIndex}
                onClick={() => {
                  setPageIndex(i)
                }}
              >
                {i + 1}
              </PageButton>
            ))}
            {lastPages[0] !== middlePages[middlePages.length - 1] + 1 && (
              <div className="flex content-center items-center">···</div>
            )}{' '}
          </>
        ) : null}
        {lastPages.map((i) => (
          <PageButton
            small={variant === 'small' ? true : undefined}
            selected={i === pageIndex}
            onClick={() => {
              setPageIndex(i)
            }}
          >
            {i + 1}
          </PageButton>
        ))}
      </div>
      <Button
        disabled={pageIndex === totalPages - 1}
        endIcon={variant === 'small' ? undefined : <CaretRightIcon />}
        secondary
        onClick={() => {
          setPageIndex(Math.min(totalPages - 1, pageIndex + 1))
        }}
        {...(variant === 'small'
          ? {
              small: true,
              padding: 0,
              width: 32,
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
              'aria-label': 'Next',
            }
          : {})}
      >
        {variant === 'small' ? <CaretRightIcon /> : 'Next'}
      </Button>
    </div>
  )
}
