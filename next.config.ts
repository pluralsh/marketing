import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
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
