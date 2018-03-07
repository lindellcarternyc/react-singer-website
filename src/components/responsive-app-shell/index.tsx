import * as React from 'react'

import { Responsive } from 'semantic-ui-react'

import MobileAppShell from './components/mobile-app-shell'
import AppShell from './components/app-shell'

interface ResponsiveAppShellProps {
  pageNames: string[]
  children?: React.ReactNode
}
export const ResponsiveAppShell = (props: ResponsiveAppShellProps): JSX.Element => {
  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <MobileAppShell pageNames={props.pageNames} children={props.children}/>
      </Responsive>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <AppShell pageNames={props.pageNames} children={props.children}/>
      </Responsive>
    </>
  )
}

export default ResponsiveAppShell