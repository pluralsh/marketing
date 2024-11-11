import { getImageUrl } from '@src/consts/routes'
import { type NavList } from '@src/contexts/NavDataContext'
import {
  type ProductPageTinyFragment,
  type SiteSettingsFragment,
  type SolutionPageTinyFragment,
} from '@src/generated/graphqlDirectus'

export const getSiteSettings = (
  siteSettings: SiteSettingsFragment,
  solutions?: SolutionPageTinyFragment[],
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

function getSolutionSubnav(solutions?: SolutionPageTinyFragment[]) {
  if (!solutions || !solutions.length) return []

  return solutions
    .map((solution) => ({
      id: solution.slug,
      link: {
        title: solution.dropdown_title ?? '',
        icon: solution.dropdown_icon ?? '',
        url: `/solutions/${solution.slug}`,
        category: solution.category?.split('_').join(' '),
      },
    }))
    .reverse()
}
