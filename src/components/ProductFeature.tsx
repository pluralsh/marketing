import { ArrowRightIcon, Button, IconFrame } from '@pluralsh/design-system'
import Link from 'next/link'

import * as icons from '@pluralsh/design-system/dist/icons'
import styled, { useTheme } from 'styled-components'

import { getImageUrl } from '@src/consts/routes'
import { type ProductFeatureFragment } from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'

import { EqualColumn } from './layout/Columns'
import { ResponsiveText } from './Typography'

function ProductFeature({
  invert,
  feature,
}: {
  invert: boolean
  feature: ProductFeatureFragment
}) {
  const theme = useTheme()
  const IconComponent = feature.icon ? icons[feature.icon] : null

  return (
    <ProductFeatureSC
      invert
      className="p-xlarge lg:p-xxlarge"
    >
      <div
        className={classNames([
          'gap-y-xxlarge',
          'flex flex-col items-center justify-center',
          invert ? 'md:flex-row-reverse' : 'md:flex-row',
        ])}
      >
        {/* content */}
        <EqualColumn className="flex flex-col items-start justify-center">
          <ResponsiveText
            as="h2"
            textStyles={{ sm: 'mSubtitle1', md: 'mTitle2', '': 'mSubtitle1' }}
            className="mb-medium "
          >
            {IconComponent && (
              <IconFrame
                type="floating"
                icon={<IconComponent />}
                style={{
                  display: 'inline-flex',
                  marginRight: theme.spacing.xsmall,
                }}
              />
            )}
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
            href="/contact"
            endIcon={<ArrowRightIcon />}
            padding="none"
            className="w-fit"
          >
            Book a demo
          </Button>
        </EqualColumn>
        {/* image */}
        <EqualColumn className="flex items-center">
          {feature.image && (
            <img
              src={getImageUrl(feature.image) ?? ''}
              aria-hidden="true"
              className="self-center"
            />
          )}
        </EqualColumn>
      </div>
    </ProductFeatureSC>
  )
}

export default ProductFeature

const ProductFeatureSC = styled.div<{ invert: boolean }>(
  ({ theme, invert }) => ({
    border: theme.borders.default,
    // padding: `${0} ${theme.spacing.xxlarge}px`,
    borderRadius: theme.borderRadiuses.large,
    marginBottom: theme.spacing.xxxxxlarge,
    background: `linear-gradient(${invert ? '90deg' : '270deg'}, #1B1F27 0%, #0E1015 100%)`,
  })
)
