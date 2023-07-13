import { type ComponentProps } from 'react'

import {
  ArrowRightLeftIcon,
  ColorModeProvider,
  GearTrainIcon,
  PadlockLockedIcon,
  PeopleIcon,
  PersonIcon,
  RocketIcon,
} from '@pluralsh/design-system'
import Head from 'next/head'
import Script from 'next/script'

import classNames from 'classnames'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { ResponsiveAspectRatioSC } from '@src/components/AspectRatio'
import { BenefitCard } from '@src/components/BenefitCard'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { JobListingsSection } from '@src/components/page-sections/JobListingsSection'
import { BasicPageHero } from '@src/components/PageHeros'
import { ScrollToLink } from '@src/components/ScrollToLink'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { getJobListings } from '@src/data/getJobListings'
import { type MinJobListingFragment } from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { ValueCard } from '../../src/components/ValueCard'

export const StandardPageSection = styled.div(({ theme }) => ({
  paddingTop: theme.spacing.xxxxlarge,
  paddingBottom: theme.spacing.xxxxlarge,
  [mqs.md]: {
    paddingTop: theme.spacing.xxxxxlarge,
    paddingBottom: theme.spacing.xxxxxlarge,
  },
  [mqs.xxl]: {
    paddingTop: theme.spacing.xxxxxxlarge,
    paddingBottom: theme.spacing.xxxxxxlarge,
  },
}))

function PhotosSection() {
  return (
    <div className="bg-fill-zero py-xxlarge">
      <StandardPageWidth>
        <div
          className={classNames(
            'grid grid-cols-1 sm:grid-cols-2 gap-large',
            'columns:grid-cols-4'
          )}
        >
          <Photo
            className="columns:row-span-2"
            ratios={{ '': '2 / 3', columns: null }}
            url="/images/careers/photo-1.jpg"
          />
          <Photo
            className="columns:row-span-2 columns:col-start-4"
            ratios={{ '': '2 / 3', columns: null }}
            url="/images/careers/photo-2.jpg"
          />{' '}
          <Photo
            className="sm:col-span-2 columns:row-start-1 columns:col-start-2"
            ratios={{ '': '1 / 1', sm: '2 / 1', columns: '5 / 2' }}
            url="/images/careers/photo-group-1.jpg"
          />{' '}
          <Photo
            className="sm:col-span-2 columns:row-start-2 columns:col-start-2"
            ratios={{ '': '1 / 1', sm: '2 / 1', columns: '5 / 2' }}
            url="/images/careers/photo-group-2.jpg"
          />
        </div>
      </StandardPageWidth>
    </div>
  )
}

