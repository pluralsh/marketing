import { SmartLink } from '@/components/ui/SmartLink'
import { announcement } from '@/content/site'

export function AnnouncementBar() {
  return (
    <SmartLink
      href={announcement.href}
      className="bg-code hover:text-syntax-violet block px-5 py-2.5 text-center font-mono text-xs text-white no-underline sm:text-[13px]"
    >
      <span className="text-syntax-violet">{announcement.label}</span>{' '}
      {announcement.text} <span aria-hidden="true">→</span>
    </SmartLink>
  )
}
