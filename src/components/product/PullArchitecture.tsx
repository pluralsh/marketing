'use client'

import { useState } from 'react'

import { CodeWindow } from '@/components/sections/CodeWindow'
import { cn } from '@/utils/cn'

import styles from './PullArchitecture.module.css'

type Mode = 'pull' | 'push'

const GROUP_WIDTH = 220
const GROUP_Y = 16
const CARD_WIDTH = 90
const CARD_Y = 62
const CARD_HEIGHT = 112
const PLANE = { x: 200, y: 330, width: 600, height: 170 }

const groups = [
  { provider: 'AWS', distro: 'EKS', clusters: ['prod-use1', 'prod-euw1'] },
  { provider: 'Azure', distro: 'AKS', clusters: ['prod-eus', 'dev-wus'] },
  { provider: 'GCP', distro: 'GKE', clusters: ['data-usc1', 'ml-use4'] },
  { provider: 'Edge', distro: 'k3s', clusters: ['store-0412', 'store-0977'] },
].map((group, g) => ({ ...group, x: 30 + g * (GROUP_WIDTH + 20) }))

const clusters = groups.flatMap((group, g) =>
  group.clusters.map((name, c) => {
    const x = group.x + (c === 0 ? 14 : GROUP_WIDTH - 14 - CARD_WIDTH)
    const i = g * 2 + c

    return {
      name,
      group: g,
      x,
      anchor: { x: x + CARD_WIDTH / 2, y: CARD_Y + CARD_HEIGHT },
      target: { x: 260 + (i * 480) / 7, y: PLANE.y },
    }
  })
)

const copy = {
  pull: {
    title: 'Plural control plane',
    subtitle: 'management cluster',
    chip: 'agent',
    tiles: [
      ['Git cache', 'auto-sharded'],
      ['Templating', 'per-cluster values'],
      ['Auth proxy', 'agent gRPC tunnel'],
      ['IaC stacks', 'Terraform, Pulumi'],
    ],
    facts: [
      [
        'Agent-initiated, egress-only',
        'Each cluster polls for its own desired state. Nothing needs a route into your clusters.',
      ],
      [
        'No central kubeconfigs',
        'The control plane never holds cluster-admin credentials, so there is no single key to the fleet.',
      ],
      [
        'Scales with the fleet',
        'No watch streams or single-master control loops. Adding the thousandth cluster is like adding the first.',
      ],
    ],
  },
  push: {
    title: 'Central CD server',
    subtitle: 'typical push-based GitOps',
    chip: 'kubeconfig',
    tiles: [
      ['Admin creds', 'for every cluster'],
      ['Watch streams', 'one per cluster'],
      ['Control loop', 'single master'],
      ['Inbound access', 'VPN · peering'],
    ],
    facts: [
      [
        'Inbound network paths',
        'Every cluster API must be reachable from the CD server, across clouds, VPCs, and edge sites.',
      ],
      [
        'One blast radius',
        'A single server holding admin credentials for the whole fleet is a prime target.',
      ],
      [
        'Falls over at scale',
        'Long-lived watch streams and one reconciler per fleet saturate long before thousands of clusters.',
      ],
    ],
  },
} as const

function connectorPath({ anchor, target }: (typeof clusters)[number]) {
  return `M ${anchor.x} ${anchor.y} C ${anchor.x} ${anchor.y + 90}, ${target.x} ${target.y - 80}, ${target.x} ${target.y}`
}

