import { cn } from '@/utils/cn'

type IconProps = Omit<React.ComponentProps<'svg'>, 'children'> & {
  /** One or more SVG path `d` strings drawn on a 24x24 grid. */
  path: string
  size?: number
}

/** Line icon in the site's 1.5px stroke style. Decorative by default. */
export function Icon({
  path,
  size = 20,
  strokeWidth = 1.5,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn('shrink-0', className)}
      {...props}
    >
      <path d={path} />
    </svg>
  )
}
