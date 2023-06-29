import {
  type ComponentProps,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  Button,
  Card,
  type CardProps,
  Chip,
  TabPanel,
} from '@pluralsh/design-system'
import { type GetStaticProps, type InferGetStaticPropsType } from 'next'

import { until } from '@open-draft/until'
import Fuse from 'fuse.js'
import { isEmpty, orderBy, upperFirst } from 'lodash-es'
import styled, { useTheme } from 'styled-components'

import { mqs } from '@src/breakpoints'
import { CardCta } from '@src/components/CardCta'
import {
  type SetSearchParams,
  useSearchParams,
} from '@src/components/hooks/useSearchParams'
import { MarketplacePage } from '@src/components/layout/BasicPage'
import { FullPage } from '@src/components/layout/FullPage'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { MarketplaceCarousel } from '@src/components/page-sections/MarketplaceCarousel'
import { MarketplaceExtras } from '@src/components/page-sections/MarketplaceExtras'
import MarketplaceFilters from '@src/components/page-sections/MarketplaceFilters'
import {
  MarketSearchTabKey,
  SearchBar,
  useSearchTabKey,
} from '@src/components/page-sections/MarketplaceSearchBar'
import StackHero from '@src/components/page-sections/MarketplaceStackHero'
import { RepoCard, RepoCardList, StackCard } from '@src/components/RepoCardList'
import { Body1, Heading1, Subtitle } from '@src/components/Typography'
import { type MinRepo, getRepos, reposCache } from '@src/data/getRepos'
import {
  type Categories,
  type Tags,
  getSearchMetadata,
} from '@src/data/getSearchMetadata'
import { type MinStack, getStacks, stacksCache } from '@src/data/getStacks'
import { type MinRepoFragment } from '@src/generated/graphqlPlural'
import {
  type GlobalProps,
  propsWithGlobalSettings,
} from '@src/utils/getGlobalProps'

type PageProps = {
  repositories: MinRepo[]
  stacks: MinStack[]
  categories: Categories
  tags: Tags
  globalProps: GlobalProps
}
const reposSearchOptions = {
  keys: ['name', 'description', 'tags.tag'],
  threshold: 0.25,
}
const stacksSearchOptions = {
  keys: ['name', 'description', 'collections.bundles.recipe.repository.tag'],
  threshold: 0.25,
}

export const mqMarketTwoCol = mqs.xl

export function getStackRepos(stack: MinStack) {
  return stack.collections?.[0]?.bundles
    ?.map((bundle) => bundle?.recipe?.repository)
    .filter(
      (repo: MinRepoFragment | null | undefined): repo is MinRepoFragment =>
        !!repo
    )
}

export const SearchBarArea = styled.div(({ theme }) => {
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
    [mqMarketTwoCol]: {
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
  // minWidth must be set to prevent expanding beyond available width
  minWidth: 200,
}))

const Sidecar = styled.div(({ theme }) => ({
  display: 'none',
  [mqMarketTwoCol]: {
    display: 'block',
    width: 248,
    flexShrink: 0,
    flexDirection: 'row',
    columnGap: theme.spacing.xlarge,
  },
}))

