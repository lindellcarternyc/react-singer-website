import * as React from 'react'

import { Responsive } from 'semantic-ui-react'

import MobileAppShell from './components/mobile-app-shell'
import DesktopAppShell from './components/desktop-app-shell'

class App extends React.Component {
  render() {
    return (
      <>
        <Responsive {...Responsive.onlyMobile}>
          <MobileAppShell />
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <DesktopAppShell />
        </Responsive>
      </>
    )
  }
}

export default App
