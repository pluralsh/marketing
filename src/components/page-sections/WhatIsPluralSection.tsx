import { InlineCode } from '@pluralsh/design-system'

import classNames from 'classnames'

import { ArchitectureContentSC } from '@pages/product'

import { Columns, EqualColumn } from '../layout/Columns'
import { CenteredSectionHead, SubsectionHead } from '../SectionHeads'
import { BasicUl, Cta } from '../Typography'

export function WhatIsPluralSection() {
  return (
    <>
      <CenteredSectionHead
        heading="What is Plural?"
        intro={
          <p>
            Plural is an open-source, unified, application deployment platform
            that stands up a Kubernetes cluster and selected applications in the
            cloud provider of your choice. Plural writes all the Helm,
            Terraform, and YAML needed for your desired infrastructure and
            deploys it all into production. Plural stores your infrastructure
            code and configuration in a fresh Git repository of your choosing.
          </p>
        }
        className={classNames('pb-xxxxxxlarge')}
      />
      <Columns className="gap-y-xxlarge">
        <EqualColumn>
          <SubsectionHead
            className="mb-xlarge"
            preHeading="Architecture"
            heading="The Plural architecture has three main components"
          />
        </EqualColumn>
        <EqualColumn />
      </Columns>
      <Columns className="gap-y-xxlarge">
        <EqualColumn className="flex flex-col gap-y-xlarge">
          <ArchitectureContentSC>
            <h6>Plural API</h6>
            <p>
              The primary responsibility of the Plural API is to store the
              packages needed for application installation – terraform, helm –
              and ingesting high-level dependency information about them. This
              allows us to properly sequence installations and deliver updates
              that avoid mismatched dependencies.
            </p>
            <p>
              It also can serve as an identity provider for any Plural
              application, delegating authentication via OpenID Connect, giving
              seamless login security for all applications.
            </p>
          </ArchitectureContentSC>
          <ArchitectureContentSC>
            <h6>Plural CLI</h6>
            <p>
              The Plural CLI uses the Plural API as a package manager to
              generate a fully functional git repository with all the
              infrastructure as code needed to deploy any of your applications
              with Plural. This allows you to stand up any open source stack
              {/* @ts-ignore */}
              with just <InlineCode>plural build</InlineCode> and{' '}
              {/* @ts-ignore */}
              <InlineCode>plural deploy</InlineCode>, and never even have to
              give us cloud credentials, since the infrastructure as code lives
              in your local workstation.
            </p>
            <p>
              It also streamlines things like git secret encryption,
              dependency-ordering deploys and provides an operational toolkit
              for accessing databases and logs, watching the status of
              applications and providing login info.{' '}
            </p>
          </ArchitectureContentSC>
          <ArchitectureContentSC>
            <h6>Plural Console</h6>
            <p>
              The Plural Console is the operational hub for all applications
              managed by Plural. It is deployed in-cluster alongside
              applications and provides a few key features:
            </p>
            <BasicUl>
              <li>
                Automated upgrades – by subscribing to the API's upgrade
                websocket
              </li>
              <li>
                Observability – leverages prometheus and loki to provide fully
                featured dashboards, runbooks and log aggregation.
              </li>
              <li>
                Documentation/Self-serviceability – application docs for
                advanced configuration settings and usage patterns are available
                in console, alongside tooling to easily bind users to
                applications, reconfigure them, and other information needed to
                get started quickly.
              </li>
            </BasicUl>
          </ArchitectureContentSC>
          <Cta href="https://docs.plural.sh">Explore the docs</Cta>
        </EqualColumn>
        <EqualColumn>
          <div className={classNames('overflow-hidden rounded-large')}>
            <img
              className="block w-full"
              src="/images/product/architecture.png"
              width="1696"
              height="2188"
              alt=""
            />
          </div>
        </EqualColumn>
      </Columns>
      <div
        className={classNames(
          'mt-xxxxxxlarge',
          'overflow-hidden',
          'rounded-large'
        )}
      >
        <img
          className="block w-full"
          src="/images/product/lifecycle.png"
          width="2865"
          height="1991"
          alt=""
        />
      </div>
    </>
  )
}
