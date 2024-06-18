import { ArrowRightIcon, Button, IconFrame } from '@pluralsh/design-system'
import Link from 'next/link'

import styled, { useTheme } from 'styled-components'

import { type FeatureConfig } from '@src/data/getProductConfigs'
import { cn as classNames } from '@src/utils/cn'

import { EqualColumn } from './layout/Columns'
import { ResponsiveText } from './Typography'

function ProductFeature({
  inverse,
  feature,
}: {
  inverse: boolean
  feature: FeatureConfig
}) {
  const theme = useTheme()

  return (
    <ProductFeatureSC
      inverse
      className="p-xlarge lg:p-xxlarge"
    >
      <div
        className={classNames([
          'gap-y-xxlarge',
          'flex flex-col items-center justify-center',
          inverse ? 'md:flex-row-reverse' : 'md:flex-row',
        ])}
      >
        {/* content */}
        <EqualColumn className="flex flex-col items-start justify-center">
          <ResponsiveText
            as="h2"
            textStyles={{ sm: 'mSubtitle1', md: 'mTitle2', '': 'mSubtitle1' }}
            className="mb-medium "
          >
            <IconFrame
              type="floating"
              icon={feature.icon}
              style={{
                display: 'inline-flex',
                marginRight: theme.spacing.xsmall,
              }}
            />
            {feature.title}
          </ResponsiveText>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2', md: 'mBody1' }}
            className="mb-xlarge"
            style={{ color: theme.colors['text-light'] }}
          >
            {feature.description}
          </ResponsiveText>
          <Button
            large
            tertiary
            as={Link}
            href="/contact-sales"
            endIcon={<ArrowRightIcon />}
            padding="none"
            className="w-fit"
          >
            Book a demo
          </Button>
        </EqualColumn>
        {/* image */}
        <EqualColumn className="flex items-center">
          <img
            src={feature.image}
            aria-hidden="true"
            className="self-center"
          />
        </EqualColumn>
      </div>
    </ProductFeatureSC>
  )
}

export default ProductFeature

const ProductFeatureSC = styled.div<{ inverse: boolean }>(
  ({ theme, inverse }) => ({
    border: theme.borders.default,
    // padding: `${0} ${theme.spacing.xxlarge}px`,
    borderRadius: theme.borderRadiuses.large,
    marginBottom: theme.spacing.xxxxxlarge,
    background: `linear-gradient(${inverse ? '90deg' : '270deg'}, #1B1F27 0%, #0E1015 100%)`,
  })
)
