import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from '../shared/layout'
import RecordingsNav, { VideosRoute, AudioRoute } from './components/recordings-nav'
import Videos from './components/videos'
import Audio from './components/audio'

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