import { type ComponentProps, type ReactNode } from 'react'

import classNames from 'classnames'
import { type Merge } from 'type-fest'

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
  className,
  ...props
}: Merge<
  ComponentProps<typeof TextLimiter>,
  {
    preHeading?: ReactNode
    heading: ReactNode
    description?: ReactNode
    ctas?: ReactNode
    children?: ReactNode
  }
>) {
  return (
    <TextLimiter
      className={classNames(
        'flex flex-col gap-y-xlarge md:gap-y-xxlarge',
        className
      )}
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
                className="mb-medium block [text-wrap:balance]"
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
        {description && (
          <Body1
            as="div"
            color="text-xlight"
          >
            {description}
          </Body1>
        )}
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
        <Columns className="gap-y-xxxlarge columns:items-center">
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
                as="div"
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
  // intro,
  padTop = true,
  padBottom = true,
  ctas,
  ...props
}: {
  preHeading?: ReactNode
  heading: ReactNode
  description?: ReactNode
  ctas?: ReactNode
  padTop?: boolean
  padBottom?: boolean
  // intro?: ReactNode
}) {
  return (
    <StandardPageWidth {...props}>
      <div
        className={classNames(
          'text-center',
          {
            [classNames('pt-xxxxlarge', 'md:pt-xxxxlarge', 'lg:pt-xxxxxlarge')]:
              padTop,
          },
          {
            [classNames('pb-xxxlarge', 'md:pb-xxxxlarge', 'lg:pb-xxxxxxlarge')]:
              padBottom,
          }
        )}
      >
        <HeroMainText
          preHeading={preHeading}
          heading={heading}
          description={<div className="text-center">{description}</div>}
          ctas={ctas}
          className="mx-auto"
        />
      </div>
    </StandardPageWidth>
  )
}
