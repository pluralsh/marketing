import { type GetStaticPaths, type InferGetStaticPropsType } from 'next'

import { directusClient } from '@src/apollo-client'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'
import {
  WhyPluralPageDocument,
  type WhyPluralPageQuery,
  type WhyPluralPageQueryVariables,
  WhyPluralPageSlugsDocument,
  type WhyPluralPageSlugsQuery,
  type WhyPluralPageSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function WhyPlural({
  whyPlural,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CustomComponents components={whyPlural.custom_components ?? []} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await directusClient.query<
    WhyPluralPageSlugsQuery,
    WhyPluralPageSlugsQueryVariables
  >({ query: WhyPluralPageSlugsDocument })

  if (error) console.error('GraphQL query error in static:', error)

  return {
    paths: data.why_plural_pages.map((page) => ({
      params: { whyPlural: page.slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context) => {
  const slug =
    typeof context?.params?.whyPlural === 'string'
      ? context?.params?.whyPlural
      : null

  if (!slug) return { notFound: true }

  const { data, error } = await directusClient.query<
    WhyPluralPageQuery,
    WhyPluralPageQueryVariables
  >({
    query: WhyPluralPageDocument,
    variables: { slug },
  })

  if (error) console.error('GraphQL query error in static: ', error)

  const whyPlural = data.why_plural_pages?.[0] || null

  if (!whyPlural) return { notFound: true }

  return propsWithGlobalSettings({
    metaTitle: whyPlural?.meta_title,
    metaDescription: whyPlural?.meta_description,
    metaImage: whyPlural?.meta_image,
    footerVariant: FooterVariant.kitchenSink,
    whyPlural,
  })
}
