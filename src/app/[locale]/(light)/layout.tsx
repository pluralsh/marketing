import { SiteShell } from '@/components/layout/SiteShell'

export default function LightLayout({ children }: React.PropsWithChildren) {
  return <SiteShell theme="light">{children}</SiteShell>
}
