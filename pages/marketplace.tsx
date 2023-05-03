import { type ComponentProps, useCallback, useRef, useState } from 'react'

import {
  BrowseAppsIcon,
  Button,
  Chip,
  Input,
  MagnifyingGlassIcon,
  RepositoryCard,
  TabPanel,
} from '@pluralsh/design-system'
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

import { until } from '@open-draft/until'
import Fuse from 'fuse.js'
import isEmpty from 'lodash/isEmpty'
import orderBy from 'lodash/orderBy'
import upperFirst from 'lodash/upperFirst'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import MarketplaceHeroImage from '@src/components/MarketplaceHeroImage'
import MarketplaceSidebar from '@src/components/MarketplaceSidebar'
import { MarketplacePage } from '@src/components/PageGrid'
import { type Repo, getRepos, reposCache } from '@src/data/getRepos'
import {
  type Categories,
  type Tags,
  getSearchMetadata,
} from '@src/data/getSearchMetadata'

import { useSearchParams } from '../src/components/hooks/useSearchParams'
import { Body1, Heading1, Subtitle } from '../src/components/Typography'

type PageProps = {
  repositories: Repo[]
  categories: Categories
  tags: Tags
}
const searchOptions = {
  keys: ['name', 'description', 'tags.tag'],
  threshold: 0.25,
}

export type SetSearchParams = (
  params:
    | ConstructorParameters<typeof URLSearchParams>[0]
    | ((params: URLSearchParams) => URLSearchParams)
) => void

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
    <div className="grid grid-cols-1 gap-medium md:grid-cols-2 xl:grid-cols-3">
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

const ContentContainer = styled.div(({ theme }) => ({
  display: 'flex',
  columnGap: theme.spacing.xlarge,
  [mqs.xxl]: {
    columnGap: theme.spacing.xxlarge,
  },
}))

const MainContent = styled.div(({ theme: _ }) => ({
  flexGrow: '1',
}))

const SidecarContainer = styled.div((_) => ({
  display: 'none',
  [mqs.lg]: {
    display: 'block',
    width: 248,
    flexShrink: 0,
  },
}))

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
      className="flex flex-wrap gap-small"
      {...props}
    >
      {categories.map((category) => (
        <FilterChip
          key={category}
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
          key={tag}
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

export function clearToken({
  key,
  value,
  setSearchParams,
}: {
  key: string
  value: string
  setSearchParams: SetSearchParams
}) {
  setSearchParams((params) => {
    const newParams = params
      .getAll(key)
      .filter((v) => v.toLowerCase() !== value.toLowerCase())

    params.delete(key)
    newParams.forEach((p) => params.append(key, p))

    return params
  })
}

export default function Marketplace({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = searchParams.getAll('category')
  const tags = searchParams.getAll('tag')
  const [search, setSearch] = useState('')
  const isFiltered = !isEmpty(categories) || !isEmpty(tags)
  const tabStateRef = useRef<any>()

  const handleClearToken = useCallback(
    (key, value) => {
      clearToken({ key, value, setSearchParams })
    },
    [setSearchParams]
  )

  const handleClearTokens = useCallback(() => {
    setSearchParams({})
  }, [setSearchParams])

  // const handleClearFilters = useCallback(() => {
  //   setSearch('')
  //   handleClearTokens()
  // }, [handleClearTokens])

  const { repositories } = props

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
    <MarketplacePage>
      <div className="my-xxlarge xxl:mb-[80px]">
        <Heading1
          as="h1"
          className="mb-medium"
        >
          Explore the open-source marketplace
        </Heading1>
        <Body1 as="p">Discover over 90 production-ready applications.</Body1>
      </div>
      <ContentContainer>
        <MainContent>
          <div className="mb-xlarge">
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
          <TabPanel stateRef={tabStateRef}>
            <Subtitle
              as="h4"
              className="mb-xlarge"
            >
              Plural curated stacks
            </Subtitle>
            <MarketplaceHeroImage />
            <Subtitle
              as="h4"
              className="mb-xlarge"
            >
              All apps
            </Subtitle>

            <RepoCardList repositories={resultRepositories} />
          </TabPanel>
        </MainContent>
        <SidecarContainer>
          <MarketplaceSidebar
            isOpen
            categories={props.categories}
            tags={props.tags}
          />
        </SidecarContainer>
      </ContentContainer>
    </MarketplacePage>
  )
}

const SearchBarWrap = styled.div(({ theme: _ }) => ({}))

function SearchBar({ search, setSearch }) {
  return (
    <SearchBarWrap className="flex-shrink-1 flex-grow-1 flex-basis-[210px] mb-small  min-w-[210px]">
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
    </SearchBarWrap>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { data: repos, error: reposError } = await until(() => getRepos())

  const { categories, tags } = await getSearchMetadata()

  return {
    props: {
      stuff: 'trhings',
      repositories: repos || reposCache.filtered,
      tags: tags || [],
      categories: categories || [],
      errors: [...(reposError ? [reposError] : [])],
    },
  }
}
