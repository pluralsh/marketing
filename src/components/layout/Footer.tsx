import { PrismicNextLink } from '@prismicio/next'

import { cn } from '@/utils/cn'
import { getSettings } from '@/utils/prismicio'

import FooterLinksGroup from './FooterLinksGroup'
import FooterNewsletter from './FooterNewsletter'

type FooterProps = React.ComponentPropsWithRef<'footer'>

export default async function Footer({ className, ...props }: FooterProps) {
  const {
    data: { footer_links, footer_legal_links },
  } = await getSettings()

  const year = new Date().getFullYear()

  return (
    <footer
      className={cn('grid-container', className)}
      {...props}
    >
      <div className="separator" />
      <div
        className={cn(
          'grid grid-cols-1 gap-x-4 gap-y-6 py-6 md:grid-cols-2 md:py-20 lg:px-4'
        )}
      >
        <FooterNewsletter className="max-md:hidden" />
        <div className="grid grid-cols-2 gap-x-[33%] gap-y-10 md:grid-cols-4 md:gap-x-8">
          {footer_links.map((group, idx) => (
            <FooterLinksGroup
              key={idx}
              group={group}
            />
          ))}
        </div>
      </div>
      <div className="separator md:hidden" />
      <FooterNewsletter className="py-8 md:hidden" />
      <div className="separator" />
      <div className="py-4 md:py-6">
        <div className="flex flex-col-reverse justify-between gap-x-4 gap-y-2 md:flex-row md:items-center lg:px-4">
          <p className="text-neutral-000">&copy; Plural {year}</p>
          <ul className="flex items-center gap-x-3 md:gap-x-8">
            {footer_legal_links.map((link) => (
              <li key={link.key}>
                <PrismicNextLink
                  field={link}
                  className="hover:text-neutral-000 transition"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
