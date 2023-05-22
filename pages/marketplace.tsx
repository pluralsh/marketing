import {
  type ComponentProps,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  BrowseAppsIcon,
  Button,
  Card,
  type CardProps,
  Chip,
  Input,
  MagnifyingGlassIcon,
  TabPanel,
} from '@pluralsh/design-system'
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next'

import { until } from '@open-draft/until'
import Fuse from 'fuse.js'
import isEmpty from 'lodash/isEmpty'
import orderBy from 'lodash/orderBy'
import upperFirst from 'lodash/upperFirst'
import { useDebounce } from 'rooks'
import styled, { useTheme } from 'styled-components'

import { mqs } from '@src/breakpoints'
import { MarketplaceExtras } from '@src/components/MarketplaceExtras'
import MarketplaceFiltersUnstyled from '@src/components/MarketplaceFilters'
import MarketplaceHeroImage, { Cta } from '@src/components/MarketplaceHeroImage'
import { MarketplacePage } from '@src/components/PageGrid'
import { RepoCardList } from '@src/components/RepoCardList'
import { type MinRepo, getRepos, reposCache } from '@src/data/getRepos'
import {
  type Categories,
  type Tags,
  getSearchMetadata,
} from '@src/data/getSearchMetadata'

import { useSearchParams } from '../src/components/hooks/useSearchParams'
import { Body1, Heading1, Subtitle } from '../src/components/Typography'

type PageProps = {
  repositories: MinRepo[]
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

const ContentContainer = styled.div<{ $reverse?: boolean }>(
  ({ theme, $reverse }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.xxlarge,
    [mqs.md]: {
      rowGap: theme.spacing.xxxlarge,
    },
    [mqs.lg]: {
      flexDirection: $reverse ? 'row-reverse' : 'row',
      columnGap: theme.spacing.xlarge,
    },
    [mqs.xxl]: {
      columnGap: theme.spacing.xxlarge,
    },
  })
)

const MainContent = styled.div(({ theme: _ }) => ({
  flexGrow: '1',
}))

const Sidecar = styled.div(({ theme }) => ({
  [mqs.lg]: {
    width: 248,
    flexShrink: 0,
    // position: 'sticky',
    // top: 'var(--top-nav-height)',
    flexDirection: 'row',
    columnGap: theme.spacing.xlarge,
  },
}))

