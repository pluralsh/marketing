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

import { MarkdocContextProvider } from '@pluralsh/design-system/dist/markdoc'
import { SSRProvider } from 'react-aria'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import { BreakpointProvider } from '@src/components/contexts/BreakpointProvider'
import DocSearchStyles from '@src/components/DocSearchStyles'
import { type FooterVariant } from '@src/components/FooterFull'
import GlobalStyles from '@src/components/GlobalStyles'
import { usePosthog } from '@src/components/hooks/usePosthog'
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
}

type MyAppProps = AppProps<GlobalPageProps & { globalProps: GlobalProps }>

export type MarkdocHeading = {
  id?: string
  level?: number
  title?: string
}

const docsStyledTheme = { ...styledTheme, ...{ docs: { topNavHeight: 72 } } }

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
  usePosthog()
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
    <SSRProvider>
      <MarkdocContextProvider value={{ variant: 'docs' }}>
        <NavigationContextProvider value={navContextVal}>
          <SWRConfig value={gProps.swrConfig}>
            <BreakpointProvider>
              <ThemeProvider theme={honorableTheme}>
                <StyledThemeProvider theme={docsStyledTheme}>
                  <FillLevelProvider value={0}>{app}</FillLevelProvider>
                </StyledThemeProvider>
              </ThemeProvider>
            </BreakpointProvider>
          </SWRConfig>
        </NavigationContextProvider>
      </MarkdocContextProvider>
    </SSRProvider>
  )
}

export default App
