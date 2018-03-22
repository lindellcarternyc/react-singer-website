import * as React from 'react'

import SiteHeader from './site-header'
import Navigation from './navigation'
import Main from './main'

export const DesktopAppShell = (): JSX.Element => {
  return (
    <>
      <SiteHeader />
      <Navigation />
      <Main />
    </>
  )
}

export default DesktopAppShell