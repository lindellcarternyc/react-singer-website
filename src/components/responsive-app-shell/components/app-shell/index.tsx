import * as React from 'react'

import SiteHeaderText from '../site-header-text'
import Navbar from './navbar'

export const AppShell = (props: { pageNames: string[]}): JSX.Element => {
  return(
    <React.Fragment>
      <SiteHeaderText />
      <Navbar pageNames={props.pageNames} currentPage="home" />
    </React.Fragment>
  )
}

export default AppShell