'use client'

import type { ReactElement } from 'react'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { cn } from '@/utils/cn'

import styles from './styles.module.css'

export type VerticalNavigationInterface = {
  items: VerticalNavigationItemInterface[]
  highlightOffset?: number
  itemClassName?: string
  activeClassName?: string
  contentSectionBottomOffset?: number
}

export type VerticalNavigationItemInterface = {
  elementRef: HTMLDivElement
  title: string
  isActive?: boolean
  id: string
  href: string
}

function VerticalNavigation({
  items,
  highlightOffset = 0,
  itemClassName,
  activeClassName,
  contentSectionBottomOffset = 0,
}: VerticalNavigationInterface): ReactElement {
  const [mappedItems, setMappedItems] = useState(items)

  useEffect(() => {
    const hash = window.location.hash

    if (!hash) return

    const scrollToHash = () => {
      const id = hash.substring(1)
      const el = document.getElementById(id)

      if (el) {
        const y =
          el.getBoundingClientRect().top + window.pageYOffset - highlightOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }

    requestAnimationFrame(scrollToHash)
  }, [highlightOffset])

  const scrollHandler = useCallback((): void => {
    if (!items.length) {
      return
    }
    setMappedItems(
      items.map((item) => {
        const { elementRef } = item
        const rect = elementRef.getBoundingClientRect()

        const elementTopAbsolute = rect.top + window.scrollY
        const elementBottomAbsolute = rect.bottom + window.scrollY

        const isActive =
          window.scrollY >=
            elementTopAbsolute - highlightOffset - contentSectionBottomOffset &&
          window.scrollY < elementBottomAbsolute - highlightOffset

        return {
          ...item,
          isActive,
        }
      })
    )
  }, [highlightOffset, items, contentSectionBottomOffset])

  useEffect((): (() => void) => {
    const raf = requestAnimationFrame(() => {
      scrollHandler()
    })

    return () => cancelAnimationFrame(raf)
  }, [scrollHandler])

  useEffect((): (() => void) => {
    window.addEventListener('scroll', scrollHandler, { passive: true })

    return (): void => window.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])

  return (
    <>
      {mappedItems.map(({ title, isActive, href }) => (
        <Link
          href={href}
          key={title}
          replace
          className={cn(
            'h-7',
            styles.navigationItem,
            itemClassName,
            isActive && styles.navigationItemActive,
            isActive && activeClassName
          )}
        >
          <span>{title}</span>
        </Link>
      ))}
    </>
  )
}

export default VerticalNavigation
