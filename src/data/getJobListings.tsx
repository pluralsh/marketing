import { until } from '@open-draft/until'

import { directusClient } from '@src/apollo-client'
import {
  JobListingDocument,
  type JobListingQuery,
  type JobListingQueryVariables,
  JobListingSlugsDocument,
  type JobListingSlugsQuery,
  type JobListingSlugsQueryVariables,
  JobListingsDocument,
  type JobListingsQuery,
  type JobListingsQueryVariables,
} from '@src/generated/graphqlDirectus'

import { normalizeSlugs } from './normalizeSlugs'

let cache: JobListingsQuery['job_listings'] | null = null
let slugsCache: string[] = []

export async function getJobListings() {
  return until(async () => {
    const { data, error } = await directusClient.query<
      JobListingsQuery,
      JobListingsQueryVariables
    >({
      query: JobListingsDocument,
    })

    if (error) {
      throw new Error(`${error.name}: ${error.message}`)
    }

    if (data?.job_listings) {
      cache = data.job_listings
    }

    return cache
  })
}

export async function getJobListing(slug) {
  return until(async () => {
    const { data, error } = await directusClient.query<
      JobListingQuery,
      JobListingQueryVariables
    >({
      query: JobListingDocument,
      variables: { slug },
    })

    if (error) {
      throw new Error(`${error.name}: ${error.message}`)
    }

    return data?.job_listings[0]
  })
}

export async function getJobListingSlugs() {
  const { data, error } = await directusClient.query<
    JobListingSlugsQuery,
    JobListingSlugsQueryVariables
  >({
    query: JobListingSlugsDocument,
  })

  let slugs = slugsCache

  if (data?.job_listings) {
    slugs = normalizeSlugs(data.job_listings)
    slugsCache = slugs
  }

  return { data: slugs || cache, error }
}
