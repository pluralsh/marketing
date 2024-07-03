import { getProductsConfigs } from './getProductConfigs'

type Solution = {
  slug?: string | null
  title?: string | null
}

export const getSiteSettings = (solutions?: Solution[]) => ({
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
    subnav: [
      {
        id: '1',
        link: {
          id: '1',
          title: 'Product',
          url: '/kubernetes-fleet-management',
        },
        subnav: getProductSubnav(),
      },
      {
        id: '2',
        link: {
          id: '2',
          title: 'Solutions',
          url: '/solution',
        },
        subnav: getSolutionSubnav(solutions),
      },
      {
        id: '3',
        link: {
          id: '3',
          title: 'Pricing',
          url: '/pricing',
        },
      },
      {
        id: '4',
        link: {
          id: '4',
          title: 'Resources',
          url: '/resources',
        },
        subnav: [
          {
            id: '4-1',
            link: {
              id: '4-1',
              title: 'Docs',
              url: 'https://docs.plural.sh',
            },
          },
          {
            id: '4-2',
            link: {
              id: '4-2',
              title: 'Blog',
              url: 'https://www.plural.sh/blog',
            },
          },
          {
            id: '4-3',
            link: {
              id: '4-3',
              title: 'Releases',
              url: 'https://github.com/pluralsh/plural/releases',
            },
          },
        ],
      },

      {
        id: '6',
        link: {
          id: '6',
          title: 'Company',
          url: '/company',
        },
        subnav: [
          {
            id: '6-1',
            link: {
              id: '6-1',
              title: 'About',
              url: '/about',
            },
          },
          //   {
          //     id: '6-3',
          //     link: {
          //       id: '6-3',
          //       title: 'Careers',
          //       url: '/careers',
          //     },
          //   },
          {
            id: '6-4',
            link: {
              id: '6-4',
              title: 'Contact',
              url: '/contact',
            },
          },
          {
            id: '6-5',
            link: {
              id: '6-5',
              title: 'Community',
              url: '/community',
            },
          },
        ],
      },
    ],
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

function getProductSubnav() {
  return Object.keys(getProductsConfigs()).map((productKey, i) => ({
    id: productKey,
    link: {
      id: `${productKey}-${i}`,
      title: getProductsConfigs()[productKey].title,
      url: `/products/${productKey}`,
    },
  }))
}

function getSolutionSubnav(solutions?: Solution[]) {
  if (!solutions || !solutions.length) return undefined

  return solutions.map((solution, i) => ({
    id: solution.slug || '',
    link: {
      id: `${solution.slug}-${i}`,
      title: solution.title,
      url: `/solutions/${solution.slug}`,
    },
  }))
}
