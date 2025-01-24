import { type GetStaticPaths, type InferGetStaticPropsType } from 'next'

import { directusClient } from '@src/apollo-client'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant, HeaderVariant } from '@src/components/FooterFull'
import {
  CustomPageDocument,
  type CustomPageQuery,
  type CustomPageQueryVariables,
  CustomPageSlugsDocument,
  type CustomPageSlugsQuery,
  type CustomPageSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function CustomPage({
  components,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CustomComponents components={components} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await directusClient.query<
    CustomPageSlugsQuery,
    CustomPageSlugsQueryVariables
  >({
    query: CustomPageSlugsDocument,
  })

  if (error) {
    console.error('GraphQL query error in static:', error)
  }

  return {
    paths: data.custom_pages.map((page) => ({
      params: { landingPage: page.slug.split('/').filter(Boolean) },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({
  params: { landingPage },
}: {
  params: { landingPage: Nullable<string[]> }
}) => {
  const rawSlug = landingPage?.join('/') ?? ''

  if (!landingPage) {
    return { notFound: true }
  }

  const { data, error } = await directusClient.query<
    CustomPageQuery,
    CustomPageQueryVariables
  >({
    query: CustomPageDocument,
    variables: { slug: rawSlug },
  })

  if (error) {
    console.error('GraphQL query error in static: ', error)
  }
  const page = data.custom_pages?.[0] || null

  if (!page) {
    return { notFound: true }
  }

  return propsWithGlobalSettings(
    {
      metaTitle: page.meta_title,
      metaDescription: page.meta_description,
      metaImage: page.meta_image,
      headerVariant: page.show_header
        ? HeaderVariant.regular
        : HeaderVariant.min,
      footerVariant: page.show_footer
        ? FooterVariant.kitchenSink
        : FooterVariant.minAlt,
      components: page.components ?? [],
    },
    {
      revalidate: 60,
    }
  )
}