function Photo({
  url,
  className,
  ...props
}: ComponentProps<typeof ResponsiveAspectRatioSC>) {
  return (
    <div
      className={classNames(
        'overflow-hidden rounded-large relative',
        className
      )}
    >
      <ResponsiveAspectRatioSC
        {...props}
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${url})` }}
      />
    </div>
  )
}

export default function Index({ jobs }: { jobs: MinJobListingFragment[] }) {
  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        />
      </Head>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-5.jpg"
      >
        <BasicPageHero
          heading="Join us and build something incredible"
          intro={
            <p>
              At Plural, we believe that there is a better way to solve the
              third major constraint—distributed systems operational cost—that
              benefits OSS developers and DevOps teams alike.
            </p>
          }
          ctas={
            <ScrollToLink scrollToTarget="open-positions">
              View open positions
            </ScrollToLink>
          }
          preHeading="Careers"
        />
      </HeaderPad>
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-fill-zero">
          <StandardPageWidth>
            <CenteredSectionHead
              heading="What we value"
              intro="Our motivation is based on:"
              className="mb-xxlarge md:mb-xxxlarge "
            />
            <div
              className={classNames(
                'grid',
                'grid-cols-1',
                'md:grid-cols-2',
                'columns:grid-cols-3',
                'gap-x-xlarge',
                'gap-y-large',
                'md:gap-y-xxlarge'
              )}
            >
              <ValueCard
                icon={<ArrowRightLeftIcon />}
                title="Collaboration"
              >
                Commodo dolore et voluptate sit ullamco aliqua. Voluptate tempor
                magna in qui est. Ipsum veniam eiusmod commodo consectetur.
              </ValueCard>
              <ValueCard
                icon={<PersonIcon />}
                title="Autonomy"
              >
                Ipsum laboris mollit eu consectetur anim Lorem cillum proident
                sunt ex ipsum deserunt fugiat.
              </ValueCard>
              <ValueCard
                icon={<PadlockLockedIcon />}
                title="Trust"
              >
                Sit consequat excepteur cillum voluptate exercitation. Qui non
                sit laboris Lorem culpa exercitation. Excepteur exercitation do
                mollit cupidatat mollit tempor.
              </ValueCard>
              <ValueCard
                icon={<PeopleIcon />}
                title="Diversity"
              >
                Dolore pariatur consequat dolor sunt labore velit anim dolore et
                est excepteur minim minim. Commodo dolore labore aliquip ea ad
                aute reprehenderit elit quis culpa excepteur ex commodo minim.{' '}
              </ValueCard>
              <ValueCard
                icon={<GearTrainIcon />}
                title="Efficiency"
              >
                Est laboris ea exercitation eiusmod culpa non non do
                reprehenderit duis. In esse incididunt aliquip exercitation. Do
                eu ullamco adipisicing.
              </ValueCard>
              <ValueCard
                icon={<RocketIcon />}
                title="Innovation"
              >
                Commodo dolore labore aliquip ea ad aute reprehenderit elit quis
                culpa excepteur ex commodo minim.{' '}
              </ValueCard>
            </div>
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
      <StandardPageSection className="bg-fill-zero">
        <StandardPageWidth>
          <CenteredSectionHead
            heading="Our benefits"
            intro={
              <p>
                We prioritize work-life balance to ensure a healthy a
                sustainable team in the long run.
              </p>
            }
            className="md:mb-xxlarge "
          />
          <div
            className={classNames(
              'grid',
              'grid-cols-1',
              'columns:grid-cols-2',
              'gap-x-xlarge',
              'gap-y-large',
              'md:gap-y-xxlarge'
            )}
          >
            <BenefitCard
              iconUrl="/images/icons/careers/remote-work.svg"
              title="Flexible and fully remote"
            >
              Commodo dolore et voluptate sit ullamco aliqua. Voluptate tempor
              magna in qui est. Ipsum veniam eiusmod commodo consectetur.
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/pto.svg"
              title="Unlimited paid time off for the whole team"
            >
              Ipsum laboris mollit eu consectetur anim Lorem cillum proident
              sunt ex ipsum deserunt fugiat.
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/laptop.svg"
              title="Gear up"
            >
              Sit consequat excepteur cillum voluptate exercitation. Qui non sit
              laboris Lorem culpa exercitation. Excepteur exercitation do mollit
              cupidatat mollit tempor.
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/healthcare.svg"
              title="Healthcare, vision, and dental insurance"
            >
              Dolore pariatur consequat dolor sunt labore velit anim dolore et
              est excepteur minim minim. Commodo dolore labore aliquip ea ad
              aute reprehenderit elit quis culpa excepteur ex commodo minim.{' '}
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/globe.svg"
              title="Let’s get together"
            >
              Est laboris ea exercitation eiusmod culpa non non do reprehenderit
              duis. In esse incididunt aliquip exercitation. Do eu ullamco
              adipisicing.
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/growth.svg"
              title="Growth suppport"
            >
              Commodo dolore labore aliquip ea ad aute reprehenderit elit quis
              culpa excepteur ex commodo minim.{' '}
            </BenefitCard>
          </div>
        </StandardPageWidth>
      </StandardPageSection>
      <ColorModeProvider mode="light">
        <StandardPageSection
          id="open-positions"
          className="bg-fill-zero"
        >
          <StandardPageWidth>
            <CenteredSectionHead
              heading="Open positions"
              intro={
                <p>
                  We're actively seeking passionate individuals to join our team
                  and contribute to our mission. Explore our open positions and
                  unlock exciting opportunities to make a meaningful impact.
                </p>
              }
              className={classNames(
                'pb-large md:pb-xxlarge',
                'mb-xlarge md:mb-xxxlarge',
                'border-b border-border'
              )}
            />
            <JobListingsSection jobListings={jobs} />
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
      <PhotosSection />
    </>
  )
}

export const getStaticProps = async () => {
  const { data: jobs, error: jobsError } = await getJobListings()

  return propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
    jobs: jobs || [],
    errors: [...(jobsError ? [jobsError] : [])],
  })
}
