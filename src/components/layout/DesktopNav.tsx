'use client'

import { NavigationMenu } from 'radix-ui'

import type { NavMenu } from '@/content/site'

import { SmartLink } from '@/components/ui/SmartLink'
import { navigation } from '@/content/site'
import { cn } from '@/utils/cn'

import { NavFeatureCard, NavMenuItem } from './NavMenuItem'

const triggerClass =
  'text-ink hover:bg-surface-hover data-[state=open]:bg-surface-hover inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-xs px-3 text-[15px] no-underline'

const panelClass =
  'border-line-strong bg-surface shadow-menu absolute top-full z-(--z-popover) overflow-hidden rounded-sm border'

function MegaMenu({ menu }: { menu: Extract<NavMenu, { columns: unknown }> }) {
  const columns = (
    <div className="flex flex-wrap">
      {menu.columns.map((column, i) => (
        <div
          key={column.heading}
          className={cn(
            'min-w-0 flex-1 basis-90 px-2 pt-5 pb-3',
            i < menu.columns.length - 1 && 'border-line border-r'
          )}
        >
          <p className="text-label mb-2 ml-3">{column.heading}</p>
          {column.items.map((item) => (
            <NavigationMenu.Link
              key={item.title}
              asChild
            >
              <NavMenuItem
                item={item}
                tile={menu.kind === 'product'}
              />
            </NavigationMenu.Link>
          ))}
        </div>
      ))}
    </div>
  )
  const feature = (
    <NavigationMenu.Link asChild>
      <NavFeatureCard {...menu.feature} />
    </NavigationMenu.Link>
  )

  return (
    // Anchored to the header row, whose bottom padding already separates it from the trigger.
    <NavigationMenu.Content className={cn(panelClass, 'inset-x-3 -mt-2.5 p-4')}>
      {/* Product leads with its capabilities; Solutions leads with the overview. */}
      {menu.kind === 'product' ? (
        <>
          {columns}
          <div className="mt-2">{feature}</div>
        </>
      ) : (
        <>
          {feature}
          {columns}
        </>
      )}
    </NavigationMenu.Content>
  )
}

export function DesktopNav() {
  return (
    <NavigationMenu.Root
      aria-label="Primary"
      // Mega menus are positioned against the header, not their trigger, so
      // undo the relative positioning Radix puts on the list wrapper.
      className="[&>div]:static!"
    >
      <NavigationMenu.List className="flex items-center gap-1">
        {navigation.map((menu) => {
          if (menu.kind === 'link') {
            return (
              <NavigationMenu.Item key={menu.label}>
                <NavigationMenu.Link asChild>
                  <SmartLink
                    href={menu.href}
                    className={triggerClass}
                  >
                    {menu.label}
                  </SmartLink>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            )
          }

          const trigger = (
            <NavigationMenu.Trigger className={cn(triggerClass, 'group')}>
              {menu.label}
              <span
                aria-hidden="true"
                className="text-muted text-[10px] transition-transform group-data-[state=open]:rotate-180"
              >
                ▾
              </span>
            </NavigationMenu.Trigger>
          )

          if (menu.kind === 'list') {
            return (
              <NavigationMenu.Item
                key={menu.label}
                className="relative"
              >
                {trigger}
                <NavigationMenu.Content
                  className={cn(panelClass, 'left-0 mt-2 w-105 p-3')}
                >
                  {menu.items.map((item) => (
                    <NavigationMenu.Link
                      key={item.title}
                      asChild
                    >
                      <NavMenuItem item={item} />
                    </NavigationMenu.Link>
                  ))}
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            )
          }

          return (
            <NavigationMenu.Item key={menu.label}>
              {trigger}
              <MegaMenu menu={menu} />
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
