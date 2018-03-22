import * as React from 'react'

import { Segment, Button } from 'semantic-ui-react'

interface MenuToggleProps {
  onClick: () => void
  menuVisible: boolean
}
export const MenuToggle = (props: MenuToggleProps): JSX.Element => {
  return (
    <Segment basic inverted>
      <Button 
        basic
        inverted
        icon={props.menuVisible ? 'close' : 'bars'}
        onClick={props.onClick}
      />
    </Segment>
  )
}

export default MenuToggle