import * as React from 'react'

import SiteHeaderText from '../site-header-text'
import Navbar from './navbar'

interface AppShellProps {
  pageNames: string[]
  currentPage: string
  children?: React.ReactNode
}
export const AppShell = (props: AppShellProps): JSX.Element => {
  return(
    <React.Fragment>
      <SiteHeaderText />
      <Navbar />
      {props.children}
    </React.Fragment>
  )
}

export default AppShell