import { type ReactNode, createContext } from 'react'

import { type GlobalPageProps } from '@pages/_app'
import { PAGE_TITLE_PREFIX, PAGE_TITLE_SUFFIX, ROOT_TITLE } from '@src/consts'
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
  const { metaTitle, metaTitleFull, metaDescription } = pageProps || {}
  const { siteSettings } = globalProps || {}

  const headProps = {
    title:
      metaTitleFull ||
      (metaTitle
        ? `${PAGE_TITLE_PREFIX}${metaTitle}${PAGE_TITLE_SUFFIX}`
        : ROOT_TITLE),
    description: metaDescription || siteSettings?.og_description || '',
    ogImage: siteSettings.og_image,
  }

  const navData = Object.values(siteSettings?.main_nav ?? []) as NavList[]

  return (
    <NavDataProvider value={navData}>
      <GlobalPropsContext.Provider value={globalProps}>
        <PagePropsContext.Provider value={pageProps}>
          <HtmlHead {...headProps} />
          {!pageProps.hideHeader && (
            <PageHeader showHeaderBG={pageProps.showHeaderBG} />
          )}
          {children}
          <ExternalScripts />
          <FullFooter variant={pageProps.footerVariant} />
        </PagePropsContext.Provider>
      </GlobalPropsContext.Provider>
    </NavDataProvider>
  )
}
