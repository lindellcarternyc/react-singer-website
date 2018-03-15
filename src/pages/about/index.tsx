import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import Layout from '../shared/layout'
import AboutNav, { Routes } from './about-nav'
import Bio from './bio'
import Repertoire from './repertoire'
import Resume from './resume'

export const About = (): JSX.Element => {
  return (
    <Layout title="About Lindell">
    <AboutNav />
    <Switch>
      <Route path={Routes.Resume} component={Resume} />
      <Route path={Routes.Repertoire} component={Repertoire} />
      <Route exact path={Routes.Bio} component={Bio} />
    </Switch>
    </Layout>
  )
}

export default About