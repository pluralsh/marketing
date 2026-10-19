import type { Metadata } from 'next'

import { EdgeFleetDemo } from '@/components/interactive/EdgeFleetDemo'
import { CtaBand } from '@/components/sections/CtaBand'
import { FeatureCells } from '@/components/sections/FeatureCells'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { LinkCards } from '@/components/sections/LinkCards'
import { PageHero } from '@/components/sections/PageHero'
import { Panel, PanelLabel } from '@/components/sections/Panel'
import { Accent, Section } from '@/components/sections/Section'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { URLS } from '@/content/site'
import { cn } from '@/utils/cn'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata('/solutions/edge', {
  title: 'Edge Kubernetes | Plural',
  description:
    'Run AI and ML workloads in fields, factories, and vehicles. Plural provisions, registers, and updates edge clusters, even through intermittent connectivity.',
})

const industryExamples = [
  {
    title: 'Agriculture',
    body: 'Process field video locally to decide which plants need water.',
  },
  {
    title: 'Manufacturing',
    body: 'Run ML that controls robotics and automation on the floor.',
  },
  {
    title: 'Defense',
    body: 'Keep AI running on drones and vehicles with no connectivity.',
  },
  { title: 'Edge AI', body: 'Serve LLMs where data can’t leave the premises.' },
]

const controls = [
  { title: 'Real-time logs', body: 'From the management console.' },
  { title: 'Shell into pods', body: 'Direct access, no VPN hopping.' },
  {
    title: 'Health at a glance',
    body: 'Status for every cluster in the field.',
  },
  {
    title: 'Central deploys',
    body: 'Ship workloads to any device from one place.',
  },
]

const resources = [
  {
    label: 'Guide',
    title: 'Running Kubernetes at the edge with Plural',
    description: 'The full walkthrough, from ISO to approval.',
    href: 'https://www.plural.sh/blog/running-kubernetes-at-the-edge-with-plural-a-practical-guide-2/',
  },
  {
    label: 'Guide',
    title: 'Self-hosting LLMs: NVIDIA Jetson + K3s',
    description: 'Run open models on edge hardware.',
    href: 'https://www.plural.sh/blog/self-hosting-llms-on-kubernetes-nvidia-jetson-k3s/',
  },
  {
    label: 'Docs',
    title: 'Edge configuration',
    description: 'Set up Plural for edge devices.',
    href: 'https://docs.plural.sh/getting-started/advanced-config/edge-configuration',
  },
]

const provisioningStages = [
  {
    label: '1 · ISO IMAGE',
    lines: [
      'plural-edge.iso',
      'k8s binaries',
      'Plural agent',
      'vendored images',
    ],
  },
  {
    label: '2 · FLASH',
    lines: ['USB drive or SD card', 'handed to a field tech'],
  },
  {
    label: '3 · BOOT',
    lines: [
      'booting edge device…',
      'installing kubernetes',
      'starting plural agent',
      '✓ registration sent',
    ],
  },
]

// Connectivity over 72h as [online?, share of the window].
const connectivity: [boolean, number][] = [
  [true, 22],
  [false, 30],
  [true, 14],
  [false, 12],
  [true, 22],
]

function ProvisioningVisual() {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {provisioningStages.map((stage, i) => (
        <Panel
          key={stage.label}
          className="flex flex-col gap-1 p-4 text-xs"
        >
          <PanelLabel className="mb-1">{stage.label}</PanelLabel>
          {stage.lines.map((line) => (
            <span
              key={line}
              className={cn(
                line.startsWith('✓')
                  ? 'text-success'
                  : i === 0 && line !== stage.lines[0] && 'text-muted'
              )}
            >
              {line}
            </span>
          ))}
        </Panel>
      ))}
    </div>
  )
}

function RegistrationVisual() {
  return (
    <Panel>
      <PanelLabel>Clusters · pending approval</PanelLabel>
      <div className="border-line flex flex-wrap items-center justify-between gap-4 rounded-sm border p-4">
        <span className="flex flex-col">
          <span className="text-ink">raspberry-pi · 10.0.4.17</span>
          <span className="text-muted text-xs">
            registered 12 min after boot
          </span>
        </span>
        <span className="flex flex-wrap items-center gap-2 text-xs">
          <span className="border-line-strong rounded border px-2 py-1">
            name: field-07
          </span>
          <span className="border-line-strong rounded border px-2 py-1">
            tag: site=north
          </span>
          <span className="bg-accent rounded px-2.5 py-1 text-white">
            Approve
          </span>
        </span>
      </div>
    </Panel>
  )
}

