export const anchors = [
  {
    eyebrow: '01',
    title: 'Build your own',
    body: 'Bundle your tools, runbooks, and purpose-built subagents.',
    href: '#build',
  },
  {
    eyebrow: '02',
    title: 'Always on',
    body: 'Triggered by alerts, tickets, schedules, or a Slack mention.',
    href: '#run',
  },
  {
    eyebrow: '03',
    title: 'Governed by design',
    body: 'Every change is a PR, every step is logged.',
    href: '#govern',
  },
]

export const tools = [
  { name: 'Prometheus', access: 'read', on: true },
  { name: 'Kubernetes API', access: 'read', on: true },
  { name: 'GitHub', access: 'open PRs', on: true },
  { name: 'Terraform', access: 'plan only', on: true },
  { name: 'Linear', access: 'off', on: false },
]

export const subagents = [
  {
    name: 'observability',
    scope: 'metrics, logs, traces',
    status: '✓ done',
    done: true,
  },
  {
    name: 'infrastructure',
    scope: 'live graph, IaC state',
    status: '✓ done',
    done: true,
  },
  { name: 'code', scope: 'minimal fix, PR', status: '● writing', done: false },
]

export const runbook = [
  'Check restarts and OOMKilled events',
  'Compare resource limits to last release',
  'If a limit dropped, open a PR to restore it',
  'Page on-call only if the PR is blocked',
]

export const triggers = [
  { title: 'Alerts', body: 'Alertmanager and webhook events' },
  { title: 'Tickets', body: 'Jira or Linear issues' },
  { title: 'Schedules', body: 'CVE scans, drift checks, cleanups' },
  { title: 'Slack', body: 'Mention a workbench in any channel' },
]

export const monitoringStats = [
  { label: 'Runs', value: '142' },
  { label: 'PRs opened', value: '38' },
  { label: 'Median time to PR', value: '9m' },
  { label: 'Escalated', value: '4' },
]

export const workbenchFaq = [
  {
    question: 'What is a workbench?',
    answer:
      'A configurable, always-on agent. You choose its tools, runbooks, triggers, and subagents, and it works on your infrastructure through reviewable PRs.',
  },
  {
    question: 'Which models can I use?',
    answer:
      'Bring your own LLM, including OpenAI, Anthropic, Bedrock, and Azure.',
  },
  {
    question: 'Can a workbench change production on its own?',
    answer:
      'Changes land as pull requests for your team to approve, and permissions keep each workbench scoped to what you allow.',
  },
  {
    question: 'How do I see what a workbench did?',
    answer:
      'Every run has a job trace, and each workbench has dashboards and monitors. You can inspect every tool call before you approve.',
  },
]
