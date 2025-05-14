import { getImageUrl } from '@src/consts/routes'
import { type NavList } from '@src/contexts/NavDataContext'
import {
  type ProductPageTinyFragment,
  type ResourcePageTinyFragment,
  type SiteSettingsFragment,
  type SolutionPageTinyFragment,
  type WhyPluralPageTinyFragment,
} from '@src/generated/graphqlDirectus'

export const getSiteSettings = (
  siteSettings: SiteSettingsFragment,
  solutions?: SolutionPageTinyFragment[],
  products?: ProductPageTinyFragment[],
  whyPlurals?: WhyPluralPageTinyFragment[],
  resources?: ResourcePageTinyFragment[]
) => ({
  og_title: siteSettings.og_title,
  og_description: siteSettings.og_description,
  og_image: getImageUrl(siteSettings.og_image) ?? '',
  main_nav: {
    product: {
      id: 'product',
      link: {
        title: 'Product',
        url: '/kubernetes-fleet-management',
      },
      subnav: getProductSubnav(products),
    },
    whyPlurals: {
      id: 'whyPlurals',
      link: {
        title: 'Why Plural',
        url: '/why-plural',
      },
      subnav: getWhyPluralSubnav(whyPlurals),
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
      subnav: getResourcesSubnav(resources),
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

function getWhyPluralSubnav(whyPlurals?: WhyPluralPageTinyFragment[]) {
  if (!whyPlurals || !whyPlurals.length) return []

  return whyPlurals.map((whyPlural) => ({
    id: whyPlural.slug,
    link: {
      title: whyPlural.dropdown_title ?? '',
      description: whyPlural.dropdown_description ?? '',
      icon: whyPlural.dropdown_icon ?? '',
      url: `/why-plural/${whyPlural.slug}`,
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

function getResourcesSubnav(resources?: ResourcePageTinyFragment[]) {
  if (!resources || !resources.length) return []

  return resources.map((resource) => ({
    id: resource.slug ?? resource.id,
    link: {
      title: resource.dropdown_title ?? '',
      url: resource.external
        ? resource.url ?? '#'
        : `/resources/${resource.slug}`,
    },
  }))
}