/** Animated diagram of Plural's agent-based pull architecture vs. push CD. */
export function PullArchitecture({ className }: { className?: string }) {
  const [mode, setMode] = useState<Mode>('pull')
  const [activeGroup, setActiveGroup] = useState<number | null>(null)
  const isPull = mode === 'pull'
  const text = copy[mode]

  return (
    <CodeWindow
      dots
      title="Fleet architecture"
      status={
        <span
          role="group"
          aria-label="Deployment model"
          className="border-code-line inline-flex rounded-md border p-0.5"
        >
          {(['pull', 'push'] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={mode === option}
              onClick={() => setMode(option)}
              className={cn(
                'cursor-pointer rounded px-2.5 py-1 font-mono text-[11px]',
                mode === option
                  ? 'bg-accent text-white'
                  : 'text-code-muted hover:text-code-text'
              )}
            >
              {option === 'pull' ? 'Plural · pull' : 'Typical · push'}
            </button>
          ))}
        </span>
      }
      className={className}
    >
      <div className="overflow-x-auto bg-[radial-gradient(var(--color-code-line)_1px,transparent_1px)] bg-size-[18px_18px]">
        <svg
          viewBox="0 0 1000 600"
          role="img"
          aria-label={
            isPull
              ? 'Clusters across AWS, Azure, GCP, and edge sites each run a Plural agent that pulls desired state from the control plane over egress-only connections.'
              : 'A central CD server pushes into every cluster, which requires inbound network access and admin credentials for each one.'
          }
          className="block h-auto w-full min-w-[720px] font-mono"
        >
          {clusters.map((cluster, i) => {
            const dimmed = activeGroup !== null && activeGroup !== cluster.group

            return (
              <g
                key={cluster.name}
                className={cn(
                  'transition-opacity',
                  dimmed ? 'opacity-15' : 'opacity-100'
                )}
              >
                <path
                  d={connectorPath(cluster)}
                  fill="none"
                  strokeWidth="1.25"
                  strokeDasharray="2 5"
                  className="stroke-code-muted/60"
                />
                <path
                  d={connectorPath(cluster)}
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ animationDelay: `${-i * 0.2}s` }}
                  className={cn(
                    styles.packets,
                    isPull
                      ? 'stroke-syntax-teal'
                      : cn(styles.reverse, 'stroke-syntax-pink')
                  )}
                />
              </g>
            )
          })}

          {groups.map((group, g) => (
            <g
              key={group.provider}
              onMouseEnter={() => setActiveGroup(g)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              <rect
                x={group.x}
                y={GROUP_Y}
                width={GROUP_WIDTH}
                height={176}
                rx="10"
                strokeDasharray={isPull ? undefined : '5 4'}
                className={cn(
                  'fill-code/80 transition-colors',
                  activeGroup === g ? 'stroke-code-dim' : 'stroke-code-line'
                )}
              />
              <text
                x={group.x + 16}
                y={GROUP_Y + 28}
                className="fill-code-text text-[13px]"
              >
                {group.provider}
              </text>
              <text
                x={group.x + GROUP_WIDTH - 16}
                y={GROUP_Y + 28}
                textAnchor="end"
                className="fill-code-muted text-[11px]"
              >
                {isPull ? 'private network' : 'inbound :6443'}
              </text>
              {clusters
                .filter((cluster) => cluster.group === g)
                .map((cluster) => (
                  <g key={cluster.name}>
                    <rect
                      x={cluster.x}
                      y={CARD_Y}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT}
                      rx="7"
                      className="fill-code-panel stroke-code-line"
                    />
                    <text
                      x={cluster.x + 10}
                      y={CARD_Y + 22}
                      className="fill-code-text text-[11px]"
                    >
                      {cluster.name}
                    </text>
                    <text
                      x={cluster.x + 10}
                      y={CARD_Y + 40}
                      className="fill-code-muted text-[10px]"
                    >
                      {group.distro} · 1.31
                    </text>
                    <rect
                      x={cluster.x + 8}
                      y={CARD_Y + 74}
                      width={CARD_WIDTH - 16}
                      height={24}
                      rx="5"
                      className={
                        isPull
                          ? 'fill-syntax-teal/10 stroke-syntax-teal/40'
                          : 'fill-syntax-pink/10 stroke-syntax-pink/40'
                      }
                    />
                    <circle
                      cx={cluster.x + 19}
                      cy={CARD_Y + 86}
                      r="3"
                      className={cn(
                        styles.pulse,
                        isPull ? 'fill-syntax-teal' : 'fill-syntax-pink'
                      )}
                    />
                    <text
                      x={cluster.x + 28}
                      y={CARD_Y + 90}
                      className={cn(
                        'text-[10px]',
                        isPull ? 'fill-syntax-teal' : 'fill-syntax-pink'
                      )}
                    >
                      {text.chip}
                    </text>
                  </g>
                ))}
            </g>
          ))}

          <rect
            x="250"
            y="250"
            width="500"
            height="26"
            rx="13"
            className="fill-code stroke-code-line"
          />
          <text
            x="500"
            y="267"
            textAnchor="middle"
            className="fill-code-muted text-[11px]"
          >
            {isPull
              ? 'agents poll · egress only · tolerant of intermittent links'
              : 'server pushes · needs a network path into every cluster'}
          </text>

          <rect
            x={PLANE.x}
            y={PLANE.y}
            width={PLANE.width}
            height={PLANE.height}
            rx="12"
            className={cn(
              'fill-code-panel',
              isPull ? 'stroke-accent' : 'stroke-syntax-pink/60'
            )}
            strokeWidth="1.5"
          />
          <g transform={`translate(${PLANE.x + 24} ${PLANE.y + 20})`}>
            {isPull ? (
              <g
                transform="scale(0.25)"
                className="fill-white"
              >
                <path d="M31.8 51.3a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
                <path d="M20 71.3v-9.9h31.9c1.1 0 2-.9 2-2V7.3H64v59.9c0 4.1-4.3 4.1-4.3 4.1H20Z" />
                <path d="M43.9 7.3v9.9H12.1c-1.1 0-2 .9-2 2v52.1H0V11.4c0-4.1 4.3-4.1 4.3-4.1h39.6Z" />
              </g>
            ) : (
              <circle
                cx="8"
                cy="8"
                r="7"
                fill="none"
                strokeWidth="1.6"
                className="stroke-syntax-pink"
              />
            )}
          </g>
          <text
            x={PLANE.x + 50}
            y={PLANE.y + 33}
            className="fill-white text-[14px]"
          >
            {text.title}
          </text>
          <text
            x={PLANE.x + PLANE.width - 24}
            y={PLANE.y + 33}
            textAnchor="end"
            className="fill-code-muted text-[11px]"
          >
            {text.subtitle}
          </text>
          {text.tiles.map(([title, detail], k) => {
            const x = PLANE.x + 24 + k * 141

            return (
              <g key={title}>
                <rect
                  x={x}
                  y={PLANE.y + 56}
                  width="129"
                  height="90"
                  rx="8"
                  className="fill-code stroke-code-line"
                />
                <text
                  x={x + 12}
                  y={PLANE.y + 84}
                  className={cn(
                    'text-[12px]',
                    isPull ? 'fill-code-text' : 'fill-syntax-pink'
                  )}
                >
                  {title}
                </text>
                <text
                  x={x + 12}
                  y={PLANE.y + 104}
                  className="fill-code-muted text-[10px]"
                >
                  {detail}
                </text>
              </g>
            )
          })}

          <path
            d={`M 500 ${PLANE.y + PLANE.height} V 540`}
            strokeDasharray="2 5"
            strokeWidth="1.25"
            className="stroke-code-muted/60"
          />
          <rect
            x="330"
            y="540"
            width="340"
            height="44"
            rx="8"
            className="fill-code-panel stroke-code-line"
          />
          <text
            x="500"
            y="567"
            textAnchor="middle"
            className="fill-code-dim text-[12px]"
          >
            Git · Helm · OCI · Terraform modules
          </text>
        </svg>
      </div>
      <div className="border-code-line grid border-t font-sans md:grid-cols-3">
        {text.facts.map(([title, body]) => (
          <div
            key={title}
            className="border-code-line flex flex-col gap-1.5 border-b px-5 py-4 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
          >
            <span
              className={cn(
                'font-mono text-[12px]',
                isPull ? 'text-syntax-teal' : 'text-syntax-pink'
              )}
            >
              {isPull ? '✓' : '✗'} {title}
            </span>
            <span className="text-code-dim text-sm leading-normal">{body}</span>
          </div>
        ))}
      </div>
    </CodeWindow>
  )
}
