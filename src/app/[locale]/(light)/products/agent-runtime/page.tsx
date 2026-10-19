import type { Metadata } from 'next'

import { CodeWindow, Diff, Yaml } from '@/components/sections/CodeWindow'
import { CtaBand } from '@/components/sections/CtaBand'
import { Faq } from '@/components/sections/Faq'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { PageHero } from '@/components/sections/PageHero'
import { Panel, PanelLabel, VisualCard } from '@/components/sections/Panel'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import {
  agentRuntimeAnchors,
  agentRuntimeFaq,
  agentRuntimeLinks,
  agents,
  cves,
  goModDiff,
  modes,
  runSteps,
  runtimeYaml,
  verifyCards,
} from '@/content/products/agent-runtime'
import { URLS } from '@/content/site'
import { cn } from '@/utils/cn'

export const metadata: Metadata = {
  title: 'Agent Runtime | Plural',
  description:
    'Run coding agents on the Kubernetes clusters you already have. Sandboxed in your perimeter, verified with real builds and tests, and delivered as pull requests.',
}

function AgentRunWindow() {
  return (
    <CodeWindow
      dots
      title="agent run #318 · claude-default · plrl-agents"
      status="● running in-cluster"
      footer={['Isolated pod', 'Your API keys', 'Egress policy on'].map(
        (item) => (
          <span key={item}>{item}</span>
        )
      )}
    >
      <div className="flex flex-wrap">
        <div className="border-code-line flex min-w-0 flex-[3_1_420px] flex-col gap-2 border-r p-4">
          <div className="border-code-line bg-code-panel rounded-md border px-3 py-2.5 font-sans text-sm">
            <span className="text-code-muted">prompt · </span>
            Fix CVE-2026-21427 in acme/payments-api and make sure tests pass.
          </div>
          {runSteps.map((step) => (
            <div
              key={step.text}
              className={cn(
                step.kind === 'ok' && 'text-syntax-green',
                step.kind === 'plan' && 'text-code-dim'
              )}
            >
              {step.kind === 'cmd' && (
                <span className="text-syntax-teal">$ </span>
              )}
              {step.kind === 'plan' && (
                <span className="text-syntax-violet">plan › </span>
              )}
              {step.kind === 'ok' && '✓ '}
              {step.text}
            </div>
          ))}
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            <span className="text-code-muted">
              Pull request ready for review
            </span>
            <span className="bg-accent inline-flex min-h-8 items-center rounded-[4px] px-3 text-white">
              Review PR #1287
            </span>
          </div>
        </div>
        <div className="flex min-w-0 flex-[2_1_300px] flex-col">
          <div className="border-code-line text-code-dim border-b px-4 py-2.5">
            go.mod
          </div>
          <Diff lines={goModDiff} />
          <div className="border-code-line text-code-muted mt-auto border-t px-4 py-3">
            1 file changed · run history attached
          </div>
        </div>
      </div>
    </CodeWindow>
  )
}

