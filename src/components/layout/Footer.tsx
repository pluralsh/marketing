import { SmartLink } from '@/components/ui/SmartLink'
import { footer, legalLinks } from '@/content/site'

import { NewsletterForm } from './NewsletterForm'
import type { Theme } from './SiteShell'

export function Footer({ theme }: { theme: Theme }) {
  return (
    <footer className="rule-top px-gutter flex flex-col gap-10 pt-12 pb-8 text-sm">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
        {footer.map((group) => (
          <div
            key={group.heading}
            className="flex flex-col gap-2.5"
          >
            <p className="text-label">{group.heading}</p>
            {group.links.map((link) => (
              <SmartLink
                key={link.label}
                href={link.href}
                className="text-ink hover:text-accent-ink no-underline"
              >
                {link.label}
              </SmartLink>
            ))}
          </div>
        ))}
        <NewsletterForm theme={theme} />
      </div>
      <div className="border-line text-label flex flex-wrap justify-between gap-4 border-t pt-5">
        <span>© Plural {new Date().getFullYear()} · CNCF · SOC 2 · GDPR</span>
        <span className="flex gap-5">
          {legalLinks.map((link) => (
            <SmartLink
              key={link.label}
              href={link.href}
              className="text-muted hover:text-ink no-underline"
            >
              {link.label}
            </SmartLink>
          ))}
        </span>
      </div>
    </footer>
  )
}
