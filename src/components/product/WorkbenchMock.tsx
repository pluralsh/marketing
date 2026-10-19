import { CodeWindow, Diff } from '@/components/sections/CodeWindow'
import { cn } from '@/utils/cn'

const workbenches = [
  {
    title: 'payments-api CrashLoopBackOff',
    meta: 'incident-responder · running · 2m',
  },
  { title: 'EKS fleet upgrade plan', meta: 'upgrade-planner · 3 PRs · 1h' },
  { title: 'Nightly CVE scan', meta: 'cve-sweeper · scheduled · 6h' },
  { title: 'Right-size prod node groups', meta: 'finops · PR open · 1d' },
  {
    title: 'Double prod database size',
    meta: 'ticket-to-pr · from Linear · 2d',
  },
  { title: 'staging-eu config drift', meta: 'drift-check · resolved · 3d' },
]

/** Subagent prefixes are color-coded consistently across product mocks. */
export const agentColors = {
  observability: 'text-syntax-teal',
  infra: 'text-syntax-violet',
  code: 'text-syntax-pink',
} as const

export function AgentStep({
  agent,
  children,
}: React.PropsWithChildren<{ agent: keyof typeof agentColors }>) {
  return (
    <div>
      <span className={agentColors[agent]}>{agent}</span>{' '}
      <span className="text-code-muted">›</span> {children}
    </div>
  )
}

export const crashLoopDiff = [
  { n: 12, text: '  resources:' },
  { n: 13, text: '    limits:' },
  { n: 14, text: '    memory: 256Mi', kind: 'remove' as const },
  { n: 14, text: '    memory: 512Mi', kind: 'add' as const },
  { n: 15, text: '    requests:' },
  { n: 16, text: '      memory: 256Mi' },
]

/** Static mock of the Workbenches UI resolving an incident. */
export function WorkbenchMock({ className }: { className?: string }) {
  return (
    <CodeWindow
      dots
      title="Plural · Workbenches · prod-us-east"
      status="● agents online"
      className={className}
      footer={[
        'LLM: your choice',
        'Runs in-cluster',
        'Audit log on',
        'RBAC scoped',
      ].map((item) => (
        <span key={item}>{item}</span>
      ))}
    >
      <div className="flex min-h-[460px] flex-wrap">
        <div className="border-code-line max-w-full flex-[1_1_260px] border-r py-3">
          <p className="text-code-muted m-0 px-4 pt-1 pb-2.5 text-[11px]">
            WORKBENCHES
          </p>
          {workbenches.map((wb, i) => (
            <div
              key={wb.title}
              className={cn(
                'px-4 py-2.5',
                i === 0 && 'bg-code-line border-syntax-violet border-l-2'
              )}
            >
              <div className={i === 0 ? 'text-white' : undefined}>
                {wb.title}
              </div>
              <div className="text-code-muted text-[11px]">{wb.meta}</div>
            </div>
          ))}
        </div>
        <div className="border-code-line flex min-w-0 flex-[2_1_380px] flex-col gap-3.5 border-r px-5 py-4">
          <div className="border-code-line bg-code-panel rounded-md border px-3 py-2.5">
            <span className="text-syntax-amber">alertmanager</span>{' '}
            <span className="text-code-muted">webhook ·</span>{' '}
            KubePodCrashLooping · payments-api
          </div>
          <p className="m-0 font-sans text-sm">
            Investigating observability and infrastructure in parallel.
          </p>
          <div className="flex flex-col gap-1.5">
            <AgentStep agent="observability">
              Query Prometheus: container restarts, last 1h
            </AgentStep>
            <AgentStep agent="infra">Read Deployment payments-api</AgentStep>
            <AgentStep agent="infra">
              Search graph: recent changes to payments-api
            </AgentStep>
            <AgentStep agent="code">Diff Helm values v42 → v43</AgentStep>
          </div>
          <div className="bg-code-panel rounded-md px-3.5 py-3 font-sans text-sm leading-normal">
            <strong className="font-medium text-white">Root cause:</strong>{' '}
            memory limit lowered to 256Mi in v43. Pods are OOMKilled on startup.
            Opening a PR to restore 512Mi.
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-2">
            <span className="text-code-muted">Awaiting human review</span>
            <span className="bg-accent inline-flex min-h-8 items-center rounded-[4px] px-3 text-white">
              Review PR
            </span>
          </div>
        </div>
        <div className="flex min-w-0 flex-[2_1_320px] flex-col">
          <div className="border-code-line text-code-dim border-b px-4 py-2.5">
            helm/payments-api/values.yaml
          </div>
          <Diff lines={crashLoopDiff} />
          <div className="border-code-line text-code-muted mt-auto border-t px-4 py-3">
            Pull request opened · 1 file changed · linked to alert
          </div>
        </div>
      </div>
    </CodeWindow>
  )
}
