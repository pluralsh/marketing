import type { Metadata } from 'next'

import { AgentStep } from '@/components/product/WorkbenchMock'
import { CodeWindow, Diff } from '@/components/sections/CodeWindow'
import { CtaBand } from '@/components/sections/CtaBand'
import { Faq } from '@/components/sections/Faq'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { PageHero } from '@/components/sections/PageHero'
import { Panel, PanelLabel, VisualCard } from '@/components/sections/Panel'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Quote } from '@/components/sections/Testimonials'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { testimonials, URLS } from '@/content/site'
import {
  anchors,
  monitoringStats,
  runbook,
  subagents,
  tools,
  triggers,
  workbenchFaq,
} from '@/content/workbenches'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/workbenches', {
  title: 'Workbenches | Plural',
  description:
    'Workbenches are always-on agents that investigate alerts, fix environment issues, and close tickets, so lean platform teams can focus on the roadmap.',
})

function WorkbenchConfigWindow() {
  const config = [
    ['Triggers', 'Alertmanager · Slack'],
    ['Tools', 'Prometheus · GitHub · kubectl'],
    ['Runbooks', 'oncall.md · rollback.md'],
    ['Subagents', 'observability · infra · code'],
  ]

  return (
    <CodeWindow
      title="incident-responder · prod-us-east"
      status="● always on"
    >
      <div className="flex flex-wrap">
        <div className="border-code-line flex flex-[1_1_220px] flex-col gap-1 border-r p-4">
          <div className="text-code-muted mb-2 text-[11px]">CONFIG</div>
          {config.map(([label, value]) => (
            <div
              key={label}
              className="mb-2"
            >
              <div className="text-code-muted text-[11px]">{label}</div>
              <div>{value}</div>
            </div>
          ))}
        </div>
        <div className="border-code-line flex min-w-0 flex-[2_1_320px] flex-col gap-2 border-r p-4">
          <div>
            <span className="text-syntax-amber">alertmanager</span> ·
            KubePodCrashLooping · payments-api
          </div>
          <AgentStep agent="observability">
            container restarts, last 1h
          </AgentStep>
          <AgentStep agent="infra">recent changes to payments-api</AgentStep>
          <AgentStep agent="code">diff Helm values v42 → v43</AgentStep>
          <div className="bg-code-panel mt-2 rounded-md px-3 py-2.5 font-sans text-sm">
            Root cause: memory limit lowered to 256Mi in v43. Opening a PR to
            restore 512Mi.
          </div>
          <div className="text-syntax-green mt-auto">
            ● Awaiting human review
          </div>
        </div>
        <div className="flex min-w-0 flex-[1.5_1_260px] flex-col">
          <div className="border-code-line text-code-dim border-b px-4 py-2.5">
            helm/payments-api/values.yaml
          </div>
          <Diff
            lines={[
              { n: 13, text: '    limits:' },
              { n: 14, text: '    memory: 256Mi', kind: 'remove' },
              { n: 14, text: '    memory: 512Mi', kind: 'add' },
              { n: 15, text: '    requests:' },
            ]}
          />
          <div className="border-code-line text-code-muted mt-auto border-t px-4 py-3">
            PR opened · linked to alert
          </div>
        </div>
      </div>
    </CodeWindow>
  )
}

