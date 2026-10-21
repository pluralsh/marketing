import type { Metadata } from 'next'

import { CodeWindow, Yaml } from '@/components/sections/CodeWindow'
import { CtaBand } from '@/components/sections/CtaBand'
import { Faq } from '@/components/sections/Faq'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { PageHero } from '@/components/sections/PageHero'
import { Panel, PanelLabel } from '@/components/sections/Panel'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import {
  integrationTests,
  logLines,
  ruleFile,
  sentinelAnchors,
  sentinelChecks,
  sentinelFaq,
  sentinelLinks,
  sentinelYaml,
  triggers,
  sentinelUseCases,
} from '@/content/products/sentinels'
import { URLS } from '@/content/site'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/products/sentinels', {
  title: 'Sentinels | Plural',
  description:
    'Automated, auditable infrastructure validation for Kubernetes. Sentinels combine AI-assisted analysis with deep integration tests across any set of clusters.',
})

function SentinelRunWindow() {
  return (
    <CodeWindow
      dots
      title="sentinel · k8s-upgrade · run #57"
      status="● 48 clusters · tier: dev"
      footer={[
        'Triggered by pipeline',
        'Rules from git@main',
        'JUnit export',
      ].map((item) => (
        <span key={item}>{item}</span>
      ))}
    >
      <div className="flex flex-wrap">
        <div className="border-code-line flex min-w-0 flex-[3_1_420px] flex-col border-r">
          {sentinelChecks.map((check) => (
            <div
              key={check.name}
              className="border-code-line flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3.5"
            >
              <span className="flex flex-col">
                <span className="text-white">{check.name}</span>
                <span className="text-code-muted text-[11px]">
                  {check.type}
                </span>
              </span>
              <span className="text-code-dim">{check.detail}</span>
              <span
                className={
                  check.result === 'pass'
                    ? 'text-syntax-green'
                    : 'text-syntax-pink'
                }
              >
                {check.result === 'pass' ? '✓ pass' : '✗ fail'}
              </span>
            </div>
          ))}
          <div className="text-code-muted px-4 py-3.5">
            Sentinel failed · promotion to staging blocked
          </div>
        </div>
        <div className="flex min-w-0 flex-[2_1_300px] flex-col gap-3 p-4">
          <div className="text-code-muted text-[11px]">AI ANALYSIS</div>
          <div>
            <span className="text-syntax-pink">dev-euw1</span>{' '}
            <span className="text-code-muted">›</span> PVCs bind and mount
          </div>
          <div className="bg-code-panel rounded-xs px-3.5 py-3 font-sans text-sm leading-normal">
            <strong className="font-medium text-white">Likely cause:</strong>{' '}
            the EBS CSI driver add-on is still on a version incompatible with
            1.31, so volumes never attach. Upgrade aws-ebs-csi-driver to v1.35
            and re-run.
          </div>
          <span className="bg-accent mt-auto inline-flex min-h-8 items-center self-start rounded-[4px] px-3 text-white">
            Re-run on dev-euw1
          </span>
        </div>
      </div>
    </CodeWindow>
  )
}

