import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import  { Header } from 'semantic-ui-react'
import Layout from '../components/layout'

import RecordingsNav, { VideosRoute, AudioRoute } from './components/recordings-nav'
import Videos from './components/videos'
import Audio from './components/audio'

interface RecordingsProps { }
export const Recordings = (props: RecordingsProps) => {
  return (
    <Layout>
      <Header as="h3" content="Recordings" />
      <RecordingsNav />
      <Switch>
        <Route exact path={VideosRoute} component={Videos} />
        <Route exact path={AudioRoute} component={Audio} />
      </Switch>
    </Layout>
  )
}

export default Recordings