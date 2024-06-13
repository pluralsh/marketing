import { type ReactNode } from 'react'

import { type NextRouter, useRouter } from 'next/router'

import { type GlobalPageProps } from '@pages/_app'
import { PAGE_TITLE_PREFIX, PAGE_TITLE_SUFFIX, ROOT_TITLE } from '@src/consts'
import { NavDataProvider } from '@src/contexts/NavDataContext'

import { type GlobalProps } from '../utils/getGlobalProps'

import ExternalScripts from './ExternalScripts'
import { FullFooter } from './FooterFull'
import HtmlHead from './HtmlHead'
import { PageHeader } from './PageHeader'
import { PagePropsContext } from './PagePropsContext'

function selectOgImage(router: NextRouter) {
  const path = router.asPath

  if (
    ['/marketplace', '/applications', '/plural-stacks'].some((p) =>
      path.startsWith(p)
    )
  ) {
    return 'og_image_marketplace.png'
  }
  if (['/community'].some((p) => path.startsWith(p))) {
    return 'og_image_community.png'
  }

  return 'og_image.png'
}

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
  const router = useRouter()
  const ogImage = selectOgImage(router)
  const headProps = {
    title:
      metaTitleFull ||
      (metaTitle
        ? `${PAGE_TITLE_PREFIX}${metaTitle}${PAGE_TITLE_SUFFIX}`
        : ROOT_TITLE),
    description: metaDescription || siteSettings?.og_description || '',
    ...(ogImage ? { ogImage } : {}),
  }

  const navData = siteSettings?.main_nav?.subnav || []

  return (
    <NavDataProvider value={navData}>
      <PagePropsContext.Provider value={pageProps}>
        <HtmlHead {...headProps} />
        <PageHeader
          showHeaderBG={pageProps.showHeaderBG}
          promoBanner={{
            content: siteSettings?.promo_banner_content,
            url: siteSettings?.promo_banner_url,
          }}
        />
        {children}
        <ExternalScripts />
        <FullFooter variant={pageProps.footerVariant} />
      </PagePropsContext.Provider>
    </NavDataProvider>
  )
}
