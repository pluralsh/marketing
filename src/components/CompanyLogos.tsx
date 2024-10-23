import { type ComponentProps } from 'react'

import styled, { useTheme } from 'styled-components'
import { type Merge } from 'type-fest'

import { getImageUrl } from '@src/consts/routes'
import { type LogoListFragment } from '@src/generated/graphqlDirectus'

const LogosListSC = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing.xxlarge,
  paddingRight: theme.spacing.xxlarge,
  paddingLeft: theme.spacing.xxlarge,
}))
const LogoSC = styled.a(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing.medium,
  width: 175,
  height: 80,
  borderRadius: theme.borderRadiuses.medium,
  transition: 'background 0.2s ease-in-out',
  '&:hover': {
    background: theme.colors['fill-zero-hover'],
  },
}))

export function CompanyLogosSection({
  logos,
  ...props
}: Merge<
  ComponentProps<typeof LogosListSC>,
  { logos?: LogoListFragment['logos'] }
>) {
  const theme = useTheme()

  return (
    <LogosListSC {...props}>
      {logos?.map((logo) => {
        if (!logo?.company_logos_id) {
          return null
        }
        const {
          slug,
          logo_dark: logoDark,
          logo_light: logoLight,
          name,
          url,
        } = logo.company_logos_id
        const imgUrl = getImageUrl(
          theme.mode === 'light' ? logoLight : logoDark
        )

        return (
          imgUrl && (
            <LogoSC
              key={slug}
              {...(url && {
                href: url,
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              <img
                src={imgUrl}
                alt={name}
              />
            </LogoSC>
          )
        )
      })}
    </LogosListSC>
  )
}
