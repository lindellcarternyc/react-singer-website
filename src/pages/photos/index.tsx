import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '../components/layout'
import PhotoCollectionsPreviewGrid from './components/photo-collections-preview-grid'
import PhotoCollectionView from './components/photo-collection'

export const Photos = (): JSX.Element => (
  <Layout>
    <Switch>
      <Route exact path="/photos" component={PhotoCollectionsPreviewGrid} />
      <Route path="/photos/:collectionId" component={PhotoCollectionView} />
    </Switch>
  </Layout>
)

export default Photos