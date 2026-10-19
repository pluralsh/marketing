import { customerWordmarks } from '@/content/site'
import { cn } from '@/utils/cn'

type LogoWordmarksProps = {
  label?: string
  names?: string[]
  className?: string
}

/** Customer names set as quiet wordmarks. */
export function LogoWordmarks({
  label = 'Trusted by the enterprise',
  names = customerWordmarks,
  className,
}: LogoWordmarksProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <p className="text-label m-0">{label}</p>
      <ul className="text-muted m-0 flex list-none flex-wrap items-center gap-x-12 gap-y-4 p-0 text-[22px] font-medium tracking-[-0.01em]">
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
