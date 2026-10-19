import { URLS } from '@/content/site'

export const flowLinks = {
  docs: `${URLS.docs}plural-features/flows`,
  mcp: `${URLS.docs}plural-features/flows/mcp`,
  previews: `${URLS.docs}plural-features/flows/preview-environments`,
  announcement:
    'https://www.plural.sh/blog/introducing-flows-your-teams-microservice-command-center/',
}

export const flowDemoVideo = { id: '1OX8OXEilyg', title: 'Plural Flows demo' }

export const flowAnchors = [
  {
    eyebrow: '01',
    title: 'Everything in one place',
    body: 'Services, pipelines, pull requests, and alerts for the microservices your team owns.',
    href: '#manage',
  },
  {
    eyebrow: '02',
    title: 'Governance built in',
    body: 'Set permissions once at the Flow and they propagate to every component.',
    href: '#govern',
  },
  {
    eyebrow: '03',
    title: 'AI scoped to your services',
    body: 'Flow Chat and automated troubleshooting only search inside the Flow’s boundary.',
    href: '#troubleshoot',
  },
]

export const flowServices = [
  { name: 'payments-api', cluster: 'prod-use1', status: 'degraded' },
  { name: 'ledger-worker', cluster: 'prod-use1', status: 'healthy' },
  { name: 'checkout-web', cluster: 'prod-use1', status: 'healthy' },
  { name: 'fraud-scorer', cluster: 'prod-euw1', status: 'healthy' },
] as const

export const flowPipeline = ['dev', 'staging', 'prod']

export const flowPrs = [
  {
    number: 912,
    title: 'Add retry to settlement webhook',
    state: 'merged 2h ago',
  },
  { number: 915, title: 'Bump stripe-go to v79', state: 'open' },
]

export const troubleshootSteps = [
  'Analyzes the alert and its associated logs',
  'Cross-references recent pull requests from GitHub or GitLab',
  'Identifies the change causing the issue, down to the commit SHA and line',
  'Generates a targeted fix recommendation',
]

export const flowYaml = `apiVersion: deployments.plural.sh/v1alpha1
kind: Flow
metadata:
  name: payments
spec:
  description: Payments team microservices
  bindings:
    read:
      - groupName: payments-readers # mapped from your IdP
    write:
      - groupName: payments-engineers`

export const mcpCalls = [
  { tool: 'postgres.run_query', target: 'ledger-replica', approval: false },
  { tool: 'slack.post_message', target: '#payments-oncall', approval: false },
  { tool: 'postgres.run_migration', target: 'ledger-primary', approval: true },
]

export const insightCells = [
  {
    icon: 'M4 6h16 M4 12h10 M4 18h13',
    title: 'Aggregated logs',
    body: 'Search logs across every service in the Flow without hopping between clusters.',
  },
  {
    icon: 'M4 20V12 M10 20V6 M16 20v-4 M2 20h20',
    title: 'Metrics and heat maps',
    body: 'Spot latency and error-rate regressions with historical context.',
  },
  {
    icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z',
    title: 'Scoped access',
    body: 'Every view respects the Flow’s permission boundary.',
  },
  {
    icon: 'M4 5h16v14H4z M4 9h16 M9 9v10',
    title: 'Preview environments',
    body: 'Spin up a near clone of dev for every pull request, with feedback posted back to the PR.',
  },
]

export const flowFaq = [
  {
    question: 'How is a Flow different from a developer portal?',
    answer:
      'Portals are usually a separate system stitched onto your deployment tooling. A Flow is native to Plural: the services, pipelines, alerts, and permissions it shows are the same ones Plural deploys and enforces.',
  },
  {
    question: 'How are Flows configured?',
    answer:
      'With a Kubernetes custom resource. Define the Flow with a description and permission bindings, then register services and pipelines with a flowRef.',
  },
  {
    question: 'What can the AI see?',
    answer:
      'Only what’s inside the Flow’s boundary: its services, logs, pull requests, and alerts, filtered by the viewer’s permissions. That keeps answers accurate and prevents exposure across teams.',
  },
]
