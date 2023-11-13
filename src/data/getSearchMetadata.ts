import { until } from '@open-draft/until'

import { filterMapNodes } from '@src/utils/graphql'
import { notNil } from '@src/utils/typescript'

import client from '../apollo-client'
import {
  CategoriesDocument,
  type CategoriesQuery,
  type CategoriesQueryVariables,
  type CategoryFragment,
  type TagFragment,
  TagsDocument,
  type TagsQuery,
  type TagsQueryVariables,
} from '../generated/graphqlPlural'

export type Tags = TagFragment[]
export type Categories = CategoryFragment[]

export const cache: {
  tags: Tags
  categories: Categories
} = {
  tags: [],
  categories: [],
}

async function getTags(): Promise<Tags> {
  const { data, error } = await client.query<TagsQuery, TagsQueryVariables>({
    query: TagsDocument,
  })

  if (error) {
    throw Error(error.message)
  }

  const tags = filterMapNodes(data?.tags) ?? cache.tags

  return tags
}

async function getCategories(): Promise<Categories> {
  const { data, error } = await client.query<
    CategoriesQuery,
    CategoriesQueryVariables
  >({
    query: CategoriesDocument,
  })

  if (error) {
    throw Error(error.message)
  }

  return data?.categories?.filter(notNil) ?? cache.categories ?? []
}

export async function getSearchMetadata(): Promise<{
  tags: Tags
  categories: Categories
}> {
  const { data: categories, error: categoriesError } =
    await until(getCategories)
  const { data: tags, error: tagsError } = await until(getTags)

  if (categoriesError) {
    console.error('categoriesError', categoriesError)
  }
  if (tagsError) {
    console.error('tagsError', tagsError)
  }

  return {
    categories: categories || cache.categories,
    tags: tags || cache.tags,
  }
}
