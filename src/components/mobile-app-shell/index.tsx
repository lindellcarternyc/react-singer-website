import * as React from 'react'

import { SidebarPushable, SidebarPusher, Segment } from 'semantic-ui-react'

import MenuToggle from './menu-toggle'
import Menu from './menu'
import SiteHeader from '../site-header'
import Main from '../main'
import ModalPhotoGallery from '../modal-photo-gallery'

interface MobileAppShellProps {

}
interface MobileAppShellState {
  menuVisible: boolean
}

export class MobileAppShell extends React.Component<MobileAppShellProps, MobileAppShellState> {
  constructor(props: MobileAppShellProps) {
    super(props)

    this.state = { menuVisible: false }
  }

  toggleMenu = () => {
    const menuVisible = !this.state.menuVisible
    this.setState({ menuVisible })
  }

  render() {
    const { menuVisible } = this.state
    return (
      <>
        <ModalPhotoGallery />
        <SidebarPushable as={Segment} style={{height: '100vh'}}>
          <Menu visible={menuVisible} onClick={this.toggleMenu} />
          <SidebarPusher>
            <MenuToggle onClick={this.toggleMenu} menuVisible={menuVisible}/>
            <SiteHeader mobile />
            <Main />
          </SidebarPusher>
        </SidebarPushable>
      </>
    )
  }
}

export default MobileAppShell