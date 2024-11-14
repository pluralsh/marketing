import { forwardRef, useMemo } from 'react'

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

import { GoogleTagManager } from '@next/third-parties/google'
import { MarkdocContextProvider } from '@pluralsh/design-system/dist/markdoc'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import { BreakpointProvider } from '@src/components/contexts/BreakpointProvider'
import DocSearchStyles from '@src/components/DocSearchStyles'
import {
  type FooterVariant,
  type HeaderVariant,
} from '@src/components/FooterFull'
import GlobalStyles from '@src/components/GlobalStyles'
import PrimaryPage from '@src/components/PrimaryPage'
import { type GlobalProps } from '@src/utils/getGlobalProps'

// Styles
import '@src/styles/globals.css'
import 'swiper/css'
import 'swiper/css/autoplay'

export type GlobalPageProps = {
  metaTitle?: string
  metaTitleFull?: string
  metaDescription?: string
  footerVariant?: FooterVariant
  headerVariant?: HeaderVariant
  showHeaderBG?: boolean
}

type MyAppProps = AppProps<GlobalPageProps & { globalProps: GlobalProps }>

export type MarkdocHeading = {
  id?: string
  level?: number
  title?: string
}

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

function App({ Component, pageProps }: MyAppProps) {
  const { globalProps, ...pgProps } = pageProps
  const gProps = {
    // @ts-expect-error
    swrConfig: {
      fallback: {},
    },
    ...pageProps.globalProps,
  }
  const app = (
    <>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
      <CssBaseline />
      <PluralGlobalStyle />
      <GlobalStyles />
      <DocSearchStyles />
      <PrimaryPage
        globalProps={globalProps}
        pageProps={pgProps}
      >
        <Component {...pageProps} />
      </PrimaryPage>
    </>
  )

  const navContextVal = useMemo<NavigationContextValue>(
    () => ({ useNavigate, usePathname, Link }),
    []
  )

  return (
    <MarkdocContextProvider value={{ variant: 'docs' }}>
      <NavigationContextProvider value={navContextVal}>
        <SWRConfig value={gProps.swrConfig}>
          <BreakpointProvider>
            <ThemeProvider theme={honorableTheme}>
              <StyledThemeProvider theme={styledTheme}>
                <FillLevelProvider value={0}>{app}</FillLevelProvider>
              </StyledThemeProvider>
            </ThemeProvider>
          </BreakpointProvider>
        </SWRConfig>
      </NavigationContextProvider>
    </MarkdocContextProvider>
  )
}

export default App
