import { type GetStaticPaths, type InferGetStaticPropsType } from 'next'

import { directusClient } from '@src/apollo-client'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'
import {
  ResourcePageDocument,
  type ResourcePageQuery,
  type ResourcePageQueryVariables,
  ResourcesPageSlugsDocument,
  type ResourcesPageSlugsQuery,
  type ResourcesPageSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Resource({
  resourceInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CustomComponents components={resourceInfo.components ?? []} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await directusClient.query<
    ResourcesPageSlugsQuery,
    ResourcesPageSlugsQueryVariables
  >({
    query: ResourcesPageSlugsDocument,
  })

  if (error) {
    console.error('GraphQL query error in static:', error)
  }

  return {
    paths: data.resource_pages
      .filter((page) => page?.slug !== null && typeof page.slug === 'string')
      .map((page) => ({
        params: { resource: page.slug as string },
      })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context) => {
  const slug =
    typeof context?.params?.resource === 'string'
      ? context?.params?.resource
      : null

  if (!slug) {
    return { notFound: true }
  }

  const { data, error } = await directusClient.query<
    ResourcePageQuery,
    ResourcePageQueryVariables
  >({
    query: ResourcePageDocument,
    variables: { slug },
  })

  if (error) {
    console.error('GraphQL query error in static: ', error)
  }
  const resourceInfo = data.resource_pages?.[0] || null

  if (!resourceInfo) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: resourceInfo.meta_title,
    metaDescription: resourceInfo.meta_description,
    metaImage: resourceInfo.meta_image,
    footerVariant: FooterVariant.kitchenSink,
    resourceInfo,
  })
}
