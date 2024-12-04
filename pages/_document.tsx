// pages/_document.js
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { ServerStyleSheet } from 'styled-components'

// https://styled-components.com/docs/advanced
// https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  // Using gtag with Cookiebot: https://support.cookiebot.com/hc/en-us/articles/360003979074-Using-Google-Gtag-with-Cookiebot
  render() {
    return (
      <Html data-theme="dark">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
          />
          <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="c6718f17-016b-4d02-9bc2-9f1467f610fb"
            data-blockingmode="manual"
            strategy="beforeInteractive"
            data-widget-position="bottom-right"
          />
          <Script
            type="text/javascript"
            src="//js.hsforms.net/forms/embed/v2.js"
          />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
