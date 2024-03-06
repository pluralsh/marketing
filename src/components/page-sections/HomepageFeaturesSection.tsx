import { type ReactElement, type ReactNode, cloneElement, useRef } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'

import { useInView } from 'framer-motion'
import styled from 'styled-components'

import { breakpointIsGreaterOrEqual, mqs } from '@src/breakpoints'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { Body2, ResponsiveText } from '@src/components/Typography'
import { cn as classNames } from '@src/utils/cn'

import { useBreakpoint } from '../contexts/BreakpointProvider'
import { StandardPageWidth } from '../layout/LayoutHelpers'

import { DeepDive } from './DeepDive'
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
      <EqualColumn className="flex flex-col gap-y-xlarge">
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

export function HomepageFeaturesSection() {
  return (
    <ColorModeProvider mode="light">
      <div
        className={classNames(
          'bg-fill-zero',
          'py-xxxxxlarge md:py-xxxxxxlarge xxl:py-xxxxxxlarge'
        )}
      >
        <StandardPageWidth>
          <div
            className={classNames(
              'flex flex-col',
              'gap-y-xxxxxxlarge md:gap-y-xxxxxxlarge xxl:gap-y-xxxxxxlarge'
            )}
          >
            <CenteredSectionHead
              // preHeading="Features"
              heading="Provision and manage Kubernetes clusters. Continuously deploy services. At scale."
            />
            <Feature
              heading="Easily create, import and view your clusters "
              graphic={
                <FeaturesImage
                  direction={-1}
                  width={654}
                  height={370}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: '93%',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/clusters.png',
                    },
                    {
                      bottom: 0,
                      right: 0,
                      width: '43%',
                      aspectRatio: '894 / 874',
                      attrs: {},
                      round: true,
                      url: '/images/homepage/features/create-cluster.mp4',
                    },
                  ]}
                />
              }
            >
              <p>
                Instantly spin up and view clusters across multiple cloud
                providers and accounts without writing Terraform. We expose a
                single GraphQL API that can be integrated with any
                infrastructure-as-code provider or fronted by a Kubernetes
                operator for GitOps management. Already have K8s clusters? No
                sweat. Use our bring-your-own-Kubernetes option to ingest your
                clusters for Plural to manage.
              </p>
            </Feature>
            <Feature
              heading="Deploy from Git in one click"
              graphic={
                <FeaturesImage
                  width={721}
                  height={394}
                  images={[
                    {
                      right: 0,
                      top: 0,
                      width: '94%',
                      aspectRatio: '2660 / 1466',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/git-repos.png',
                    },
                    {
                      bottom: 0,
                      left: 0,
                      width: '38%',
                      aspectRatio: '1208 / 1026',
                      attrs: {},
                      url: '/images/homepage/features/deploy-service.mp4',
                    },
                  ]}
                />
              }
            >
              <p>
                Import your Git repositories and deploy services to clusters in
                a couple of clicks. Take advantage of our customization options
                and centralized secrets management to configure your deployment
                exactly the way you want it.
              </p>
            </Feature>
            <Feature
              heading="Build powerful pipelines with no scripting"
              graphic={
                <FeaturesImage
                  direction={-1}
                  width={2724}
                  height={1404}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: '100%',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/pipelines.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Our Enterprise-grade GitOps continuous deployment is awesome.
                Configure promotions between environments with no scripting
                required. Build gated promotions. Trigger pipelines on events.
                Fully automate your path to production with secure secret
                injection.
              </p>
            </Feature>
            <Feature
              heading="Full visibility into clusters and services with Plural Console"
              graphic={
                <FeaturesImage
                  width={2660}
                  height={1414}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: '100%',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/cluster-services.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Gain insight without compromising Kubernetes security best
                practices like private control planes using outbound
                bidirectional gRPC. Leverage our Kubernetes auth proxy to drill
                into any Kubernetes resource to have a complete understanding of
                your entire environment(s).
              </p>
            </Feature>
            <Feature
              heading="End to end lifecycle management"
              graphic={
                <FeaturesImage
                  direction={-1}
                  width={1841}
                  height={896}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: 1841,
                      height: 896,
                      attrs: {},
                      round: true,
                      url: '/images/homepage/features/deprecations-1.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Managed, zero-downtime upgrades with Cluster API reconciliation
                loops; don’t worry about sloppy and fragile terraform rollouts.
                Handle Kubernetes API deprecations with ease with our built-in
                deprecation detection.
              </p>
            </Feature>
            <DeepDive />
          </div>
        </StandardPageWidth>
      </div>
    </ColorModeProvider>
  )
}
