import { URLS } from '@/content/site'

export const flowLinks = {
  docs: `${URLS.docs}plural-features/flows`,
  previews: `${URLS.docs}plural-features/flows/preview-environments`,
  announcement:
    'https://www.plural.sh/blog/introducing-flows-your-teams-microservice-command-center/',
}

export const previewDemoVideo = {
  id: '9hoiQnkgnzQ',
  title: 'Plural Flows preview environments demo',
}

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
    title: 'A preview for every PR',
    body: 'Each pull request gets its own near clone of dev, torn down when the PR closes.',
    href: '#previews',
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

export const flowPreviews = [
  {
    pr: 915,
    host: 'payments-pr-915.dev.acme.io',
    sha: 'c7e1f04',
    status: 'ready',
  },
  {
    pr: 918,
    host: 'payments-pr-918.dev.acme.io',
    sha: '3b9d2aa',
    status: 'deploying',
  },
] as const

export const previewBenefits = [
  {
    icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z',
    title: 'A stable dev environment',
    body: 'In-flight branches stop trampling the shared dev environment, a common failure in large organizations.',
  },
  {
    icon: 'M4 5h16v14H4z M4 9h16 M9 9v10',
    title: 'Test changes in isolation',
    body: 'Each preview runs only the code in its branch, so a failure points at that change and nothing else.',
  },
  {
    icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    title: 'Safe schema migrations',
    body: 'Add a database fork to the preview to test migrations without corrupting shared dev data.',
  },
]

export const previewTemplateYaml = `apiVersion: deployments.plural.sh/v1alpha1
kind: PreviewEnvironmentTemplate
metadata:
  name: payments
spec:
  flowRef:
    name: payments
  referenceServiceRef: # the dev service to clone
    name: payments-api-dev
    namespace: payments
  template:
    namespace: "payments-pr-{{ pr.number }}"
    name: "payments-pr-{{ pr.number }}"
    syncConfig:
      deleteNamespace: true # clean up when the PR closes
    helm:
      values:
        image:
          tag: "sha-{{ commitSha | slice: 0, 7 }}"
        ingress:
          hosts:
            - host: payments-pr-{{ pr.number }}.dev.acme.io`

export const previewPrBody = `Plural Flow: payments
Plural Preview: payments`

export const previewGuardrails = [
  'Previews only deploy to the same cluster as the service they clone.',
  'Namespaces must be prefixed by the source service’s namespace, so a preview can’t jump tenants.',
  'The Flow’s permission bindings apply to every preview it creates.',
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
    question: 'How do I turn on preview environments?',
    answer:
      'Register a PreviewEnvironmentTemplate that points at the dev service to clone, then add the Plural Flow and Plural Preview annotations to a pull request’s description. Plural deploys the preview, updates it on every push, and deletes it when the PR closes.',
  },
  {
    question: 'Where do preview environments run?',
    answer:
      'On the same cluster as the service they clone, in a namespace prefixed by that service’s namespace. That keeps previews inside their tenant while preventing them from overwriting the original service.',
  },
]
