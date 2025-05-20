import { type InferGetStaticPropsType } from 'next'

import { directusClient } from '@src/apollo-client'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'

import {
  WhyPluralParentPageDocument,
  type WhyPluralParentPageQuery,
  type WhyPluralParentPageQueryVariables,
} from '@src/generated/graphqlDirectus'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function WhyPlural({
  pageQueryData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <CustomComponents components={pageQueryData?.custom_components ?? []} />
  )
}

export const getStaticProps = async () => {
  const { data, error } = await directusClient.query<
    WhyPluralParentPageQuery,
    WhyPluralParentPageQueryVariables
  >({
    query: WhyPluralParentPageDocument,
  })
  const page = data.why_plural_parent_page

  return propsWithGlobalSettings(
    {
      metaTitle: page?.meta_title,
      metaDescription: page?.meta_description,
      metaImage: page?.meta_image,
      pageQueryData: page,
      footerVariant: FooterVariant.kitchenSink,
      errors: combineErrors([error]),
    },
    { revalidate: 60 }
  )
}
