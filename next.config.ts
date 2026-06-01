import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  async headers() {
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
        source: '/:path*',
        headers: [...sharedSecurityHeaders, ...frameDenyHeaders],
      },
      // Allow embedding the interactive workbench demo on our own pages.
      {
        source: '/workbench-demo/:path*',
        headers: [
          ...sharedSecurityHeaders,
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
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
      {
        source: '/contact-sales',
        destination: 'https://www.plural.sh/contact',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
