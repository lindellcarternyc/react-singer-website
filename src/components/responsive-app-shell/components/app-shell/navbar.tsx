import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Segment, Menu } from 'semantic-ui-react'
import Navigation from '../../../navigation'

type Widths = 1 | 2 | 3 | 4 | 5 | 6 | 7
const getWidths = (numPages: number): Widths | undefined => {
  switch ( numPages ) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
    case 6: 
    case 7: 
      return numPages
    default: return undefined
  }
}
import routes from '../../../../routes'
const Navbar = (props: RouteComponentProps<{}>): JSX.Element => {
  // const active = props.location.pathname === 
  return (
    <Segment inverted basic textAlign="center">
      <Menu secondary pointing inverted widths={getWidths(routes.length)}>
        <Navigation />
      </Menu>
    </Segment>
  )
}

export default withRouter(Navbar)