import * as React from 'react'

import SiteHeaderText from '../site-header-text'
import Navbar from './navbar'
import Main from '../../../main'

interface AppShellProps {
  children?: React.ReactNode
}
export const AppShell = (props: AppShellProps): JSX.Element => {
  return(
    <React.Fragment>
      <SiteHeaderText />
      <Navbar />
      <Main />
    </React.Fragment>
  )
}

export default AppShell