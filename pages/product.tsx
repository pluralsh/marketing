import { type InferGetStaticPropsType } from 'next'

import { useTheme } from 'styled-components'

import { directusClient } from '@src/apollo-client'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { Body1, Hero2, OverlineLabel } from '@src/components/Typography'
import { getImageUrl } from '@src/consts/routes'
import {
  PlatformOverviewPageDocument,
  type PlatformOverviewPageQuery,
  type PlatformOverviewPageQueryVariables,
} from '@src/generated/graphqlDirectus'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function PlatformOverview({
  pageQueryData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const theme = useTheme()
  const imageUrl = getImageUrl(pageQueryData?.image)

  return (
    <>
      <CustomComponents components={pageQueryData?.top_components ?? []} />
      <div className="relative flex flex-col items-center px-medium py-xxxxlarge">
        <StandardPageWidth className="py-xlarge">
          <div className="m-auto flex w-1/2 flex-col items-center gap-medium text-center">
            <OverlineLabel>{pageQueryData?.overline}</OverlineLabel>
            <Hero2>{pageQueryData?.title}</Hero2>
            <Body1>{pageQueryData?.description}</Body1>
          </div>
        </StandardPageWidth>
        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            width={1200}
            height={1000}
          />
        )}
        <div
          css={{
            position: 'absolute',
            top: 300,
            left: 'calc(50% - 300px)',
            width: 150,
            height: 150,
            background: theme.colors['code-block-dark-purple'],
            borderRadius: '50%',
            opacity: 0.6,
            filter: 'blur(178px)',
          }}
        />
        <div
          css={{
            position: 'absolute',
            top: 300,
            right: 'calc(50% - 600px)',
            width: 200,
            height: 200,
            background: theme.colors['graph-blue'],
            borderRadius: '50%',
            opacity: 0.6,
            filter: 'blur(178px)',
          }}
        />
      </div>
      <CustomComponents components={pageQueryData?.bottom_components ?? []} />
    </>
  )
}

export const getStaticProps = async () => {
  const { data, error } = await directusClient.query<
    PlatformOverviewPageQuery,
    PlatformOverviewPageQueryVariables
  >({
    query: PlatformOverviewPageDocument,
  })
  const page = data.platform_overview_page

  return propsWithGlobalSettings(
    {
      metaTitle: 'Our platform',
      metaDescription:
        'A single platform to manage your entire Kubernetes fleet',
      pageQueryData: page,
      footerVariant: FooterVariant.kitchenSink,
      errors: combineErrors([error]),
    },
    { revalidate: 60 }
  )
}
