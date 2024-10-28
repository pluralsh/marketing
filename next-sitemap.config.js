/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://plural.sh',
  transform: async (_config, path) => ({
    loc: path,
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  }),
}
