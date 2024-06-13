import { ApiIcon, CookieIcon, WarningShieldIcon } from '@pluralsh/design-system'

export type FeatureConfig = {
  title: string
  description: string
  icon: React.ReactElement
  image: string
}

export type ProductConfig = {
  title: string
  description: string
  features: FeatureConfig[]
}

export const productsConfigs: Record<string, ProductConfig> = {
  'cluster-upgrade-assistant': {
    title: 'Cluster Upgrade Assistant',
    description:
      'Implement a standardized workflow to upgrade clusters safely and with confidence. Leverage our embedded expertise and aggregated open-source data to operationalize the upgrade process at any scale.',
    features: [
      {
        title: 'API deprecation detection',
        description:
          "Ensure that all Kubernetes YAML you're deploying is consistent with the next Kubernetes version by leveraging the deprecation scanning integrated within our CD toolchain.",
        icon: <ApiIcon />,
        image:
          '/images/products/cluster-upgrade-assistant/cluster-upgrade-01.png',
      },
      {
        title: 'Check add-on compatibilities',
        description:
          'Our agent discovers and verifies that all known third-party add-ons are supported on the next Kubernetes version.  Extend our dataset with your own internal data using a few CRDs.',
        icon: <CookieIcon />,
        image:
          '/images/products/cluster-upgrade-assistant/cluster-upgrade-02.png',
      },
      {
        title: 'Check add-on mutual incompatibilities',
        description:
          'Use the suggested version for each add-on to resolve mutual incompatibilities between Kubernetes operators. Circular dependencies are hard, let us make them easier.',
        icon: <WarningShieldIcon />,
        image:
          '/images/products/cluster-upgrade-assistant/cluster-upgrade-03.png',
      },
    ],
  },
}
