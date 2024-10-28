/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://plural.sh',
  transform: async (_config, path) => ({
    loc: path,
    changefreq: 'daily',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  }),
}