function ConnectivityVisual() {
  return (
    <Panel className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span>vehicle-12 · connectivity</span>
        <span className="text-muted">last 72h</span>
      </div>
      <div
        aria-hidden="true"
        className="flex h-6 gap-0.5 overflow-hidden rounded"
      >
        {connectivity.map(([online, share], i) => (
          <span
            key={i}
            className={online ? 'bg-success' : 'bg-surface-muted'}
            style={{ flexGrow: share }}
          />
        ))}
      </div>
      <div className="text-muted flex gap-4 text-xs">
        <span>
          <span className="text-success">■</span> online
        </span>
        <span>
          <span className="text-subtle">■</span> offline
        </span>
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <span className="text-muted">offline · 3 updates queued</span>
        <span className="text-success">
          ✓ back online · k8s 1.32 and 2 app updates applied
        </span>
      </div>
    </Panel>
  )
}

const stories = [
  {
    title: 'Provision a cluster with a USB drive',
    lead: 'One image, everything included.',
    body: 'A single ISO holds the Kubernetes binaries, Plural’s management agent, and even vendored container images for air-gapped sites. Field technicians load it onto a USB drive or SD card and plug it in.',
    visual: <ProvisioningVisual />,
  },
  {
    title: 'Zero-touch registration',
    lead: 'No command line at the edge.',
    body: 'Once a device boots, it registers itself in Plural’s console, usually within 10 to 15 minutes. An admin approves it, gives it a name and tags, and Plural handles the rest.',
    visual: <RegistrationVisual />,
  },
  {
    title: 'Over-the-air updates through spotty networks',
    lead: 'Offline for days? It catches up.',
    body: 'The Plural operator on each cluster connects to the console whenever it can. When a device comes back into coverage, it syncs and applies every pending update to Kubernetes and your apps.',
    visual: <ConnectivityVisual />,
  },
]

export default function EdgeSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · Edge computing"
        title={
          <>
            Kubernetes that works where the <Accent>network</Accent> doesn’t
          </>
        }
        description="Run AI and ML workloads in fields, factories, and vehicles. Plural provisions, registers, and updates edge clusters, even through intermittent connectivity."
        actions={
          <>
            <ButtonLink
              href={URLS.contact}
              shortcut="B"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href="#try"
              variant="secondary"
            >
              Try the edge fleet
            </ButtonLink>
          </>
        }
      />

      <FeatureCells
        items={industryExamples}
        minColumn="220px"
      />

      <Section className="flex flex-col gap-[clamp(64px,8vw,112px)]">
        {stories.map((story, i) => (
          <FeatureRow
            key={story.title}
            titleAs="h2"
            title={story.title}
            reverse={i % 2 === 0}
            media={story.visual}
          >
            <p className="text-ink m-0 text-lg font-medium">{story.lead}</p>
            <p className="m-0">{story.body}</p>
          </FeatureRow>
        ))}
      </Section>

      <section className="rule-top">
        <SectionHeading
          eyebrow="Full operational control"
          title="Remote devices, cloud-grade operations"
          className="px-gutter pt-section pb-10"
        />
        <FeatureCells
          items={controls}
          minColumn="220px"
        />
      </section>

      <Section
        id="try"
        className="flex flex-col gap-8"
      >
        <SectionHeading
          eyebrow="Try it"
          title="Run an edge fleet"
          description="Approve new devices, take one offline, push an update, and watch it catch up when it reconnects."
        />
        <EdgeFleetDemo />
      </Section>

      <section className="rule-top">
        <SectionHeading
          title="Go deeper"
          size="lg"
          className="px-gutter pt-section pb-10"
        />
        <LinkCards items={resources} />
      </section>

      <CtaBand
        title={
          <>
            Bring your edge fleet <Accent>online</Accent>
          </>
        }
      />
    </>
  )
}
