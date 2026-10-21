import type { Metadata } from 'next'

import { ArchitectureCompare } from '@/components/interactive/observability/ArchitectureCompare'
import { CostCalculator } from '@/components/interactive/observability/CostCalculator'
import { CodeWindow, Yaml } from '@/components/sections/CodeWindow'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { CtaBand } from '@/components/sections/CtaBand'
import { Faq } from '@/components/sections/Faq'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { PageHero } from '@/components/sections/PageHero'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { StatGrid } from '@/components/sections/StatGrid'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import {
  agentQuery,
  costReasons,
  logsResourceYaml,
  observabilityAnchors,
  observabilityFaq,
  observabilityLinks,
  operatorInstall,
  operatorPoints,
  rewriteCells,
  simplicityStats,
  telemetryStores,
  verificationCells,
} from '@/content/products/observability'
import { URLS } from '@/content/site'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/products/observability', {
  title: 'Agent-Ready Observability | Plural',
  description:
    'High-performance, extremely low-cost observability for the era of software abundance. Logs, metrics, and traces on S3, without sacrificing performance, cost, or flexibility.',
})

const ms = (n: number) => `${n.toLocaleString('en-US')} ms`

function TelemetryWindow() {
  return (
    <CodeWindow
      dots
      title="plural-telemetry · prod-use1"
      status="● 3 stores healthy"
      footer={['s3://acme-telemetry', 'Grafana compatible', 'Apache 2.0'].map(
        (item) => (
          <span key={item}>{item}</span>
        )
      )}
    >
      <div className="text-code-muted border-code-line hidden grid-cols-[1.2fr_1.6fr_1fr] gap-4 border-b px-4 py-2.5 text-[11px] sm:grid">
        <span>STORE</span>
        <span>COMPATIBLE WITH</span>
        <span className="text-right">P90 QUERY LATENCY · PEER → OURS</span>
      </div>
      {telemetryStores.map((store) => (
        <div
          key={store.signal}
          className="border-code-line grid gap-1 border-b px-4 py-3.5 last:border-b-0 sm:grid-cols-[1.2fr_1.6fr_1fr] sm:items-center sm:gap-4"
        >
          <span className="flex flex-col">
            <span className="text-white">{store.name}</span>
            <span className="text-code-muted text-[11px]">
              replaces {store.peer}
            </span>
          </span>
          <span className="grid grid-cols-[48px_1fr] gap-x-2 text-[12px]">
            <span className="text-code-muted">query</span>
            <span className="text-syntax-violet">{store.query}</span>
            <span className="text-code-muted">ingest</span>
            <span className="text-code-dim">{store.ingest}</span>
          </span>
          <span className="sm:text-right">
            <span className="text-code-muted line-through">
              {ms(store.p90.peer)}
            </span>{' '}
            <span className="text-code-muted">→</span>{' '}
            <span className="text-syntax-green">{ms(store.p90.ours)}</span>
          </span>
        </div>
      ))}
    </CodeWindow>
  )
}