export default function AgentRuntimePage() {
  return (
    <>
      <PageHero
        eyebrow="Agent Runtime"
        title={
          <>
            Your clusters, now running <Accent>coding agents</Accent>
          </>
        }
        description="The medium-difficulty work clogging your backlog doesn’t need to be there. The Plural Agent Runtime turns your existing Kubernetes clusters into a secure, autonomous compute layer for coding agents, so the work gets done while your team focuses on what matters."
        actions={
          <>
            <ButtonLink
              href={URLS.contact}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={agentRuntimeLinks.docs}
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
        <AgentRunWindow />
      </div>

      <section className="rule-top">
        <FeatureCells
          items={agentRuntimeAnchors}
          minColumn="260px"
          emphasis
        />
      </section>

      <Section
        id="secure"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <SectionHeading
          eyebrow="Secure by design"
          title="No new infrastructure. No code leaving your perimeter."
          description="Standing up separate cloud infrastructure for agents brings new complexity, new security reviews, and new costs. The Agent Runtime uses the clusters you already operate."
        />
        <FeatureRow
          title="Configured like everything else: a CRD"
          media={
            <CodeWindow title="agents/claude-default.yaml">
              <Yaml source={runtimeYaml} />
            </CodeWindow>
          }
        >
          <p className="m-0">
            Declare the agent you want, opt into the capabilities it needs, and
            point it at your keys and model. Once applied, it’s available to any
            user or group you grant access to.
          </p>
          <p className="m-0">
            Kubernetes provides the sandbox. You control the security and
            networking constraints on every run, so agents fit environments with
            strict compliance requirements.
          </p>
          <ArrowLink href={agentRuntimeLinks.configure}>
            Configure a runtime
          </ArrowLink>
        </FeatureRow>
        <FeatureRow
          reverse
          title="Bring the agent and model you’ve approved"
          media={
            <Panel className="flex flex-col gap-4">
              <PanelLabel className="mb-0">Supported agents</PanelLabel>
              <div className="flex flex-wrap gap-2">
                {agents.map((agent) => (
                  <span
                    key={agent}
                    className="border-line-strong bg-canvas rounded-md border px-3 py-1.5"
                  >
                    {agent}
                  </span>
                ))}
              </div>
              <div className="border-line flex flex-wrap items-center gap-2 border-t pt-4 text-xs">
                <span className="text-muted">Anthropic-native agent</span>
                <span className="text-accent-ink">→ AI proxy →</span>
                <span className="text-muted">OpenAI-approved endpoint</span>
              </div>
            </Panel>
          }
        >
          <p className="m-0">
            Pick the best agent for the job without lock-in. The built-in AI
            proxy translates between API formats, so an Anthropic-native agent
            can run even when only OpenAI is approved.
          </p>
        </FeatureRow>
      </Section>

      <Section
        id="verify"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Built for real tasks"
          title="An agent that tests its work before you see it"
          description="A coding agent that can only write code is half useful. The runtime handles the full lifecycle of an engineering task, including proving the change works."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
          {verifyCards.map((card) => (
            <VisualCard
              key={card.title}
              title={card.title}
              body={card.body}
              visual={
                <Panel className="flex w-full flex-col gap-1 p-3.5 text-xs">
                  {card.lines.map((line) => (
                    <span
                      key={line}
                      className={
                        line.startsWith('✓') ? 'text-success' : 'text-ink'
                      }
                    >
                      {line}
                    </span>
                  ))}
                </Panel>
              }
            />
          ))}
        </div>
      </Section>

      <Section
        id="workflow"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <SectionHeading
          eyebrow="Act or analyze"
          title="From backlog item to background job"
          description="Trigger a run, step away, and come back to a pull request or a plan, with every command and decision in the run history."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
          {modes.map((mode) => (
            <Panel
              key={mode.name}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-ink text-base">{mode.name}</span>
                <span className="text-muted">{mode.detail}</span>
              </div>
              <p className="text-body m-0 font-sans text-[15px]">{mode.body}</p>
              <div className="bg-accent-tint text-accent-ink mt-auto rounded-md px-3 py-2">
                → {mode.output}
              </div>
            </Panel>
          ))}
        </div>
        <FeatureRow
          title="Start with CVEs: ten fixes, ten minutes of review"
          media={
            <Panel className="p-0">
              <div className="border-line flex justify-between border-b px-5 py-3">
                <span>Vulnerabilities · payments-api</span>
                <span className="text-muted">3 open</span>
              </div>
              {cves.map((cve) => (
                <div
                  key={cve.id}
                  className="border-line flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3 last:border-b-0"
                >
                  <span className="flex flex-col">
                    <span className="text-ink">{cve.id}</span>
                    <span className="text-muted text-xs">
                      {cve.pkg} · {cve.severity}
                    </span>
                  </span>
                  <span className="bg-accent text-on-accent rounded px-2.5 py-1 text-xs">
                    Fix with agent
                  </span>
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Plural already surfaces vulnerabilities across your fleet. Dispatch
            an agent to fix any of them in a single action. The fix is
            well-scoped, Docker-in-Docker validates it, and the PR keeps a human
            in the loop.
          </p>
          <ArrowLink href={agentRuntimeLinks.announcement}>
            Read the announcement
          </ArrowLink>
        </FeatureRow>
      </Section>

      <Faq items={agentRuntimeFaq} />

      <CtaBand
        title={
          <>
            Put your backlog on <Accent>autopilot</Accent>
          </>
        }
        description="See coding agents run on your own clusters in a 30-minute demo."
      />
    </>
  )
}