const SidecarFilters = styled(MarketplaceFilters)(({ theme }) => ({
  [mqMarketTwoCol]: {
    maxHeight: `calc(100vh - var(--top-nav-height) - ${theme.spacing.medium}px)`,
    'maxHeight ': `calc(100dvh - var(--top-nav-height) - ${theme.spacing.medium}px)`,
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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = searchParams.getAll('category')
  const tags = searchParams.getAll('tag')
  const [search, setSearch] = useState('')
  const isFiltered = !isEmpty(categories) || !isEmpty(tags)
  const searchTabStateRef = useRef<any>()
  const [searchTabKey] = useSearchTabKey()
  const searchTopRef = useRef<any>()
  const isFilteredOrSearched = isFiltered || search

  const handleClearToken = useCallback(
    (key, value) => {
      clearToken({ key, value, setSearchParams })
    },
    [setSearchParams]
  )

  const handleClearTokens = useCallback(() => {
    setSearchParams({})
  }, [setSearchParams])

  const { repositories, stacks } = props
  const filteredStacks = useMemo(
    () =>
      stacks
        .filter((stack) =>
          !isEmpty(categories)
            ? categories.some(
                (category) =>
                  stack.name.toLowerCase() === category.toLowerCase() ||
                  getStackRepos(stack)?.some(
                    (repo) =>
                      repo.category?.toLowerCase() === category.toLowerCase()
                  )
              )
            : true
        )
        .filter((stack) =>
          !isEmpty(tags)
            ? tags.some(
                (tag) =>
                  stack.name.toLowerCase() === tag.toLowerCase() ||
                  getStackRepos(stack)?.some(
                    (repo) =>
                      repo.name.toLowerCase() === tag.toLowerCase() ||
                      repo?.tags?.some(
                        (t) => t?.tag?.toLowerCase() === tag.toLowerCase()
                      )
                  )
              )
            : true
        ),
    [categories, stacks, tags]
  )
  const stacksFuse = useMemo(
    () => new Fuse(filteredStacks, stacksSearchOptions),
    [filteredStacks]
  )

  const resultStacks = useMemo(
    () =>
      search
        ? (orderBy(
            stacksFuse.search(search).map(({ item }) => item),
            [
              'trending',
              (r) => (r as (typeof stacks)[number])?.name.toLowerCase(),
            ],
            ['desc', 'asc']
          ) as typeof stacks)
        : filteredStacks,
    [filteredStacks, search, stacksFuse]
  )

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

  const reposFuse = useMemo(
    () => new Fuse(filteredRepositories, reposSearchOptions),
    [filteredRepositories]
  )

  const resultRepositories = useMemo(
    () =>
      search
        ? (orderBy(
            reposFuse.search(search).map(({ item }) => item),
            [
              'trending',
              (r) => (r as (typeof repositories)[number])?.name.toLowerCase(),
            ],
            ['desc', 'asc']
          ) as typeof repositories)
        : filteredRepositories,
    [reposFuse, search, filteredRepositories]
  )

  const filterProps = {
    categories: props.categories,
    tags: props.tags,
  }

  return (
    <FullPage as={HeaderPad}>
      <MarketplacePage className="mb-xxxxlarge">
        <div className="my-xxlarge xxl:mb-[80px]">
          <Heading1
            as="h1"
            className="mb-medium"
          >
            Explore the open-source marketplace
          </Heading1>
          <Body1 as="p">
            Discover over 90 incredible applications ready to deploy in your
            cloud in minutes using our guided deployment flow. With security,
            observability, and scale out of the box, we elevate you from the
            work of building and maintaining your open-source infrastructure and
            let teams focus on delivering value.
          </Body1>
        </div>
        <ContentContainer>
          <MainContent>
            <SearchBarArea className="sticky top-[var(--top-nav-height)] mb-xlarge">
              <SearchBar
                search={search}
                setSearch={setSearch}
                tabStateRef={searchTabStateRef}
                filterProps={filterProps}
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
            <TabPanel stateRef={searchTabStateRef}>
              {!isFilteredOrSearched &&
                searchTabKey === MarketSearchTabKey.all && (
                  <div className="heroArea mb-xlarge">
                    <Subtitle
                      as="h4"
                      className="mb-xlarge"
                    >
                      Plural curated stacks
                    </Subtitle>
                    <MarketplaceCarousel>
                      {stacks.map((stack) =>
                        stack ? (
                          <StackHero
                            key={stack.id}
                            stack={stack}
                          />
                        ) : null
                      )}
                    </MarketplaceCarousel>
                  </div>
                )}
              {(searchTabKey === MarketSearchTabKey.all ||
                searchTabKey === MarketSearchTabKey.apps) && (
                <>
                  <Subtitle
                    ref={searchTopRef}
                    as="h4"
                    className="mb-xlarge"
                  >
                    {!isFiltered && !search ? <>All apps</> : <>Results</>}
                  </Subtitle>
                  <RepoCardList>
                    {isFilteredOrSearched &&
                      resultStacks.map((stack) => (
                        <StackCard
                          key={stack.id}
                          stack={stack}
                          wideFeatures={!isFilteredOrSearched}
                        />
                      ))}
                    {resultRepositories.map((repository) => (
                      <RepoCard
                        key={repository.id}
                        repository={repository}
                        wideFeatures={!isFilteredOrSearched}
                      />
                    ))}
                  </RepoCardList>
                </>
              )}
              {searchTabKey === MarketSearchTabKey.stacks && (
                <>
                  <Subtitle
                    ref={searchTopRef}
                    as="h4"
                    className="mb-xlarge"
                  >
                    Plural curated stacks
                  </Subtitle>
                  <RepoCardList>
                    {stacks.map((stack) => (
                      <StackCard
                        key={stack.id}
                        stack={stack}
                        wideFeatures={!isFilteredOrSearched}
                      />
                    ))}
                  </RepoCardList>
                </>
              )}
            </TabPanel>
          </MainContent>
          <Sidecar>
            <SidecarFilters {...filterProps} />
          </Sidecar>
        </ContentContainer>
        <ContentContainer $reverse>
          <Sidecar className="mt-xxlarge md:mt-[80px] xl:my-large">
            <ContributorCard />
            <AddAppCard />
          </Sidecar>
          <MainContent className="mt-xxlarge md:mt-[80px] xxl:mt-xxxxlarge">
            <MarketplaceExtras />
          </MainContent>
        </ContentContainer>
      </MarketplacePage>
    </FullPage>
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
      <CardCta
        target="_blank"
        href="https://docs.plural.sh/adding-new-application"
      >
        Read the guide
      </CardCta>
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
      <CardCta
        target="_blank"
        href="https://www.plural.sh/blog/paying-for-oss-contributions/"
      >
        Learn more
      </CardCta>
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

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const { data: repos, error: reposError } = await until(() => getRepos())
  const { data: stacks, error: stacksError } = await until(() => getStacks())

  const { categories, tags } = await getSearchMetadata()

  return propsWithGlobalSettings({
    repositories: repos || reposCache.filtered,
    stacks: stacks || stacksCache.filtered,
    tags: tags || [],
    categories: categories || [],
    errors: [
      ...(reposError ? [reposError] : []),
      ...(stacksError ? [reposError] : []),
    ],
  })
}
