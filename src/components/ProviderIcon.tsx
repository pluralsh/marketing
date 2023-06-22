import { type ComponentProps } from 'react'

import { Tooltip } from '@pluralsh/design-system'

import styled from 'styled-components'

import { type ProviderProps } from '../../pages/applications/[repo]'

export const ProviderIcon = styled(
  ({
    iconLight,
    iconDark,
    label,
    ...props
  }: ComponentProps<'div'> & ProviderProps) => (
    <Tooltip
      placement="top"
      label={label}
    >
      <div {...props}>
        <img
          className="icon iconLight"
          src={iconLight}
        />
        <img
          className="icon iconDark"
          src={iconDark}
        />
      </div>
    </Tooltip>
  )
)(({ theme }) => ({
  border: theme.borders['fill-two'],
  background: theme.colors['fill-zero'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.xsmall,
  borderRadius: theme.borderRadiuses.large,
  width: 44,
  height: 44,
  '.iconLight': {
    display: theme.mode === 'light' ? 'block' : 'none',
  },
  '.iconDark': {
    display: theme.mode === 'light' ? 'none' : 'block',
  },
}))
