import { Button, CalendarIcon } from '@pluralsh/design-system'
import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

import { FooterVariant } from '@src/components/FooterFull'
import { KubeconHeader } from '@src/components/Kubecon'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { ImpactCardSection } from '@src/components/page-sections/ImpactCardSection'
import {
  Body1,
  Hero2,
  OverlineLabel,
  Subtitle1,
  Title1,
} from '@src/components/Typography'
import getPricing from '@src/data/getPricing'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function KubeCon() {
  return (
    <div className="bg-[#0F1116]">
      <div className="relative">
        <div
          css={`
            position: absolute;
            top: 260px;
            left: 191px;
            border-radius: 50%;
            background: #17e8a0;
            filter: blur(178px);
            width: 200px;
            height: 200px;
          `}
        />
        <div
          css={`
            position: absolute;
            top: 265px;
            right: 171px;
            border-radius: 50%;
            background: #99daff;
            filter: blur(178px);
            width: 200px;
            height: 200px;
          `}
        />
        <img
          src="/images/pricing/pricing-circles.svg"
          className="absolute left-1/2 top-[400px] -translate-x-1/2"
        />
      </div>
      <StandardPageWidth className="py-xxxxlarge">
        <div className="flex flex-col items-center gap-xxlarge">
          <KubeconHeader />
          <div className="flex max-w-3xl flex-col items-center gap-small">
            <h1 className="txt-mktg-hero-1 text-3xl md:txt-mktg-hero-1">
              Meet us at KubeCon
            </h1>
            <Body1 className="text-center">
              Join Plural at KubeCon North America 2024 in Salt Lake City, UT.
              We're excited to showcase our latest solutions that empower
              organizations to streamline their Kubernetes deployments and
              operations.
            </Body1>
          </div>
          <Button
            large
            primary
            rel="noopener noreferrer"
            target="_blank"
            as={Link}
            href="/contact-sales"
            className="mt-medium w-fit"
          >
            Book a demo
          </Button>
        </div>
      </StandardPageWidth>
      <Image
        src="/images/kubecon/visit-us.jpg"
        alt="Visit us at KubeCon, booth R23"
        width={4032}
        height={3024}
      />
      <StandardPageWidth>
        <div className="flex flex-col items-center py-xxxxlarge">
          <ImpactCardSection />
          <Button
            large
            primary
            rel="noopener noreferrer"
            target="_blank"
            as={Link}
            href="/contact-sales"
          >
            Book a demo
          </Button>
        </div>
        <div className="flex flex-col gap-xxxlarge pb-xxxxxxlarge pt-xxxxlarge">
          <div className="flex gap-xxxlarge">
            <Image
              src="/images/kubecon/session-info.jpg"
              alt="Session info"
              width={1600}
              height={900}
            />
            <div className="flex flex-col gap-medium text-text-light">
              <OverlineLabel $color="text">Get engaged</OverlineLabel>
              <Title1>Attend our session</Title1>
              <SessionInfoListSC>
                Join us for an insightful session where we'll delve into:
                <ul>
                  <br />
                  <li>
                    The latest updates from the Kubernetes SIG-UI, focusing on
                    the evolution of the Kubernetes Dashboard project.
                  </li>
                  <li>
                    A comprehensive overview of key changes, enhancements, and
                    advancements, including a detailed exploration of the
                    project's new architecture.
                  </li>
                  <li>
                    The future of Kubernetes management and developer
                    experience.
                  </li>
                </ul>
              </SessionInfoListSC>
              <Button
                large
                primary
                as={Link}
                href="#"
                className="w-fit"
                startIcon={<CalendarIcon />}
              >
                Add session to calendar
              </Button>
            </div>
          </div>
          <div
            className="border-gray-300 flex
            items-center
            justify-between overflow-x-auto rounded-large border 
            border-solid border-border bg-fill-zero p-xlarge"
          >
            <div className="flex flex-col">
              <Subtitle1>Can't connect in person?</Subtitle1>
              <Body1>
                No worries! We have plenty of ways for you to explore Plural.
              </Body1>
            </div>
            <div className="flex gap-medium">
              <Button
                secondary
                rel="noopener noreferrer"
                target="_blank"
                as={Link}
                href="https://docs.plural.sh/"
              >
                Read our docs
              </Button>
              <Button
                floating
                rel="noopener noreferrer"
                target="_blank"
                as={Link}
                href="https://plural.sh/"
              >
                Learn more
              </Button>
              <Button
                primary
                rel="noopener noreferrer"
                target="_blank"
                as={Link}
                href="https://plural.sh/contact-sales"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </StandardPageWidth>
      <div className="relative w-full bg-[#171A21]">
        <RepeatingLogoSC />
        <div className="mx-auto flex w-[75%] flex-col items-center justify-center gap-xsmall py-xxxxxlarge text-center">
          <OverlineLabel>Learn more</OverlineLabel>
          <Hero2>About Plural</Hero2>
          <Body1 className="mt-xsmall">
            Plural makes enterprise Kubernetes management accessible, efficient,
            and cost-effective. Founded to address the operational complexities
            of Kubernetes, Plural provides platform engineering and DevOps teams
            with a comprehensive suite of tools for managing Kubernetes fleets
            at scale.
          </Body1>
          <Button
            className="mt-xlarge"
            large
            primary
            as={Link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://plural.sh/"
          >
            Learn more about Plural
          </Button>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data, error } = await getPricing()
  const proPlan = data?.pricing_page?.pro_plan
  const enterprisePlan = data?.pricing_page?.enterprise_plan

  if (!proPlan || !enterprisePlan || error) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'Plural at KubeCon',
    metaDescription:
      'Join Plural at KubeCon North America 2024 in Salt Lake City, UT.',
    footerVariant: FooterVariant.kitchenSink,
  })
}

const RepeatingLogoSC = styled.div`
  position: absolute;
  inset: 0;
  background: url('/favicon-128.png') repeat;
  background-size: 64px 64px;
  width: 100%;
  opacity: 0.05;
`

const SessionInfoListSC = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.5px;
  ul {
    list-style: disc;
    padding-left: 16px;
  }
  li {
    margin-bottom: 6px;
  }
`
