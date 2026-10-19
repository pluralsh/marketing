'use client'

import { Dialog } from 'radix-ui'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { SmartLink } from '@/components/ui/SmartLink'
import { navigation, URLS } from '@/content/site'

import { NavFeatureCard, NavMenuItem } from './NavMenuItem'

import type { Theme } from './SiteShell'

/** Console CaretDownIcon, remapped onto the site's 24×24 icon grid. */
const CARET_DOWN = 'M6 9l6 6 6-6'

export function MobileNav({ theme }: { theme: Theme }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the sheet after navigating.
  useEffect(() => setOpen(false), [pathname])

  return (
    <Dialog.Root
      open={open}
      onOpenChange={setOpen}
    >
      <Dialog.Trigger
        className="text-ink hover:bg-surface-hover flex size-11 cursor-pointer items-center justify-center rounded-xs"
        aria-label="Open menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-ink/20 fixed inset-0 z-(--z-dialog-backdrop)" />
        <Dialog.Content
          // Portals render outside the themed shell; carry the theme along.
          data-theme={theme}
          aria-describedby={undefined}
          // Close as soon as a link is tapped, rather than waiting for the
          // route to change (which never happens for same-page or hash links).
          onClick={(e) => {
            if ((e.target as Element).closest('a')) setOpen(false)
          }}
          className="bg-canvas text-ink fixed inset-y-0 right-0 z-(--z-dialog) flex w-full max-w-md flex-col overflow-y-auto"
        >
          <div className="border-line flex items-center justify-between border-b px-5 py-3">
            <Dialog.Title className="text-label">Menu</Dialog.Title>
            <Dialog.Close
              className="hover:bg-surface-hover flex size-11 cursor-pointer items-center justify-center rounded-xs"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </Dialog.Close>
          </div>
          <nav
            aria-label="Primary"
            className="flex flex-col px-3 py-2"
          >
            {navigation.map((menu) =>
              menu.kind === 'link' ? (
                <SmartLink
                  key={menu.label}
                  href={menu.href}
                  className="border-line text-ink border-b px-2 py-4 text-lg no-underline"
                >
                  {menu.label}
                </SmartLink>
              ) : (
                <details
                  key={menu.label}
                  className="group border-line border-b"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-4 text-lg [&::-webkit-details-marker]:hidden">
                    {menu.label}
                    <Icon
                      path={CARET_DOWN}
                      size={24}
                      className="text-muted transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="flex flex-col gap-1 pb-3">
                    {menu.kind === 'list'
                      ? menu.items.map((item) => (
                          <NavMenuItem
                            key={item.title}
                            item={item}
                          />
                        ))
                      : menu.columns.map((column) => (
                          <div key={column.heading}>
                            <p className="text-label mt-2 mb-1 ml-3">
                              {column.heading}
                            </p>
                            {column.items.map((item) => (
                              <NavMenuItem
                                key={item.title}
                                item={item}
                                tile={menu.kind === 'product'}
                              />
                            ))}
                          </div>
                        ))}
                    {menu.kind !== 'list' && (
                      <NavFeatureCard
                        {...menu.feature}
                        className="mt-2"
                      />
                    )}
                  </div>
                </details>
              )
            )}
          </nav>
          <div className="mt-auto flex flex-col gap-2 p-5">
            <ButtonLink
              href={URLS.bookDemo}
              size="md"
            >
              Book a demo
            </ButtonLink>
            <ButtonLink
              href={URLS.login}
              variant="secondary"
              size="md"
            >
              Log in
            </ButtonLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
