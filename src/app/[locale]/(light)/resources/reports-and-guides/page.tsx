import type { Metadata } from 'next'

import Image from 'next/image'

import { AssetLibrary } from '@/components/interactive/AssetLibrary'
import { Accent, Section } from '@/components/sections/Section'
import { button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { assets, featuredGuide as guide } from '@/content/resources'
import { pageMetadata } from '@/utils/metadata'

export const metadata: Metadata = pageMetadata(
  '/resources/reports-and-guides',
  {
    title: 'Reports & guides | Plural',
    description:
      'Guides, reports, and frameworks for platform teams. Free to download, no form to fill.',
  }
)

export default function ReportsAndGuidesPage() {
  return (
    <>
      {/* Compact hero so the featured guide starts above the fold. */}
      <section className="px-gutter flex flex-wrap items-end justify-between gap-x-10 gap-y-3 pt-[clamp(32px,4vw,56px)] pb-[clamp(24px,3vw,36px)]">
        <div className="flex flex-col gap-3">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="text-heading-xl m-0">
            Reports &amp; <Accent>Guides</Accent>
          </h1>
        </div>
        <p className="text-lead m-0 max-w-[460px]">
          Guides, reports, and frameworks for platform teams. Free to download,
          no form to fill.
        </p>
      </section>

      <Section
        aria-label="Featured"
        className="flex flex-wrap items-start gap-[clamp(28px,4vw,56px)] py-[clamp(32px,4vw,48px)]"
      >
        {/* Fixed-height stage: the cover runs off the bottom edge, and the
            panel never resizes when "What's inside" opens. */}
        <div className="relative flex aspect-[5/4] min-w-0 flex-[1_1_360px] justify-center overflow-hidden rounded-sm bg-[#ececef] pt-[8%]">
          {/* Faint engineering grid, fading out toward the edges. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgb(14_16_21/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(14_16_21/0.07)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_50%_40%,black_30%,transparent_75%)] bg-[size:32px_32px]"
          />
          {/* Soft accent glow behind the cover. */}
          <span
            aria-hidden="true"
            className="absolute top-[18%] left-1/2 h-[70%] w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(74_81_242/0.22),transparent)] blur-2xl"
          />
          <div className="relative w-[62%] self-start">
            <span
              aria-hidden="true"
              className="border-line bg-surface absolute inset-[10px_-10px_-10px_10px] rounded-[4px] border"
            />
            <span
              aria-hidden="true"
              className="border-line bg-surface absolute inset-[5px_-5px_-5px_5px] rounded-[4px] border"
            />
            <Image
              src={guide.cover.src}
              alt={guide.cover.alt}
              width={guide.cover.width}
              height={guide.cover.height}
              sizes="(min-width: 768px) 400px, 72vw"
              priority
              className="shadow-window relative block h-auto w-full rounded-[4px]"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-[1.15_1_420px] flex-col gap-[18px]">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <span className="bg-accent-tint text-accent-ink rounded-[3px] px-2 py-[3px]">
              Featured
            </span>
            <span className="text-muted tracking-[0.08em] uppercase">
              {guide.type}
            </span>
          </div>
          <h2 className="text-heading-lg m-0">{guide.title}</h2>
          <p className="m-0 text-[17px] leading-[1.6] text-[rgb(14_16_21/0.78)]">
            {guide.intro[0]}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={guide.href}
              download
              className={button()}
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 4v11 M7 10l5 5 5-5 M5 20h14" />
              </svg>
              {guide.cta}
            </a>
            <span className="text-label">{guide.fileInfo}</span>
          </div>
          <p className="m-0 text-[17px] leading-[1.6] text-[rgb(14_16_21/0.78)]">
            {guide.intro[1]}
          </p>
          <ul className="border-line m-0 list-none border-b p-0">
            {guide.highlights.map((item) => (
              <li
                key={item.title}
                className="border-line flex items-center gap-4 border-t py-3.5"
              >
                <span className="text-accent-ink flex-[0_0_52px] text-center font-serif text-[34px] leading-none tabular-nums">
                  {item.count}
                </span>
                <span>
                  <strong className="font-medium">{item.title}</strong>{' '}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-ink m-0 font-serif text-2xl leading-[1.3]">
            {guide.tagline}
          </p>
          <p className="text-muted m-0 text-sm">
            <span className="font-mono text-xs tracking-[0.06em]">
              WRITTEN FOR
            </span>
            &nbsp; {guide.audience}
          </p>
          <details className="border-line border-t pt-3.5">
            <summary className="cursor-pointer text-[15px] font-medium">
              What&apos;s inside
            </summary>
            <ol className="mt-3 mb-0 flex list-none flex-col gap-2 p-0 text-[15px]">
              {guide.contents.map((chapter, i) => (
                <li
                  key={chapter}
                  className="flex gap-3.5"
                >
                  <span className="text-accent-ink flex-[0_0_22px] pt-[3px] font-mono text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {chapter}
                </li>
              ))}
            </ol>
          </details>
        </div>
      </Section>

      <Section className="flex flex-col gap-7">
        <AssetLibrary assets={assets} />
      </Section>
    </>
  )
}
