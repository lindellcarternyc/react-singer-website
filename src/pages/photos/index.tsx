import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '../../components/layout'
import PhotoCollectionGrid from '../../components/photo-collection-grid'
import PhotoCollectionsPreviewGrid from './photo-collections-preview-grid'

export const Photos = (): JSX.Element => (
  <Layout>
    <Switch>
      <Route exact path="/photos" component={PhotoCollectionsPreviewGrid} />
      <Route path="/photos/:collectionId" component={PhotoCollectionGrid} />
    </Switch>
  </Layout>
)
export default Photos