/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line function-paren-newline
const withMarkdoc = require('@markdoc/next.js')(
  /* config: https://markdoc.io/docs/nextjs#options */ {
    schemaPath: './src/markdoc',
  }
)

module.exports = () => {
  const plugins = [withMarkdoc]

  return plugins.reduce((acc, next) => next(acc), {
    transpilePackages: [
      '@pluralsh/design-system',
      'honorable',
      'honorable-theme-default',
      'honorable-recipe-mapper',
    ],
    reactStrictMode: false,
    compiler: {
      // https://nextjs.org/docs/advanced-features/compiler#styled-components
      styledComponents: {
        ssr: true,
        displayName: true,
      },
      emotion: true,
    },
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    async redirects() {
      return [
        {
          source: '/hiring-senior-account-executive',
          destination: '/careers/hire/senior-account-executive',
          permanent: true,
        },
      ]
    },
  })
}
