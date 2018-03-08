import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import NavigationItem from './components/navigation-item'
import routes, { RouteProps } from '../../routes'

const makeItems = (routeProps: RouteProps[], pathname: string): JSX.Element[] => {
  return routeProps.map(route => {
    const { name, path } = route
    const active = path === pathname
    return <NavigationItem key={name} name={name} path={path} active={active} />
  })
}

export const Navigation = (props: RouteComponentProps<{}>): JSX.Element => (
  <>
    {makeItems(routes, props.location.pathname)}
  </>
)

export default withRouter(Navigation)