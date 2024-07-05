import {
  AppsIcon,
  ClipboardChecked,
  ClusterIcon,
  ColorModeProvider,
  DashboardIcon,
  KeyIcon,
  KubernetesIcon,
  NetworkInIcon,
  PadlockLockedIcon,
  StatusOkIcon,
  UpdatesIcon,
  WarningShieldIcon,
} from '@pluralsh/design-system'

import { cn as classNames } from '@src/utils/cn'

import { StandardPageWidth } from '../layout/LayoutHelpers'

import { Feature, FeatureItem } from './Feature'
import { FeaturesImage } from './FeaturesImage'

export function HomepageFeaturesSection() {
  return (
    <ColorModeProvider mode="light">
      <div
        className={classNames(
          'bg-marketing-black',
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
                  width={400}
                  height={230}
                  images={[
                    {
                      top: -10,
                      left: 15,
                      width: '100%',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/console-home.png',
                    },
                    {
                      left: -15,
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
                title="Version compatibility matrices"
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
                      left: -20,
                      top: '-5%',
                      width: '100%',
                      aspectRatio: '2794 / 1656',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/policies.png',
                    },
                    {
                      top: '5%',
                      right: -20,
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
                icon={<ClipboardChecked size={16} />}
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
                  width={400}
                  height={282}
                  images={[
                    {
                      left: 15,
                      top: 0,
                      width: '100%',
                      aspectRatio: '2318 / 1640',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/clusters.png',
                    },
                    {
                      top: '35%',
                      left: -15,
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
                description="Streamlines updates and dependency management, reducing manual effort"
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
                  width={400}
                  height={320}
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
