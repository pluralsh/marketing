import { type ComponentProps } from 'react'

import { TerminalIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

import { ResponsiveText } from './Typography'

export const FooterValueProp = styled(({ ...props }: ComponentProps<'div'>) => (
  <div
    {...props}
    className="v-gap-"
  >
    <div>
      <ResponsiveText
        as="h2"
        textStyles={{ '': 'mTitle1', md: 'mHero2' }}
      >
        Build and scale infrastructure within minutes.
      </ResponsiveText>
    </div>
    <div className="flex flex-col gap-y-xxlarge gap-x-medium">
      <div className="p-[14px]">
        <TerminalIcon size={18} />
      </div>
      <div>
        <ResponsiveText as="h3">Developer friendly</ResponsiveText>
        <ResponsiveText as="p">
          Bring your own cloud and run on top of Kubernetes with the ideal
          cluster distribution.
        </ResponsiveText>
      </div>
    </div>
  </div>
))(({ theme: _ }) => ({}))
