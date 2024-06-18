import {
  CheckOutlineIcon,
  CloudIcon,
  ColorModeProvider,
  KubernetesIcon,
  PadlockLockedIcon,
  PrClosedIcon,
} from '@pluralsh/design-system'

import { cn as classNames } from '@src/utils/cn'

import { StandardPageWidth } from '../layout/LayoutHelpers'

import { Feature, FeatureItem } from './Feature'
import { FeaturesImage } from './FeaturesImage'

export function ProductFeaturesSection() {
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
              heading="Continuous Deployment"
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
                      aspectRatio: '682 / 407',
                      overlay: true,
                      attrs: {},
                      url: '/images/product/features/deployment-operator.png',
                    },
                    {
                      left: '0%',
                      top: '30%',
                      width: '60%',
                      aspectRatio: '448 / 180',
                      attrs: {},
                      round: true,
                      url: '/images/product/features/status.png',
                    },
                  ]}
                />
              }
            >
              <FeatureItem
                icon={<CloudIcon size={16} />}
                description="Import manifests and helm charts from Git repositories and deploy services to clusters in a couple of clicks. Take advantage of our customization options and centralized config management to configure your deployment exactly the way you want it."
              />
              <FeatureItem
                icon={<PadlockLockedIcon size={16} />}
                description="Built for security and scale with egress-only networking required"
              />
            </Feature>
            <Feature
              heading="Upgrade Assistant"
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
                      aspectRatio: '766 / 404',
                      round: true,
                      attrs: {},
                      overlay: true,
                      url: '/images/product/features/services.png',
                    },
                    {
                      top: '10%',
                      right: 0,
                      round: true,
                      width: '70%',
                      aspectRatio: '480 / 255',
                      attrs: {},
                      url: '/images/product/features/check-addo-on.png',
                    },
                  ]}
                />
              }
            >
              <FeatureItem
                icon={<KubernetesIcon size={16} />}
                title="API Deprecation Detection"
                description="Ensure that all Kubernetes YAML you’re deploying is conformant with the next Kubernetes version"
              />
              <FeatureItem
                icon={<CheckOutlineIcon size={16} />}
                title="Check Add-on Compatibilities"
                description="Ensure all known third-party add-ons are supported on the next Kubernetes version"
              />
              <FeatureItem
                icon={<PrClosedIcon size={16} />}
                title="Check Add-on Mutual Incompatibilities"
                description="Use the suggested version for each add-on to resolve mutual incompatibilities"
              />
            </Feature>
          </div>
        </StandardPageWidth>
      </div>
    </ColorModeProvider>
  )
}
