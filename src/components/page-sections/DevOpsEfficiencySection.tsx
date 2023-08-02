import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

import { GradientBG } from '../layout/GradientBG'
import { StandardPageSection, StandardPageWidth } from '../layout/LayoutHelpers'
import { CenteredSectionHead } from '../SectionHeads'
import { ResponsiveText } from '../Typography'

const GraphCardSC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.large,
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: 10,
  boxShadow: theme.boxShadows.moderate,
  padding: `${theme.spacing.xlarge}px ${theme.spacing.xlarge}px`,
  [mqs.xs]: {
    padding: `${theme.spacing.xxlarge}px ${theme.spacing.xxlarge}px`,
  },
  [mqs.sm]: {
    padding: `${theme.spacing.xxxlarge}px ${theme.spacing.xxxxlarge}px`,
  },
  [mqs.md]: {
    padding: `${theme.spacing.xlarge}px ${theme.spacing.xlarge}px`,
  },
  [mqs.lg]: {
    padding: `${theme.spacing.xxlarge}px ${theme.spacing.xxlarge}px`,
  },
  [mqs.xl]: {
    padding: `${theme.spacing.xxxlarge}px ${theme.spacing.xxxxlarge}px`,
  },
  img: {
    display: 'block',
    width: '100%',
  },
}))

export function DevOpsEfficiencySection() {
  return (
    <GradientBG
      image="/images/gradients/gradient-bg-2.jpg"
      size="cover"
    >
      <StandardPageSection>
        <StandardPageWidth>
          <div className="flex flex-col gap-xxxxlarge">
            <CenteredSectionHead
              heading={
                <>DevOps teams are 9× more efficient when using Plural</>
              }
              headingProps={{ textStyles: { '': 'mTitle1', md: 'mHero2' } }}
              intro={
                <p>
                  Building great infrastructure takes time. Set up services on
                  Kubernetes, and secure, scale and maintain your applications
                  in your cloud with 9× less time, meaning your team can focus
                  on delivering value, not building the boilerplate to keep the
                  lights on.
                </p>
              }
            />
            <div className="grid flex-col md:grid-cols-2 gap-xxlarge">
              <GraphCardSC>
                <ResponsiveText
                  as="h4"
                  textStyles={{ '': 'mSubtitle2' }}
                  className="text-center [text-wrap:balance]"
                >
                  9× Faster to Use Plural vs Build Yourself
                </ResponsiveText>
                <img
                  src="/images/homepage/graphs/graph1.png"
                  alt="Bar graph with two columns – Build yourself: Over 1000 dev hours, Use Plural: Fewer than 200 dev hours"
                />
              </GraphCardSC>
              <GraphCardSC>
                <ResponsiveText
                  as="h4"
                  textStyles={{ '': 'mSubtitle2' }}
                  className="text-center [text-wrap:balance]"
                >
                  Total Dev hours Invested vs Using Plural
                </ResponsiveText>
                <img
                  src="/images/homepage/graphs/graph2.png"
                  alt="Bar graph showing dramatically fewer dev hours for 'Use Plural' vs 'Build yourself' over the course of 3 years"
                />
              </GraphCardSC>
            </div>
          </div>
        </StandardPageWidth>
      </StandardPageSection>
    </GradientBG>
  )
}
