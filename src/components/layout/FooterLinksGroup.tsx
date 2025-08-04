import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

export default function FooterLinksGroup({
  group,
}: {
  group: Content.SettingsDocumentDataFooterLinksItem
}) {
  return (
    <div className="text-body-small">
      <h3 className="text-neutral-000 font-medium">
        {isFilled.link(group.group_name) ? (
          <PrismicNextLink field={group.group_name} />
        ) : (
          group.group_name.text
        )}
      </h3>
      {group.child_links.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {group.child_links.map((link) => (
            <li key={link.key}>
              <PrismicNextLink
                field={link}
                className="hover:text-neutral-000 transition"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
