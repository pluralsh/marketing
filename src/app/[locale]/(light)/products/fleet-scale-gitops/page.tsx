import type { Metadata } from 'next'

import { PullArchitecture } from '@/components/product/PullArchitecture'
import { CodeWindow, Yaml } from '@/components/sections/CodeWindow'
import { CtaBand } from '@/components/sections/CtaBand'
import { Faq } from '@/components/sections/Faq'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { PageHero } from '@/components/sections/PageHero'
import { Panel, PanelLabel } from '@/components/sections/Panel'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Quote } from '@/components/sections/Testimonials'
import { ArrowLink, ButtonLink } from '@/components/ui/Button'
import {
  architecturePillars,
  gitopsAnchors,
  gitopsDocs,
  gitopsFaq,
  globalServiceYaml,
  hierarchy,
  liquidLines,
  pipelineStages,
  stackYaml,
  terraformLines,
} from '@/content/products/fleet-scale-gitops'
import { testimonials, URLS } from '@/content/site'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/products/fleet-scale-gitops', {
  title: 'Fleet Scale GitOps | Plural',
  description:
    'Implement GitOps across IaC and Kubernetes, even at thousand-cluster scale. A pull-based architecture deploys Terraform, Helm, and manifests to any cloud, datacenter, or edge site.',
})

function TerraformToHelmWindow() {
  return (
    <CodeWindow title="terraform → helm values">
      <div className="border-code-line text-code-muted border-b px-4 py-2 text-[11px]">
        terraform/eks-prod/cluster.tf
      </div>
      <div className="text-code-dim overflow-x-auto px-4 py-3 whitespace-pre">
        {terraformLines.join('\n')}
      </div>
      <div className="border-code-line text-code-muted border-y px-4 py-2 text-[11px]">
        helm-values/externaldns.yaml.liquid
      </div>
      <Yaml source={liquidLines.join('\n')} />
    </CodeWindow>
  )
}

function HierarchyPanel() {
  return (
    <Panel>
      <PanelLabel>Ownership · permissions flow down</PanelLabel>
      {hierarchy.map((node) => (
        <div
          key={node.name}
          className="border-line flex flex-wrap items-center justify-between gap-2 border-b py-2.5 last:border-b-0"
          style={{ paddingLeft: `${node.depth * 22}px` }}
        >
          <span>
            {node.depth > 0 && <span className="text-muted">└ </span>}
            <span className="text-ink">{node.name}</span>
          </span>
          <span className="text-muted">{node.detail}</span>
        </div>
      ))}
    </Panel>
  )
}

