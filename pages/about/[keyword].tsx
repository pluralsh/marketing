import { styledTheme } from '@pluralsh/design-system'
import { type GetStaticPaths, type InferGetStaticPropsType } from 'next'

import { ThemeProvider } from 'styled-components'

import { directusClient } from '@src/apollo-client'
import { renderComponent } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'
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
  return (
    // TODO: make theme adjustable
    <ThemeProvider theme={styledTheme}>
      {components.map((component, index) => (
        <div
          className="contents"
          key={index}
        >
          {renderComponent(component?.item)}
        </div>
      ))}
    </ThemeProvider>
  )
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
      params: { keyword: page.slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context) => {
  const slug =
    typeof context?.params?.keyword === 'string'
      ? context?.params?.keyword
      : null

  if (!slug) {
    return { notFound: true }
  }

  const { data, error } = await directusClient.query<
    CustomPageQuery,
    CustomPageQueryVariables
  >({
    query: CustomPageDocument,
    variables: { slug },
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
      metaTitle: 'Plural',
      metaDescription: page.slug,
      footerVariant: FooterVariant.none,
      hideHeader: true,
      components: page.components ?? [],
    },
    {
      revalidate: 20,
    }
  )
}
