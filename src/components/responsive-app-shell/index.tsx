import * as React from 'react'

import { Responsive } from 'semantic-ui-react'

import MobileAppShell from './components/mobile-app-shell'
import AppShell from './components/app-shell'

interface ResponsiveAppShellProps {
  // pageNames: string[]
  currentPage: string
  children?: React.ReactNode
}
import routes from '../../routes'
const PageNames = routes.map(route => route.name)
export const ResponsiveAppShell = (props: ResponsiveAppShellProps): JSX.Element => {
  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <MobileAppShell pageNames={PageNames} {...props} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <AppShell pageNames={PageNames} {...props}/>
      </Responsive>
    </>
  )
}

export default ResponsiveAppShell