import * as React from 'react'

import { Segment, Button, Sidebar, } from 'semantic-ui-react'
import SiteHeaderText from '../site-header-text'
import MobileMenu from './mobile-menu'
import Main from '../../../main'

const MenuToggle = (props: { onClick: () => void }): JSX.Element => {
  return (
    <Segment basic inverted textAlign="center">
      <Button 
        basic 
        inverted 
        content="Menu"
        onClick={props.onClick}
      />
    </Segment>
  )
}

interface MobileAppShellProps {
  // children?: 
}
interface MobileAppShellState {
  menuOpen: boolean
}
export class MobileAppShell extends React.Component<MobileAppShellProps, MobileAppShellState> {
  constructor(props: MobileAppShellProps) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  toggleMenu = () => {
    const menuOpen = !this.state.menuOpen
    this.setState({menuOpen})
  }
  render() {
    const { menuOpen } = this.state
    return (
      <>
        <Sidebar.Pushable as={Segment} style={{height: '100vh'}}>
          <MobileMenu 
            open={menuOpen}
            onClick={this.toggleMenu}
          />
          <Sidebar.Pusher>
            <MenuToggle onClick={this.toggleMenu} />
            <SiteHeaderText mobile />
            <Main />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    )
  }
}

export default MobileAppShell