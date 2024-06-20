import {
  ProtectedClusterIcon,
  UpdatesIcon,
  WarningShieldIcon,
} from '@pluralsh/design-system'

export type FeatureConfig = {
  title: string
  description: string
  icon: React.ReactElement
  linkTitle: string
  linkUrl: string
}

export type SolutionConfig = {
  title: string
  description: string
  features: FeatureConfig[]
}

export const getSolutionConfigs: () => Record<string, SolutionConfig> = () => ({
  'plural-for-healthcare': {
    title: 'Plural for healthcare',
    description:
      'Automate and simplify Kubernetes lifecycle management for DevOps and platform engineering teams — even in strict operating environments.',
    featureTitle: 'Strategic deployment in healthcare',
    features: [
      {
        title: 'Enhanced security and compliance',
        description:
          'Kubernetes fleet management solutions facilitate robust security measures and compliance mechanisms, ensuring that clusters and services are protected according to the highest standards.  ',
        icon: (
          <WarningShieldIcon
            size={30}
            color="icon-primary"
          />
        ),
        linkTitle: 'Explore policy enforcement',
        linkUrl: '',
      },
      {
        title: 'Operational excellence with multiple clusters',
        description:
          'Managing a vast array of Kubernetes clusters is streamlined through advanced management tools, making it easier for healthcare organizations to access, debug, and assign permissions with operational consistency across their cluster estate.',
        icon: (
          <ProtectedClusterIcon
            size={30}
            color="icon-primary"
          />
        ),
        linkTitle: 'View the K8s dashboard',
        linkUrl: '',
      },
      {
        title: 'Efficiency in managing add-ons',
        description:
          'The complexity of upgrading clusters and their associated multiple add-ons is significantly reduced, ensuring that these enhancements do not compromise the availability or security of deployed services.',
        icon: (
          <UpdatesIcon
            size={30}
            color="icon-primary"
          />
        ),
        linkTitle: 'Discover automatic upgrades',
        linkUrl: '',
      },
    ],
  },
})