export default function ObservabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Agent-Ready Observability"
        title={
          <>
            Logs, metrics, and traces, <Accent>built on S3</Accent>
          </>
        }
        description="High-performance, extremely low-cost observability for the era of software abundance. Don’t sacrifice on performance, cost, or flexibility."
        actions={
          <>
            <ButtonLink
              href={URLS.bookDemo}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={observabilityLinks.docs}
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
        <TelemetryWindow />
      </div>

      <section className="rule-top">
        <FeatureCells
          items={observabilityAnchors}
          minColumn="260px"
          emphasis
        />
      </section>

      <section
        id="rewrites"
        className="rule-top scroll-mt-20"
      >
        <SectionHeading
          eyebrow="Rust rewrites"
          title="The stack you already run, without the operational toil"
          description="Re-instrumenting is a non-starter, so each store speaks the protocols and query languages you already use. Point your agents and Grafana at a new URL and keep everything else."
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={rewriteCells}
          minColumn="240px"
        />
      </section>

      <Section
        id="architecture"
        className="flex flex-col gap-10"
      >
        <SectionHeading
          eyebrow="Faster and vastly simpler"
          title={
            <>
              A writer, a stateless reader, <Accent>and a bucket</Accent>
            </>
          }
          description="The Grafana stack is nine interlocking services, hash rings, and replicated disks. Tuning it and owning it in production is out of reach for most teams. Plural Telemetry is writers in front of object storage and stateless readers that use local disk only as a cache, so scaling up means adding pods."
        />
        <ArchitectureCompare />
      </Section>

      <section className="rule-top">
        <StatGrid items={simplicityStats} />
      </section>

      <section
        id="verification"
        className="rule-top scroll-mt-20"
      >
        <SectionHeading
          eyebrow="Fuzz tested"
          title={
            <>
              Fuzzed against <Accent>the real thing</Accent>
            </>
          }
          description="Prometheus, Loki, and Tempo are the executable spec. Every store is tested against its reference implementation on identical data and queries, so compatibility and speed are measured together rather than claimed separately."
          action={
            <ArrowLink href={observabilityLinks.verification}>
              How we test
            </ArrowLink>
          }
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={verificationCells}
          minColumn="260px"
        />
      </section>

      <Section className="flex flex-col gap-8">
        <SectionHeading
          size="lg"
          title="Query latency from the published runs"
          description="p90 and p99 latency for each store against its peer, both on an S3 backend:"
        />
        <ComparisonTable
          caption="Query latency, peer versus Plural Telemetry"
          rowLabel="Store"
          columns={[
            { label: 'Peer' },
            { label: 'Peer p90' },
            { label: 'Plural p90', emphasized: true },
            { label: 'Peer p99' },
            { label: 'Plural p99', emphasized: true },
          ]}
          rows={telemetryStores.map((store) => ({
            label: store.name,
            values: [
              store.signal === 'metrics' ? 'Mimir' : store.peer,
              ms(store.p90.peer),
              ms(store.p90.ours),
              ms(store.p99.peer),
              ms(store.p99.ours),
            ],
          }))}
        />
        <p className="text-muted m-0 text-[13px]">
          Prometheus serving small queries from local disk is faster at p90; its
          p99 is similar to ours.
        </p>
      </Section>

      <Section
        id="deploy"
        className="flex flex-col gap-8"
      >
        <FeatureRow
          titleAs="h2"
          eyebrow="Runs anywhere"
          title="Deploy to any Kubernetes cluster with the operator"
          media={
            <div className="flex flex-col gap-4">
              <CodeWindow title="install">
                <div className="overflow-x-auto px-4 py-3 whitespace-pre">
                  {operatorInstall}
                </div>
              </CodeWindow>
              <CodeWindow title="telemetry/logs.yaml">
                <Yaml source={logsResourceYaml} />
              </CodeWindow>
            </div>
          }
        >
          <p className="m-0">
            Install one Helm chart, then declare each database as a custom
            resource. The operator runs it in your cluster, against your own
            bucket, and handles rolling restarts, scaling, and volume resizing.
          </p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {operatorPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3"
              >
                <span
                  aria-hidden="true"
                  className="bg-accent mt-[0.6em] size-1.5 shrink-0"
                />
                {point}
              </li>
            ))}
          </ul>
          <ArrowLink href={observabilityLinks.installation}>
            Installation guide
          </ArrowLink>
        </FeatureRow>
      </Section>

      <Section
        id="agents"
        className="flex flex-col gap-8"
      >
        <FeatureRow
          titleAs="h2"
          eyebrow="Agent-ready"
          title="Agents are the new primary consumer of telemetry"
          media={
            <CodeWindow title="workbench · incident-triage">
              <div className="overflow-x-auto px-4 py-3 whitespace-pre">
                {agentQuery}
              </div>
            </CodeWindow>
          }
        >
          <p className="m-0">
            Agents don’t need a dashboard. They need a fast, programmable API
            over the raw data. Every store answers over plain HTTP, with
            namespaced multi-tenancy and per-namespace auth, so each agent sees
            only the telemetry it should.
          </p>
          <p className="m-0">
            Observability is a core integration point for Plural’s workbenches,
            so investigations run against your own data, in your own cluster.
          </p>
        </FeatureRow>
      </Section>

      <Section
        id="cost"
        className="flex flex-col gap-10"
      >
        <SectionHeading
          eyebrow="Cost breakdown"
          title={
            <>
              What 5 TB/day of logs <Accent>actually costs</Accent>
            </>
          }
          description="Compare Plural Telemetry with self-hosted Loki and Datadog. Every assumption is adjustable."
          action={
            <ArrowLink href={observabilityLinks.cost}>
              All assumptions
            </ArrowLink>
          }
        />
        <CostCalculator />
      </Section>

      <section className="rule-top">
        <FeatureCells
          items={costReasons}
          minColumn="260px"
        />
      </section>

      <Faq items={observabilityFaq} />

      <CtaBand
        title={
          <>
            Observability that’s <Accent>cheap and boring</Accent>
          </>
        }
        description="See Plural Telemetry and agents working on your own clusters in a 30-minute demo."
      />
    </>
  )
}
