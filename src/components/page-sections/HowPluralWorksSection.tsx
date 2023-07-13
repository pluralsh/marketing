import classNames from 'classnames'

import {
  ConnectorLineH,
  ConnectorLineV,
  HowWorks,
  HowWorksImage,
  HowWorksImgCol,
  HowWorksItemCol,
  HowWorksSection,
  HowWorksStepCol,
  IMAGE_MARGIN,
} from '@src/components/HowPluralWorksComponents'

import { BasicUl } from '../../../pages/product'

export function HowPluralWorksSection() {
  return (
    <HowWorks>
      <HowWorksSection>
        <HowWorksStepCol
          stepNum={1}
          showConnector
        />
        <HowWorksItemCol>
          <h4>Select open-source applications from the Plural Marketplace</h4>
          <BasicUl>
            <li>
              Start or extend your infrastructure in minutes with our guided
              deployment flow.
            </li>
            <li>
              Choose from best in class applications for Data, DevOps, or
              Security use cases.
            </li>
          </BasicUl>
        </HowWorksItemCol>
        <HowWorksImgCol>
          <HowWorksImage
            title="how-plural-works-1"
            width={464}
            height={282}
            src="/animations/how-01/index.html"
          />
        </HowWorksImgCol>
      </HowWorksSection>
      <HowWorksSection>
        <HowWorksStepCol
          stepNum={2}
          showConnector
        />
        <HowWorksItemCol>
          <h4>Bring your cloud & add your Git credentials</h4>
          <BasicUl>
            <li>
              Plural uses your cloud credentials to create your infrastructure
              in your own cloud. All cloud credentials are stored securely using
              symmetric encryption.
            </li>
            <li>
              Plural creates versioned infrastructure-as-code which makes it
              easy to track what’s changing and roll back between versions.
            </li>
            <li>
              IAC is stored in your SCM. Apps are fully ejectable so you can
              walk away from Plural at any time.
            </li>
            <li>
              Customize the config of apps deployed by Plural for greater
              control of your deployment.
            </li>
          </BasicUl>
        </HowWorksItemCol>
        <HowWorksImgCol>
          <HowWorksImage
            className="md:hidden"
            title="how-plural-works-2"
            width={464}
            height={246}
            src="/animations/how-02-sm/index.html"
          />
          <HowWorksImage
            className={classNames(
              'hidden md:block',
              'md:pb-[120px] lg:pb-[unset]'
            )}
            title="how-plural-works-2"
            width={464}
            height={388}
            src="/animations/how-02/index.html"
          >
            <ConnectorLineV
              className="hidden lg:block"
              {...{
                top: '40%',
                bottom: `calc(-125px + ${IMAGE_MARGIN})`,
                left: '64.2%',
              }}
            />
            <ConnectorLineV
              className=" lg:hidden"
              {...{
                top: '40%',
                bottom: `calc(-245px + ${IMAGE_MARGIN})`,
                left: '64.2%',
              }}
            />
            <ConnectorLineV {...{ top: '-60%', bottom: '73%', left: '36%' }} />
          </HowWorksImage>
        </HowWorksImgCol>
      </HowWorksSection>
      <HowWorksSection>
        <HowWorksStepCol
          stepNum={3}
          showConnector
        />
        <HowWorksItemCol>
          <h4>Build & Deploy</h4>
          <BasicUl>
            <li>
              Plural provisions and secures infrastructure to best practices in
              your cloud.
            </li>
            <li>Built-in secret management, image scans, and audit trails.</li>
            <li>
              Automatically configured user authentication with OpenID connect.
            </li>
          </BasicUl>
        </HowWorksItemCol>
        <HowWorksImgCol>
          <HowWorksImage
            className="md:hidden"
            title="how-plural-works-3"
            width={464}
            height={200}
            src="/animations/how-03-sm/index.html"
          />
          <HowWorksImage
            className="hidden md:block"
            title="how-plural-works-3"
            width={464}
            height={437}
            src="/animations/how-03/index.html"
          >
            <ConnectorLineV
              {...{ top: '10%', bottom: '56.5%', left: '64.2%' }}
            />
            <ConnectorLineH
              {...{
                transformOrigin: '50% 0',
                top: '43.5%',
                bottom: 'auto',
                left: '30%',
                right: '35.8%',
                overflow: 'hidden',
              }}
            />
            <ConnectorLineV
              {...{
                top: '37%',
                bottom: '-50%',
                left: '24.1%',
                transform: 'translate(-50%)',
              }}
            />
          </HowWorksImage>
        </HowWorksImgCol>
      </HowWorksSection>
      <HowWorksSection>
        <HowWorksStepCol
          stepNum={4}
          showConnector={false}
        />
        <HowWorksItemCol>
          <h4>Maintain & Scale with Plural Console</h4>
          <BasicUl>
            <li>
              Console automatically deploys app updates making maintenance a
              breeze.
            </li>
            <li>
              Centralized monitoring and logs for each app reduces
              troubleshooting time and accelerates product cycles.
            </li>
            <li>
              Run scaling jobs through low-code runbooks in our console so you
              can scale as usage grows.
            </li>
          </BasicUl>
        </HowWorksItemCol>
        <HowWorksImgCol>
          <HowWorksImage
            title="how-plural-works-4"
            width={464}
            height={304}
            src="/animations/how-04/index.html"
          >
            {' '}
            <ConnectorLineV {...{}} /> <ConnectorLineV {...{}} />{' '}
            <ConnectorLineV {...{}} />
          </HowWorksImage>
        </HowWorksImgCol>
      </HowWorksSection>
    </HowWorks>
  )
}
