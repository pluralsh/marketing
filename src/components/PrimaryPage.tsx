import { type ReactNode } from 'react'

import { type GlobalPageProps } from '@pages/_app'
import { PAGE_TITLE_PREFIX, PAGE_TITLE_SUFFIX, ROOT_TITLE } from '@src/consts'
import { NavDataProvider } from '@src/contexts/NavDataContext'

import { type GlobalProps } from '../utils/getGlobalProps'

import ExternalScripts from './ExternalScripts'
import { FullFooter } from './FooterFull'
import HtmlHead from './HtmlHead'
import { PageHeader } from './PageHeader'
import { PagePropsContext } from './PagePropsContext'

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
  }
  const navData = siteSettings?.main_nav?.subnav || []

  return (
    <NavDataProvider value={navData}>
      <PagePropsContext.Provider value={pageProps}>
        <HtmlHead {...headProps} />
        <PageHeader showHeaderBG={pageProps.showHeaderBG} />
        {children}
        <ExternalScripts />
        <FullFooter variant={pageProps.footerVariant} />
      </PagePropsContext.Provider>
    </NavDataProvider>
  )
}
