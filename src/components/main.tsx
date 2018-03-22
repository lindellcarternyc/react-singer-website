import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes, { RouteProps } from '../routes'
const makeRoutes = (routeProps: RouteProps[]): JSX.Element[] => {
  return routeProps.map(route => {
    const { name, path, exact, component } = route
    return <Route key={name} path={path} exact={exact} component={component} />
  })
}
export const Main = () => {
  return (
    <Switch>
      {makeRoutes(routes)}
    </Switch>
  )
}

export default Main