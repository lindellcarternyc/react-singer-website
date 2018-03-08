import * as React from 'react'

import { Responsive } from 'semantic-ui-react'

import MobileAppShell from './components/mobile-app-shell'
import AppShell from './components/app-shell'

interface ResponsiveAppShellProps {
  children?: React.ReactNode
}

export const ResponsiveAppShell = (props: ResponsiveAppShellProps): JSX.Element => {
  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <MobileAppShell {...props} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <AppShell {...props}/>
      </Responsive>
    </>
  )
}

export default ResponsiveAppShell