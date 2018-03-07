import * as React from 'react'

import { Container, Image } from 'semantic-ui-react'
const image = require('../../assets/lindell_picture.jpg')

export const Home = (): JSX.Element => {
  return (
    <Container style={{marginTop: '1rem'}}>
      <Image src={image} centered size="massive"/>
    </Container>
  )
}

export default Home