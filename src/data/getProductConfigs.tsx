import {
  ApiIcon,
  ArchitectureIcon,
  CheckIcon,
  CliIcon,
  ClusterIcon,
  CompatibilityIcon,
  ComplianceIcon,
  DeploymentIcon,
  EyeIcon,
  FiltersIcon,
  GitHubIcon,
  GitMergeIcon,
  GlobeIcon,
  KubernetesIcon,
  PeopleIcon,
  PrMergedIcon,
  PrQueueIcon,
  ProtectedClusterIcon,
  ShieldOutlineIcon,
  TagIcon,
  TerraformIcon,
  WarningShieldIcon,
} from '@pluralsh/design-system'

import {
  ClusterUpgradeNavIcon,
  ContinuousDeploymentNavIcon,
  GlobalServicesNavIcon,
  KubernetesDashboardNavIcon,
  NamespaceNavIcon,
  PolicyEnforcementNavIcon,
  PrAutomationNavIcon,
  TerraformStacksNavIcon,
} from '@src/components/menu/ProductNavIcons'

export type FeatureConfig = {
  title: string
  description: string
  icon: React.ReactElement
  image: string
}

export type ProductConfig = {
  title: string
  description: string
  navIcon: React.ReactElement
  navDescription: string
  features: FeatureConfig[]
}

