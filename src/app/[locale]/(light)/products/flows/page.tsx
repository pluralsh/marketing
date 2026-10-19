import type { Metadata } from 'next'

import { CodeWindow, Yaml } from '@/components/sections/CodeWindow'
import { CtaBand } from '@/components/sections/CtaBand'
import { Faq } from '@/components/sections/Faq'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { PageHero } from '@/components/sections/PageHero'
import { Panel } from '@/components/sections/Panel'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { YouTubeEmbed } from '@/components/sections/YouTubeEmbed'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import {
  flowAnchors,
  flowDemoVideo,
  flowFaq,
  flowLinks,
  flowPipeline,
  flowPrs,
  flowServices,
  flowYaml,
  insightCells,
  mcpCalls,
  troubleshootSteps,
} from '@/content/products/flows'
import { URLS } from '@/content/site'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/products/flows', {
  title: 'Flows | Plural',
  description:
    'A developer-facing command center for microservices: services, pipelines, PRs, alerts, and AI troubleshooting, scoped to the team that owns them.',
})

function FlowWindow() {
  return (
    <CodeWindow
      dots
      title="Flows · payments"
      status="● 1 alert firing"
      footer={['4 services', '1 pipeline', 'payments-engineers: write'].map(
        (item) => (
          <span key={item}>{item}</span>
        )
      )}
    >
      <div className="flex flex-wrap">
        <div className="border-code-line flex min-w-0 flex-[1_1_260px] flex-col border-r">
          <div className="text-code-muted px-4 pt-3.5 pb-2 text-[11px]">
            SERVICES
          </div>
          {flowServices.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between gap-2 px-4 py-2"
            >
              <span className="flex flex-col">
                <span className="text-white">{service.name}</span>
                <span className="text-code-muted text-[11px]">
                  {service.cluster}
                </span>
              </span>
              <span
                className={
                  service.status === 'healthy'
                    ? 'text-syntax-green'
                    : 'text-syntax-amber'
                }
              >
                ● {service.status}
              </span>
            </div>
          ))}
          <div className="text-code-muted border-code-line mt-2 border-t px-4 pt-3.5 pb-2 text-[11px]">
            PIPELINE
          </div>
          <div className="flex items-center gap-1.5 px-4 pb-4">
            {flowPipeline.map((stage, i) => (
              <span
                key={stage}
                className="flex items-center gap-1.5"
              >
                <span
                  className={cn(
                    'rounded px-2 py-0.5',
                    i < 2
                      ? 'bg-syntax-green/12 text-syntax-green'
                      : 'bg-code-panel text-code-dim'
                  )}
                >
                  {stage}
                </span>
                {i < flowPipeline.length - 1 && (
                  <span className="text-code-muted">→</span>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="flex min-w-0 flex-[2_1_380px] flex-col gap-3 p-4">
          <div className="border-code-line bg-code-panel rounded-md border px-3 py-2.5">
            <span className="text-syntax-amber">grafana</span>{' '}
            <span className="text-code-muted">alert ·</span> payments-api 5xx
            rate 4.2% on /v1/settle
          </div>
          <div className="text-code-muted text-[11px]">FLOW CHAT</div>
          <div className="font-sans text-sm">Why is settle failing?</div>
          <div className="bg-code-panel rounded-md px-3.5 py-3 font-sans text-sm leading-normal">
            Errors started 9 minutes after{' '}
            <span className="text-syntax-violet font-mono text-[12.5px]">
              PR #{flowPrs[0].number}
            </span>{' '}
            deployed. Commit{' '}
            <span className="text-syntax-teal font-mono text-[12.5px]">
              a41c9e2
            </span>{' '}
            wraps the webhook handler in a retry that re-reads a closed request
            body (<span className="font-mono text-[12.5px]">settle.go:88</span>
            ). Buffer the body before retrying.
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-2">
            <span className="text-code-muted">Suggested fix ready</span>
            <span className="bg-accent inline-flex min-h-8 items-center rounded-[4px] px-3 text-white">
              Open fix PR
            </span>
          </div>
        </div>
      </div>
    </CodeWindow>
  )
}

export default function FlowsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flows"
        title={
          <>
            A command center for your <Accent>microservices</Accent>
          </>
        }
        description="Kubernetes is too much surface area for most developers, who mostly care about a handful of services. A Flow groups related microservices with their pipelines, pull requests, and alerts, with AI troubleshooting scoped to exactly that boundary."
        actions={
          <>
            <ButtonLink
              href={URLS.contact}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={flowLinks.docs}
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
          className="bg-accent/15 absolute inset-x-[15%] top-10 bottom-10 -z-10 blur-3xl"
        />
        <FlowWindow />
      </div>

      <section className="rule-top">
        <FeatureCells
          items={flowAnchors}
          minColumn="260px"
          emphasis
        />
      </section>

      <Section
        id="manage"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <SectionHeading
          eyebrow="For application teams"
          title="The abstraction layer, without the slapdash of tools"
          description="Platform teams usually cobble together internal UIs, Backstage, and Argo CD to give developers a usable view. Flows provide it natively, on top of the same system that deploys the services."
        />
        <FeatureRow
          title="Services, pipelines, and PRs together"
          media={
            <Panel className="p-0">
              <div className="border-line flex justify-between border-b px-5 py-3">
                <span>Pull requests · payments</span>
                <span className="text-muted">linked automatically</span>
              </div>
              {flowPrs.map((pr) => (
                <div
                  key={pr.number}
                  className="border-line flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3 last:border-b-0"
                >
                  <span>
                    <span className="text-accent-ink">#{pr.number}</span>{' '}
                    {pr.title}
                  </span>
                  <span className="text-muted">{pr.state}</span>
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Monitor service health, follow how updates move through each
            environment, and see the pull requests behind every deploy. Alerts
            from PagerDuty, Grafana, and other tools show up next to the
            services they affect.
          </p>
        </FeatureRow>
      </Section>

      <section className="rule-top">
        <FeatureCells
          items={insightCells}
          minColumn="240px"
        />
      </section>

      <Section
        id="govern"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <FeatureRow
          titleAs="h2"
          eyebrow="Built-in governance"
          title="“This team owns these services,” in one binding"
          media={
            <CodeWindow title="flows/payments.yaml">
              <Yaml source={flowYaml} />
            </CodeWindow>
          }
        >
          <p className="m-0">
            Set permissions once at the Flow instead of on every component.
            Bindings map to your identity provider groups and propagate to every
            service and pipeline registered with the Flow.
          </p>
          <p className="m-0">
            The same boundary governs the AI, so it only searches what the
            viewer is allowed to see.
          </p>
          <ArrowLink href={flowLinks.docs}>Create a Flow</ArrowLink>
        </FeatureRow>
        <FeatureRow
          reverse
          title="MCP integrations with enterprise controls"
          media={
            <Panel className="p-0">
              <div className="border-line flex justify-between border-b px-5 py-3">
                <span>MCP tool calls · audit log</span>
                <span className="text-muted">today</span>
              </div>
              {mcpCalls.map((call) => (
                <div
                  key={call.tool}
                  className="border-line flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3 last:border-b-0"
                >
                  <span className="flex flex-col">
                    <span className="text-ink">{call.tool}</span>
                    <span className="text-muted text-xs">{call.target}</span>
                  </span>
                  {call.approval ? (
                    <span className="bg-accent text-on-accent rounded px-2.5 py-1 text-xs">
                      Review & confirm
                    </span>
                  ) : (
                    <span className="text-success">✓ ran</span>
                  )}
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Connect third-party MCP servers to handle routine operations, from
            database tasks to Slack notifications, without building custom admin
            tools.
          </p>
          <p className="m-0">
            Every call is logged, permissions are granular, and sensitive
            operations show a preview and wait for explicit confirmation.
          </p>
          <ArrowLink href={flowLinks.mcp}>MCP in Flows</ArrowLink>
        </FeatureRow>
      </Section>

      <Section
        id="troubleshoot"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Automated troubleshooting"
          title="From alert to the line of code that caused it"
          description="Developers ship changes constantly, and regressions follow. When an alert fires, Flows automatically traces it back to the responsible change, all within the Flow’s permission boundary."
        />
        <ol className="border-line m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t p-0">
          {troubleshootSteps.map((step, i) => (
            <li
              key={step}
              className="border-line flex flex-col gap-2 border-b py-5 pr-6"
            >
              <span className="text-label">0{i + 1}</span>
              <span className="text-[17px]">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mx-auto w-full max-w-[880px]">
          <YouTubeEmbed {...flowDemoVideo} />
        </div>
      </Section>

      <Faq items={flowFaq} />

      <CtaBand
        title={
          <>
            Give every team its own <Accent>command center</Accent>
          </>
        }
        description="See Flows on your own services in a 30-minute demo."
      />
    </>
  )
}
