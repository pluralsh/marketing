import { type ComponentProps } from 'react'

import { Button } from '@pluralsh/design-system'
import Link from 'next/link'

import { isExternalUrl } from '@src/utils/text'

export function DeepDiveButton({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      className={className}
      secondary
      large
      as={Link}
      {...(isExternalUrl((props as any)?.href) ? { target: '_blank' } : {})}
      {...props}
    />
  )
}

export function DeepDive() {
  const liClass = 'p-0 inline-block m-[calc(theme(space.large)*0.5)]'

  return (
    <ul className="flex flex-col gap-large">
      <h3 className="txt-overline text-center text-text-xlight">
        Deep dive into the product
      </h3>
      <ul className="m-[calc(theme(space.large)*-0.5)] list-none p-0 text-center [text-wrap:balance]">
        <li className={liClass}>
          <DeepDiveButton href="/product">How Plural works</DeepDiveButton>
        </li>
        <li className={liClass}>
          <DeepDiveButton href="https://www.youtube.com/@pluralsh/videos">
            Demo videos
          </DeepDiveButton>
        </li>
        <li className={liClass}>
          <DeepDiveButton href="https://docs.plural.sh/getting-started/quickstart">
            Quickstart guide
          </DeepDiveButton>
        </li>
        <li className={liClass}>
          <DeepDiveButton href="https://docs.plural.sh/operations/security">
            Security concepts
          </DeepDiveButton>
        </li>
        <li className={liClass}>
          <DeepDiveButton href="/marketplace">
            Application catalog
          </DeepDiveButton>
        </li>
      </ul>
    </ul>
  )
}
