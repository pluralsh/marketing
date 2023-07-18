import { type ReactNode } from 'react'

import classNames from 'classnames'

import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { Body1, ResponsiveText } from '@src/components/Typography'

export function HeroMainText({
  preHeading,
  heading,
  description,
  children,
  ctas,
  ...props
}: {
  preHeading?: ReactNode
  heading: ReactNode
  description?: ReactNode
  ctas?: ReactNode
  children?: ReactNode
}) {
  return (
    <TextLimiter
      className="flex flex-col gap-y-xlarge md:gap-y-xxlarge"
      {...props}
    >
      <div className="flex flex-col gap-y-xlarge">
        <ResponsiveText
          className="[text-wrap:balance]"
          as="h1"
          textStyles={{
            '': 'mHero2',
            md: 'mBigHeader',
          }}
        >
          {preHeading && (
            <>
              <ResponsiveText
                className="[text-wrap:balance] block mb-medium"
                as="strong"
                textStyles={{ '': 'mLabel' }}
              >
                {preHeading}
              </ResponsiveText>
              <span className="sr-only"> – </span>
            </>
          )}
          {heading}
        </ResponsiveText>
        {description && <Body1 color="text-xlight">{description}</Body1>}
      </div>
      {ctas && <div>{ctas}</div>}
      {children && <div>{children}</div>}
    </TextLimiter>
  )
}

export function BasicPageHero({
  preHeading,
  heading,
  description,
  intro,
  ctas,
  ...props
}: {
  preHeading?: ReactNode
  heading: ReactNode
  description?: ReactNode
  ctas?: ReactNode
  intro?: ReactNode
}) {
  return (
    <StandardPageWidth {...props}>
      <div
        className={classNames(
          'pt-xxxxlarge',
          'pb-xxxlarge',
          'md:pt-xxxxlarge',
          'md:pb-xxxxlarge',
          'lg:pt-xxxxxlarge',
          'lg:pb-xxxxxxlarge'
        )}
      >
        <Columns className="columns:items-center gap-y-xxxlarge">
          <EqualColumn className="justify-start">
            <HeroMainText
              preHeading={preHeading}
              heading={heading}
              description={description}
              ctas={ctas}
            />
          </EqualColumn>
          <EqualColumn>
            <TextLimiter>
              <ResponsiveText
                as="p"
                textStyles={{ '': 'mBody1' }}
                color="text-light"
                className="[text-wrap:balance]"
              >
                {intro}
              </ResponsiveText>
            </TextLimiter>
          </EqualColumn>
        </Columns>
      </div>
    </StandardPageWidth>
  )
}

export function HomePageHero({
  preHeading,
  heading,
  description,
  intro,
  ctas,
  ...props
}: {
  preHeading?: ReactNode
  heading: ReactNode
  description?: ReactNode
  ctas?: ReactNode
  intro?: ReactNode
}) {
  return (
    <StandardPageWidth {...props}>
      <div
        className={classNames(
          'pt-xxxxlarge',
          'pb-xxxlarge',
          'md:pt-xxxxlarge',
          'md:pb-xxxxlarge',
          'lg:pt-xxxxxlarge',
          'lg:pb-xxxxxxlarge',
          'text-center'
        )}
      >
        <HeroMainText
          preHeading={preHeading}
          heading={heading}
          description={description}
          ctas={ctas}
        />
        <ResponsiveText
          as="p"
          textStyles={{ '': 'mBody1' }}
          color="text-light"
          className="[text-wrap:balance]"
        >
          {intro}
        </ResponsiveText>
      </div>
    </StandardPageWidth>
  )
}
