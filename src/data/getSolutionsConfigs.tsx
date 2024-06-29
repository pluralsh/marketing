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
  downloadSectionTitle: string
  downloadSectionDescription: string
}

export function getFeatureIcon(iconName?: string | null) {
  switch (iconName) {
    case 'WarningShieldIcon':
      return <WarningShieldIcon color="icon-primary" />
    case 'ProtectedClusterIcon':
      return <ProtectedClusterIcon color="icon-primary" />
    case 'UpdatesIcon':
      return <UpdatesIcon color="icon-primary" />
    case 'EyeIcon':
      return <EyeIcon color="icon-primary" />
    default:
      return <WarningShieldIcon color="icon-primary" />
  }
}
