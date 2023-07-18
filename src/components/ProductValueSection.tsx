/* Replaced by HowPluralWorksMiniSection */
import { Checklist, ChecklistItem } from '@src/components/Checklist'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { Body2, Cta, Title2 } from '@src/components/Typography'

export function ProductValueSection({
  name,
  isStack,
}: {
  name: string
  isStack: boolean
}) {
  const fullName = isStack ? `the ${name} Stack` : name

  return (
    <StandardPageWidth>
      <div>
        <Columns className="gap-y-xxxlarge">
          <EqualColumn>
            <TextLimiter className="flex flex-col gap-large">
              <Title2>Open-source and free to use</Title2>
              <Body2>
                Plural automates the deployment and operation of {fullName} in
                your cloud. Get up and running with your {fullName} instance in
                minutes and let Plural deploy {fullName} and all its
                dependencies into your cloud with all of the day-2 operations
                handled out of the box.
              </Body2>
              <Cta href="https://www.plural.sh/demo-login">
                Explore {fullName} on Plural in live demo environment
              </Cta>
            </TextLimiter>
          </EqualColumn>
          <EqualColumn className="flex flex-col gap-large">
            <Checklist>
              <ChecklistItem>Automated upgrades</ChecklistItem>
              <ChecklistItem>
                Transparent pricing and cost management
              </ChecklistItem>
              <ChecklistItem>Prebuilt dashboards, extendable </ChecklistItem>
              <ChecklistItem>Prebuilt runbooks, extendable </ChecklistItem>
              <ChecklistItem>Log management </ChecklistItem>
            </Checklist>
          </EqualColumn>
        </Columns>
        <div className="pt-xxxlarge mx-[-5.6%] my-[-2%]">
          <img
            src="/images/application/product-value@2x.png"
            alt="Screenshots of the Plural Console app, showing dashboards for Applications, Nodes and cost"
          />
        </div>
      </div>
    </StandardPageWidth>
  )
}
