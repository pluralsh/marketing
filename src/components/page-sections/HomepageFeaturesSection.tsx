import { type ReactElement, type ReactNode, cloneElement, useRef } from 'react'

import {
  AppsIcon,
  ClusterIcon,
  ColorModeProvider,
  DashboardIcon,
  DocumentIcon,
  KeyIcon,
  KubernetesIcon,
  NetworkInIcon,
  PadlockLockedIcon,
  StatusOkIcon,
  UpdatesIcon,
  WarningShieldIcon,
} from '@pluralsh/design-system'

import { useInView } from 'framer-motion'
import styled from 'styled-components'

import { breakpointIsGreaterOrEqual, mqs } from '@src/breakpoints'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { Body2, ResponsiveText } from '@src/components/Typography'
import { cn as classNames } from '@src/utils/cn'

import { useBreakpoint } from '../contexts/BreakpointProvider'
import { StandardPageWidth } from '../layout/LayoutHelpers'

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

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
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
        <h4 className="txt-body-2-bold text-text">{title}</h4>
        <p className="txt-body-2 text-text-light">{description}</p>
      </div>
    </div>
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
            <Feature
              heading="K8s upgrade cycles from months to hours"
              graphic={
                <FeaturesImage
                  shadow
                  direction={-1}
                  width={654}
                  height={370}
                  images={[
                    {
                      top: 0,
                      right: 0,
                      width: '90%',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/console-home.png',
                    },
                    {
                      left: '0%',
                      bottom: '-10%',
                      width: '60%',
                      aspectRatio: '1818 / 1208',
                      attrs: {},
                      round: true,
                      url: '/images/homepage/features/upgrade-plan.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Transform your Kubernetes upgrade process from months to hours
                with Plural's innovative single-pane-of-glass interface.{' '}
              </p>
              <FeatureItem
                icon={<UpdatesIcon size={16} />}
                title="Automated dependency management"
                description="Automatically detects and manages dependencies to streamline upgrades"
              />
              <FeatureItem
                icon={<DashboardIcon size={16} />}
                title="Compatibility matrices"
                description="Ensures version compatibility across all components"
              />
            </Feature>
            <Feature
              heading="Level-up your security and compliance"
              graphic={
                <FeaturesImage
                  shadow
                  width={721}
                  height={394}
                  images={[
                    {
                      left: 0,
                      top: 0,
                      width: '94%',
                      aspectRatio: '2794 / 1656',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/policies.png',
                    },
                    {
                      top: '10%',
                      right: 0,
                      round: true,
                      width: '70%',
                      aspectRatio: '1122 / 320',
                      attrs: {},
                      url: '/images/homepage/features/policies-detail.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Automate updates and enforce policies using OPA Gatekeeper and
                manage access through RBAC and OIDC, safeguarding your data and
                applications.{' '}
              </p>
              <FeatureItem
                icon={<KeyIcon size={16} />}
                title="Automated updates"
                description="Keeps your systems up-to-date with the latest security patches"
              />
              <FeatureItem
                icon={<WarningShieldIcon size={16} />}
                title="Policy enforcement"
                description="Utilizes OPA Gatekeeper to enforce security policies across your deployments"
              />
              <FeatureItem
                icon={<DocumentIcon size={16} />}
                title="Compliance assurance"
                description="Helps your organization meet critical compliance standards effortlessly"
              />
            </Feature>
            <Feature
              heading="Simple K8s management for all levels"
              graphic={
                <FeaturesImage
                  shadow
                  direction={-1}
                  width={2724}
                  height={1404}
                  images={[
                    {
                      right: 0,
                      top: 0,
                      width: '94%',
                      aspectRatio: '2318 / 1640',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/clusters.png',
                    },
                    {
                      bottom: 0,
                      left: 0,
                      width: '70%',
                      aspectRatio: '1052 / 364',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/clusters-detail.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Automate cluster maintenance to focus on innovation rather than
                upkeep.
              </p>
              <FeatureItem
                icon={<ClusterIcon size={16} />}
                title="Automated cluster maintenance"
                description="Streamlines updates and dependency management, reducing manual efforts"
              />
              <FeatureItem
                icon={<AppsIcon size={16} />}
                title="User-friendly interface"
                description="Makes managing Kubernetes accessible to engineers at all levels"
              />
              <FeatureItem
                icon={<StatusOkIcon size={16} />}
                title="Operational efficiency"
                description="Automate routine maintenance tasks to free up engineering resources"
              />
            </Feature>
            <Feature
              heading="Self-hosted for maximum security"
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
                      url: '/images/homepage/features/schema.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Our lightweight, easy-to-install architecture supports any K8s
                distribution or hosting environment, allowing for secure, and
                even airgapped deployments tailored to your needs.
              </p>
              <FeatureItem
                icon={<KubernetesIcon size={16} />}
                title="Distribution agnostic"
                description="Compatible with any Kubernetes distribution or hosting environment"
              />
              <FeatureItem
                icon={<PadlockLockedIcon size={16} />}
                title="Enhanced security"
                description="Supports airgapped deployments for maximum security"
              />
              <FeatureItem
                icon={<NetworkInIcon size={16} />}
                title="Pull-based agent architecture"
                description="Leverages an egress-only network model for easy and secure networking with unlimited scale"
              />
            </Feature>
          </div>
        </StandardPageWidth>
      </div>
    </ColorModeProvider>
  )
}