export default function SentinelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sentinels"
        title={
          <>
            Prove every infrastructure change is <Accent>safe</Accent>
          </>
        }
        description="Stop squinting at dashboards and working through a kubectl checklist after every change. Sentinels package AI-assisted analysis and deep integration tests into one automated, auditable check you can run across any set of clusters."
        actions={
          <>
            <ButtonLink
              href={URLS.bookDemo}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={sentinelLinks.docs}
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
        <SentinelRunWindow />
      </div>

      <section className="rule-top">
        <FeatureCells
          items={sentinelAnchors}
          minColumn="260px"
          emphasis
        />
      </section>

      <Section
        id="checks"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <SectionHeading
          eyebrow="Three kinds of checks"
          title="Everything a senior SRE would check, every time"
          description="Combine checks into one sentinel to confirm everything from container scheduling to storage and networking is working as expected."
        />
        <FeatureRow
          eyebrow="AI resource validation"
          title="Deep-dive any resource, graded against your rules"
          media={
            <Panel>
              <PanelLabel className="normal-case">rules/logrule.md</PanelLabel>
              {ruleFile.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    'min-h-[1lh]',
                    line.startsWith('#') && 'text-muted'
                  )}
                >
                  {line}
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Point a sentinel at a Deployment, StatefulSet, or any other
            resource. It investigates everything associated with it, including
            logs and related components, and returns a pass or fail.
          </p>
          <p className="m-0">
            Natural-language rule files, versioned in Git, tell the AI what to
            ignore and what counts as failure, so your team’s tribal knowledge
            is applied the same way every time.
          </p>
        </FeatureRow>
        <FeatureRow
          reverse
          eyebrow="Intelligent log tailing"
          title="Catch the failures that only show up over time"
          media={
            <Panel className="p-0">
              <div className="border-line flex justify-between border-b px-5 py-3">
                <span>Tailing errors · 5m window</span>
                <span className="text-accent-ink">● live</span>
              </div>
              {logLines.map((line) => (
                <div
                  key={line.text}
                  className="border-line flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3 last:border-b-0"
                >
                  <span className="flex min-w-0 flex-col">
                    <span className="text-muted text-xs">{line.ns}</span>
                    <span className="text-ink">{line.text}</span>
                  </span>
                  <span
                    className={
                      line.verdict === 'ignored' ? 'text-muted' : 'text-warning'
                    }
                  >
                    {line.verdict}
                  </span>
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Watch error logs in chosen namespaces for a set window after a
            change, and analyze them with the same rule files. It’s the
            automated version of running <code>kubectl logs -f</code> and
            waiting to see if anything breaks.
          </p>
        </FeatureRow>
        <FeatureRow
          eyebrow="Deep integration testing"
          title="Exercise the cluster, don’t just observe it"
          media={
            <Panel>
              <PanelLabel>Integration suite · JUnit</PanelLabel>
              {integrationTests.map((test) => (
                <div
                  key={test.name}
                  className="border-line flex justify-between border-b py-2 last:border-b-0"
                >
                  <span>{test.name}</span>
                  <span className="text-success">✓</span>
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            A default suite starts StatefulSets, binds storage volumes, and
            confirms pod-to-pod networking, with no setup required. Bring your
            own Terratest suites to validate the paths that matter to you.
          </p>
        </FeatureRow>
      </Section>

      <section className="rule-top">
        <SectionHeading
          eyebrow="Built for"
          title="The changes that keep platform teams up at night"
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={sentinelUseCases}
          minColumn="260px"
        />
      </section>

      <Section
        id="gitops"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="GitOps native"
          title="Infrastructure tests, versioned like code"
          description="A sentinel isn’t a feature that only lives in a UI. Its checks, rules, and tests are a Kubernetes custom resource in Git, and the whole system is API-driven."
        />
        <FeatureRow
          media={
            <CodeWindow title="bootstrap/sentinels/k8s-upgrade.yaml">
              <Yaml source={sentinelYaml} />
            </CodeWindow>
          }
        >
          <div className="flex flex-col gap-3">
            {triggers.map((trigger) => (
              <div
                key={trigger.title}
                className="border-line-strong bg-surface flex flex-col gap-1 rounded-sm border p-4"
              >
                <span className="text-ink font-medium">{trigger.title}</span>
                <span className="text-muted text-sm">{trigger.body}</span>
              </div>
            ))}
          </div>
          <ArrowLink href={sentinelLinks.docs}>
            Set up your first sentinel
          </ArrowLink>
        </FeatureRow>
      </Section>

      <Section
        id="compliance"
        className="flex flex-col gap-8"
      >
        <FeatureRow
          titleAs="h2"
          eyebrow="Compliance"
          title="“Where’s the test from four months ago?” Right here."
          media={
            <CodeWindow title="GET /v1/sentinels/k8s-upgrade/runs/57">
              <div className="overflow-x-auto px-4 py-3 whitespace-pre">
                <div className="text-code-muted">
                  {'<testsuites name="k8s-upgrade">'}
                </div>
                <div>{'  <testsuite name="integration-tests"'}</div>
                <div>
                  {'    tests="240" '}
                  <span className="text-syntax-pink">{'failures="1"'}</span>
                  {'>'}
                </div>
                <div className="text-code-muted">{'  ...'}</div>
                <div className="text-code-muted">{'</testsuites>'}</div>
              </div>
            </CodeWindow>
          }
        >
          <p className="m-0">
            Change management often requires proof that testing happened after
            every significant infrastructure change. Sentinels produce it
            automatically: pull structured JUnit results from the API and
            forward them to your compliance system.
          </p>
          <p className="m-0">
            Results are stored and retrievable, so audits stop being a search
            through old Slack threads and Confluence pages.
          </p>
          <ArrowLink href={sentinelLinks.announcement}>
            Read the announcement
          </ArrowLink>
        </FeatureRow>
      </Section>

      <Faq items={sentinelFaq} />

      <CtaBand
        title={
          <>
            From checklists to <Accent>guarantees</Accent>
          </>
        }
        description="See a sentinel validate an upgrade across your clusters in a 30-minute demo."
      />
    </>
  )
}
