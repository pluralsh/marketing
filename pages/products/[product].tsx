import { Button } from '@pluralsh/design-system'
import { type GetStaticPaths, type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { FooterVariant } from '@src/components/FooterFull'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { BasicPageHero } from '@src/components/PageHeros'
import ProductFeature from '@src/components/ProductFeature'
import { getProductsConfigs } from '@src/data/getProductConfigs'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { GradientBG } from '../../src/components/layout/GradientBG'
import { HeaderPad } from '../../src/components/layout/HeaderPad'

export default function Product({
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const productConfig = getProductsConfigs()[slug]

  return (
    <HeaderPad
      as={GradientBG}
      position="top middle"
      image="/images/products/product-background.png"
    >
      <BasicPageHero
        heading={productConfig.title}
        description={productConfig.description}
        ctas={
          <Button
            large
            primary
            as={Link}
            href="/contact-sales"
            className=" w-fit"
          >
            Book a demo today
          </Button>
        }
      />
      <StandardPageWidth className="mb-xxxxxlarge max:mb-xxxxxxlarge">
        {productConfig.features.map((item, index) => (
          <ProductFeature
            key={index}
            inverse={index % 2 !== 0}
            feature={item}
          />
        ))}
      </StandardPageWidth>
    </HeaderPad>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = Object.keys(getProductsConfigs())

  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  return {
    paths: products.map((product) => ({
      params: { product },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context) => {
  const slug =
    typeof context?.params?.product === 'string'
      ? context?.params?.product
      : null

  if (!slug || !getProductsConfigs()[slug]) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'How Plural works',
    metaDescription:
      'Plural is an open-source, unified, application deployment platform that stands up a Kubernetes cluster and selected applications in the cloud provider of your choice.',
    footerVariant: FooterVariant.kitchenSink,
    slug,
  })
}
