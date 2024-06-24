import {
  EyeIcon,
  ProtectedClusterIcon,
  UpdatesIcon,
  WarningShieldIcon,
} from '@pluralsh/design-system'

export type SolutionFeatureConfig = {
  title: string
  description: string
  icon: React.ReactElement
  linkTitle: string
  linkUrl: string
}

type ProblemConfig = {
  title: string
  subtitle: string
  problem: string
  solution: string
}

export type SolutionConfig = {
  title: string
  upperFeaturesTitle: string
  lowerFeaturesTitle: string
  description: string
  upperFeatures: SolutionFeatureConfig[]
  lowerFeatures: SolutionFeatureConfig[]
  problems: ProblemConfig[]
  bottomTitle: string
  bottomDescription: string
}

export const getSolutionConfigs: () => Record<string, SolutionConfig> = () => ({
  'plural-for-healthcare': {
    title: 'Plural for healthcare',
    description:
      'Automate and simplify Kubernetes lifecycle management for DevOps and platform engineering teams — even in strict operating environments.',
    upperFeaturesTitle: 'Strategic deployment in healthcare',
    lowerFeaturesTitle:
      'Innovations in Kubernetes fleet management for healthcare',
    bottomTitle: 'A path forward for healthcare digital infrastructure',
    bottomDescription:
      "The healthcare industry's adoption of Kubernetes fleet management solutions represents a forward-thinking approach to managing digital infrastructure. Learn more in the full e-book.",
    upperFeatures: [
      {
        title: 'Enhanced security and compliance',
        description:
          'Kubernetes fleet management solutions facilitate robust security measures and compliance mechanisms, ensuring that clusters and services are protected according to the highest standards.  ',
        icon: <WarningShieldIcon color="icon-primary" />,
        linkTitle: 'Explore policy enforcement',
        linkUrl: '',
      },
      {
        title: 'Operational excellence with multiple clusters',
        description:
          'Managing a vast array of Kubernetes clusters is streamlined through advanced management tools, making it easier for healthcare organizations to access, debug, and assign permissions with operational consistency across their cluster estate.',
        icon: <ProtectedClusterIcon color="icon-primary" />,
        linkTitle: 'View the K8s dashboard',
        linkUrl: '',
      },
      {
        title: 'Efficiency in managing add-ons',
        description:
          'The complexity of upgrading clusters and their associated multiple add-ons is significantly reduced, ensuring that these enhancements do not compromise the availability or security of deployed services.',
        icon: <UpdatesIcon color="icon-primary" />,
        linkTitle: 'Discover automatic upgrades',
        linkUrl: '',
      },
    ],
    lowerFeatures: [
      {
        title: 'Enterprise-grade deployment pipelines',
        description:
          'Incorporating stringent review and approval processes for changes to the Kubernetes environment, bolstering security and compliance and giving teams confidence in the changes needed in production.',
        icon: <WarningShieldIcon color="icon-primary" />,
        linkTitle: 'Explore policy enforcement',
        linkUrl: '',
      },
      {
        title: 'Visibility across the Kubernetes fleet',
        description:
          'Ensuring that all clusters are running the latest, most secure versions of software without disrupting healthcare operations.',
        icon: <EyeIcon color="icon-primary" />,
        linkTitle: 'Discover automatic upgrades',
        linkUrl: '',
      },
      {
        title: 'Hassle-free upgrades and add-ons',
        description:
          "Offering a bird's-eye view of the entire Kubernetes environment, including health metrics and service performance, to proactively manage and mitigate issues.",
        icon: <UpdatesIcon color="icon-primary" />,
        linkTitle: 'View the K8s dashboard',
        linkUrl: '',
      },
    ],
    problems: [
      {
        title: 'Compliance and data sovereignty',
        subtitle: 'Healthcare challenges',
        problem:
          'The healthcare industry demands adherence to strict regulations governing data privacy and residency.',
        solution:
          "Plural's K8s fleet managmeent offers granular control over data storage and access.",
      },
      {
        title: 'Audit trails and governance',
        subtitle: 'Healthcare challenges',
        problem:
          'Organizations need to maintain operational transparency and regulatory compliance as they grow.',
        solution:
          "Plural's fleet management solutions provide the comprehensive audit trails and other tooling to achieve this level of governance.",
      },
      {
        title: 'Scalability and reliability',
        subtitle: 'Healthcare challenges',
        problem:
          'As healthcare services expand and evolve, theyneed to ensure that their digital services remain reliable and accessible, even under increasing demand. ',
        solution:
          'Plural is designed to scale seamlessly, ensuring your digital services are always reliable and available, no matter the demand.',
      },
    ],
  },
})
