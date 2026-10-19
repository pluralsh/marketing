import type { Metadata } from 'next'

import { DrainSimulator } from '@/components/interactive/DrainSimulator'
import { AgentStep } from '@/components/product/WorkbenchMock'
import { CheckList } from '@/components/sections/CheckList'
import { CodeWindow } from '@/components/sections/CodeWindow'
import { CtaBand } from '@/components/sections/CtaBand'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { LinkCards } from '@/components/sections/LinkCards'
import { LogoWordmarks } from '@/components/sections/LogoWordmarks'
import { PageHero } from '@/components/sections/PageHero'
import { Panel } from '@/components/sections/Panel'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Quote } from '@/components/sections/Testimonials'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import { testimonials, URLS } from '@/content/site'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/solutions/devops-sre', {
  title: 'DevOps & SRE | Plural',
  description:
    'Plural takes the toil out of day-2: version upgrades, add-on compatibility, safe workload drains, and incident triage, all through PRs your team reviews.',
})

const painPoints = [
  {
    eyebrow: '01 · Downtime',
    title: 'Every node reboots',
    body: 'A node-by-node drain restarts pods without knowing which deployment owns them. Apps that don’t tolerate restarts go down.',
  },
  {
    eyebrow: '02 · Breakage',
    title: 'Upgrade risk is scattered',
    body: 'Upgrade insights live in every AWS account and region, and risky add-ons stay hidden until upgrade day.',
  },
  {
    eyebrow: '03 · Toil',
    title: 'Only seniors can do it',
    body: 'Upgrades land on principal engineers, cluster by cluster, while the roadmap waits.',
  },
]

const insights = [
  [
    'prod-us-east',
    'acct-prod · us-east-1',
    '1.31 → 1.32',
    '2 issues',
    'vpc-cni',
    'Blocked',
  ],
  ['prod-eu', 'acct-prod · eu-west-1', '1.31 → 1.32', 'clear', 'none', 'Ready'],
  [
    'staging',
    'acct-stage · us-west-2',
    '1.31 → 1.32',
    '1 issue',
    'coredns',
    'Fix PR open',
  ],
  ['dev-ap', 'acct-dev · ap-south-1', '1.32 → 1.33', 'clear', 'none', 'Ready'],
]

const readinessStyles: Record<string, string> = {
  Blocked: 'text-syntax-pink',
  Ready: 'text-syntax-green',
  'Fix PR open': 'text-syntax-amber',
}

const resources = [
  {
    label: 'Docs',
    title: 'Upgrade insights',
    href: 'https://docs.plural.sh/plural-features/k8s-upgrade-assistant/upgrade-insights',
  },
  {
    label: 'Docs',
    title: 'Add-on compatibilities',
    href: 'https://docs.plural.sh/plural-features/k8s-upgrade-assistant/addon-compatibilities',
  },
  {
    label: 'Guide',
    title: 'Kubernetes probe types: liveness, readiness, startup',
    href: 'https://www.plural.sh/blog/kubernetes-probes-types/',
  },
  {
    label: 'Guide',
    title: 'CVE response guide for Kubernetes fleets',
    href: 'https://www.plural.sh/blog/cve-2026-31431-kubernetes-response-guide/',
  },
]

function Stage({
  name,
  status,
  className,
}: {
  name: string
  status: string
  className?: string
}) {
  return (
    <span className="border-line-strong bg-surface flex flex-col gap-0.5 rounded-sm border px-4 py-3">
      <span className="text-ink">{name}</span>
      <span className={cn('text-xs', className)}>{status}</span>
    </span>
  )
}

