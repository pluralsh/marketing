import { cn } from '@/utils/cn'

type CodeWindowProps = React.PropsWithChildren<{
  /** Text in the title bar. */
  title?: React.ReactNode
  /** Right-aligned status in the title bar. */
  status?: React.ReactNode
  /** Footer strip under the content. */
  footer?: React.ReactNode
  /** Show macOS-style window dots. */
  dots?: boolean
  className?: string
}>

/** Dark, monospace product-UI frame. Always dark, whatever the page theme. */
export function CodeWindow({
  title,
  status,
  footer,
  dots,
  className,
  children,
}: CodeWindowProps) {
  return (
    <div
      className={cn(
        'bg-code text-code-text border-code-line shadow-window overflow-hidden rounded-xl border font-mono text-[12.5px] leading-[1.55]',
        className
      )}
    >
      {(title || status || dots) && (
        <div className="border-code-line bg-code-panel flex flex-wrap items-center justify-between gap-3 border-b px-4 py-2.5">
          {dots && (
            <div
              aria-hidden="true"
              className="flex gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-2.5 rounded-full bg-[#454954]"
                />
              ))}
            </div>
          )}
          {title && <span className="text-code-dim">{title}</span>}
          {status && <span className="text-syntax-green">{status}</span>}
        </div>
      )}
      {children}
      {footer && (
        <div className="border-code-line bg-code-panel text-code-muted flex flex-wrap gap-5 border-t px-4 py-2 text-[11px]">
          {footer}
        </div>
      )}
    </div>
  )
}

/** YAML body for use inside a CodeWindow, with keys and comments tinted. */
export function Yaml({ source }: { source: string }) {
  return (
    <div className="overflow-x-auto px-4 py-3 whitespace-pre">
      {source.split('\n').map((line, i) => {
        const comment = line.indexOf(' #')
        const code = comment === -1 ? line : line.slice(0, comment)
        const match = code.match(/^(\s*(?:- )?)([\w.-]+)(:)(.*)$/)

        return (
          <div key={i}>
            {match ? (
              <>
                {match[1]}
                <span className="text-syntax-violet">{match[2]}</span>
                <span className="text-code-muted">{match[3]}</span>
                <span className="text-syntax-amber">{match[4]}</span>
              </>
            ) : (
              code || ' '
            )}
            {comment !== -1 && (
              <span className="text-code-muted">{line.slice(comment)}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

type DiffLine = { n: number; text: string; kind?: 'add' | 'remove' }

/** Minimal unified diff body for use inside a CodeWindow. */
export function Diff({ lines }: { lines: DiffLine[] }) {
  return (
    <div className="overflow-x-auto py-3 whitespace-pre">
      {lines.map((line, i) => (
        <div
          key={i}
          className={cn(
            'px-4',
            !line.kind && 'text-code-muted',
            line.kind === 'remove' && 'bg-syntax-pink/12 text-syntax-pink',
            line.kind === 'add' && 'bg-syntax-green/12 text-syntax-green'
          )}
        >
          {line.n}{' '}
          {line.kind === 'add' ? '+' : line.kind === 'remove' ? '-' : ' '}
          {line.text}
        </div>
      ))}
    </div>
  )
}
