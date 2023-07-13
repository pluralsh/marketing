import { type ComponentProps, type ReactNode } from 'react'

import styled from 'styled-components'

import { ResponsiveText } from './Typography'

const SectionHeadSC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.large,
  textAlign: 'center',
}))
const SectionHeadTopSC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.medium,
  textAlign: 'center',
}))
const IntroTextSC = styled(ResponsiveText).attrs(() => ({
  as: 'div',
  color: 'text-light',
  textStyles: { '': 'mBody2' },
}))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.medium,
  textAlign: 'center',
  maxWidth: 'var(--text-width-limit)',
  marginLeft: 'auto',
  marginRight: 'auto',
}))
const HeadingSC = styled(ResponsiveText)(({ theme: _ }) => ({
  textWrap: 'balance',
  display: 'block',
}))

export function CenteredSectionHead({
  preHeading,
  preHeadingProps = {},
  heading,
  headingProps = {},
  intro,
  introProps = {},
  ...props
}: {
  preHeading?: ReactNode
  preHeadingProps?: ComponentProps<typeof ResponsiveText>
  heading?: ReactNode
  headingProps?: ComponentProps<typeof ResponsiveText>
  intro?: ReactNode
  introProps?: ComponentProps<typeof ResponsiveText>
} & ComponentProps<typeof SectionHeadSC>) {
  return (
    <SectionHeadSC {...props}>
      {(preHeading || heading) && (
        <SectionHeadTopSC>
          {heading && (
            <HeadingSC
              as="h2"
              textStyles={{ '': 'mHero2', xl: 'mHero1' }}
              color="text"
              className="[text-wrap:balance]"
              {...headingProps}
            >
              {preHeading && (
                <>
                  <HeadingSC
                    as="strong"
                    textStyles={{ '': 'mLabel' }}
                    color="text-light"
                    className="mb-medium"
                    {...preHeadingProps}
                  >
                    {preHeading}
                  </HeadingSC>
                  <span className="sr-only"> – </span>
                </>
              )}
              {heading}
            </HeadingSC>
          )}
        </SectionHeadTopSC>
      )}
      {intro && <IntroTextSC {...introProps}>{intro}</IntroTextSC>}
    </SectionHeadSC>
  )
}

const SubsectionHeadSC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.large,
  textAlign: 'left',
}))

export function SubsectionHead({
  preHeading,
  preHeadingProps = {},
  heading,
  headingProps = {},
  ...props
}: {
  preHeading?: ReactNode
  preHeadingProps?: ComponentProps<typeof ResponsiveText>
  heading?: ReactNode
  headingProps?: ComponentProps<typeof ResponsiveText>
} & ComponentProps<typeof SubsectionHeadSC>) {
  return (
    <SubsectionHeadSC {...props}>
      <HeadingSC
        as="h3"
        textStyles={{ '': 'mHero2' }}
        {...headingProps}
      >
        {preHeading && (
          <>
            <HeadingSC
              as="strong"
              textStyles={{ '': 'mLabel' }}
              color="text-light"
              className="mb-medium"
              {...preHeadingProps}
            >
              {preHeading}
            </HeadingSC>
            <span className="sr-only"> – </span>
          </>
        )}
        {heading}
      </HeadingSC>
    </SubsectionHeadSC>
  )
}
