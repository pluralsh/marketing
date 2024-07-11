import { type ReactElement, type ReactNode, cloneElement, useRef } from 'react'

import { ArrowRightIcon, Button } from '@pluralsh/design-system'
import Link from 'next/link'

import { useInView } from 'framer-motion'
import styled from 'styled-components'

import { breakpointIsGreaterOrEqual, mqs } from '@src/breakpoints'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { Body2, ResponsiveText } from '@src/components/Typography'

import { useBreakpoint } from '../contexts/BreakpointProvider'

import { FeaturesImage } from './FeaturesImage'

const FeatureSC = styled(Columns)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.colors.grey[25]} 0%, ${theme.colors.grey[75]} 100%)`,
  border: `1px solid ${theme.colors.grey[125]}`,
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
    <FeatureSC className="flex w-full items-center gap-y-xxlarge rounded-large border px-xxlarge py-xxlarge">
      <EqualColumn className="flex flex-col gap-y-medium">
        <ResponsiveText
          ref={headingRef}
          className="[text-wrap:balance]"
          textStyles={{ '': 'mTitle1' }}
        >
          {heading}
        </ResponsiveText>
        <Body2 as="div">
          {children}
          <Button
            tertiary
            padding="none"
            large
            className="mt-large w-fit"
            as={Link}
            href="/contact-sales"
            endIcon={<ArrowRightIcon />}
          >
            Book a demo
          </Button>
        </Body2>
      </EqualColumn>
      <EqualColumn className="flex w-full items-center justify-center">
        <div className="w-5/6">{image}</div>
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
      <div
        className="rounded-full flex items-center justify-center rounded-medium border border-border-input bg-fill-three p-xsmall text-icon-light"
        aria-hidden
      >
        {icon}
      </div>
      <div>
        {title && <h3 className="txt-body-2-bold text-text">{title}</h3>}
        <p className="txt-body-2 text-text-light">{description}</p>
      </div>
    </div>
  )
}
