import {
  type ComponentProps,
  type FormEventHandler,
  type MouseEventHandler,
  useCallback,
  useState,
} from 'react'

import { ArrowRightIcon, Input, Tooltip } from '@pluralsh/design-system'

import styled from 'styled-components'

import { ResponsiveText } from './Typography'

const Heading = styled.h6(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  fontWeight: '500',
  color: theme.colors.text,
  marginBottom: theme.spacing.medium,
}))

export const FooterValueProp = styled(({ ...props }: ComponentProps<'div'>) => (
  <div {...props}>
    <ResponsiveText
      as="h2"
      textStyles={{ '': 'mTitle1', md: 'mHero2' }}
    >
      Build and scale infrastructure within minutes.
    </ResponsiveText>
  </div>
))(({ theme: _ }) => ({}))
