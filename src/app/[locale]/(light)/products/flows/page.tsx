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
  flowFaq,
  flowLinks,
  flowPipeline,
  flowPreviews,
  flowPrs,
  flowServices,
  flowYaml,
  insightCells,
  previewBenefits,
  previewDemoVideo,
  previewGuardrails,
  previewPrBody,
  previewTemplateYaml,
} from '@/content/products/flows'
import { URLS } from '@/content/site'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/products/flows', {
  title: 'Flows | Plural',
  description:
    'A developer-facing command center for microservices: services, pipelines, PRs, alerts, and a preview environment for every pull request, scoped to the team that owns them.',
})

function FlowWindow() {
  return (
    <CodeWindow
      dots
      title="Flows · payments"
      status={`● ${flowPreviews.length} previews live`}
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
          <div className="border-code-line bg-code-panel rounded-xs border px-3 py-2.5">
            <span className="text-syntax-amber">grafana</span>{' '}
            <span className="text-code-muted">alert ·</span> payments-api 5xx
            rate 4.2% on /v1/settle
          </div>
          <div className="text-code-muted text-[11px]">
            PREVIEW ENVIRONMENTS
          </div>
          {flowPreviews.map((preview) => (
            <div
              key={preview.pr}
              className="border-code-line flex flex-wrap items-center justify-between gap-2 rounded-xs border px-3 py-2.5"
            >
              <span className="flex min-w-0 flex-col">
                <span>
                  <span className="text-syntax-violet">PR #{preview.pr}</span>{' '}
                  <span className="text-code-muted">·</span>{' '}
                  <span className="text-syntax-teal">sha-{preview.sha}</span>
                </span>
                <span className="text-code-dim truncate">{preview.host}</span>
              </span>
              <span
                className={
                  preview.status === 'ready'
                    ? 'text-syntax-green'
                    : 'text-syntax-amber'
                }
              >
                ● {preview.status}
              </span>
            </div>
          ))}
          <div className="bg-code-panel rounded-xs px-3.5 py-3 font-sans text-sm leading-normal">
            <span className="text-code-muted font-mono text-[11px]">
              plural · commented on PR #{flowPreviews[0].pr}
            </span>
            <div className="mt-1">
              Preview environment is ready at{' '}
              <span className="text-syntax-teal font-mono text-[12.5px]">
                {flowPreviews[0].host}
              </span>
              . It updates on every push and is torn down when the PR closes.
            </div>
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
        description="Kubernetes is too much surface area for most developers, who mostly care about a handful of services. A Flow groups related microservices with their pipelines, pull requests, and alerts, and spins up a preview environment for every pull request."
        actions={
          <>
            <ButtonLink
              href={URLS.bookDemo}
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
            The same boundary covers every preview environment the Flow creates.
          </p>
          <ArrowLink href={flowLinks.docs}>Create a Flow</ArrowLink>
        </FeatureRow>
      </Section>

      <section
        id="previews"
        className="rule-top scroll-mt-20"
      >
        <SectionHeading
          eyebrow="Preview environments"
          title={
            <>
              A full environment for <Accent>every pull request</Accent>
            </>
          }
          description="For the life of a pull request, Flows run a near clone of your dev environment with that branch’s code. Reviewers click a link instead of pulling a branch, and the shared dev environment stays stable."
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={previewBenefits}
          minColumn="260px"
        />
      </section>

      <Section className="flex flex-col gap-[clamp(48px,6vw,80px)]">
        <FeatureRow
          title="One custom resource, one line in the PR"
          media={
            <CodeWindow title="flows/payments-preview.yaml">
              <Yaml source={previewTemplateYaml} />
            </CodeWindow>
          }
        >
          <p className="m-0">
            A <code>PreviewEnvironmentTemplate</code> names the dev service to
            clone and what to override: the namespace, the image tag built for
            the commit, and a unique hostname for the PR.
          </p>
          <p className="m-0">
            Opt a pull request in by adding the Flow and template names to its
            description:
          </p>
          <CodeWindow>
            <div className="px-4 py-3 whitespace-pre">{previewPrBody}</div>
          </CodeWindow>
          <ArrowLink href={flowLinks.previews}>
            Set up preview environments
          </ArrowLink>
        </FeatureRow>
        <FeatureRow
          reverse
          title="Feedback on the PR, guardrails on the cluster"
          media={
            <Panel className="p-0">
              <div className="border-line flex justify-between border-b px-5 py-3">
                <span>Guardrails</span>
                <span className="text-muted">enforced by Plural</span>
              </div>
              {previewGuardrails.map((rule) => (
                <div
                  key={rule}
                  className="border-line flex gap-3 border-b px-5 py-3 last:border-b-0"
                >
                  <span className="text-success">✓</span>
                  <span className="text-ink">{rule}</span>
                </div>
              ))}
            </Panel>
          }
        >
          <p className="m-0">
            Plural already receives pull request webhooks and holds your GitHub
            or GitLab credentials, so it redeploys the preview on every push and
            comments on the PR with its status and URL. When the PR closes, the
            preview and its namespace are deleted.
          </p>
          <p className="m-0">
            Previews are GitOps services like any other, with guardrails that
            keep them from leaving their tenant or overwriting the service they
            clone.
          </p>
        </FeatureRow>
        <div className="mx-auto w-full max-w-[880px]">
          <YouTubeEmbed {...previewDemoVideo} />
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
