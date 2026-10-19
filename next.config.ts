import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production'
    const sharedSecurityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ]
    const frameDenyHeaders = [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
    ]

    return [
      {
        // Exclude the workbench demo so it can be embedded in an iframe.
        // Otherwise this rule's deny headers get combined onto that route,
        // leaving a stray X-Frame-Options: DENY that blocks framing.
        source: '/((?!workbench-demo).*)',
        headers: [...sharedSecurityHeaders, ...frameDenyHeaders],
      },
      // Allow embedding the interactive workbench demo on our own pages.
      {
        source: '/workbench-demo/:path*',
        headers: isDev
          ? [
              ...sharedSecurityHeaders,
              {
                key: 'Content-Security-Policy',
                value:
                  "frame-ancestors 'self' http://localhost:* http://127.0.0.1:*",
              },
            ]
          : [
              ...sharedSecurityHeaders,
              { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
              {
                key: 'Content-Security-Policy',
                value: "frame-ancestors 'self'",
              },
            ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://docs.plural.sh/',
        permanent: true,
      },
      // Superseded by the redesign's homepage and edge solution page.
      { source: '/home-animated', destination: '/', permanent: true },
      {
        source: '/edge-kubernetes',
        destination: '/solutions/edge',
        permanent: true,
      },
      {
        source: '/products/operations-console',
        destination: '/products/observability',
        permanent: true,
      },
      {
        source: '/contact-sales',
        destination: 'https://www.plural.sh/contact',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