function PipelinePanel() {
  return (
    <Panel className="flex flex-col gap-3">
      <PanelLabel className="mb-0">Pipeline · external-dns v6.31.4</PanelLabel>
      <div className="flex flex-wrap items-stretch gap-2">
        {pipelineStages.map((stage, i) => (
          <div
            key={stage.name}
            className="flex flex-[1_1_120px] items-center gap-2"
          >
            <div
              className={cn(
                'flex flex-1 flex-col gap-1 rounded-lg border px-3.5 py-3',
                stage.done
                  ? 'border-line-strong'
                  : 'border-accent bg-accent-tint'
              )}
            >
              <span className="text-ink">{stage.name}</span>
              <span className="text-muted text-xs">
                {stage.clusters} clusters
              </span>
              <span
                className={cn(
                  'text-xs',
                  stage.done ? 'text-success' : 'text-accent-ink'
                )}
              >
                {stage.done ? '✓' : '●'} {stage.status}
              </span>
            </div>
            {i < pipelineStages.length - 1 && (
              <span
                aria-hidden="true"
                className="text-muted"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="bg-accent text-on-accent self-start rounded px-3 py-1.5 text-xs">
        Approve promotion to prod
      </div>
    </Panel>
  )
}

export default function FleetScaleGitopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet Scale GitOps"
        title={
          <>
            GitOps for IaC and Kubernetes at <Accent>fleet</Accent> scale
          </>
        }
        description="Implement GitOps across IaC and K8s, even at thousand-cluster scale. One pull-based system reconciles Terraform, Helm, and manifests into any cloud, datacenter, or edge site, and every change is reviewed in Git."
        actions={
          <>
            <ButtonLink
              href={URLS.contact}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={gitopsDocs.architecture}
              variant="secondary"
              shortcut="D"
            >
              Read the architecture
            </ButtonLink>
          </>
        }
      />
      <div className="relative px-[clamp(12px,2vw,24px)] pb-16">
        <div
          aria-hidden="true"
          className="bg-accent/15 absolute inset-x-[15%] top-10 bottom-10 -z-10 blur-3xl"
        />
        <PullArchitecture />
      </div>

      <section className="rule-top">
        <FeatureCells
          items={gitopsAnchors}
          minColumn="260px"
          emphasis
        />
      </section>

      <section
        id="architecture"
        className="rule-top scroll-mt-20"
      >
        <SectionHeading
          eyebrow="Pull architecture"
          title="Built for the fleet you’ll have, not the one you have today"
          description="Most GitOps tools centralize credentials and push changes through long-lived watch streams. That works for ten clusters and breaks at a thousand. Plural inverts it: a thin agent on each cluster pulls its desired state, so the control plane never needs to reach in."
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={architecturePillars}
          minColumn="240px"
        />
      </section>

      <Section
        id="layers"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <SectionHeading
          eyebrow="Every layer"
          title="Cloud infrastructure and workloads in one GitOps workflow"
          description="Stop stitching together Argo CD, Flux, Atlantis, and custom scripts. Plural reconciles the whole stack from Git, from the VPC to the Helm chart."
        />
        <FeatureRow
          title="IaC stacks, reconciled on every commit"
          media={
            <CodeWindow title="stacks/eks-prod.yaml">
              <Yaml source={stackYaml} />
            </CodeWindow>
          }
        >
          <p className="m-0">
            Turn any Terraform, Pulumi, or Ansible codebase into a stack that
            runs on every commit. Plans land in the pull request for review, so
            nobody applies changes from a laptop with admin credentials.
          </p>
          <p className="m-0">
            Runs execute on a cluster next to the resources they manage, over
            egress-only networking.
          </p>
          <ArrowLink href={gitopsDocs.stacks}>How stacks work</ArrowLink>
        </FeatureRow>
        <FeatureRow
          reverse
          title="Terraform outputs flow straight into Kubernetes"
          media={<TerraformToHelmWindow />}
        >
          <p className="m-0">
            Cluster metadata set in Terraform, like IAM role ARNs, hostnames,
            and domains, is templated into Helm values at deploy time. No
            copy-pasting outputs, no per-cluster forks of the same chart.
          </p>
          <p className="m-0">
            Infrastructure and the services that depend on it change together,
            in one declarative commit.
          </p>
        </FeatureRow>
        <FeatureRow
          title="One hierarchy, one permission model"
          media={<HierarchyPanel />}
        >
          <p className="m-0">
            Projects own stacks and clusters, and clusters own services.
            Permissions granted on a parent flow down automatically, so “this
            team owns these clusters” is a single binding mapped to your SSO
            groups.
          </p>
        </FeatureRow>
      </Section>

      <Section
        id="fleet"
        className="flex flex-col gap-[clamp(48px,6vw,80px)]"
      >
        <SectionHeading
          eyebrow="Fleet-wide"
          title="Deploy once, land on every cluster that matches"
          description="Define a service once and Plural keeps it running everywhere it belongs, including clusters that don’t exist yet."
        />
        <FeatureRow
          title="Global services target by tag, not by list"
          media={
            <CodeWindow title="services/external-dns.yaml">
              <Yaml source={globalServiceYaml} />
            </CodeWindow>
          }
        >
          <p className="m-0">
            Replicate ingress controllers, service meshes, cert-manager, and
            your own platform add-ons across the fleet by tag, Kubernetes
            distribution, or Cluster API provider.
          </p>
          <p className="m-0">
            New clusters pick up their baseline the moment they register.
          </p>
          <ArrowLink href={gitopsDocs.globalServices}>
            Global services in the docs
          </ArrowLink>
        </FeatureRow>
        <FeatureRow
          reverse
          title="Promote safely from dev to a thousand prod clusters"
          media={<PipelinePanel />}
        >
          <p className="m-0">
            Pipelines move changes through environments with approval gates and
            automated checks between stages. Pair them with Sentinels to prove
            each stage is healthy before the next one starts.
          </p>
          <ArrowLink href={gitopsDocs.pipelines}>How pipelines work</ArrowLink>
        </FeatureRow>
      </Section>

      <Section className="flex justify-center py-[clamp(64px,9vw,120px)]">
        <Quote
          size="lg"
          testimonial={testimonials.upgrades}
          className="max-w-[880px] text-center"
        />
      </Section>

      <Faq items={gitopsFaq} />

      <CtaBand
        title={
          <>
            GitOps that scales with your <Accent>fleet</Accent>
          </>
        }
        description="See Plural reconcile IaC and Kubernetes across your clusters in a 30-minute demo."
      />
    </>
  )
}
