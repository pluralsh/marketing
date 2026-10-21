import { URLS } from '@/content/site'

export const gitopsDocs = {
  architecture: `${URLS.docs}overview/architecture`,
  globalServices: `${URLS.docs}plural-features/continuous-deployment/global-service`,
  stacks: `${URLS.docs}plural-features/stacks-iac-management`,
  pipelines: `${URLS.docs}plural-features/continuous-deployment/pipelines`,
}

export const gitopsAnchors = [
  {
    eyebrow: '01',
    title: 'Pull-based by design',
    body: 'A thin agent on every cluster pulls its own desired state. No inbound access, no central kubeconfigs.',
    href: '#architecture',
  },
  {
    eyebrow: '02',
    title: 'IaC and Kubernetes, one workflow',
    body: 'Terraform, Pulumi, Ansible, Helm, and raw YAML all reconcile from Git through the same system.',
    href: '#layers',
  },
  {
    eyebrow: '03',
    title: 'Fleet-wide in one commit',
    body: 'Target thousands of clusters by tag, distribution, or provider, with per-cluster config templated in.',
    href: '#fleet',
  },
]

export const architecturePillars = [
  {
    icon: 'M12 2v4 M12 18v4 M4.9 4.9l2.8 2.8 M16.3 16.3l2.8 2.8 M2 12h4 M18 12h4 M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z',
    title: 'Runs anywhere',
    body: 'Manage workloads in any cloud, on-prem, at the edge, or on a laptop running KIND. If it runs Kubernetes, it can join the fleet.',
  },
  {
    icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z M9 12l2 2 4-4',
    title: 'Secure by default',
    body: 'An agent-initiated gRPC tunnel powers the auth proxy, so you get full dashboards without multi-cloud networking or exposed cluster APIs.',
  },
  {
    icon: 'M4 6h16 M4 12h16 M4 18h16 M8 6v12 M16 6v12',
    title: 'Horizontally scalable',
    body: 'The Git cache auto-shards across the control plane, and there are no watch streams or single-master control loops to saturate.',
  },
  {
    icon: 'M7 8l-4 4 4 4 M17 8l4 4-4 4 M14 4l-4 16',
    title: 'Toolchain agnostic',
    body: 'Helm, Kustomize, raw manifests, and Liquid templating today, with an agent built to support whatever comes next.',
  },
]

export const stackYaml = `apiVersion: deployments.plural.sh/v1alpha1
kind: InfrastructureStack
metadata:
  name: eks-prod
  namespace: stacks
spec:
  type: TERRAFORM
  approval: true # plan in the PR, apply on approval
  manageState: true
  repositoryRef:
    name: infra
    namespace: infra
  clusterRef:
    name: mgmt-use1 # runs next to the resources it manages
    namespace: infra
  git:
    ref: main
    folder: terraform/eks-prod`

export const terraformLines = [
  'resource "plural_cluster" "this" {',
  '  name = "eks-prod"',
  '  tags = { fabric = "eks" }',
  '  metadata = jsonencode({',
  '    domain             = "prod.acme.dev"',
  '    externaldnsRoleArn = module.iam.arn',
  '  })',
  '}',
]

export const liquidLines = [
  'domainFilters:',
  '  - {{ cluster.metadata.domain }}',
  'serviceAccount:',
  '  annotations:',
  '    eks.amazonaws.com/role-arn: >-',
  '      {{ cluster.metadata.externaldnsRoleArn }}',
]

export const globalServiceYaml = `apiVersion: deployments.plural.sh/v1alpha1
kind: GlobalService
metadata:
  name: external-dns
  namespace: infra
spec:
  tags:
    fabric: eks # every EKS cluster, now and in the future
  template:
    git:
      url: git@github.com:acme/infra.git
      ref: main
      folder: helm-values
    helm:
      chart: externaldns
      version: 6.31.4
      valuesFiles:
        - externaldns.yaml.liquid`

export const hierarchy = [
  { depth: 0, name: 'Project', detail: 'team boundary · RBAC root' },
  { depth: 1, name: 'Stack', detail: 'Terraform · Pulumi · Ansible' },
  { depth: 1, name: 'Cluster', detail: 'EKS · AKS · GKE · k3s · on-prem' },
  { depth: 2, name: 'Service', detail: 'Helm · Kustomize · YAML' },
]

export const pipelineStages = [
  { name: 'dev', clusters: 12, status: 'healthy', done: true },
  { name: 'staging', clusters: 48, status: 'sentinel passed', done: true },
  { name: 'prod', clusters: 940, status: 'awaiting approval', done: false },
]

export const gitopsFaq = [
  {
    question: 'Does Plural need network access to my clusters?',
    answer:
      'No. The deployment agent on each cluster initiates every connection and polls the control plane for changes. Even the dashboard and auth proxy run over a channel the agent opens, so cluster APIs never need to be exposed.',
  },
  {
    question: 'Which infrastructure-as-code tools are supported?',
    answer:
      'Terraform, Pulumi, and Ansible are supported natively, and custom stacks let you bring any other toolchain. Plans are posted to pull requests, and runs execute on a cluster close to the resources they manage.',
  },
  {
    question: 'How does this work for edge and on-prem clusters?',
    answer:
      'Because agents pull, a cluster behind NAT, a firewall, or an intermittent link simply catches up when it can reach the control plane. Lightweight distributions like k3s are fully supported.',
  },
  {
    question: 'Can we self-host the control plane?',
    answer:
      'Yes. Run Plural as a managed service, or deploy the control plane onto any Kubernetes cluster you designate as your management cluster.',
  },
]
