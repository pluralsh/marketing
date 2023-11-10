import {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
  useRef,
} from 'react'

import { Button, ColorModeProvider } from '@pluralsh/design-system'
import Link from 'next/link'

import { isExternalUrl } from '@pluralsh/design-system/dist/markdoc/utils/text'
import classNames from 'classnames'
import { useInView } from 'framer-motion'
import styled from 'styled-components'

import { breakpointIsGreaterOrEqual, mqs } from '@src/breakpoints'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { Body2, ResponsiveText } from '@src/components/Typography'

import { useBreakpoint } from '../contexts/BreakpointProvider'
import { StandardPageWidth } from '../layout/LayoutHelpers'

import { DeepDive } from './DeepDive'
import { FeaturesImage } from './FeaturesImage'

const FeatureSC = styled(Columns)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // flexDirection: 'column',
  rowGap: theme.spacing.xxxlarge,
  [mqs.columns]: {
    '&:nth-child(2n+1)': {
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
                providers and accounts without writing Terraform. Exposed as a
                single GraphQL API that can be Integrated with any
                infrastructure as code provider or fronted by a Kubernetes
                operator for GitOps management. Already have K8s clusters? No
                sweat. Use our bring-your-own-Kubernetes option to ingest your
                clusters for Plural to manage.
              </p>
            </Feature>
            <Feature
              heading="Deploy from Git in one click"
              graphic={
                <FeaturesImage
                  direction={-1}
                  width={654}
                  height={400}
                  images={[
                    {
                      top: 0,
                      left: 262,
                      width: 392,
                      height: 382,
                      attrs: {},
                      url: '/images/homepage/features/security-1.png',
                    },
                    {
                      top: 67,
                      left: 0,
                      width: 273,
                      height: 327.420098824,
                      attrs: {},
                      url: '/images/homepage/features/security-2.mp4',
                    },
                  ]}
                />
              }
            >
              <p>
                Import your Git repositories and deploy services to clusters in
                a couple of clicks. First class support for CDK8’s to provide a
                robust Kubernetes authoring experience with unit testability and
                package management. Take advantage of our customization options
                and centralized secrets management to configure your deployment
                exactly the way you want it.
              </p>
            </Feature>
            <Feature
              heading="Build powerful pipelines with no scripting"
              graphic={
                <FeaturesImage
                  width={2034}
                  height={1166}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: 2034,
                      height: 1166,
                      attrs: {},
                      url: '/images/homepage/features/customizable-1.mp4',
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
                  direction={-1}
                  width={1200}
                  height={696}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: 1200,
                      height: 696,
                      attrs: {},
                      url: '/images/homepage/features/upgrades-1.mp4',
                    },
                  ]}
                />
              }
            >
              <p>
                Gain insight without compromising Kubernetes security best
                practices like private control planes using outbound
                bidirectional GRPC. Leverage our Kubernetes auth proxy to drill
                into any Kubernetes resource to have a complete understanding of
                your entire environment(s).
              </p>
            </Feature>
            <Feature
              heading="End to end lifecycle management"
              graphic={
                <FeaturesImage
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
                Managed, zero downtime upgrades with Cluster API reconciliation
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

export function DeepDiveButton(props: ComponentProps<typeof Button>) {
  return (
    <li>
      <Button
        secondary
        large
        as={Link}
        {...(isExternalUrl((props as any)?.href) ? { target: '_blank' } : {})}
        {...props}
      />
    </li>
  )
}
