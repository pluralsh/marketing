import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { JetBrains_Mono, Newsreader } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'

import { OpenAIPixelPageView } from '@/components/OpenAIPixelPageView'
import { cn } from '@/utils/cn'
import { baseMetadata } from '@/utils/metadata'
import { GoogleTagManager } from '@next/third-parties/google'

import '../globals.css'

export const metadata = baseMetadata

const articulat = localFont({
  variable: '--font-articulat',
  src: [
    {
      path: '../Articulat-Normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../Articulat-NormalOblique.woff2',
      weight: '400',
      style: 'oblique',
    },
    {
      path: '../Articulat-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()])

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={cn(
        'scroll-smooth',
        articulat.variable,
        newsreader.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="antialiased">
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={process.env.NEXT_PUBLIC_COOKIEBOT_ID?.trim()}
          data-blockingmode="auto"
          data-widget-position="bottom-right"
          strategy="beforeInteractive"
        />
        <Script
          id="openai-pixel-bootstrap"
          strategy="beforeInteractive"
        >
          {`window.oaiq = window.oaiq || function () {
  (window.oaiq.q = window.oaiq.q || []).push(arguments);
};
oaiq("init", { pixelId: "2kfiGLmQAM27GnVGNpy5UL" });`}
        </Script>
        <Script
          id="openai-pixel-sdk"
          async
          src="https://bzrcdn.openai.com/sdk/oaiq.min.js"
          strategy="afterInteractive"
        />
        <NextIntlClientProvider messages={messages}>
          <OpenAIPixelPageView />
          {children}
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
