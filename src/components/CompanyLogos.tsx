import { type ComponentProps, type ReactNode } from 'react'

import { WrapWithIf } from '@pluralsh/design-system'

import styled, { useTheme } from 'styled-components'
import { type Merge } from 'type-fest'

import { TextLabel } from '@src/components/Typography'
import { type PartnerLogos } from '@src/data/getSiteSettings'

import { StandardPageWidth } from './layout/LayoutHelpers'

const CompanyLogosSectionSC = styled.div(({ theme: _ }) => ({
  ul: {},
  img: {
    width: 100,
  },
}))

// Using old inline-block layout technique so we can use 'text-wrap: balance'
// to keep things looking nice when it breaks to multiple lines
const LogosListSC = styled.ul(({ theme }) => ({
  textAlign: 'center',
  textWrap: 'balance',
  margin: -theme.spacing.xxlarge / 2,
}))
const LogoSC = styled.li(({ theme }) => ({
  display: 'inline-block',
  padding: 0,
  margin: theme.spacing.xxlarge / 2,
  verticalAlign: 'middle',
}))

export function CompanyLogosSection({
  logos,
  heading,
  ...props
}: Merge<
  ComponentProps<typeof CompanyLogosSectionSC>,
  {
    logos?: PartnerLogos['items']
    heading?: ReactNode
  }
>) {
  const theme = useTheme()

  return (
    <StandardPageWidth>
      <CompanyLogosSectionSC {...props}>
        <TextLabel
          className="mb-large text-center md:mb-xxlarge"
          color={theme.mode === 'light' ? 'text-light' : 'text-xlight'}
        >
          {heading || 'Used by fast-moving teams at'}
        </TextLabel>
        <LogosListSC>
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
            const imgUrl = theme.mode === 'light' ? logoLight : logoDark

            return (
              imgUrl && (
                <LogoSC key={slug}>
                  <WrapWithIf
                    condition={!!url}
                    wrapper={
                      // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label
                      <a
                        href={url || ''}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <img
                      src={imgUrl}
                      alt={name}
                      style={{ width: `${width ?? 50}px` }}
                    />
                  </WrapWithIf>
                </LogoSC>
              )
            )
          })}
        </LogosListSC>
      </CompanyLogosSectionSC>
    </StandardPageWidth>
  )
}
