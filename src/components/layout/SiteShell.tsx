import { AnnouncementBar } from './AnnouncementBar'
import { Certificates } from './Certificates'
import { Footer } from './Footer'
import { Header } from './Header'

export type Theme = 'light' | 'dark'

type SiteShellProps = React.PropsWithChildren<{ theme?: Theme }>

/**
 * Chrome shared by every page: announcement, header, the railed content
 * column, certificates, and footer. `theme` swaps the palette for the subtree.
 */
export function SiteShell({ theme = 'light', children }: SiteShellProps) {
  return (
    <div
      data-theme={theme}
      className="site-shell"
    >
      <AnnouncementBar />
      <Header theme={theme} />
      <div className="rails">
        <main>{children}</main>
        <Certificates />
        <Footer theme={theme} />
      </div>
    </div>
  )
}
