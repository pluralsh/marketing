import { type ComponentProps, type Dispatch, type SetStateAction } from 'react'

import { Button, CaretLeftIcon, CaretRightIcon } from '@pluralsh/design-system'
import { type ButtonProps } from 'honorable'

import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

export function PageButton({
  selected,
  variant,
  ...props
}: { selected: boolean; variant?: string } & ComponentProps<typeof Button>) {
  return (
    <PageButtonWrap
      secondary
      $selected={selected}
      $variant={variant}
      small={variant === 'small'}
      {...props}
    />
  )
}

const PageButtonWrap = styled(Button)<{ $selected: boolean; $variant: string }>(
  ({ theme, $selected, $variant }) => ({
    // double class selector to beat Honorable class specificity
    '&&': {
      minWidth: 40,
      backgroundColor: $selected
        ? theme.colors['fill-one-selected']
        : 'transparent',
      '&:hover': {
        backgroundColor: $selected
          ? theme.colors['fill-one-hover']
          : theme.colors['fill-zero-hover'],
      },
      ...($variant === 'small'
        ? {
            minWidth: theme.spacing.xlarge,
            paddingLeft: theme.spacing.xxsmall,
            paddingRight: theme.spacing.xxsmall,
            [mqs.sm]: {
              minWidth: 40,
              paddingLeft: theme.spacing.medium - 1,
              paddingRight: theme.spacing.medium - 1,
            },
          }
        : {}),
    },
  })
)

export const ResponsivePageNavigation = styled(
  ResponsivePageNavigationUnstyled
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  gap: theme.spacing.xlarge,
  '&._small': {
    gap: theme.spacing.xsmall,
  },
  '&._medium': {
    display: 'none',
  },
  [mqs.md]: {
    '&._medium': {
      display: 'flex',
    },
    '&._small': {
      display: 'none',
    },
  },
}))
type NavVariant = 'small' | 'medium'
type PageNavigationProps = {
  variant?: NavVariant
  totalPages: number
  pageIndex: number
  setPageIndex: Dispatch<SetStateAction<number>>
  className?: string
}
function ResponsivePageNavigationUnstyled(props: PageNavigationProps) {
  return (
    <>
      <PageNavigation
        variant="small"
        {...props}
      />
      <PageNavigation {...props} />
    </>
  )
}

const DirectionButtonWrap = styled(Button)<{ $variant: string }>(
  ({ $variant }) => ({
    '&&': {
      ...($variant === 'small'
        ? {
            padding: 0,
            width: 32,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
            'aria-label': 'Previous',
            '@media (min-width:300)': {
              width: 32,
            },
          }
        : {}),
    },
  })
)

function DirectionButton({
  variant,
  direction = 'right',
  ...props
}: {
  direction?: string
  variant?: NavVariant
} & Exclude<ButtonProps, 'direction' | 'variant'>) {
  const icon = direction === 'left' ? <CaretLeftIcon /> : <CaretRightIcon />
  const text = direction === 'left' ? 'Previous' : 'Next'

  return (
    <DirectionButtonWrap
      startIcon={variant === 'small' ? undefined : icon}
      small={variant === 'small'}
      $variant={variant}
      {...props}
    >
      {variant === 'small' ? icon : text}
    </DirectionButtonWrap>
  )
}

function selectWindow(
  length,
  pivotI: number,
  windowWidth: number
): [number, number] {
  let startI = pivotI - Math.floor((windowWidth - 1) / 2)

  // Shift window to right if it would extend too far left
  if (startI < 0) {
    startI = 0
  }
  let endI = startI + windowWidth

  // Shift window to left if it would extend too far right
  if (endI > length) {
    endI = length
    startI = endI - windowWidth
  }

  // Truncate if it still overshoots the left
  if (startI < 0) {
    startI = 0
  }

  return [startI, endI]
}

function PageNavigation({
  variant,
  totalPages,
  pageIndex,
  setPageIndex,
  className,
}: PageNavigationProps) {
  const maxPageButtons = variant === 'small' ? 5 : 7
  const maxMiddleButtons = maxPageButtons - 2
  const pages = Array.from({ length: totalPages }, (_, i) => i)

  const firstStartI = 0
  const firstEndI = 1
  const lastStartI = totalPages - 1
  const lastEndI = totalPages

  let middlePages = pages.slice(firstEndI, lastStartI)
  let [middleStartI, middleEndI] = selectWindow(
    middlePages.length,
    pageIndex - firstEndI,
    maxMiddleButtons
  )

  // Reduce length of middle buttons list if a '...' indicator would be shown
  if (middleStartI !== 0) {
    middleStartI++
  }
  if (middleEndI !== middlePages.length) {
    middleEndI--
  }
  const firstPages = pages.slice(firstStartI, firstEndI)

  middlePages = middlePages.slice(middleStartI, middleEndI)
  const lastPages = pages.length > 1 ? pages.slice(lastStartI, lastEndI) : []

  return (
    <div
      className={classNames(className, {
        _small: variant === 'small',
        _medium: variant !== 'small',
      })}
    >
      <DirectionButton
        variant={variant}
        direction="left"
        disabled={pageIndex === 0}
        tertiary
        onClick={() => {
          setPageIndex(Math.max(0, pageIndex - 1))
        }}
      />
      <div className="flex flex-row gap-xsmall sm:gap-small">
        {firstPages.map((i) => (
          <PageButton
            variant={variant}
            selected={i === pageIndex}
            onClick={() => {
              setPageIndex(i)
            }}
          >
            {i + 1}
          </PageButton>
        ))}
        {!isEmpty(middlePages) ? (
          <>
            {middlePages[0] !== firstPages[firstPages.length - 1] + 1 && (
              <div className="flex content-center items-center">···</div>
            )}
            {middlePages.map((i) => (
              <PageButton
                variant={variant}
                selected={i === pageIndex}
                onClick={() => {
                  setPageIndex(i)
                }}
              >
                {i + 1}
              </PageButton>
            ))}
            {lastPages[0] !== middlePages[middlePages.length - 1] + 1 && (
              <div className="flex content-center items-center">···</div>
            )}
          </>
        ) : null}
        {lastPages.map((i) => (
          <PageButton
            variant={variant}
            selected={i === pageIndex}
            onClick={() => {
              setPageIndex(i)
            }}
          >
            {i + 1}
          </PageButton>
        ))}
      </div>
      <DirectionButton
        variant={variant}
        direction="right"
        secondary
        disabled={pageIndex === totalPages - 1}
        onClick={() => {
          setPageIndex(Math.min(totalPages - 1, pageIndex + 1))
        }}
      />
    </div>
  )
}
