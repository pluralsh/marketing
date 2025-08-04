import { PrismicPreview } from '@prismicio/next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import localFont from 'next/font/local'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { cn } from '@/utils/cn'
import { GoogleTagManager } from '@next/third-parties/google'

import '../globals.css'

import { repositoryName } from '@/utils/prismicio'

export const Articulat = localFont({
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

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()])

  return (
    <html
      lang={locale}
      className="scroll-smooth"
    >
      <body className={cn('antialiased', Articulat.className)}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <>{children}</>
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
          <Footer />
        </NextIntlClientProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
