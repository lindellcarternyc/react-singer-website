import * as React from 'react'

import { Header } from 'semantic-ui-react'
import Layout from '../components/layout'
import PhotoGrid from './components/photo-grid'

export const Photos = (): JSX.Element => (
  <Layout>
    <Header as="h3" content="Photos" />
    <PhotoGrid />
  </Layout>
)

export default Photos