import * as React from 'react'

import { Segment, Button } from 'semantic-ui-react'

interface MenuToggleProps {
  onClick: () => void
}
export const MenuToggle = (props: MenuToggleProps): JSX.Element => {
  return (
    <Segment basic inverted>
      <Button 
        basic
        inverted
        content="Menu"
        onClick={props.onClick}
      />
    </Segment>
  )
}

export default MenuToggle