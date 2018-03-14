import * as React from 'react'

import { Image } from 'semantic-ui-react'
const image = require('../../assets/lindell_picture.jpg')

import Layout from '../shared/layout'

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <Image src={image} centered size="massive"/>
    </Layout>
  )
}

export default Home