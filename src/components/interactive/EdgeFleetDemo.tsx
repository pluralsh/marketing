'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

type DeviceState = 'pending' | 'online' | 'offline'
type Device = {
  name: string
  site: string
  state: DeviceState
  version: number
}

const initialDevices: Device[] = [
  { name: 'field-07', site: 'north field', state: 'pending', version: 0 },
  { name: 'factory-02', site: 'plant 2', state: 'online', version: 3 },
  { name: 'vehicle-12', site: 'convoy', state: 'offline', version: 3 },
  { name: 'drone-04', site: 'range', state: 'online', version: 3 },
  { name: 'field-11', site: 'south field', state: 'pending', version: 0 },
]
const INITIAL_RELEASE = 3
const INITIAL_LOG =
  'Two devices are waiting for approval. Approve one, then push an update.'

const stateStyles: Record<DeviceState, { label: string; className: string }> = {
  pending: { label: 'pending approval', className: 'text-warning' },
  online: { label: 'online', className: 'text-success' },
  offline: { label: 'offline', className: 'text-muted' },
}

const setupSteps = [
  {
    title: 'Build the ISO',
    body: 'Prepare the image with the Plural CLI. Vendor images in for air-gapped sites.',
  },
  {
    title: 'Flash and ship',
    body: 'Load it onto a USB drive or SD card for the field tech.',
  },
  {
    title: 'Boot the device',
    body: 'Kubernetes installs and the device registers itself.',
  },
  {
    title: 'Approve and deploy',
    body: 'Name, tag, and manage it like any cloud cluster.',
  },
]

const version = (n: number) => `v1.${n}`

/** Toy fleet console: approve devices, push releases, and watch offline devices catch up. */
export function EdgeFleetDemo() {
  const [view, setView] = useState<'fleet' | 'setup'>('fleet')
  const [release, setRelease] = useState(INITIAL_RELEASE)
  const [devices, setDevices] = useState(initialDevices)
  const [log, setLog] = useState(INITIAL_LOG)

  const update = (index: number, patch: Partial<Device>, message: string) => {
    setDevices((all) =>
      all.map((d, i) => (i === index ? { ...d, ...patch } : d))
    )
    setLog(message)
  }

  const pushUpdate = () => {
    const next = release + 1
    const offline = devices.filter((d) => d.state === 'offline').length

    setRelease(next)
    setDevices((all) =>
      all.map((d) => (d.state === 'online' ? { ...d, version: next } : d))
    )
    setLog(
      `Pushed ${version(next)} · online devices updated` +
        (offline ? ` · ${offline} offline, queued until they reconnect` : '')
    )
  }

  const reset = () => {
    setRelease(INITIAL_RELEASE)
    setDevices(initialDevices)
    setLog(INITIAL_LOG)
  }

  return (
    <div className="border-line-strong bg-surface overflow-hidden rounded-sm border">
      <div className="border-line flex flex-wrap items-center justify-between gap-3 border-b p-3">
        <div
          role="tablist"
          aria-label="View"
          className="bg-canvas flex gap-1 rounded-sm p-1"
        >
          {(
            [
              ['fleet', 'What operators see'],
              ['setup', 'How it’s set up'],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={view === value}
              onClick={() => setView(value)}
              className={cn(
                'min-h-9 cursor-pointer rounded-xs px-3 text-sm transition-colors',
                view === value
                  ? 'bg-surface text-ink shadow-sm'
                  : 'text-muted hover:text-ink'
              )}
            >
              {label}
            </button>
          ))}
        </div>
        {view === 'fleet' && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-label">Fleet release {version(release)}</span>
            <Button
              size="sm"
              onClick={pushUpdate}
            >
              Push update
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        )}
      </div>
      {view === 'fleet' ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse font-mono text-[13px]">
              <thead>
                <tr className="text-muted border-line border-b text-left text-[11px]">
                  {['DEVICE', 'SITE', 'STATUS', 'VERSION', 'ACTION'].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-4 py-3 font-normal"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {devices.map((device, i) => {
                  const behind =
                    device.state === 'offline' && device.version < release

                  return (
                    <tr
                      key={device.name}
                      className="border-line border-b last:border-b-0"
                    >
                      <td className="px-4 py-3">{device.name}</td>
                      <td className="text-muted px-4 py-3">{device.site}</td>
                      <td
                        className={cn(
                          'px-4 py-3',
                          stateStyles[device.state].className
                        )}
                      >
                        ● {stateStyles[device.state].label}
                      </td>
                      <td className="px-4 py-3">
                        {device.state === 'pending'
                          ? '—'
                          : version(device.version)}{' '}
                        {behind && (
                          <span className="text-warning">
                            · {version(release)} queued
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {device.state === 'pending' ? (
                          <Button
                            size="sm"
                            onClick={() =>
                              update(
                                i,
                                { state: 'online', version: release },
                                `${device.name} approved · tagged and running ${version(release)}`
                              )
                            }
                          >
                            Approve
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() =>
                              device.state === 'online'
                                ? update(
                                    i,
                                    { state: 'offline' },
                                    `${device.name} lost connectivity · updates will queue`
                                  )
                                : update(
                                    i,
                                    { state: 'online', version: release },
                                    `${device.name} back online · synced` +
                                      (device.version < release
                                        ? ` and applied ${version(release)}`
                                        : ', already current')
                                  )
                            }
                          >
                            {device.state === 'online'
                              ? 'Go offline'
                              : 'Reconnect'}
                          </Button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div
            aria-live="polite"
            className="border-line bg-canvas text-muted border-t px-4 py-3 font-mono text-xs"
          >
            {log}
          </div>
        </>
      ) : (
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-4">
          {setupSteps.map((s, i) => (
            <li
              key={s.title}
              className="border-line flex flex-col gap-1.5 rounded-sm border p-4"
            >
              <span className="text-accent-ink font-mono text-xs">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-medium">{s.title}</span>
              <span className="text-muted text-sm">{s.body}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
