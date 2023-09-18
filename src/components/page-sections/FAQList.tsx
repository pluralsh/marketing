import { type FaqItemFragment } from '@src/generated/graphqlDirectus'

import BasicMarkdown from '../BasicMarkdown'
import { FAQItem } from '../Typography'

export function FAQList({ faqs }: { faqs: (FaqItemFragment | null)[] }) {
  if (!faqs) {
    return null
  }

  return (
    <div className="flex flex-col gap-large">
      {faqs.map((faq) =>
        faq ? (
          <FAQItem
            key={faq.id}
            label={faq.label}
          >
            <BasicMarkdown text={faq.content} />
          </FAQItem>
        ) : null
      )}
    </div>
  )
}
