import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Sidebar, Segment } from 'semantic-ui-react'
import Navigation from '../../navigation'

export interface MobileMenuProps extends RouteComponentProps<{}> {
  open: boolean
  onClick: () => void
}

export const MobileMenu = (props: MobileMenuProps): JSX.Element => {
  return (
    <Sidebar as={Segment} visible={props.open} inverted onClick={props.onClick}>
      <Navigation mobile />
    </Sidebar>
  )
}

export default withRouter(MobileMenu)