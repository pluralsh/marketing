import { type ReactElement, type ReactNode, cloneElement, useRef } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'

import { useInView } from 'framer-motion'
import styled from 'styled-components'

import { breakpointIsGreaterOrEqual, mqs } from '@src/breakpoints'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { Body2, ResponsiveText } from '@src/components/Typography'
import { cn as classNames } from '@src/utils/cn'

import { useBreakpoint } from '../contexts/BreakpointProvider'

import { FeaturesImage } from './FeaturesImage'

const FeatureSC = styled(Columns)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  rowGap: theme.spacing.xxxlarge,
  [mqs.columns]: {
    '&:nth-child(2n)': {
      flexDirection: 'row-reverse',
    },
  },
}))

export function Feature({
  heading,
  children,
  graphic: image,
}: {
  heading: ReactNode
  children: ReactNode
  graphic: ReactElement
}) {
  const headingRef = useRef<any>(null)
  const imageRef = useRef<any>(null)

  const headingInView = useInView(headingRef, {
    once: true,
    amount: 1,
    margin: '-80px 0px -25%',
  })
  const imageInView = useInView(imageRef, {
    once: true,
    amount: 0.75,
    margin: '80px 0px -10%',
  })

  const breakpoint = useBreakpoint()

  const isInView = breakpointIsGreaterOrEqual(breakpoint, 'columns')
    ? imageInView || headingInView
    : imageInView // refine later for mobile

  if (image?.type === FeaturesImage) {
    image = cloneElement(image, { inView: isInView, ref: imageRef })
  }

  return (
    <FeatureSC>
      <EqualColumn className="flex flex-col gap-y-medium">
        <ResponsiveText
          ref={headingRef}
          className="[text-wrap:balance]"
          textStyles={{ '': 'mTitle1' }}
        >
          {heading}
        </ResponsiveText>
        <Body2 as="div">{children}</Body2>
      </EqualColumn>
      <EqualColumn className="w-full">
        <div className={classNames('w-full')}>{image}</div>
      </EqualColumn>
    </FeatureSC>
  )
}

export function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title?: string
  description: string
}) {
  return (
    <div className="mt-large flex items-center gap-xsmall">
      <ColorModeProvider mode="dark">
        <div
          className="rounded-full flex items-center justify-center rounded-medium bg-fill-one p-xsmall text-icon-light"
          aria-hidden
        >
          {icon}
        </div>
      </ColorModeProvider>
      <div>
        {title && <h3 className="txt-body-2-bold text-text">{title}</h3>}
        <p className="txt-body-2 text-text-light">{description}</p>
      </div>
    </div>
  )
}
