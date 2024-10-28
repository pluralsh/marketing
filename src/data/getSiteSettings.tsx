import { getImageUrl } from '@src/consts/routes'
import { type NavList } from '@src/contexts/NavDataContext'
import {
  type ProductPageTinyFragment,
  type SiteSettingsFragment,
} from '@src/generated/graphqlDirectus'

type Solution = {
  slug?: string | null
  nav_title?: string | null
  category?: string | null
}

export const getSiteSettings = (
  siteSettings: SiteSettingsFragment,
  solutions?: Solution[],
  products?: ProductPageTinyFragment[]
) => ({
  og_description: siteSettings.og_description ?? 'Plural',
  og_image: getImageUrl(siteSettings.og_image),
  main_nav: {
    product: {
      id: 'product',
      link: {
        title: 'Product',
        url: '/kubernetes-fleet-management',
      },
      subnav: getProductSubnav(products),
    },
    solutions: {
      id: 'solutions',
      link: {
        title: 'Solutions',
        url: '/solution',
      },
      subnav: getSolutionSubnav(solutions),
    },
    pricing: {
      id: 'pricing',
      link: {
        title: 'Pricing',
        url: '/pricing',
      },
    },
    resources: {
      id: 'resources',
      link: {
        title: 'Resources',
        url: '/resources',
      },
      subnav: [
        {
          id: 'docs',
          link: {
            title: 'Docs',
            url: 'https://docs.plural.sh',
          },
        },
        {
          id: 'blog',
          link: {
            title: 'Blog',
            url: 'https://www.plural.sh/blog',
          },
        },
        {
          id: 'releases',
          link: {
            title: 'Releases',
            url: 'https://github.com/pluralsh/plural/releases',
          },
        },
        {
          id: 'security and compliance',
          link: {
            title: 'Security & Compliance',
            url: 'https://app.secureframe.com/ext/trust-center/plural/',
          },
        },
      ],
    },
    company: {
      id: 'company',
      link: {
        title: 'Company',
        url: '/company',
      },
      subnav: [
        {
          id: 'about',
          link: {
            title: 'About',
            url: '/about',
          },
        },
        {
          id: 'careers',
          link: {
            title: 'Careers',
            url: '/careers',
          },
        },
        {
          id: 'contact',
          link: {
            title: 'Contact',
            url: '/contact',
          },
        },
        {
          id: 'community',
          link: {
            title: 'Community',
            url: '/community',
          },
        },
      ],
    },
  },
})

function getProductSubnav(products?: ProductPageTinyFragment[]): NavList[] {
  if (!products || !products.length) return []

  return products.map((product) => ({
    id: product.slug,
    link: {
      title: product.dropdown_title ?? '',
      description: product.dropdown_description ?? '',
      icon: product.dropdown_icon ?? '',
      url: `/products/${product.slug}`,
    },
  }))
}

function getSolutionSubnav(solutions?: Solution[]) {
  if (!solutions || !solutions.length) return undefined

  return solutions
    .map((solution, i) => ({
      id: solution.slug,
      link: {
        id: `${solution.slug}-${i}`,
        title: solution.nav_title,
        url: `/solutions/${solution.slug}`,
        category: solution.category?.split('_').join(' '),
      },
    }))
    .reverse()
}
