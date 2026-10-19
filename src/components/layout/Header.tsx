import Link from 'next/link'

import { ButtonLink } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { URLS } from '@/content/site'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

import type { Theme } from './SiteShell'

export function Header({ theme }: { theme: Theme }) {
  return (
    <header className="border-line bg-canvas/85 sticky top-0 z-(--z-header) border-b backdrop-blur-md">
      <div className="rails px-gutter relative flex items-center justify-between gap-4 py-3 lg:py-4">
        <div className="flex items-center gap-6 xl:gap-8">
          <Link
            href="/"
            className="text-ink flex items-center"
          >
            <Logo className="h-6 w-auto" />
          </Link>
          <div className="max-lg:hidden">
            <DesktopNav />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ButtonLink
            href={URLS.login}
            variant="secondary"
            size="md"
            shortcut="L"
            className="max-sm:hidden"
          >
            Log in
          </ButtonLink>
          <ButtonLink
            href={URLS.contact}
            size="md"
            shortcut="B"
            className="max-sm:hidden"
          >
            Book a demo
          </ButtonLink>
          <div className="lg:hidden">
            <MobileNav theme={theme} />
          </div>
        </div>
      </div>
    </header>
  )
}
