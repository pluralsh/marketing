import { ColorModeProvider } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'

import { ArticleCard } from '@src/components/ArticleCard'
import Embed from '@src/components/Embed'
import { FooterVariant } from '@src/components/FooterFull'
import { HubspotForm } from '@src/components/HubspotForm'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { Feature } from '@src/components/page-sections/HomepageFeaturesSection'
import {
  CenteredSectionHead,
  SubsectionHead,
} from '@src/components/SectionHeads'
import { BasicUl, Body1, Body2, InlineLink } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../src/components/layout/HeaderPad'

function SignUpSection({ containerId }: { containerId: string }) {
  return (
    <ColorModeProvider
      mode="light"
      className="bg-fill-zero"
    >
      <StandardPageSection className="">
        <StandardPageWidth>
          <Columns>
            <EqualColumn className="flex flex-col gap-y-large">
              <SubsectionHead
                heading="Sign up for continuous deployment early access"
                headingProps={{ as: 'h1' }}
              />
              <Body1 className="[text-wrap:balance]">
                An end-to-end solution for managing Kubernetes clusters and
                application deployment. Join our early access community today.
              </Body1>
            </EqualColumn>
            <EqualColumn>
              <HubspotForm
                uniqueKey={containerId}
                formId="48ee95b2-8ce1-41cb-86bd-b9ae7a9f7fb6"
              />
            </EqualColumn>
          </Columns>
        </StandardPageWidth>
      </StandardPageSection>
    </ColorModeProvider>
  )
}

export default function Legal(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-1.jpg"
      >
        {/* <HomePageHero
          padBottom={false}
          heading={metaTitle}
          description={
            <div className="[text-wrap:balance]">
              An end-to-end solution for managing Kubernetes clusters and
              application deployment. Join our early access community today.
            </div>
          }
        /> */}
        <img
          className=" "
          src="/images/cont-deploy/deployments-hero.png"
          alt=""
        />
      </HeaderPad>

      <SignUpSection containerId="1" />

      <StandardPageSection className="bg-fill-zero">
        <StandardPageWidth>
          <div className="flex flex-col gap-y-xxxxlarge md:gap-y-xxxxxlarge xxl:gap-y-xxxxxxlarge">
            <div className="mx-auto max-w-[960px]">
              <ArticleCard
                preHeading="Whitepaper"
                heading="Accelerate Kubernetes adoption with Plural Continuous Deployment"
                ctas={[
                  {
                    label: 'Read the whitepaper',
                    url: '/downloads/Whitepaper%20-%20Accelerate%20Kubernetes%20Adoption%20with%20Plural%20Continuous%20Deployment.pdf',
                    // download: true,
                  },
                ]}
                thumbnail="/images/cont-deploy/whitepaper.png"
              />
            </div>

            <div className="flex flex-col gap-y-xxlarge">
              <CenteredSectionHead
                heading="Plural Continuous Deployment"
                intro={
                  <>
                    Deploy and manage your software with Plural Continuous
                    Deployment. An end-to-end solution for managing Kubernetes
                    clusters and application deployment on your cloud.
                  </>
                }
              />
              <div>
                <img
                  className="block w-full"
                  src="/images/cont-deploy/diagram.png"
                  aria-describedby="cd-diagram-content"
                />
                <div
                  id="cd-diagram-content"
                  className="sr-only"
                >
                  <h3>Resource authoring with cdk8s</h3>
                  <ul>
                    <li>Easily define K8s applications</li>
                    <li>Can be applied to any cluster</li>
                    <li>Unit testing</li>
                    <li>Package management</li>
                  </ul>
                  <h3>Point and click cluster creation</h3>
                  <ul>
                    <li>Seamlessly spin up clusters in your cloud</li>
                    <li>Managed provisioner for consistent setup</li>
                    <li>Self-hosted for maximum security</li>
                    <li>Multi-cloud compatible</li>
                  </ul>
                  <h3>Continuous deployment</h3>
                  <ul>
                    <li>Self-serviceably deploy your services</li>
                    <li>Secure secret iniection based on in-cluster vault </li>
                    <li>Easy UI for creating deployment pipelines</li>
                  </ul>
                </div>
              </div>
            </div>

            <Feature
              heading="Point and click cluster creation with cluster API"
              graphic={<img src="/images/cont-deploy/create-cluster-m.png" />}
            >
              <BasicUl>
                <li>
                  Rapidly create new Kubernetes environments across any cloud
                  without ever having to write code
                </li>
                <li>
                  Managed, zero downtime upgrades with cluster api
                  reconciliation loops, don’t worry about sloppy and fragile
                  terraform rollouts
                </li>
                <li>
                  Dynamically add and remove nodes to your cluster node topology
                  as you like
                </li>
              </BasicUl>
            </Feature>
            <Feature
              heading="Deploy from git in one click"
              graphic={<img src="/images/cont-deploy/deploy-service.png" />}
            >
              <BasicUl>
                <li>
                  Use scaffolds to create functional gitops deployments in a
                  flash
                </li>
                <li>
                  First class support for{' '}
                  <InlineLink
                    href="https://cdk8s.io"
                    className="inline-link"
                  >
                    cdk8s.io
                  </InlineLink>{' '}
                  to provide a robust Kubernetes authoring experience with unit
                  testability and package management
                </li>
                <li>Integrated secret management</li>
              </BasicUl>
            </Feature>

            <div className="flex flex-col gap-y-xxlarge">
              <div className="flex flex-col gap-y-xlarge text-center">
                <SubsectionHead
                  heading="Move code to production with powerful pipelines"
                  headingProps={{ className: 'text-center' }}
                />
                <Body2 as="p">
                  Ferry code changes from development to production with
                  powerful integration tests and approval workflows.
                </Body2>
              </div>
              <div>
                <img
                  className="block w-full"
                  src="/images/cont-deploy/pipelines.png"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-xxlarge">
              <div className="flex flex-col gap-y-xlarge text-center">
                <SubsectionHead
                  heading="All your deployments in one place"
                  headingProps={{ className: 'text-center' }}
                />
                <Body2 as="p">
                  A single, scalable user interface where your org can deploy
                  and monitor everything fast.
                </Body2>
              </div>
              <div>
                <img
                  className="block w-full"
                  src="/images/cont-deploy/deployments-clusters-update.png"
                />
              </div>
            </div>
            {/* <div className="mx-auto max-w-[960px]"> */}
            <Embed
              url="https://www.youtube.com/watch?v=yh9DMwjtOhQ"
              aspectRatio="16 / 9"
            />
            {/* </div> */}
          </div>
        </StandardPageWidth>
      </StandardPageSection>

      <SignUpSection containerId="2" />
    </>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    metaTitle: 'Continuous deployment early access',
    metaDescription:
      'An end-to-end solution for managing Kubernetes clusters and application deployment. Join our early access community today.',
    footerVariant: FooterVariant.kitchenSink,
  })