function MonitoringPanel() {
  return (
    <Panel className="p-0">
      <div className="border-line flex flex-wrap justify-between gap-3 border-b px-5 py-3">
        <span>Monitoring · incident-responder</span>
        <span className="text-muted">Last 7 days ▾</span>
      </div>
      <div className="border-line grid grid-cols-2 border-b md:grid-cols-4">
        {monitoringStats.map((stat) => (
          <div
            key={stat.label}
            className="border-line border-r px-5 py-4 last:border-r-0"
          >
            <div className="text-muted text-[11px]">{stat.label}</div>
            <div className="font-serif text-[32px]">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        <div className="border-line flex-[2_1_360px] border-r p-5">
          <PanelLabel>Runs over time</PanelLabel>
          <svg
            aria-hidden="true"
            viewBox="0 0 600 160"
            preserveAspectRatio="none"
            className="block h-40 w-full"
          >
            <g className="stroke-line">
              {[40, 80, 120].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="600"
                  y2={y}
                />
              ))}
            </g>
            <polyline
              fill="none"
              className="stroke-accent-ink"
              strokeWidth="2"
              points="0,120 60,110 120,118 180,90 240,96 300,70 360,78 420,52 480,60 540,34 600,40"
            />
            <polyline
              fill="none"
              className="stroke-success"
              strokeWidth="2"
              points="0,140 60,136 120,138 180,126 240,128 300,116 360,120 420,104 480,108 540,96 600,98"
            />
          </svg>
          <div className="text-muted mt-2 flex gap-4 text-xs">
            <span>
              <span className="text-accent-ink">━</span> runs
            </span>
            <span>
              <span className="text-success">━</span> PRs
            </span>
          </div>
        </div>
        <div className="flex flex-[1_1_260px] flex-col gap-2.5 p-5">
          <PanelLabel className="mb-1">Job trace · run #1042</PanelLabel>
          {[
            { name: 'observability', className: 'bg-syntax-teal ml-0 w-[60%]' },
            { name: 'infra', className: 'bg-syntax-violet ml-[8%] w-[45%]' },
            { name: 'code', className: 'bg-syntax-pink ml-[30%] w-[35%]' },
            { name: 'PR', className: 'bg-success ml-[62%] w-[12%]' },
          ].map((bar) => (
            <div
              key={bar.name}
              className="flex items-center gap-2"
            >
              <span className={cn('h-2 rounded', bar.className)} />
              <span className="text-muted">{bar.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  )
}

export default function WorkbenchesPage() {
  return (
    <>
      <PageHero
        align="center"
        size="display-sm"
        eyebrow={
          <SmartLink
            href={URLS.workbenchesAnnouncement}
            className="border-line-strong bg-surface text-ink hover:border-accent inline-flex items-center gap-2.5 rounded-full border py-1.5 pr-3.5 pl-1.5 no-underline"
          >
            <span className="bg-accent-tint text-accent-ink rounded-full px-2.5 py-0.5">
              Workbenches
            </span>
            <span className="text-muted">Read the announcement →</span>
          </SmartLink>
        }
        title={
          <>
            DevOps agents you <Accent>build</Accent> for your stack
          </>
        }
        description="Workbenches are always-on agents that investigate alerts, fix environment issues, and close tickets, so lean platform teams can focus on the roadmap."
        actions={
          <>
            <ButtonLink
              href={URLS.contact}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={URLS.docs}
              variant="secondary"
              shortcut="D"
            >
              Read the docs
            </ButtonLink>
          </>
        }
      />
      <div className="relative px-[clamp(12px,2vw,24px)] pb-16">
        <div
          aria-hidden="true"
          className="bg-accent/20 absolute inset-x-[15%] top-10 bottom-10 -z-10 blur-3xl"
        />
        <WorkbenchConfigWindow />
      </div>

      <section className="rule-top">
        <SectionHeading
          title="The fastest way to put agents on your infrastructure"
          size="lg"
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={anchors}
          minColumn="260px"
          emphasis
        />
      </section>

      <Section
        id="build"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <SectionHeading
          eyebrow="Build your own"
          title="Your tools, your runbooks, your rules"
        />
        <FeatureRow
          title="Connect the tools you already use"
          media={
            <Panel>
              <PanelLabel>Tools · incident-responder</PanelLabel>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="border-line flex justify-between border-b py-2 last:border-b-0"
                >
                  <span>{tool.name}</span>
                  <span className={tool.on ? 'text-success' : 'text-muted'}>
                    {tool.on ? '●' : '○'} {tool.access}
                  </span>
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Give each workbench exactly the tools it needs: metrics, logs, Git,
            IaC, and ticketing. Nothing more.
          </p>
          <ArrowLink href={URLS.docs}>Explore integrations</ArrowLink>
        </FeatureRow>
        <FeatureRow
          reverse
          title="Purpose-built subagents"
          media={
            <Panel className="flex flex-col gap-2">
              {subagents.map((agent) => (
                <div
                  key={agent.name}
                  className="border-line flex flex-wrap items-center justify-between gap-2 rounded-lg border px-3.5 py-3"
                >
                  <span className="text-ink">{agent.name}</span>
                  <span className="text-muted">{agent.scope}</span>
                  <span
                    className={agent.done ? 'text-success' : 'text-accent-ink'}
                  >
                    {agent.status}
                  </span>
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Subagents for observability, infrastructure analysis, and code
            changes work in parallel, so investigations take minutes, not hours.
          </p>
          <ArrowLink href={URLS.workbenchesAnnouncement}>
            How subagents work
          </ArrowLink>
        </FeatureRow>
        <FeatureRow
          title="Your runbooks become the playbook"
          media={
            <Panel>
              <PanelLabel className="normal-case">
                runbooks/oncall.md
              </PanelLabel>
              <div>
                <span className="text-muted">## </span>CrashLoopBackOff
              </div>
              {runbook.map((step, i) => (
                <div key={step}>
                  <span className="text-accent-ink">{i + 1}.</span> {step}
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Point a workbench at the runbooks your team already wrote. Agents
            follow your process, not a generic one.
          </p>
        </FeatureRow>
      </Section>

      <Section
        id="run"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Always on"
          title="Runs when your infrastructure needs it"
          description="Trigger workbenches from alerts, tickets, schedules, or Slack. Watch every run with built-in dashboards, monitors, and job tracing."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {triggers.map((trigger) => (
            <div
              key={trigger.title}
              className="border-line-strong bg-surface flex flex-col gap-1 rounded-lg border p-4"
            >
              <span className="font-medium">{trigger.title}</span>
              <span className="text-muted text-sm">{trigger.body}</span>
            </div>
          ))}
        </div>
        <MonitoringPanel />
      </Section>

      <Section
        id="govern"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Governed by design"
          title="Autonomy your security team signs off on"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
          <VisualCard
            title="Every change is a PR"
            body="Agents propose, humans approve. Nothing ships without review."
            visual={
              <Panel className="flex w-full flex-col gap-1 p-3.5 text-xs">
                <span className="text-ink">Restore payments-api memory</span>
                <span className="text-muted">1 file changed · +1 −1</span>
                <span className="bg-accent mt-2 self-start rounded px-2.5 py-1 text-white">
                  Approve
                </span>
              </Panel>
            }
          />
          <VisualCard
            title="Scoped permissions"
            body="Unified RBAC keeps each workbench inside the bounds you set."
            visual={
              <Panel className="flex w-full flex-col gap-1.5 p-3.5 text-xs">
                {[
                  ['read cluster state', true],
                  ['open pull request', true],
                  ['kubectl apply', false],
                ].map(([action, allowed]) => (
                  <span
                    key={String(action)}
                    className="flex justify-between"
                  >
                    <span>{action}</span>
                    <span className={allowed ? 'text-success' : 'text-danger'}>
                      {allowed ? 'allow' : 'deny'}
                    </span>
                  </span>
                ))}
              </Panel>
            }
          />
          <VisualCard
            title="Full audit trail"
            body="Inspect every tool call and decision. No black box."
            visual={
              <Panel className="text-muted flex w-full flex-col gap-1 p-3.5 text-xs">
                <span>14:02 tool prometheus.query</span>
                <span>14:02 tool k8s.get deployment</span>
                <span>14:03 tool git.diff v42..v43</span>
                <span className="text-accent-ink">14:04 pr.open #482</span>
              </Panel>
            }
          />
        </div>
      </Section>

      <Section className="flex justify-center py-[clamp(64px,9vw,120px)]">
        <Quote
          size="lg"
          testimonial={testimonials.upgrades}
          className="max-w-[880px] text-center"
        />
      </Section>

      <Section className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="On your terms"
          title="Runs in your environment, with your model"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
          <VisualCard
            title="Bring your own LLM"
            body="Use the provider and contract you already have."
            visual={
              <div className="flex flex-wrap gap-2">
                {['Anthropic', 'OpenAI', 'Bedrock', 'Azure'].map((provider) => (
                  <span
                    key={provider}
                    className="border-line-strong bg-surface rounded-md border px-3 py-1.5 font-mono text-xs"
                  >
                    {provider}
                  </span>
                ))}
              </div>
            }
          />
          <VisualCard
            title="Executes in your clusters"
            body="Agents run server-side next to your infrastructure. No credentials on laptops."
            visual={
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="border-line-strong bg-surface rounded-md border px-3 py-1.5">
                  your cluster
                </span>
                <span className="text-accent-ink">←</span>
                <span className="bg-accent-tint text-accent-ink rounded-md px-3 py-1.5">
                  workbench agent
                </span>
              </div>
            }
          />
        </div>
      </Section>

      <Faq
        title="FAQ"
        items={workbenchFaq}
      />

      <CtaBand
        title={
          <>
            Build your first <Accent>workbench</Accent>
          </>
        }
        description="See one run on your own clusters in a demo."
      />
    </>
  )
}
