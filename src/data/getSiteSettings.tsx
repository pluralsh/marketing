import { type NavList } from '@src/contexts/NavDataContext'
import { type ProductPageTinyFragment } from '@src/generated/graphqlDirectus'

type Solution = {
  slug?: string | null
  nav_title?: string | null
  category?: string | null
}

export const getSiteSettings = (
  solutions?: Solution[],
  products?: ProductPageTinyFragment[]
) => ({
  og_description:
    'Open-source application deployment, faster than ever without sacrificing compliance."',
  partner_logos: {
    items: [
      {
        item: {
          id: '1',
          logo_dark: '/images/partner-logos/logo-coachhub-dark.svg',
          logo_light: '/images/partner-logos/logo-coachhub-light.svg',
          name: 'CoachHub',
          slug: 'coachhub',
          url: 'https://www.coachhub.com/',
          width: 96,
        },
      },
      {
        item: {
          id: '2',
          logo_dark: '/images/partner-logos/logo-digitas-dark.png',
          logo_light: '/images/partner-logos/logo-digitas-light.png',
          name: 'Digitas',
          slug: 'digitas',
          url: 'https://www.digitas.com/',
          width: 60,
        },
      },
      {
        item: {
          id: '3',
          logo_dark: '/images/partner-logos/logo-fnatic-dark.svg',
          logo_light: '/images/partner-logos/logo-fnatic-light.svg',
          name: 'Fnatic',
          slug: 'fnatic',
          url: 'https://fnatic.com/',
          width: 52,
        },
      },
      {
        item: {
          id: '4',
          logo_dark: '/images/partner-logos/logo-fsn-dark.png',
          logo_light: '/images/partner-logos/logo-fsn-light.png',
          name: 'Fsn',
          slug: 'fsn',
          url: 'https://www.fsncapital.com/',
          width: 58,
        },
      },
      {
        item: {
          id: '5',
          logo_dark: '/images/partner-logos/logo-justos-dark.png',
          logo_light: '/images/partner-logos/logo-justos-light.png',
          name: 'Justos',
          slug: 'justos',
          url: 'https://www.justos.com.br/',
          width: 92,
        },
      },
      {
        item: {
          id: '6',
          logo_dark: '/images/partner-logos/logo-mott-mac-dark.png',
          logo_light: '/images/partner-logos/logo-mott-mac-light.png',
          name: 'Mot Mac',
          slug: 'mot-mac',
          url: 'https://www.mottmac.com/',
          width: 58,
        },
      },
    ],
  },
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
  promo_banner_content: '',
  promo_banner_url: '',
})

export type PartnerLogos = {
  items: {
    item: {
      id: string
      logo_dark: string
      logo_light: string
      name: string
      slug: string
      url: string
      width: number
    }
  }[]
}

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
