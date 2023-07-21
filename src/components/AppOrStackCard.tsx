import { type ComponentProps, forwardRef } from 'react'

import { AppIcon, Chip, StackIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { type TinyRepo } from '@src/data/getRepos'
import { type MinStack } from '@src/data/getStacks'

const AppOrStackCard = styled.div<{
  $variant: 'app' | 'stack'
  $size: 'medium' | 'small' | 'xsmall'
  $active: 'boolean'
}>(({ theme, $variant = 'app', $active = false, $size = 'medium' }) => ({
  cursor: 'pointer',
  display: 'flex',
  rowGap: theme.spacing.xxsmall,
  flexDirection: 'column',
  justifyContent: 'center',
  padding:
    $size === 'small'
      ? theme.spacing.small
      : $size === 'xsmall'
      ? theme.spacing.xsmall
      : theme.spacing.large,
  paddingBottom: $variant === 'stack' ? theme.spacing.small : undefined,
  '&, &:focus-visible': {
    backgroundColor: $active
      ? theme.colors['fill-one-selected']
      : theme.colors['fill-one'],
  },

  color: theme.colors.text,
  borderRadius: theme.borderRadiuses.large,
  ...(theme.mode === 'light'
    ? {
        boxShadow: `0px 1px 3px rgba(74, 81, 242, 0.04), 0px 2px 10px rgba(74, 81, 242, 0.04)`,
        '&:hover': {
          boxShadow: `0px 2px 7px 1px rgba(74, 81, 242, 0.1), 0px 2px 10px rgba(74, 81, 242, 0.08)`,
        },
      }
    : {
        '&:hover': {
          backgroundColor: $active
            ? theme.colors['fill-one-selected']
            : theme.colors['fill-one-hover'],
        },
      }),
  '.stackTitleBox, .appBox': {
    display: 'flex',
    gap: theme.spacing.small,
    alignItems: 'center',
  },
  '.stackApps': {
    display: 'flex',
    gap: theme.spacing.xxsmall,
  },
  '.appTitleBox': {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    overflow: 'hidden',
  },
  '.title': {
    ...($size === 'xsmall'
      ? {
          ...theme.partials.text.body2Bold,
          fontSize: 12,
        }
      : theme.partials.text.title2),
    color: theme.colors.text,
    overflow: 'hidden',
    flexShrink: 1,
    flexGrow: 1,
    textOverflow: 'ellipsis',
  },
  '.category': {
    ...theme.partials.text.caption,
    color: theme.colors['text-light'],
  },
  [mqs.columns]: {},
}))

export function StackCard({
  stack,
  size = 'medium',
  ...props
}: {
  stack: MinStack
  size?: ComponentProps<typeof AppOrStackCard>['$size']
} & ComponentProps<typeof AppOrStackCard>) {
  return (
    <AppOrStackCard
      $variant="stack"
      $size={size}
      {...props}
    >
      <div className="stackTitleBox">
        <div className="title"> {stack.displayName}</div>
        <div>
          <Chip
            size="small"
            icon={<StackIcon />}
          >
            Stack
          </Chip>
        </div>
      </div>
      <div className="stackApps">
        {(stack.collections?.[0]?.bundles || []).map((b, i) => {
          const repo = b?.recipe.repository

          return (
            <AppIcon
              key={repo?.id || i}
              size="xxsmall"
              url={repo?.icon || repo?.darkIcon || ''}
            />
          )
        })}
      </div>
    </AppOrStackCard>
  )
}

export const AppCard = forwardRef(
  (
    {
      app,
      size = 'medium',
      active = false,
      ...props
    }: {
      active?: boolean
      app: TinyRepo
      size?: ComponentProps<typeof AppOrStackCard>['$size']
    } & ComponentProps<typeof AppOrStackCard>,
    ref
  ) => (
    <AppOrStackCard
      ref={ref}
      $variant="app"
      $size={size}
      $active={active}
      {...props}
    >
      <div className="appBox">
        <AppIcon
          hue={active ? 'lightest' : 'lighter'}
          size={
            size === 'xsmall'
              ? 'xxsmall'
              : size === 'small'
              ? 'xsmall'
              : 'small'
          }
          url={app.icon || app.darkIcon || ''}
        />
        <div className="appTitleBox">
          <div className="title"> {app.displayName}</div>
          {size !== 'xsmall' && <div className="category">{app.category}</div>}
        </div>
      </div>
    </AppOrStackCard>
  )
)
