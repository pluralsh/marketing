import { type CustomerLogo, customerLogos } from '@/content/site'
import { cn } from '@/utils/cn'

type LogoWordmarksProps = {
  label?: string
  logos?: CustomerLogo[]
  className?: string
}

const BASE_FONT_SIZE = 22
/** Uniform logo height on the mobile marquee (keeps the strip compact). */
const MARQUEE_HEIGHT_EM = 1.1

function LogoMark({
  name,
  src,
  width,
  height,
  uniform,
}: CustomerLogo & { uniform?: boolean }) {
  return (
    <li
      role="img"
      aria-label={name}
      className="bg-current"
      style={{
        width: uniform
          ? `${(width / height) * MARQUEE_HEIGHT_EM}em`
          : `${width / BASE_FONT_SIZE}em`,
        height: uniform
          ? `${MARQUEE_HEIGHT_EM}em`
          : `${height / BASE_FONT_SIZE}em`,
        mask: `url(${src}) center / contain no-repeat`,
        WebkitMask: `url(${src}) center / contain no-repeat`,
      }}
    />
  )
}

/** Customer logos tinted to the muted text color; sizes scale with font size. */
export function LogoWordmarks({
  label = 'Trusted by the enterprise',
  logos = customerLogos,
  className,
}: LogoWordmarksProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <p className="text-label m-0">{label}</p>

      {/* Mobile: single-row auto-scrolling marquee at a uniform height. */}
      <div
        className={cn(
          'text-muted -mx-gutter relative overflow-hidden motion-reduce:hidden md:hidden',
          '[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]'
        )}
      >
        {/* Trailing padding equals the gap so -50% lands exactly on the second copy. */}
        <ul
          aria-hidden="true"
          className="m-0 flex w-max animate-[logo-marquee_28s_linear_infinite] list-none items-center gap-x-10 py-0 pr-10 pl-0 text-[18px]"
        >
          {[...logos, ...logos].map((logo, i) => (
            <LogoMark
              key={`${logo.name}-${i}`}
              {...logo}
              uniform
            />
          ))}
        </ul>
        <ul className="sr-only">
          {logos.map((logo) => (
            <li key={logo.name}>{logo.name}</li>
          ))}
        </ul>
      </div>

      {/* Desktop (and reduced motion): wrapped row, original per-logo sizes. */}
      <ul className="text-muted m-0 hidden list-none flex-wrap items-center gap-x-12 gap-y-4 p-0 text-[22px] motion-reduce:flex md:flex">
        {logos.map((logo) => (
          <LogoMark
            key={logo.name}
            {...logo}
          />
        ))}
      </ul>
    </div>
  )
}
