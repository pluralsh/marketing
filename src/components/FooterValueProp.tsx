import {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
} from 'react'

import {
  Button,
  CloudIcon,
  EmojiIcon,
  TerminalIcon,
} from '@pluralsh/design-system'
import Link from 'next/link'

import classNames from 'classnames'
import styled, { useTheme } from 'styled-components'

import { Columns, EqualColumn } from '@src/components/layout/Columns'

import { StandardPage } from './layout/FullPage'
import { TextLimiter } from './layout/TextLimiter'
import { ResponsiveText } from './Typography'

export const FooterValueProp = styled(({ ...props }: ComponentProps<'div'>) => (
  <StandardPage>
    <Columns
      {...props}
      className={classNames(props.className, 'gap-y-xxxlarge')}
    >
      <EqualColumn>
        <TextLimiter>
          <ResponsiveText
            as="h2"
            textStyles={{ '': 'mTitle1', md: 'mHero2' }}
          >
            Build and scale infrastructure within minutes.
          </ResponsiveText>
        </TextLimiter>
        <div className="flex gap-medium mt-xlarge">
          <Button
            primary
            large
            as="a"
            href="https://app.plural.sh/login"
            target="_blank"
          >
            Get started
          </Button>
          <Button
            secondary
            large
            as={Link}
            href="/demo-login"
          >
            Explore live demo
          </Button>
        </div>
      </EqualColumn>
      <EqualColumn className="flex flex-col gap-large">
        <ValueProp
          title="Developer friendly"
          icon={<TerminalIcon />}
        >
          Bring your own cloud and run on top of Kubernetes with the ideal
          cluster distribution.
        </ValueProp>
        <ValueProp
          title="Built for the cloud"
          icon={<CloudIcon />}
        >
          Use our simple GitOps driven workflow for deploying and managing
          applications, and a centralized configuration in a single repo.
        </ValueProp>
        <ValueProp
          title="Fully open-source"
          icon={<EmojiIcon />}
        >
          We are a community first company. We are and always will be
          open-source.
        </ValueProp>
      </EqualColumn>
    </Columns>
  </StandardPage>
))(({ theme: _ }) => ({}))

function ValueProp({
  children,
  title,
  icon,
}: {
  children: ReactNode
  title: ReactNode
  icon: ReactElement
}) {
  const theme = useTheme()

  const iconClone = cloneElement(icon, {
    size: 18,
    color: theme.colors['icon-secondary'],
  })

  return (
    <div className="grid grid-cols-[min-content_auto] gap-x-medium gap-y-xsmall">
      <div className="p-[14px]">{iconClone}</div>
      <ResponsiveText
        as="h3"
        textStyles={{ '': 'mSubtitle1' }}
        className="self-center mt-[-0.15em]"
      >
        <TextLimiter as="span">{title}</TextLimiter>
      </ResponsiveText>
      <ResponsiveText
        as="p"
        textStyles={{ '': 'mBody2' }}
        className="grid col-start-2"
      >
        <TextLimiter as="span">{children}</TextLimiter>
      </ResponsiveText>
    </div>
  )
}
