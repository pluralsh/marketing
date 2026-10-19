import { Section } from './Section'

type FaqProps = {
  title?: string
  items: { question: string; answer: React.ReactNode }[]
}

export function Faq({ title = 'Questions', items }: FaqProps) {
  return (
    <Section className="grid gap-8 md:grid-cols-[1fr_2fr]">
      <h2 className="text-heading-lg m-0">{title}</h2>
      <div className="border-line border-t">
        {items.map((item, i) => (
          <details
            key={item.question}
            open={i === 0}
            className="group border-line border-b"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="text-muted font-mono transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="text-body pb-5 text-base">{item.answer}</div>
          </details>
        ))}
      </div>
    </Section>
  )
}
