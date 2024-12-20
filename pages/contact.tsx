import { type InferGetStaticPropsType } from 'next'

import { directusClient } from '@src/apollo-client'
import { Hero } from '@src/components/custom-page/Hero'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import {
  ContactPageDocument,
  type ContactPageQuery,
  type ContactPageQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Index({
  heading,
  bodyText,
  ctaText,
  ctaUrl,
  form,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HeaderPad
      as={GradientBG}
      size="cover"
      position="top middle"
      image="/images/gradients/gradient-bg-12.jpg"
    >
      <StandardPageWidth className="py-xxxxlarge  lg:py-xxxxxlarge">
        <Hero
          media_type="form"
          heading={heading}
          body_text={bodyText}
          cta_text={ctaText}
          cta_url={ctaUrl}
          form={form}
        />
      </StandardPageWidth>
    </HeaderPad>
  )
}

export const getStaticProps = async () => {
  const { data } = await directusClient.query<
    ContactPageQuery,
    ContactPageQueryVariables
  >({
    query: ContactPageDocument,
  })

  const page = data.contact_sales

  return propsWithGlobalSettings({
    heading: page?.heading,
    bodyText: page?.body_text,
    ctaText: page?.cta_text,
    ctaUrl: page?.cta_url,
    form: page?.form,
    metaTitle: page?.meta_title,
    metaDescription: page?.meta_description,
    footerVariant: FooterVariant.kitchenSink,
  })
}
