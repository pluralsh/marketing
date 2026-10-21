import { SiteShell } from '@/components/layout/SiteShell'

export default function DarkLayout({ children }: React.PropsWithChildren) {
  return <SiteShell theme="dark">{children}</SiteShell>
}
