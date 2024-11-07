import { type ComponentProps, type ReactNode } from 'react'

import { type Merge } from 'type-fest'

import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { cn as classNames } from '@src/utils/cn'

import { AnnouncementChip } from './AnnouncementChip'

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
    <div
      className={classNames(
        'flex flex-col gap-y-xlarge md:gap-y-xxlarge',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-medium">
        <h1 className="txt-mktg-hero-2 [text-wrap:balance] md:txt-mktg-big-header">
          {preHeading && (
            <>
              <strong className="txt-mktg-label mb-medium block [text-wrap:balance]">
                {preHeading}
              </strong>
              <span className="sr-only"> – </span>
            </>
          )}
          {heading}
        </h1>
        <TextLimiter
          className={classNames(
            'flex flex-col gap-y-xlarge md:gap-y-xxlarge',
            className
          )}
          {...props}
        >
          {description && (
            <div className="txt-mktg-body-1 text-text-xlight">
              {description}
            </div>
          )}
        </TextLimiter>
      </div>
      {ctas && <div>{ctas}</div>}
      {children && <div>{children}</div>}
    </div>
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
              <div className="txt-mktg-body-1 text-text-light [text-wrap:balance]">
                {intro}
              </div>
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
  padTop = true,
  padBottom = true,
  ctas,
  announcementChip,
  ...props
}: {
  preHeading?: ReactNode
  heading: ReactNode
  description?: ReactNode
  ctas?: ReactNode
  padTop?: boolean
  padBottom?: boolean
  announcementChip?: {
    visible: Nullable<boolean>
    text: Nullable<string>
    url: Nullable<string>
  }
}) {
  return (
    <StandardPageWidth {...props}>
      <div
        className={classNames(
          'flex flex-col items-center gap-large',
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
        {announcementChip?.visible && (
          <AnnouncementChip
            text={announcementChip.text ?? ''}
            url={announcementChip.url ?? ''}
          />
        )}
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
