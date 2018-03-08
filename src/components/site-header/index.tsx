import * as React from 'react'

import { Container, Header, HeaderSubheader } from 'semantic-ui-react'

export const SiteHeader = (props: { mobile?: boolean }): JSX.Element => {
  return (
    <Container fluid>
      <Header 
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          fontSize: props.mobile ? '3rem' : '4rem'
        }}
      >
        Lindell Carter
        <HeaderSubheader 
          style={{fontSize: props.mobile ? '1.75rem' : '2rem'}}
          content="American Tenor"
        />
      </Header>
    </Container>
  )
}

export default SiteHeader