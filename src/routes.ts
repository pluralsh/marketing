import type { ClientConfig } from '@prismicio/client'

const routes: ClientConfig['routes'] = [
  { type: 'page', path: '/:lang?', uid: 'home' },
  {
    type: 'page',
    // Prismic supports max. 2 levels depth for categories
    path: '/:lang?/:parentcategory?/:category?/:uid',
    resolvers: {
      parentcategory: 'category.parent_category',
      category: 'category',
    },
  },
]

export default routes
