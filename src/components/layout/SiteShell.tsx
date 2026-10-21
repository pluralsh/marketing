import { AnnouncementBar } from './AnnouncementBar'
import { Footer } from './Footer'
import { Header } from './Header'

export type Theme = 'light' | 'dark'

type SiteShellProps = React.PropsWithChildren<{ theme?: Theme }>

/**
 * Chrome shared by every page: announcement, header, the railed content
 * column, and footer. `theme` swaps the palette for the subtree.
 * Certificates are opted into per page (home, solutions, industries).
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
        <Footer theme={theme} />
      </div>
    </div>
  )
}
