import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import Layout from '../../components/layout'

import AboutNav, { ROUTES } from './about-nav'
import Bio from './bio'
import Repertoire from './repertoire'
import Resume from './resume'

export const About = (): JSX.Element => {
  return (
    <Layout title="About Lindell">
    <AboutNav />
    <Switch>
      <Route exact path={ROUTES.RESUME} component={Resume} />
      <Route exact path={ROUTES.REPERTOIRE} component={Repertoire} />
      <Route path={ROUTES.BIO} component={Bio} />
    </Switch>
    </Layout>
  )
}

export default About