import { Button } from '@pluralsh/design-system'
import { type GetStaticPaths, type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { directusClient } from '@src/apollo-client'
import { FooterVariant } from '@src/components/FooterFull'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { BasicPageHero } from '@src/components/PageHeros'
import ProductFeature from '@src/components/ProductFeature'
import {
  type ProductFeatureFragment,
  ProductPageDocument,
  type ProductPageQuery,
  type ProductPageQueryVariables,
  ProductPageSlugsDocument,
  type ProductPageSlugsQuery,
  type ProductPageSlugsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { GradientBG } from '../../src/components/layout/GradientBG'
import { HeaderPad } from '../../src/components/layout/HeaderPad'

export default function Product({
  productInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HeaderPad
      as={GradientBG}
      position="top middle"
      image="/images/products/product-background.png"
    >
      <BasicPageHero
        heading={productInfo.page_title}
        description={productInfo.page_subtitle}
        ctas={
          <Button
            large
            primary
            as={Link}
            href="/contact"
            className=" w-fit"
          >
            Book a demo
          </Button>
        }
      />
      <StandardPageWidth className="mb-xxxxxlarge max:mb-xxxxxxlarge">
        {productInfo.features?.map((feature, i) => (
          <ProductFeature
            key={i}
            invert={i % 2 !== 0}
            feature={feature as ProductFeatureFragment}
          />
        ))}
      </StandardPageWidth>
    </HeaderPad>
  )
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
    metaTitle: product?.page_title ?? '',
    metaDescription: product?.page_subtitle ?? '',
    footerVariant: FooterVariant.kitchenSink,
    productInfo: product,
  })
}
