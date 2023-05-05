import { type ComponentProps, forwardRef, useMemo } from 'react'

import {
  FillLevelProvider,
  type NavigationContextLinkProps,
  NavigationContextProvider,
  type NavigationContextValue,
  GlobalStyle as PluralGlobalStyle,
  theme as honorableTheme,
  styledTheme,
} from '@pluralsh/design-system'
import { CssBaseline, ThemeProvider } from 'honorable'
import { type AppProps } from 'next/app'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { until } from '@open-draft/until'
import { MarkdocContextProvider } from '@pluralsh/design-system/dist/markdoc'
import { SSRProvider } from '@react-aria/ssr'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import '@src/styles/globals.css'

import { BreakpointProvider } from '@src/components/BreakpointProvider'
import DocSearchStyles from '@src/components/DocSearchStyles'
import ExternalScripts from '@src/components/ExternalScripts'
import {
  GITHUB_DATA_URL,
  getGithubDataServer,
  isGithubRepoData,
} from '@src/components/GithubStars'
import GlobalStyles from '@src/components/GlobalStyles'
import { usePosthog } from '@src/components/hooks/usePosthog'
import HtmlHead from '@src/components/HtmlHead'
import { MaxWidthLimiter } from '@src/components/MaxWidthLimiter'
import PageFooter from '@src/components/PageFooter'
import { PageHeader } from '@src/components/PageHeader'
import { PagePropsContext } from '@src/components/PagePropsContext'
import { PAGE_TITLE_PREFIX, PAGE_TITLE_SUFFIX, ROOT_TITLE } from '@src/consts'
import { NavDataProvider } from '@src/contexts/NavDataContext'
import { type SiteSettingsQuery } from '@src/generated/graphqlDirectus'

import { getSiteSettings } from '../src/data/getSiteSettings'

import type { MinRepo } from '@src/data/getRepos'

export type GlobalPageProps = { metaTitle?: string; metaDescription?: string }

type MyAppProps = AppProps<GlobalPageProps> & {
  errors: Error[]
  repos: MinRepo[]
  swrConfig: ComponentProps<typeof SWRConfig>['value']
  siteSettings: SiteSettingsQuery['site_settings']
}

export type MarkdocHeading = {
  id?: string
  level?: number
  title?: string
}

const docsStyledTheme = { ...styledTheme, ...{ docs: { topNavHeight: 72 } } }

const Page = styled(MaxWidthLimiter)((_) => ({
  width: '100%',
}))

const useNavigate = () => {
  const router = useRouter()

  return (url) => {
    router.push(url)
  }
}

const usePathname = () => {
  const router = useRouter()

  return router.basePath + (router.asPath.split(/[?#]/)[0] || router.pathname)
}

const Link = forwardRef(
  ({ href, ...props }: NavigationContextLinkProps, ref) => (
    <NextLink
      ref={ref}
      href={href ?? ''}
      {...props}
    />
  )
)

function App({
  Component,
  pageProps = {},
  swrConfig,
  siteSettings = {},
}: MyAppProps) {
  usePosthog()
  const { metaTitle, metaDescription } = pageProps

  const headProps = {
    title: metaTitle
      ? `${PAGE_TITLE_PREFIX}${metaTitle}${PAGE_TITLE_SUFFIX}`
      : ROOT_TITLE,
    description: metaDescription || siteSettings?.og_description || '',
  }

  const navData = siteSettings?.main_nav?.subnav || []

  const app = (
    <>
      <CssBaseline />
      <PluralGlobalStyle />
      <GlobalStyles />
      <DocSearchStyles />
      <PagePropsContext.Provider value={pageProps}>
        <HtmlHead {...headProps} />
        <PageHeader />
        <Page>
          <Component {...pageProps} />
        </Page>
        <ExternalScripts />
        <PageFooter />
      </PagePropsContext.Provider>
    </>
  )

  const navContextVal = useMemo<NavigationContextValue>(
    () => ({ useNavigate, usePathname, Link }),
    []
  )

  return (
    <SSRProvider>
      <MarkdocContextProvider value={{ variant: 'docs' }}>
        <NavigationContextProvider value={navContextVal}>
          <SWRConfig value={swrConfig}>
            <NavDataProvider value={navData}>
              <BreakpointProvider>
                <ThemeProvider theme={honorableTheme}>
                  <StyledThemeProvider theme={docsStyledTheme}>
                    <FillLevelProvider value={0}>{app}</FillLevelProvider>
                  </StyledThemeProvider>
                </ThemeProvider>
              </BreakpointProvider>
            </NavDataProvider>
          </SWRConfig>
        </NavigationContextProvider>
      </MarkdocContextProvider>
    </SSRProvider>
  )
}

App.getInitialProps = async () => {
  const { data: githubData, error: githubError } = await until(() =>
    getGithubDataServer()
  )
  const swrFallback = {}

  const siteSettings = await getSiteSettings()

  if (isGithubRepoData(githubData)) {
    swrFallback[GITHUB_DATA_URL] = githubData
  }

  return {
    swrConfig: {
      fallback: swrFallback,
    },
    siteSettings,
    errors: [...(githubError ? [githubError] : [])],
  }
}

export default App
