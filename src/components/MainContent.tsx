import type { ReactNode } from 'react'
import { useContext } from 'react'

import { useRouter } from 'next/router'

import { Heading } from '@pluralsh/design-system/dist/markdoc/components'
import styled from 'styled-components'

import { APP_CATALOG_BASE_URL } from '../consts/routes'
import { getBarePathFromPath, isAppCatalogRoute } from '../utils/text'

import AppsList from './AppsList'
import { PagePropsContext } from './PagePropsContext'

const ContentWrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing.xlarge,
}))

const Title = styled.h1(({ theme }) => ({
  ...theme.partials.marketingText.hero2,
  margin: 0,
  marginBottom: theme.spacing.small,
}))

const Description = styled.p(({ theme }) => ({
  ...theme.partials.marketingText.body1,
  color: theme.colors['text-light'],
  marginTop: 0,
  marginBottom: theme.spacing.small,
}))

const PageDivider = styled.div(({ theme }) => ({
  marginTop: theme.spacing.xxxlarge,
  marginBottom: theme.spacing.xxxlarge,
  borderTop: theme.borders.default,
}))

function ContentHeaderUnstyled({
  title,
  description,
  className,
}: {
  title?: ReactNode
  description?: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </div>
  )
}

export const ContentHeader = styled(ContentHeaderUnstyled)(({ theme }) => ({
  marginBottom: theme.spacing.xxlarge,
}))

export default function MainContent({ Component, title, description }) {
  const pageProps = useContext(PagePropsContext)
  const router = useRouter()

  const isAppCatalogIndex =
    isAppCatalogRoute(router.asPath) &&
    getBarePathFromPath(router.asPath).endsWith(APP_CATALOG_BASE_URL)

  return (
    <ContentWrapper>
      {(title || description) && (
        <ContentHeader
          title={title}
          description={description}
        />
      )}
      <Component {...pageProps} />
      {isAppCatalogIndex && (
        <>
          <Heading level={2}>Our Catalog</Heading>
          <AppsList />
        </>
      )}
      <PageDivider />
    </ContentWrapper>
  )
}
