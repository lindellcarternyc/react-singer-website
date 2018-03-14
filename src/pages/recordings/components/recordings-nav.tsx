import * as React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

import { Breadcrumb, BreadcrumbSection, BreadcrumbDivider } from 'semantic-ui-react'

export const VideosRoute = '/recordings/videos'
export const AudioRoute = '/recordings/audio'

export const RecordingsNav = (props: RouteComponentProps<{}>): JSX.Element => {
  return (
    <Breadcrumb>
      <Link to={VideosRoute}>
        <BreadcrumbSection 
          content="Videos" 
          active={props.location.pathname === VideosRoute}
        />
      </Link>
      <BreadcrumbDivider />
      <Link to={AudioRoute}>
        <BreadcrumbSection 
          content="Audio"
          active={props.location.pathname === AudioRoute}
        />
      </Link>
    </Breadcrumb>
  )
}

export default withRouter(RecordingsNav)