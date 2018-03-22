import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Menu, Segment } from 'semantic-ui-react'
import NavigationItems from './navigation-items'
import routes from '../../routes'

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
export interface NavigationProps extends RouteComponentProps<{}> {
  mobile?: boolean
}
export const Navigation = (props: NavigationProps): JSX.Element => {
  const itemProps = routes.map(route => {
    return { 
      name: route.name,
      path: route.path,
      active: route.path === props.location.pathname
    }
  })
  const items = <NavigationItems items={itemProps} />
  if (props.mobile) {
    return (
      <Menu inverted vertical secondary fluid>
        {items}
      </Menu>
    )
  } else {
    return (
      <Segment inverted basic textAlign="center">
        <Menu secondary pointing inverted widths={getWidths(routes.length)}>
          {items}
        </Menu>
      </Segment>
    )
  }
}

export default withRouter(Navigation)