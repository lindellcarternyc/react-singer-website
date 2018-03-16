import * as React from 'react'

import { Breadcrumb, BreadcrumbDivider } from 'semantic-ui-react'

import AboutNavLink from './about-nav-link'

export const ROUTES = {
  BIO: '/about',
  RESUME: '/about/resume',
  REPERTOIRE: '/about/repertoire'
}

const AboutNavStyle = {
  marginBottom: '1.5rem'
}
export const AboutNav = (): JSX.Element => {
  return (
    <Breadcrumb size="large" style={AboutNavStyle}>
      <AboutNavLink content="Bio" route={ROUTES.BIO} />
      <BreadcrumbDivider />
      <AboutNavLink content="Resume" route={ROUTES.RESUME} />
      <BreadcrumbDivider />
      <AboutNavLink content="Repertoire" route={ROUTES.REPERTOIRE}/>
    </Breadcrumb>
  )
}

export default AboutNav