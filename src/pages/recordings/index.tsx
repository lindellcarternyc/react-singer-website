import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from '../shared/layout'
import RecordingsNav, { VideosRoute, AudioRoute } from './recordings-nav'
import Videos from './videos'
import Audio from './audio'

interface RecordingsProps { }
export const Recordings = (props: RecordingsProps) => {
  return (
    <Layout title="Recordings">
      <RecordingsNav />
      <Switch>
        <Route exact path={VideosRoute} component={Videos} />
        <Route exact path={AudioRoute} component={Audio} />
      </Switch>
    </Layout>
  )
}

export default Recordings