/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.plural.sh',
  generateRobotsTxt: true,
  transform: async (_config, path) => ({
    loc: path,
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  }),
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.plural.sh/blog/sitemap.xml'],
  },
}