export default function DevOpsSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · DevOps & SRE"
        title={
          <>
            Ship upgrades, not <Accent>outages</Accent>
          </>
        }
        description="Plural takes the toil out of day-2: version upgrades, add-on compatibility, safe workload drains, and incident triage, all through PRs your team reviews."
        actions={
          <>
            <ButtonLink
              href={URLS.bookDemo}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href="#simulator"
              variant="secondary"
            >
              Try the drain simulator
            </ButtonLink>
          </>
        }
      >
        <LogoWordmarks
          label="Trusted by platform teams at"
          className="mt-6 [&_ul]:text-lg"
        />
      </PageHero>

      <section className="rule-top">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Why upgrades take a quarter"
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={painPoints}
          minColumn="260px"
          emphasis
        />
      </section>

      <Section className="flex flex-col gap-[clamp(64px,8vw,112px)]">
        <FeatureRow
          reverse
          eyebrow="Upgrade insights"
          title="Every cluster’s upgrade risk, in one place"
          className="md:grid-cols-[1.3fr_1fr]"
          media={
            <CodeWindow
              title="Upgrade insights · all accounts"
              status="refreshed every 10m"
              footer={
                <span>
                  → 2 of 4 clusters ready · fix PRs opened for the rest
                </span>
              }
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-[11.5px]">
                  <thead className="text-code-muted">
                    <tr>
                      {[
                        'CLUSTER',
                        'ACCOUNT · REGION',
                        'VERSION',
                        'EKS INSIGHTS',
                        'ADD-ON RISK',
                        'READINESS',
                      ].map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="px-3 py-2.5 font-normal"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {insights.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-code-line border-t"
                      >
                        {row.map((cell, i) => (
                          <td
                            key={i}
                            className={cn(
                              'px-3 py-2.5',
                              i === 1 && 'text-code-muted',
                              i === 5 && readinessStyles[cell]
                            )}
                          >
                            {i === 5 ? `● ${cell}` : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CodeWindow>
          }
        >
          <p className="m-0">
            Plural pulls EKS upgrade insights from every account and region,
            adds its own upgrade intelligence, and flags add-ons that could
            block your next version.
          </p>
          <CheckList
            items={[
              'No switching between AWS accounts and regions',
              'Cloud provider and Plural insights, combined',
              'EKS add-ons flagged as latent upgrade risks',
              'Permissions set up automatically at bootstrap',
            ]}
          />
          <ArrowLink href="https://docs.plural.sh/plural-features/k8s-upgrade-assistant/upgrade-insights">
            Read the docs
          </ArrowLink>
          <Quote
            testimonial={{
              ...testimonials.upgrades,
              quote:
                '“We reduced our k8s upgrade cycles from 3 months to 1 day.”',
            }}
            className="border-accent mt-2 border-l-2 pl-5 [&_blockquote]:text-lg"
          />
        </FeatureRow>

        <FeatureRow
          eyebrow="Cluster drain management"
          title="Move workloads without downtime"
          media={
            <CodeWindow title="cluster-drain.yaml">
              <pre className="m-0 overflow-x-auto p-5 leading-relaxed">
                <span className="text-syntax-violet">kind:</span> ClusterDrain
                {'\n'}
                <span className="text-syntax-violet">spec:</span>
                {'\n  '}
                <span className="text-syntax-violet">flowControl:</span>
                {'\n    '}
                <span className="text-syntax-violet">maxConcurrency:</span>{' '}
                <span className="text-syntax-amber">10</span>
                {'\n  '}
                <span className="text-syntax-violet">labelSelector:</span>
                {'\n    '}
                <span className="text-syntax-violet">matchLabels:</span>
                {'\n      '}deployments.plural.sh/drainable:{' '}
                <span className="text-syntax-green">&quot;true&quot;</span>
              </pre>
            </CodeWindow>
          }
        >
          <p className="m-0">
            Instead of rebooting node by node, Plural gracefully restarts each
            opted-in deployment, statefulset, and daemonset using the rollout
            policy your developers already tuned.
          </p>
          <CheckList
            items={[
              'Opt in by label, per workload',
              'Cap concurrent restarts',
              'Order restarts in waves',
            ]}
          />
          <ArrowLink href="https://docs.plural.sh/plural-features/k8s-upgrade-assistant/cluster-drain">
            Read the docs
          </ArrowLink>
        </FeatureRow>

        <FeatureRow
          reverse
          eyebrow="Pipelines"
          title="Roll out across the fleet, in order"
          media={
            <Panel className="flex flex-wrap items-center gap-3">
              <Stage
                name="dev"
                status="✓ upgraded"
                className="text-success"
              />
              <span aria-hidden="true">→</span>
              <Stage
                name="staging"
                status="● draining"
                className="text-accent-ink"
              />
              <span aria-hidden="true">→</span>
              <Stage
                name="prod"
                status="○ awaiting approval"
                className="text-muted"
              />
            </Panel>
          }
        >
          <p className="m-0">
            Promote upgrades from dev to staging to prod through PRs, with
            approval gates and a full audit trail in Git.
          </p>
        </FeatureRow>

        <FeatureRow
          eyebrow="Workbenches"
          title="Let agents take the pager first"
          media={
            <CodeWindow>
              <div className="flex flex-col gap-1.5 p-5">
                <div className="text-syntax-amber">
                  alert · KubePodCrashLooping · payments-api
                </div>
                <AgentStep agent="observability">restarts, OOMKilled</AgentStep>
                <AgentStep agent="infra">limit lowered in v43</AgentStep>
                <AgentStep agent="code">PR: restore 512Mi</AgentStep>
                <div className="text-syntax-green mt-2">
                  ✓ ready for review in 9 min
                </div>
              </div>
            </CodeWindow>
          }
        >
          <p className="m-0">
            When an alert fires, an always-on agent investigates, finds root
            cause, and opens the fix as a PR. Your on-call reviews instead of
            digging.
          </p>
          <ArrowLink href="/workbenches">Meet Workbenches</ArrowLink>
        </FeatureRow>
      </Section>

      <Section
        id="simulator"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Try it"
          title="Watch a drain, two ways"
          description="Same cluster, same upgrade. Compare a node-by-node drain with Plural’s wave-based ClusterDrain."
        />
        <DrainSimulator />
      </Section>

      <section className="rule-top">
        <SectionHeading
          title="From the docs and the blog"
          size="lg"
          className="px-gutter pt-section pb-10"
        />
        <LinkCards items={resources} />
      </section>

      <CtaBand
        title={
          <>
            Your next upgrade, <Accent>in a day</Accent>
          </>
        }
      />
    </>
  )
}
