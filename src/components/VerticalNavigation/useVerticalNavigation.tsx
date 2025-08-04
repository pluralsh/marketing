import { memo, useMemo, useState } from 'react'

import type { VerticalNavigationItemInterface } from '@/components/VerticalNavigation/VerticalNavigation'

import VerticalNavigation from '@/components/VerticalNavigation/VerticalNavigation'
import { slugify } from '@/utils/strings'

type UseVerticalNavigationProps = {
  highlightOffset?: number // value in px
  contentSectionBottomOffset?: number // value in px
  itemClassName?: string
  activeClassName?: string
}

export default function useVerticalNavigation({
  itemClassName,
  activeClassName,
  contentSectionBottomOffset,
  highlightOffset,
}: UseVerticalNavigationProps = {}) {
  const [navigationItemsMap, setNavigationItemsMap] = useState<
    Map<string, VerticalNavigationItemInterface>
  >(() => new Map())

  const setNavigationItem = (
    item: Omit<VerticalNavigationItemInterface, 'href'>
  ) => {
    if (navigationItemsMap.has(item.id)) {
      return
    }
    navigationItemsMap.set(item.id, {
      ...item,
      href: `#${item.id}`,
    })

    setNavigationItemsMap(new Map(navigationItemsMap))
  }

  const navigationItems = useMemo(
    () => Array.from(navigationItemsMap.values()),
    [navigationItemsMap]
  )

  const assignRefElement =
    ({ title }: { title: string }) =>
    (el: HTMLDivElement | null) => {
      if (el) {
        const id = slugify(title)
        el.setAttribute('id', id)
        setNavigationItem({ elementRef: el, id, title })
      }
    }

  const Component = memo(() => (
    <VerticalNavigation
      highlightOffset={highlightOffset}
      items={navigationItems}
      itemClassName={itemClassName}
      activeClassName={activeClassName}
      contentSectionBottomOffset={contentSectionBottomOffset}
    />
  ))

  return {
    Component,
    assignRefElement,
  }
}
