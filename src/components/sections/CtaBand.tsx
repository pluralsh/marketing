import { ButtonLink } from '@/components/ui/Button'
import { URLS } from '@/content/site'

import { Section } from './Section'

type CtaBandProps = {
  title: React.ReactNode
  description?: React.ReactNode
  /** Defaults to a single "Book a demo" button. */
  actions?: React.ReactNode
}

/** Closing call to action at the bottom of a page. */
export function CtaBand({ title, description, actions }: CtaBandProps) {
  return (
    <Section className="flex flex-col items-center gap-6 py-[clamp(64px,9vw,120px)] text-center">
      <h2 className="text-heading-xl m-0 max-w-[16ch] text-[clamp(38px,5vw,64px)] text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-body m-0 text-[17px]">{description}</p>
      )}
      <div className="flex flex-wrap justify-center gap-3">
        {actions ?? (
          <ButtonLink
            href={URLS.bookDemo}
            shortcut="B"
          >
            Book a demo
          </ButtonLink>
        )}
      </div>
    </Section>
  )
}
