import { type GetStaticPaths, type InferGetStaticPropsType } from 'next'

import { directusClient } from '@src/apollo-client'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'
import {
  ProductPageDocument,
  type ProductPageQuery,
  type ProductPageQueryVariables,
  ProductPageSlugsDocument,
  type ProductPageSlugsQuery,
  type ProductPageSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Product({
  productInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CustomComponents components={productInfo.custom_components ?? []} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await directusClient.query<
    ProductPageSlugsQuery,
    ProductPageSlugsQueryVariables
  >({
    query: ProductPageSlugsDocument,
  })

  if (error) {
    console.error('GraphQL query error in static:', error)
  }

  return {
    paths: data.product_pages.map((page) => ({
      params: { product: page.slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context) => {
  const slug =
    typeof context?.params?.product === 'string'
      ? context?.params?.product
      : null

  if (!slug) {
    return { notFound: true }
  }

  const { data, error } = await directusClient.query<
    ProductPageQuery,
    ProductPageQueryVariables
  >({
    query: ProductPageDocument,
    variables: { slug },
  })

  if (error) {
    console.error('GraphQL query error in static: ', error)
  }
  const product = data.product_pages?.[0] || null

  if (!product) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: product?.dropdown_title ?? '',
    metaDescription: product?.dropdown_description ?? '',
    footerVariant: FooterVariant.kitchenSink,
    productInfo: product,
  })
}
