import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
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
