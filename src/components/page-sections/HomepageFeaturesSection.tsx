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
              'gap-y-xxxlarge lg:gap-y-xxxxxxlarge'
            )}
          >
            <Feature
              heading="K8s upgrade cycles from months to hours"
              graphic={
                <FeaturesImage
                  direction={-1}
                  width={1440}
                  height={1092}
                  images={[
                    {
                      top: '-20%',
                      left: '-20%',
                      width: '140%',
                      attrs: {},
                      url: '/images/homepage/features/k8s-upgrade-cycle.png',
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
                  width={1465}
                  height={964}
                  images={[
                    {
                      top: '-20%',
                      left: '-20%',
                      width: '140%',
                      attrs: {},
                      url: '/images/homepage/features/security-and-compliance.png',
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
                  direction={-1}
                  width={400}
                  height={282}
                  images={[
                    {
                      top: '-20%',
                      left: '-20%',
                      width: '140%',
                      round: true,
                      attrs: {},
                      url: '/images/homepage/features/simple-k8s-management.png',
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
                      top: '-15%',
                      left: '-40%',
                      width: '180%',
                      attrs: {},
                      url: '/images/homepage/features/self-hosted-and-secure.png',
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
