import * as React from 'react'
import { Sidebar, Segment } from 'semantic-ui-react'
import Navigation from '../navigation'

interface MenuProps {
  visible: boolean
  onClick: () => void
}

export const Menu = (props: MenuProps): JSX.Element => {
  return (
    <Sidebar 
      inverted
      as={Segment} 
      visible={props.visible}
      onClick={props.onClick}
    >
      <Navigation mobile />
    </Sidebar>
  )
}

export default Menu