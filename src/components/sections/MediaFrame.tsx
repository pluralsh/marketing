import Image from 'next/image'

import type { Image as ImageContent } from '@/content/types'

import { cn } from '@/utils/cn'

/**
 * Frames a product screenshot. Migrated screenshots were designed for a dark
 * background, so they sit on the code surface in every theme.
 */
export function MediaFrame({
  image,
  className,
}: {
  image: ImageContent
  className?: string
}) {
  return (
    <div
      className={cn(
        'bg-code border-code-line overflow-hidden rounded-xl border p-[clamp(12px,2vw,24px)]',
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt ?? ''}
        width={image.width ?? 1200}
        height={image.height ?? 800}
        sizes="(min-width: 768px) 560px, 100vw"
        className="h-auto w-full"
        unoptimized={image.src.endsWith('.svg')}
      />
    </div>
  )
}

/** Placeholder for photography the design calls for but we don't have yet. */
export function PhotoPlaceholder({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'border-line bg-surface-muted flex items-end rounded-xl border bg-[repeating-linear-gradient(135deg,transparent_0_12px,var(--line)_12px_13px)] p-4',
        className
      )}
    >
      <span className="text-label bg-surface rounded px-2 py-1">{label}</span>
    </div>
  )
}
