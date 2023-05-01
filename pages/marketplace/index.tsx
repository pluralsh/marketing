import { useState } from 'react'

import {
  BrowseAppsIcon,
  Input,
  MagnifyingGlassIcon,
} from '@pluralsh/design-system'
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next'
import { useSearchParams as useNextSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

import { until } from '@open-draft/until'
import Fuse from 'fuse.js'
import orderBy from 'lodash/orderBy'

import { type Repo, getRepos, reposCache } from '@src/data/getRepos'

import { Subtitle } from './Subtitle'

type PageProps = {
  repositories: Repo[]
}

const searchOptions = {
  keys: ['name', 'description', 'tags.tag'],
  threshold: 0.25,
}

type Blarg = (
  arg: URLSearchParams | ((arg: URLSearchParams) => URLSearchParams)
) => void

const useSearchParams = (): [ReadonlyURLSearchParams, Blarg] => {
  const router = useRouter()
  const searchParams = useNextSearchParams()

  return [
    searchParams,
    (arg) => {
      const oldParams = new URLSearchParams(searchParams.toString())
      const newParams = typeof arg === 'function' ? arg(oldParams) : arg

      router.push({ ...router, query: newParams.toString() })
    },
  ]
}

export default function Index({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = searchParams.getAll('category')
  const tags = searchParams.getAll('tag')
  const [search, setSearch] = useState('')

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
    <div>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <h1 className="hero2 mb-medium w-full">
          Explore the open-source marketplace
        </h1>
        <p className="hero2 mb-medium w-full">
          Discover over 90 production-ready applications.
        </p>
      </div>
      <div className="flex flex-col">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <Subtitle as="h4">Plural curated stacks</Subtitle>
        <Subtitle as="h4">All apps</Subtitle>

        {resultRepositories.map((repo) => (
          <div className="rounded-md bg-fill-one p-medium">{repo.name}</div>
        ))}
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

  return {
    props: {
      repositories: repos || reposCache.filtered,
      errors: [...(reposError ? [reposError] : [])],
    },
  }
}
