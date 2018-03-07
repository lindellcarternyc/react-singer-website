import * as React from 'react'

import { Responsive } from 'semantic-ui-react'

import MobileAppShell from './components/mobile-app-shell'
import AppShell from './components/app-shell'

export const ResponsiveAppShell = (props: {pageNames: string[]}): JSX.Element => {
  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <MobileAppShell pageNames={props.pageNames} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
        <AppShell pageNames={props.pageNames} />
      </Responsive>
    </>
  )
}

export default ResponsiveAppShell