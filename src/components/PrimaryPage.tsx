import { type ReactNode, createContext } from 'react'

import { type GlobalPageProps } from '@pages/_app'
import { PAGE_TITLE_PREFIX } from '@src/consts'
import { NavDataProvider, type NavList } from '@src/contexts/NavDataContext'

import { type GlobalProps } from '../utils/getGlobalProps'

import ExternalScripts from './ExternalScripts'
import { FullFooter } from './FooterFull'
import HtmlHead from './HtmlHead'
import { PageHeader } from './PageHeader'
import { PagePropsContext } from './PagePropsContext'

export const GlobalPropsContext = createContext<GlobalProps | undefined>(
  undefined
)

export default function PrimaryPage({
  pageProps,
  globalProps,
  children,
}: {
  children: ReactNode
  pageProps: GlobalPageProps
  globalProps: GlobalProps
}) {
  const { metaTitle, metaDescription } = pageProps || {}
  const { siteSettings } = globalProps || {}

  const headProps = {
    title: `${PAGE_TITLE_PREFIX}${metaTitle || siteSettings?.og_title || 'Kubernetes management'}`,
    description: metaDescription || siteSettings?.og_description || '',
    ogImage: siteSettings?.og_image,
  }

  const navData = Object.values(siteSettings?.main_nav ?? []) as NavList[]

  return (
    <NavDataProvider value={navData}>
      <GlobalPropsContext.Provider value={globalProps}>
        <PagePropsContext.Provider value={pageProps}>
          <HtmlHead {...headProps} />
          <PageHeader
            showHeaderBG={pageProps.showHeaderBG}
            variant={pageProps.headerVariant}
          />
          {children}
          <ExternalScripts />
          <FullFooter variant={pageProps.footerVariant} />
        </PagePropsContext.Provider>
      </GlobalPropsContext.Provider>
    </NavDataProvider>
  )
}
