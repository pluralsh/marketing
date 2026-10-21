import { URLS } from '@/content/site'

export const agentRuntimeLinks = {
  docs: `${URLS.docs}plural-features/plural-ai/ai-agent`,
  configure: `${URLS.docs}plural-features/plural-ai/ai-agent/configure-agent`,
  announcement:
    'https://www.plural.sh/blog/introducing-the-plural-agent-runtime/',
}

export const agentRuntimeAnchors = [
  {
    eyebrow: '01',
    title: 'Inside your perimeter',
    body: 'Every run is an isolated container on your cluster, using keys and models you provide.',
    href: '#secure',
  },
  {
    eyebrow: '02',
    title: 'Verifies its own work',
    body: 'Docker-in-Docker, Compose, and headless Chromium let agents test before they open a PR.',
    href: '#verify',
  },
  {
    eyebrow: '03',
    title: 'A PR, not a push',
    body: 'Full run history for every command, and a pull request your team reviews.',
    href: '#workflow',
  },
]

export const runSteps = [
  { kind: 'plan', text: 'Bump golang.org/x/net to v0.38.0 in go.mod' },
  { kind: 'cmd', text: 'go get golang.org/x/net@v0.38.0 && go mod tidy' },
  { kind: 'cmd', text: 'docker build -t payments-api:agent .' },
  { kind: 'cmd', text: 'docker compose up -d postgres redis' },
  { kind: 'cmd', text: 'go test ./...' },
  { kind: 'ok', text: '142 passed · 0 failed' },
] as const

export const goModDiff = [
  { n: 7, text: 'require (' },
  { n: 8, text: '  github.com/lib/pq v1.10.9' },
  { n: 9, text: '  golang.org/x/net v0.33.0', kind: 'remove' as const },
  { n: 9, text: '  golang.org/x/net v0.38.0', kind: 'add' as const },
  { n: 10, text: ')' },
]

export const runtimeYaml = `apiVersion: deployments.plural.sh/v1alpha1
kind: AgentRuntime
metadata:
  name: claude-default
  namespace: plrl-agents
spec:
  targetNamespace: plrl-agents
  type: CLAUDE # or OPENCODE, GEMINI
  default: true
  aiProxy: true # translate to the API you've approved
  config:
    claude:
      apiKeySecretRef:
        name: ai-config
        key: anthropic`

export const verifyCards = [
  {
    title: 'Docker-in-Docker',
    body: 'Agents build container images to prove the change actually compiles and ships.',
    lines: ['$ docker build .', '✓ image built · 41s'],
  },
  {
    title: 'Compose test environments',
    body: 'Stand up the service and its dependencies, then run the suite before the PR exists.',
    lines: ['$ docker compose up -d', '$ make test', '✓ 142 passed'],
  },
  {
    title: 'Headless Chromium',
    body: 'Mount a real browser so Playwright or Cypress suites run end to end.',
    lines: ['$ npx playwright test', '✓ checkout.spec.ts', '✓ login.spec.ts'],
  },
]

export const modes = [
  {
    name: 'Act',
    detail: 'default',
    body: 'Searches the codebase, plans, implements the change, verifies it, and opens a pull request.',
    output: 'PR #1287 · 1 file changed · tests passing',
  },
  {
    name: 'Analyze',
    detail: 'read-only',
    body: 'Runs the same agentic search, but returns an implementation plan or analysis instead of a diff.',
    output: 'Summary · 6 call sites · suggested rollout plan',
  },
]

export const agents = ['Claude Code', 'OpenCode', 'Gemini']

export const cves = [
  { id: 'CVE-2026-21427', pkg: 'golang.org/x/net', severity: 'High' },
  { id: 'CVE-2026-18803', pkg: 'openssl 3.0.13', severity: 'Critical' },
  { id: 'CVE-2026-09114', pkg: 'lodash 4.17.20', severity: 'Medium' },
]

export const agentRuntimeFaq = [
  {
    question: 'Where do agents actually run?',
    answer:
      'On your own Kubernetes clusters. Each run is an isolated container scheduled into the namespace you choose, with the security and networking policies you already apply.',
  },
  {
    question: 'Which coding agents and models are supported?',
    answer:
      'Claude Code, OpenCode, and Gemini today, using API keys you provide. The built-in AI proxy translates between API formats, so an Anthropic-native agent can run even when only OpenAI is approved.',
  },
  {
    question: 'Can agents push straight to main?',
    answer:
      'No. Code changes come back as pull requests with the full run history attached, so a human always reviews what ships.',
  },
  {
    question: 'How do teams trigger agents?',
    answer:
      'From the Plural console, in a single click from a detected CVE, or through Workbenches, which pick up work from alerts, tickets, and Slack and hand code changes to the runtime.',
  },
]
