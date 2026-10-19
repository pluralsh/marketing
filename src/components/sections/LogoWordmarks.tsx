import { type CustomerLogo, customerLogos } from '@/content/site'
import { cn } from '@/utils/cn'

type LogoWordmarksProps = {
  label?: string
  logos?: CustomerLogo[]
  className?: string
}

const BASE_FONT_SIZE = 22

/** Customer logos tinted to the muted text color; sizes scale with font size. */
export function LogoWordmarks({
  label = 'Trusted by the enterprise',
  logos = customerLogos,
  className,
}: LogoWordmarksProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <p className="text-label m-0">{label}</p>
      <ul className="text-muted m-0 flex list-none flex-wrap items-center gap-x-12 gap-y-4 p-0 text-[22px]">
        {logos.map(({ name, src, width, height }) => (
          <li
            key={name}
            role="img"
            aria-label={name}
            className="bg-current"
            style={{
              width: `${width / BASE_FONT_SIZE}em`,
              height: `${height / BASE_FONT_SIZE}em`,
              mask: `url(${src}) center / contain no-repeat`,
              WebkitMask: `url(${src}) center / contain no-repeat`,
            }}
          />
        ))}
      </ul>
    </div>
  )
}
