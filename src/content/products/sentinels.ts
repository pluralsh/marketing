import { URLS } from '@/content/site'

export const sentinelLinks = {
  docs: `${URLS.docs}plural-features/plural-ai/sentinels`,
  announcement:
    'https://www.plural.sh/blog/introducing-plural-sentinels-automated-infrastructure-validation-for-kubernetes/',
}

export const sentinelAnchors = [
  {
    eyebrow: '01',
    title: 'Replace the checklist',
    body: 'Package the validation your senior SREs do by hand into a repeatable test.',
    href: '#checks',
  },
  {
    eyebrow: '02',
    title: 'GitOps native, API first',
    body: 'Defined as a CRD in Git, triggered from the UI, CI, or Plural pipelines.',
    href: '#gitops',
  },
  {
    eyebrow: '03',
    title: 'Audit-ready by default',
    body: 'Structured JUnit results, stored and retrievable when the auditor asks.',
    href: '#compliance',
  },
]

export const sentinelChecks = [
  {
    name: 'console-logs',
    type: 'LOG',
    result: 'pass',
    detail: '3 errors found, all match known-noise rules',
  },
  {
    name: 'ingress-health',
    type: 'KUBERNETES',
    result: 'pass',
    detail: 'ingress-nginx healthy on 48/48 clusters',
  },
  {
    name: 'integration-tests',
    type: 'INTEGRATION_TEST',
    result: 'fail',
    detail: '47/48 clusters passed',
  },
] as const

export const ruleFile = [
  '# logrule.md',
  'Ignore "leader election lost" from cert-manager',
  'if it recovers within 30s.',
  '',
  'Fail on any x509 or certificate expiry error.',
  'Fail if external-dns reports throttling for',
  'more than 2 minutes.',
]

export const logLines = [
  {
    ns: 'kube-system',
    text: 'coredns: i/o timeout 10.0.0.2:53',
    verdict: 'ignored',
  },
  { ns: 'cert-manager', text: 'leader election lost', verdict: 'ignored' },
  {
    ns: 'external-dns',
    text: 'Throttling: rate exceeded',
    verdict: 'watching',
  },
]

export const integrationTests = [
  { name: 'pods schedule and start', passed: true },
  { name: 'PVCs bind and mount', passed: true },
  { name: 'pod-to-pod networking', passed: true },
  { name: 'service DNS resolution', passed: true },
  { name: 'custom: payments smoke test', passed: true },
]

export const sentinelYaml = `apiVersion: deployments.plural.sh/v1alpha1
kind: Sentinel
metadata:
  name: k8s-upgrade
spec:
  description: Baseline health after a Kubernetes upgrade
  repositoryRef:
    name: infra
    namespace: infra
  git:
    ref: main
    folder: rules
  checks:
    - name: console-logs
      type: LOG
      ruleFile: logrule.md
      configuration:
        log:
          query: error
          duration: 5m
          namespaces: [cert-manager, external-dns, kube-system]
    - name: integration-tests
      type: INTEGRATION_TEST
      configuration:
        integrationTest:
          format: JUNIT
          tags:
            tier: dev`

export const triggers = [
  {
    title: 'Plural console',
    body: 'Run any sentinel on demand from AI → Sentinels.',
  },
  {
    title: 'CI pipelines',
    body: 'Call the API from GitHub Actions, GitLab, or any CI system.',
  },
  {
    title: 'Plural pipelines',
    body: 'Gate promotions between environments on a passing run.',
  },
]

export const sentinelUseCases = [
  {
    icon: 'M12 19V5 M5 12l7-7 7 7',
    title: 'Kubernetes upgrades',
    body: 'Prove a version bump introduced no regressions before it reaches production.',
  },
  {
    icon: 'M4 12a8 8 0 0 1 14-5.3 M20 12a8 8 0 0 1-14 5.3 M18 3v4h-4 M6 21v-4h4',
    title: 'Operator changes',
    body: 'Validate cross-cutting upgrades like Istio or cert-manager across every cluster they touch.',
  },
  {
    icon: 'M5 4a2 2 0 1 0 0 4a2 2 0 1 0 0-4z M19 16a2 2 0 1 0 0 4a2 2 0 1 0 0-4z M7 6h6a4 4 0 0 1 4 4v6',
    title: 'Network reconfigurations',
    body: 'Confirm CNI, ingress, and DNS changes are safe while there is still time to roll back.',
  },
]

export const sentinelFaq = [
  {
    question: 'Why use AI for infrastructure testing?',
    answer:
      'Confirming infrastructure health usually means reading several text sources, like logs and resource status, and applying judgment. That can’t be done deterministically, so Sentinels use governed AI guided by rule files you write and version in Git. Integration tests cover the deterministic paths.',
  },
  {
    question: 'Can I bring my own tests?',
    answer:
      'Yes. Sentinels ship with a default suite that exercises scheduling, storage, and networking, and the runner can execute your own suites, such as Terratest, across any set of clusters.',
  },
  {
    question: 'How do results reach our compliance tooling?',
    answer:
      'Every run produces structured output in formats like JUnit that you can pull from the API and forward to whatever system your change-management process uses. Results stay stored and retrievable later.',
  },
]
