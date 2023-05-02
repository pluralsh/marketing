import { type ComponentProps, useCallback, useState } from 'react'

import {
  BrowseAppsIcon,
  Button,
  Chip,
  Input,
  MagnifyingGlassIcon,
  RepositoryCard,
} from '@pluralsh/design-system'
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import {
  type ReadonlyURLSearchParams,
  useSearchParams as useNextSearchParams,
} from 'next/navigation'
import { useRouter } from 'next/router'

import { until } from '@open-draft/until'
import Fuse from 'fuse.js'
import isEmpty from 'lodash/isEmpty'
import orderBy from 'lodash/orderBy'
import upperFirst from 'lodash/upperFirst'

import { type Repo, getRepos, reposCache } from '@src/data/getRepos'

import { Subtitle } from '../src/components/Subtitle'

type PageProps = {
  repositories: Repo[]
}
const searchOptions = {
  keys: ['name', 'description', 'tags.tag'],
  threshold: 0.25,
}

type SetSearchParams = (
  params:
    | ConstructorParameters<typeof URLSearchParams>[0]
    | ((params: URLSearchParams) => URLSearchParams)
) => void

const useSearchParams = (): [ReadonlyURLSearchParams, SetSearchParams] => {
  const router = useRouter()
  const searchParams = useNextSearchParams()

  return [
    searchParams,
    (p) => {
      const oldParams = new URLSearchParams(searchParams.toString())
      const newParams =
        typeof p === 'function' ? p(oldParams) : new URLSearchParams(p)

      router.replace({ ...router, query: newParams.toString() })
    },
  ]
}

export function RepoCardList({
  repositories,
  repoProps = {},
  urlParams = '',
  size = 'small',
}: {
  repositories: Repo[]
  repoProps?: ComponentProps<typeof RepositoryCard>
  urlParams?: string
  size?: ComponentProps<typeof RepositoryCard>['size']
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-medium xl:gap-xlarge">
      {repositories?.map((repository) => (
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
  )
}

function FilterChip(props: ComponentProps<typeof Chip>) {
  return (
    <Chip
      flexShrink={0}
      tabIndex={0}
      closeButton
      clickable
      minHeight={32}
      {...props}
    />
  )
}

function FilterChips({
  categories,
  handleClearToken,
  tags,
  handleClearTokens,
  ...props
}: {
  categories: string[]
  handleClearToken: (key: any, value: any) => void
  tags: string[]
  handleClearTokens: () => void
} & ComponentProps<'div'>) {
  return (
    <div
      className="flex-wrap-wrap flex gap-small"
      {...props}
    >
      {categories.map((category) => (
        <FilterChip
          onClick={() => handleClearToken('category', category)}
          onKeyDown={(event) =>
            (event.key === 'Enter' || event.key === ' ') &&
            handleClearToken('category', category)
          }
        >
          {upperFirst(category)}
        </FilterChip>
      ))}
      {tags.map((tag) => (
        <FilterChip
          onClick={() => handleClearToken('tag', tag)}
          onKeyDown={(event) =>
            (event.key === 'Enter' || event.key === ' ') &&
            handleClearToken('tag', tag)
          }
        >
          {tag}
        </FilterChip>
      ))}
      <Button
        flexShrink={0}
        tertiary
        small
        onClick={() => handleClearTokens()}
      >
        Clear all
      </Button>
    </div>
  )
}

export default function Index({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = searchParams.getAll('category')
  const tags = searchParams.getAll('tag')
  const [search, setSearch] = useState('')
  const isFiltered = !isEmpty(categories) || !isEmpty(tags)

  const handleClearToken = useCallback(
    (key, value) => {
      setSearchParams((params) => {
        const newParams = params.getAll(key).filter((v) => v !== value)

        params.delete(key)
        newParams.forEach((p) => params.append(key, p))

        return params
      })
    },
    [setSearchParams]
  )

  const handleClearTokens = useCallback(() => {
    setSearchParams({})
  }, [setSearchParams])

  const handleClearFilters = useCallback(() => {
    setSearch('')
    handleClearTokens()
  }, [handleClearTokens])

  const { repositories } = props

  console.log('repos', props.repositories)
  console.log('props', props)

  const sortedRepositories = (
    orderBy(
      repositories,
      [
        'trending',
        (r) => (r as (typeof repositories)[number])?.name?.toLowerCase(),
      ],
      ['desc', 'asc']
    ) as typeof repositories
  )
    .filter((repository) =>
      categories.length
        ? categories.some(
            (category) =>
              category === repository?.category?.toLowerCase() ||
              (category === 'trending' && repository.trending)
          )
        : true
    )
    .filter((repository) => {
      if (!tags.length) return true

      const repositoryTags = repository?.tags?.map((t) => t?.tag.toLowerCase())

      return tags.some((tag) => repositoryTags?.includes(tag))
    })

  const fuse = new Fuse(sortedRepositories, searchOptions)

  const resultRepositories = search
    ? (orderBy(
        fuse.search(search).map(({ item }) => item),
        [
          'trending',
          (r) => (r as (typeof repositories)[number])?.name.toLowerCase(),
        ],
        ['desc', 'asc']
      ) as typeof repositories)
    : sortedRepositories

  return (
    <div className="w-full">
      <div className="mb-xlarge">
        <h1 className="hero2 mb-medium">Explore the open-source marketplace</h1>
        <p className="body1">Discover over 90 production-ready applications.</p>
      </div>
      <Button
        onClick={() => {
          setSearchParams({})
        }}
      />
      <div className="flex flex-col">
        <div>
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
          {isFiltered && (
            <FilterChips
              categories={categories}
              handleClearToken={handleClearToken}
              tags={tags}
              handleClearTokens={handleClearTokens}
            />
          )}
        </div>
        <Subtitle as="h4">Plural curated stacks</Subtitle>
        <Subtitle as="h4">All apps</Subtitle>

        <RepoCardList repositories={resultRepositories} />
      </div>
    </div>
  )
}

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex-shrink-1 flex-grow-1 flex-basis-[210px] min-w-[210px]">
      <Input
        titleContent={
          <>
            <BrowseAppsIcon marginRight="small" />
            Marketplace
          </>
        }
        startIcon={
          <MagnifyingGlassIcon
            size={16}
            color="icon-light"
          />
        }
        placeholder="Search the marketplace"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { data: repos, error: reposError } = await until(() => getRepos())

  console.log('repos', repos)

  return {
    props: {
      stuff: 'trhings',
      repositories: repos || reposCache.filtered,
      errors: [...(reposError ? [reposError] : [])],
    },
  }
}