export const productsConfigs: Record<string, ProductConfig> = {
  'cluster-upgrade-assistant': {
    title: 'Cluster Upgrade Assistant',
    navIcon: <ClusterUpgradeNavIcon />,
    navDescription: 'A standardized workflow to upgrade clusters.',
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
        icon: <CompatibilityIcon />,
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
  'continuous-deployment': {
    title: 'Continuous Deployment',
    navIcon: <ContinuousDeploymentNavIcon />,
    navDescription: '{...}',
    description:
      'Lorem ipsum dolor sit amet consectutor. Lorem ipsum dolor sit amet consectutor. Lorem ipsum dolor sit amet consectutor. Lorem ipsum dolor sit amet consectutor. Lorem ipsum dolor sit amet consectutor. ',
    features: [
      {
        title: 'Customized Git deployments',
        description:
          'Import your Git repositories and deploy services to clusters. Take advantage of our customization options and centralized secrets management to configure your deployment exactly the way you want it.',
        icon: <DeploymentIcon />,
        image:
          '/images/products/continuous-deployment/continuous-deployment-01.png',
      },
      {
        title: 'Full GitOps strategy',
        description:
          'Leverage our K8s operator or Terraform Provider to implement a full GitOps strategy.',
        icon: <GitHubIcon />,
        image:
          '/images/products/continuous-deployment/continuous-deployment-02.png',
      },
      {
        title: 'Secure and scalable',
        description:
          'Built for security and scale with egress-only networking.',
        icon: <ShieldOutlineIcon />,
        image:
          '/images/products/continuous-deployment/continuous-deployment-03.png',
      },
    ],
  },
  'kubernetes-dashboard': {
    title: 'Kubernetes Dashboard',
    navIcon: <KubernetesDashboardNavIcon />,
    navDescription: 'A unified interface for all your clusters.',
    description:
      'The K8s Dashboard offers a unified interface of your entire fleet clusters. From resource monitoring to log viewing, this feature-rich dashboard ensures efficient and effective Kubernetes operations.',
    features: [
      {
        title: 'Cluster overview',
        description:
          'Displays a complete overview of your Kubernetes cluster, including nodes, namespaces, pods, and services, along with a high-level summary of the cluster’s health and status.',
        icon: <ClusterIcon />,
        image:
          '/images/products/kubernetes-dashboard/kubernetes-dashboard-01.png',
      },
      {
        title: 'RBAC compliant',
        description:
          'Connects directly with your SSO and automatically integrates with Kubernetes RBAC to ensure full security without the need for complex cluster-specific configuration.',
        icon: <ProtectedClusterIcon />,
        image:
          '/images/products/kubernetes-dashboard/kubernetes-dashboard-02.png',
      },
    ],
  },
  'global-services': {
    title: 'Global services',
    navIcon: <GlobalServicesNavIcon />,
    navDescription: 'Streamline the setup process for new clusters.',
    description:
      'Streamline the setup process for new clusters, ensuring they all adhere to a consistent Software Bill of Materials (SBOM) across your entire Kubernetes environment with Global Services.',
    features: [
      {
        title: 'Please grant me a title, sire',
        description:
          'Ensure your entire fleet receives a standardized SBOM, add-ons like external-dns, cert manager, ingress controllers, Istio can be managed with a just a few lines of YAML',
        icon: <GlobeIcon />,
        image: '/images/products/global-services/global-services-01.png',
      },
      {
        title: 'Please grant me a title, sire',
        description:
          'Target services to groups of clusters in the fleet via a robust tagging system or by Kubernetes Distribution',
        icon: <TagIcon />,
        image: '/images/products/global-services/global-services-02.png',
      },
      {
        title: 'Please grant me a title, sire',
        description:
          'Leverage on-the-fly templating of services to reduce the need for constant reconfiguration per-cluster for things like IAM role annotations, hostnames, etc.',
        icon: <FiltersIcon />,
        image: '/images/products/global-services/global-services-03.png',
      },
    ],
  },
  'pr-automation': {
    title: 'PR automation-driven pipelining',
    navIcon: <PrAutomationNavIcon />,
    navDescription: 'Automate code deployment for your clusters.',
    description:
      'Streamline and automate the process of integrating and deploying code changes across your Kubernetes fleet. By leveraging pull requests (PRs) as the trigger for automation pipelines, Plural’s PR automation allows you to automate your release process while maintaining full auditability within Git.',
    features: [
      {
        title: 'Automated GitOps',
        description:
          'Sequentially release changes across dev → staging → prod with PRs to update your GitOps resources at each stage, maintaining a full record in Git and automating away manual work.',
        icon: <PrQueueIcon />,
        image: '/images/products/pr-automation/pr-automation-01.png',
      },
      {
        title: 'Seamless integration',
        description:
          'Integrate with version control systems like GitHub, GitLab, or Bitbucket to monitor pull requests.',
        icon: <GitMergeIcon />,
        image: '/images/products/pr-automation/pr-automation-02.png',
      },
      {
        title: 'Quality and compliance checks',
        description:
          'Incorporate automated testing, linting, security scanning, and compliance checks within the PR pipeline. This ensures that only high-quality, compliant code is merged and deployed to the production environment.',
        icon: <CliIcon />,
        image: '/images/products/pr-automation/pr-automation-03.png',
      },
    ],
  },
  'policy-enforcement': {
    title: 'Policy enforcement with OPA GateKeeper',
    navIcon: <PolicyEnforcementNavIcon />,
    navDescription: 'Define, manage, and enforce policies.',
    description:
      'Plural provides a robust solution for defining, managing, and enforcing policies across the Kubernetes clusters in your fleet. Utilizing the Open Policy Agent (OPA) Gatekeeper, this feature ensures that your clusters adhere to organizational policies and compliance requirements through real-time policy enforcement.',
    features: [
      {
        title: 'Policy enforcement',
        description:
          'Automatically enforce policies at the time of resource creation and modification ensuring that only compliant resources are allowed within the clusters.',
        icon: <WarningShieldIcon />,
        image: '/images/products/policy-enforcement/policy-enforcement-01.png',
      },
      {
        title: 'Real-time compliance',
        description:
          'Monitor and audit cluster activities in real-time to ensure continuous compliance. Generate alerts and logs for any policy violations, providing visibility and control over your Kubernetes environment.',
        icon: <ComplianceIcon />,
        image: '/images/products/policy-enforcement/policy-enforcement-02.png',
      },
    ],
  },
  'namespace-as-a-service': {
    title: 'Namespace-as-a-service',
    navIcon: <NamespaceNavIcon />,
    navDescription: 'Implement a multi-tenant cluster strategy.',
    description:
      'Implement a multi-tenant cluster strategy by providing hardened, pre-configured namespaces via our APIs.',
    features: [
      {
        title: 'Resource management',
        description:
          'Ensure proper resource quotas are in place so tenants do not over-consume resources. ',
        icon: <ArchitectureIcon />,
        image: '/images/products/namespace-naas/namespace-naas-01.png',
      },
      {
        title: 'Easily set permissions',
        description:
          'Add Istio policies, network policies, and baseline RBAC rules, along with any other security measures to restrict inappropriate access throughout the cluster.',
        icon: <PeopleIcon />,
        image: '/images/products/namespace-naas/namespace-naas-02.png',
      },
    ],
  },
  'terraform-stacks': {
    title: 'Terraform stacks',
    navIcon: <TerraformStacksNavIcon />,
    navDescription: 'GitOps strategy around your terraform workflow.',
    description:
      'Implement a GitOps strategy around your Terraform workflow, as well.  Use our API’s to create a reusable Terraform, Pulumi or Ansible stack from any git repository in which the code might live, and we’ll handle the rest to ensure it’s deployed on any commit.',
    features: [
      {
        title: 'GitOps driven',
        description:
          'Integrates with Github and Gitlab to send a Terraform plan in PR to help guide your approval and merge process.',
        icon: <PrMergedIcon />,
        image: '/images/products/terraform-stacks/terraform-stacks-01.png',
      },
      {
        title: 'Harden your terraform posture',
        description:
          'Remove the need for engineers to apply changes locally with admin-equivalent permissions.',
        icon: <TerraformIcon />,
        image: '/images/products/terraform-stacks/terraform-stacks-02.png',
      },
      {
        title: 'Integrated approval workflows',
        description: 'Validate your plans before commit.',
        icon: <CheckIcon />,
        image: '/images/products/terraform-stacks/terraform-stacks-03.png',
      },
      {
        title: 'Kubernetes-specific workflows',
        description:
          'Execute on a cluster that’s network-local to the resources it needs to manage, no more networking headaches to determine how to automate your Terraform or needing to run locally.',
        icon: <KubernetesIcon />,
        image: '/images/products/terraform-stacks/terraform-stacks-04.png',
      },
      {
        title: 'Stop issues before they happen',
        description:
          'Watch relevant alerts in Datadog, NewRelic, etc and auto-cancel runs if an incident occurs during a long-lasting terraform apply.',
        icon: <EyeIcon />,
        image: '/images/products/terraform-stacks/terraform-stacks-04.png',
      },
    ],
  },
}