const SidecarFilters = styled(MarketplaceFiltersUnstyled)(({ theme }) => ({
  display: 'none',
  [mqs.lg]: {
    maxHeight: `calc(100vh - var(--top-nav-height) - ${theme.spacing.medium}px)`,
    display: 'block',
    position: 'sticky',
    top: 'var(--top-nav-height)',
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

const SidecarCardTitle = styled.h5(({ theme }) => ({
  ...theme.partials.marketingText.body2Bold,
}))

export default function Marketplace({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = searchParams.getAll('category')
  const tags = searchParams.getAll('tag')
  const [search, setSearch] = useState('')
  const isFiltered = !isEmpty(categories) || !isEmpty(tags)
  const tabStateRef = useRef<any>()
  const searchTopRef = useRef<any>()

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

  const sortedRepositories = useMemo(
    () =>
      orderBy(
        repositories,
        [
          'trending',
          (r) => (r as (typeof repositories)[number])?.name?.toLowerCase(),
        ],
        ['desc', 'asc']
      ) as typeof repositories,
    [repositories]
  )
  const filteredRepositories = useMemo(
    () =>
      sortedRepositories
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

          const repositoryTags = repository?.tags?.map((t) =>
            t?.tag.toLowerCase()
          )

          return tags.some((tag) => repositoryTags?.includes(tag))
        }),
    [categories, sortedRepositories, tags]
  )

  const fuse = useMemo(
    () => new Fuse(filteredRepositories, searchOptions),
    [filteredRepositories]
  )

  const resultRepositories = useMemo(
    () =>
      search
        ? (orderBy(
            fuse.search(search).map(({ item }) => item),
            [
              'trending',
              (r) => (r as (typeof repositories)[number])?.name.toLowerCase(),
            ],
            ['desc', 'asc']
          ) as typeof repositories)
        : filteredRepositories,
    [fuse, search, filteredRepositories]
  )

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
          <SearchBarArea className="sticky top-[var(--top-nav-height)] mb-xlarge">
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
          </SearchBarArea>
          <TabPanel stateRef={tabStateRef}>
            {!isFiltered && !search && (
              <div className="heroArea mb-xlarge">
                <Subtitle
                  as="h4"
                  className="mb-xlarge"
                >
                  Plural curated stacks
                </Subtitle>
                <MarketplaceHeroImage />
              </div>
            )}
            <Subtitle
              ref={searchTopRef}
              as="h4"
              className="mb-xlarge"
            >
              {!isFiltered && !search ? <>All apps</> : <>Results</>}
            </Subtitle>
            <RepoCardList repositories={resultRepositories} />
          </TabPanel>
        </MainContent>
        <Sidecar className="xxl:display-none">
          <SidecarFilters
            categories={props.categories}
            tags={props.tags}
          />
        </Sidecar>
      </ContentContainer>
      <ContentContainer $reverse>
        <Sidecar className="my-xxlarge md:my-[80px] xl:my-large">
          <ContributorCard />
          <AddAppCard />
        </Sidecar>
        <MainContent className="my-xxlarge md:my-[80px] xxl:my-xxxxlarge">
          <MarketplaceExtras />
        </MainContent>
      </ContentContainer>
    </MarketplacePage>
  )
}

function AddAppCard() {
  return (
    <SidecarCard variant="fill-one">
      <SidecarCardTitle className="mb-small">
        Add an application
      </SidecarCardTitle>
      <PBody2 className="mb-small">
        Is something missing from the Plural marketplace? Are you a vendor who
        wants to add your solution? We'd love for you to onboard your
        application.
      </PBody2>
      <Cta
        target="_blank"
        href="https://docs.plural.sh/adding-new-application"
      >
        Read the guide
      </Cta>
    </SidecarCard>
  )
}

function ContributorCard() {
  return (
    <SidecarCard
      variant="feature"
      className="mb-large"
    >
      <SidecarCardTitle className="mb-small">
        Join our contributor program
      </SidecarCardTitle>
      <PBody2 className="mb-small">
        Add a new application to the Plural catalog or take a deep dive into the
        Plural internals.
      </PBody2>
      <Cta
        target="_blank"
        href="https://www.plural.sh/blog/paying-for-oss-contributions/"
      >
        Learn more
      </Cta>
    </SidecarCard>
  )
}

function SidecarCard({
  variant,
  ...props
}: CardProps & { variant?: 'fill-one' | 'feature' }) {
  const theme = useTheme()

  return (
    <Card
      padding={theme.spacing.large}
      background={
        variant === 'fill-one'
          ? 'fill-one'
          : variant === 'feature'
          ? 'linear-gradient(342.58deg, rgba(73, 79, 242, 0.5) 6.13%, rgba(73, 79, 242, 0) 101.49%), #21242C'
          : 'transparent'
      }
      {...props}
    />
  )
}

const PBody2 = styled.p(({ theme }) => ({
  ...theme.partials.text.body2,
  color: theme.colors['text-light'],
}))

const SearchBarArea = styled.div(({ theme }) => {
  const mB = theme.spacing.medium

  return {
    backgroundColor: theme.colors['fill-zero'],
    marginBottom: mB,
    zIndex: theme.zIndexes.base + 10,
    flexShrink: 0,
    '::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      height: mB,
      width: '100%',
      background: `linear-gradient(0deg, transparent 0%, ${theme.colors['fill-zero']} 90%)`,
    },
  }
})

const SearchBarWrap = styled.div(({ theme }) => ({
  backgroundColor: theme.colors['fill-zero'],
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 210,
  minWidth: 210,
  marginBottom: theme.spacing.small,
}))

function SearchBar({ search: searchProp, setSearch: setSearchProp }) {
  const [search, setSearch] = useState(searchProp)
  const debouncedSetSearch = useDebounce(setSearchProp, 500)

  return (
    <SearchBarWrap>
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
        onChange={(event) => {
          setSearch(event.target.value)
          debouncedSetSearch(event.target.value)
        }}
      />
    </SearchBarWrap>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { data: repos, error: reposError } = await until(() => getRepos())

  const { categories, tags } = await getSearchMetadata()

  return {
    props: {
      repositories: repos || reposCache.filtered,
      tags: tags || [],
      categories: categories || [],
      errors: [...(reposError ? [reposError] : [])],
    },
  }
}
