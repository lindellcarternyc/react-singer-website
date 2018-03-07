import * as React from 'react'

import { Container } from 'semantic-ui-react'

const LayoutStyles = {
  marginTop: '1rem'
}
export const Layout = (props: { children?: React.ReactNode }): JSX.Element => {
  return (
    <Container style={LayoutStyles}>
      {props.children}
    </Container>
  )
}

export default Layout