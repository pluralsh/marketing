import type { FeatureCell } from '@/components/sections/FeatureCells'

export const pillars: FeatureCell[] = [
  {
    title: 'Grounded',
    body: 'Agents read a live, semantic graph of every cluster, stack, and service, not a stale runbook.',
  },
  {
    title: 'Governed',
    body: 'Every change lands as a PR in your repos. Every tool call is logged and reviewable.',
  },
  {
    title: 'In your environment',
    body: 'Agents execute server-side in your clusters. No over-permissioned credentials on a laptop.',
  },
]

export type UseCase = {
  label: string
  agent: string
  title: string
  body: string
  steps: string[]
  outcome: string
}

export const agentUseCases: UseCase[] = [
  {
    label: 'Incident response',
    agent: 'incident-responder',
    title: 'Root cause in minutes',
    body: 'An Alertmanager webhook fires. Subagents investigate observability and infrastructure in parallel, find the root cause against the live graph, and open a PR with the minimal fix.',
    steps: [
      'Receive alert from Alertmanager',
      'Query metrics and logs',
      'Read live infrastructure graph',
      'Open PR with minimal fix',
    ],
    outcome: 'A multi-hour escalation becomes a 15-minute review',
  },
  {
    label: 'Cluster upgrades',
    agent: 'upgrade-planner',
    title: 'Cluster upgrades in an afternoon',
    body: 'Agents inventory the cluster estate, map component dependencies, plan rollout order across dev, staging, and prod, and open the PRs for the whole fleet.',
    steps: [
      'Inventory cluster estate',
      'Map component dependencies',
      'Plan rollout: dev → staging → prod',
      'Open PRs across the fleet',
    ],
    outcome: 'A three-month project becomes an afternoon of review',
  },
  {
    label: 'CVE remediation',
    agent: 'cve-sweeper',
    title: 'Patch before you are on the call',
    body: 'A scheduled job scans the estate for known CVEs, prioritizes by exposure, and opens PRs for each affected service or stack.',
    steps: [
      'Scan estate on a schedule',
      'Prioritize by exposure',
      'Open PR per affected service',
    ],
    outcome: 'Drain the security backlog without anyone’s calendar',
  },
  {
    label: 'Tickets to PRs',
    agent: 'ticket-to-pr',
    title: 'Turn tickets into pull requests',
    body: 'Pick up a ticket from Jira or Linear. The agent finds the right Terraform module, its downstream dependencies, and a safe path, then opens a PR linked to the ticket.',
    steps: [
      'Pick up ticket from Jira or Linear',
      'Find Terraform module and dependencies',
      'Plan a safe change',
      'Open PR linked to the ticket',
    ],
    outcome: 'The backlog stops being a graveyard',
  },
  {
    label: 'FinOps',
    agent: 'finops',
    title: 'FinOps that pays for itself',
    body: 'Agents inventory cloud spend by cluster, run SQL against your billing tables, and open a Terraform PR with right-sizing changes. A generated dashboard shows the breakdown.',
    steps: [
      'Inventory spend by cluster',
      'Query cloud billing tables',
      'Open right-sizing Terraform PR',
      'Render cost breakdown',
    ],
    outcome: 'Savings land as reviewable code',
  },
  {
    label: 'Drift detection',
    agent: 'drift-check',
    title: 'Catch drift before it is an incident',
    body: 'Schedule jobs that routinely check for drift, misconfiguration, and silent failures, and fix them before they page anyone.',
    steps: [
      'Run on a schedule',
      'Check drift and misconfiguration',
      'Flag silent failures',
      'Open fix PR',
    ],
    outcome: 'Fewer surprises in production',
  },
]

export const enterpriseFeatures: FeatureCell[] = [
  {
    icon: 'M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M7 9h10 M7 13h6',
    title: 'Runs in your clusters',
    body: 'Bring your own LLM: OpenAI, Anthropic, Bedrock, Azure, and more.',
  },
  {
    icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z M9 12l2 2 4-4',
    title: 'Governed, human-reviewable',
    body: 'Unified permissions keep agents in bounds. Every change is a PR your operators approve.',
  },
  {
    icon: 'M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14z M20 20l-4-4',
    title: 'Full audit trail',
    body: 'Inspect every tool call, decision, and artifact before you confirm. No black box.',
  },
  {
    icon: 'M6 3.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z M18 3.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z M12 15.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z M8 7.5l3 8 M16 7.5l-3 8 M8.5 6h7',
    title: 'Grounded in live state',
    body: 'A live graph of every cluster, stack, service, and change across your estate.',
  },
]

export const audiences = [
  {
    heading: 'For platform and DevOps leaders',
    points: [
      'Remove infra bottlenecks and speed up developers',
      'Cut infra waste and avoid costly rebuilds',
      'Strengthen security with automation and auditability',
      'Meet AI and efficiency mandates with measurable results',
    ],
  },
  {
    heading: 'For platform and DevOps engineers',
    points: [
      'Automate config fixes, upgrades, and root cause',
      'Review AI-generated PRs with full traceability',
      'Ship with speed and fewer support cycles',
      'Stop maintaining tools you wish you had bought',
    ],
  },
]
