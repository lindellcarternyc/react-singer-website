import * as React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

import { BreadcrumbSection } from 'semantic-ui-react'

interface AboutNavLinkProps extends RouteComponentProps<{}> {
  route: string
  content: string
}
export const AboutNavLink = (props: AboutNavLinkProps): JSX.Element => {
  // const pathname = props.location.pathname
  const { route, content } = props
  const active = route === props.location.pathname
  return (
    <Link to={route}>
      <BreadcrumbSection active={active} content={content} />
    </Link>
  )
}

export default withRouter(AboutNavLink)