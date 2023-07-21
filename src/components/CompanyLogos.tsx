import { type ComponentProps, type ReactNode } from 'react'

import styled, { useTheme } from 'styled-components'
import { type Merge } from 'type-fest'

import { TextLabel } from '@src/components/Typography'
import { getImageUrl } from '@src/consts/routes'
import { type LogoListFragment } from '@src/generated/graphqlDirectus'

import { StandardPageWidth } from './layout/LayoutHelpers'

const CompanyLogosSectionSC = styled.div(({ theme: _ }) => ({
  ul: {},
  img: {
    width: 100,
  },
}))

const LogoSC = styled.div(() => ({
  display: 'block',
}))

export function CompanyLogosSection({
  logos,
  heading,
  ...props
}: Merge<
  ComponentProps<typeof CompanyLogosSectionSC>,
  {
    logos?: LogoListFragment['items']
    heading?: ReactNode
  }
>) {
  const theme = useTheme()

  return (
    <StandardPageWidth>
      <CompanyLogosSectionSC {...props}>
        <TextLabel
          className="mb-large md:mb-xxlarge text-center"
          color={theme.mode === 'light' ? 'text-light' : 'text-xlight'}
        >
          {heading || 'Used by fast-moving teams at'}
        </TextLabel>
        <ul className="flex flex-wrap gap-xxlarge items-center justify-center">
          {logos?.map((logo) => {
            if (!logo?.item) {
              return null
            }
            const {
              slug,
              logo_dark: logoDark,
              logo_light: logoLight,
              name,
              url,
              width,
            } = logo.item
            const imgUrl = getImageUrl(
              theme.mode === 'light' ? logoLight : logoDark
            )

            return (
              imgUrl && (
                <LogoSC
                  {...(url
                    ? {
                        as: 'a',
                        href: url,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {})}
                  key={slug}
                >
                  <img
                    src={imgUrl}
                    alt={name}
                    style={{ width: `${width ?? 50}px` }}
                  />
                </LogoSC>
              )
            )
          })}
        </ul>
      </CompanyLogosSectionSC>
    </StandardPageWidth>
  )
}
