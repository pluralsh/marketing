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
        // Exclude the workbench demo (always) and, in development, the Slice
        // Machine simulator route so they can be embedded in an iframe.
        // Otherwise this rule's deny headers get combined onto those routes,
        // leaving a stray X-Frame-Options: DENY that blocks framing.
        source: isDev
          ? '/((?!workbench-demo|slice-simulator).*)'
          : '/((?!workbench-demo).*)',
        headers: [...sharedSecurityHeaders, ...frameDenyHeaders],
      },
      // Allow embedding the interactive workbench demo on our own pages.
      // In dev, also allow the Slice Machine UI (other localhost port) so the
      // demo iframe loads inside the nested simulator frames.
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
              { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
            ],
      },
      // Dev-only: let the Slice Machine UI iframe the simulator.
      ...(isDev
        ? [
            {
              source: '/slice-simulator',
              headers: [
                ...sharedSecurityHeaders,
                {
                  key: 'Content-Security-Policy',
                  value: 'frame-ancestors http://localhost:* http://127.0.0.1:*',
                },
              ],
            },
          ]
        : []),
    ]
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://docs.plural.sh/',
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
