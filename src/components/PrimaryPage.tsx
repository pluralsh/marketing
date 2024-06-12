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
    return 'https://directus.plural.sh/assets/af20eb80-b3c8-468e-aefa-cfcf5ab06987?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MzUwZTY5LTI4YzgtNGMyOS04N2UwLTA5MDg4NTA4NjM3ZSIsInJvbGUiOiIxYzMzMGY3MS0xOWI0LTRhNzctOWYxNy02NDBmNzNmNTVlNzkiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTcxODIxNTYzNiwiZXhwIjoxNzE4MjE2NTM2LCJpc3MiOiJkaXJlY3R1cyJ9.q9BIiDD0J_VSc0mMaULoSBz4PDcEj8eMZBMWUwzguTM'
  }
  if (['/community'].some((p) => path.startsWith(p))) {
    return 'https://directus.plural.sh/assets/80f1aabc-32d4-4fec-8dab-1927be71c1cc?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MzUwZTY5LTI4YzgtNGMyOS04N2UwLTA5MDg4NTA4NjM3ZSIsInJvbGUiOiIxYzMzMGY3MS0xOWI0LTRhNzctOWYxNy02NDBmNzNmNTVlNzkiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTcxODIxNTYzNiwiZXhwIjoxNzE4MjE2NTM2LCJpc3MiOiJkaXJlY3R1cyJ9.q9BIiDD0J_VSc0mMaULoSBz4PDcEj8eMZBMWUwzguTM'
  }

  return 'https://directus.plural.sh/assets/73909936-7494-49e1-98a5-d31d482be477?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MzUwZTY5LTI4YzgtNGMyOS04N2UwLTA5MDg4NTA4NjM3ZSIsInJvbGUiOiIxYzMzMGY3MS0xOWI0LTRhNzctOWYxNy02NDBmNzNmNTVlNzkiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTcxODIxNTYzNiwiZXhwIjoxNzE4MjE2NTM2LCJpc3MiOiJkaXJlY3R1cyJ9.q9BIiDD0J_VSc0mMaULoSBz4PDcEj8eMZBMWUwzguTM'
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
