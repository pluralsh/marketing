'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { isExternalHref } from './SmartLink'

// One document listener serves every shortcut on the page. The same key can be
// rendered in several places (header and hero both show "B"), so registrations
// are reference counted and the most recent href wins.
const registry = new Map<string, { href: string; count: number }>()
let navigate: ((href: string) => void) | null = null

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  )
}

function onKeyDown(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return
  if (isTypingTarget(event.target)) return

  const entry = registry.get(event.key.toLowerCase())

  if (!entry) return
  event.preventDefault()
  navigate?.(entry.href)
}

/** Navigates to `href` when `keyName` is pressed anywhere outside a form field. */
export function Shortcut({ keyName, href }: { keyName: string; href: string }) {
  const router = useRouter()

  useEffect(() => {
    const key = keyName.toLowerCase()
    const existing = registry.get(key)

    navigate = (target) => {
      if (isExternalHref(target)) window.location.assign(target)
      else if (target.startsWith('#'))
        document.getElementById(target.slice(1))?.scrollIntoView()
      else router.push(target)
    }
    registry.set(key, { href, count: (existing?.count ?? 0) + 1 })
    if (registry.size === 1 && !existing)
      document.addEventListener('keydown', onKeyDown)

    return () => {
      const current = registry.get(key)

      if (!current) return
      if (current.count > 1)
        registry.set(key, { ...current, count: current.count - 1 })
      else registry.delete(key)
      if (registry.size === 0)
        document.removeEventListener('keydown', onKeyDown)
    }
  }, [keyName, href, router])

  return null
}
