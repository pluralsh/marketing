import { cn } from '@/utils/cn'

type ComparisonTableProps = {
  caption?: string
  rowLabel?: string
  columns: { label: string; emphasized?: boolean }[]
  rows: { label?: string; values: React.ReactNode[] }[]
}

export function ComparisonTable({
  caption,
  rowLabel,
  columns,
  rows,
}: ComparisonTableProps) {
  const hasRowLabels = rows.some((row) => row.label)

  return (
    <div className="border-line bg-surface overflow-x-auto rounded-xl border">
      <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-line border-b">
            {hasRowLabels && (
              <th
                scope="col"
                className="text-label px-5 py-4 font-normal"
              >
                {rowLabel}
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.label}
                scope="col"
                className={cn(
                  'px-5 py-4 font-medium',
                  column.emphasized && 'text-accent-ink'
                )}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-line border-b last:border-b-0"
            >
              {hasRowLabels && (
                <th
                  scope="row"
                  className="text-ink px-5 py-4 font-medium"
                >
                  {row.label}
                </th>
              )}
              {row.values.map((value, j) => (
                <td
                  key={j}
                  className={cn(
                    'text-body px-5 py-4',
                    columns[j]?.emphasized && 'text-ink'
                  )}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
