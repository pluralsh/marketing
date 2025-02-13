import { type ComponentProps } from 'react'

import { Button } from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'

import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { cn as classNames } from '@src/utils/cn'

import { StandardPageWidth } from './layout/LayoutHelpers'
import { TextLimiter } from './layout/TextLimiter'
import { ResponsiveText } from './Typography'

export const FooterValueProp = styled(({ ...props }: ComponentProps<'div'>) => (
  <StandardPageWidth>
    <Columns
      {...props}
      className={classNames(
        props.className,
        'flex-col justify-between gap-y-xxxlarge lg:flex-row'
      )}
    >
      <EqualColumn>
        <TextLimiter>
          <ResponsiveText
            as="h2"
            textStyles={{ '': 'mTitle1', md: 'mHero2' }}
          >
            Enterprise Kubernetes <br /> management, accelerated.
          </ResponsiveText>
        </TextLimiter>
        <Button
          large
          as={Link}
          href="/contact"
          className="mt-large w-full sm:w-fit"
        >
          Book now
        </Button>
      </EqualColumn>
      <EqualColumn className="flex flex-row items-center justify-between gap-medium lg:justify-end lg:gap-xxlarge">
        <img
          width="28%"
          className="max-w-[90px]"
          src="/images/homepage/aicpa-soc.png"
          aria-hidden
        />
        <img
          width="28%"
          className="max-w-[90px]"
          src="/images/homepage/gdpr.png"
          aria-hidden
        />
        <img
          width="28%"
          className="max-w-[90px]"
          src="/images/homepage/cloud-native.png"
          aria-hidden
        />
      </EqualColumn>
    </Columns>
  </StandardPageWidth>
))(({ theme: _ }) => ({}))
