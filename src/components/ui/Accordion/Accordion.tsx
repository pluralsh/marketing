import type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from '@radix-ui/react-accordion'
import type { Dispatch, ReactNode } from 'react'

import * as RadixAccordion from '@radix-ui/react-accordion'
import * as React from 'react'

import SvgArrowDownAccordion from '@/components/svg/SvgArrowDownAccordion'
import { cn } from '@/utils/cn'

import styles from './styles.module.css'

type AccordionProps = {
  children: ReactNode
  openedItem: string
  setOpenedItem: Dispatch<string>
}

function Accordion({ children, openedItem, setOpenedItem }: AccordionProps) {
  return (
    <RadixAccordion.Root
      className="w-full"
      type="single"
      value={openedItem}
      onValueChange={(value: string) => {
        if (value) {
          setOpenedItem(value)
        }
      }}
    >
      {children}
    </RadixAccordion.Root>
  )
}

function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <RadixAccordion.Item
      className={cn(
        'overflow-hidden rounded-xl bg-neutral-800 p-5 not-last-of-type:mb-2 lg:px-8 lg:pt-7 lg:pb-8',
        className
      )}
      {...props}
    >
      {children}
    </RadixAccordion.Item>
  )
}
AccordionItem.displayName = 'AccordionItem'

function AccordionTrigger({
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className={cn(
          'group flex w-full cursor-pointer items-center justify-between text-left focus:outline-none',
          className
        )}
        {...props}
      >
        <div className="w-[calc(100%-2.5rem)]">{children}</div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
          aria-hidden
        >
          <SvgArrowDownAccordion className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </div>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
}
AccordionTrigger.displayName = 'AccordionTrigger'

function AccordionContent({
  children,
  className,
  ...props
}: AccordionContentProps) {
  return (
    <RadixAccordion.Content
      className={cn('overflow-hidden', styles.accordionContent, className)}
      {...props}
    >
      <div className="mt-8 max-w-[450px]">{children}</div>
    </RadixAccordion.Content>
  )
}
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
