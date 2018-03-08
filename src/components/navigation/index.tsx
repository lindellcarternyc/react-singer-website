import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import NavigationItem from './components/navigation-item'
import routes from '../../routes'

export const Navigation = (props: RouteComponentProps<{}>): JSX.Element => (
  <>
    {routes.map(route => {
      const { path, name } = route
      const active = path === props.location.pathname
      return <NavigationItem key={name} path={path} name={name} active={active} />
    })}
  </>
)

export default withRouter(Navigation)