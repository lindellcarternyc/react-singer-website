import * as React from 'react'

import { Breadcrumb, BreadcrumbDivider } from 'semantic-ui-react'

import AboutNavLink from './about-nav-link'

export const Routes = {
  Resume: '/about/resume',
  Repertoire: '/about/repertoire',
  Bio: '/about'
}
const AboutNavStyle = {
  marginBottom: '1.5rem'
}
export const AboutNav = (): JSX.Element => {
  return (
    <Breadcrumb size="large" style={AboutNavStyle}>
      <AboutNavLink content="Bio" route={Routes.Bio} />
      <BreadcrumbDivider />
      <AboutNavLink content="Resume" route={Routes.Resume} />
      <BreadcrumbDivider />
      <AboutNavLink content="Repertoire" route={Routes.Repertoire}/>
    </Breadcrumb>
  )
}

export default AboutNav