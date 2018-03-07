import * as React from 'react'

import { Header, HeaderSubheader, Container } from 'semantic-ui-react'

const HeaderBaseStyles = {
  fontSize: '4rem',
  marginTop: '1rem',
  textAlign: 'center'
}
const SubHeaderStyles = {
  fontSize: '2rem'
}

export const SiteHeaderText = (props: { mobile?: true }): JSX.Element => {
  const HeaderStyles = props.mobile ? {...HeaderBaseStyles, fontSize: '3rem' } : HeaderBaseStyles
  return (
    <Container fluid>
      <Header style={HeaderStyles}>
        LindellCarter
        <HeaderSubheader style={SubHeaderStyles} content="American Tenor" />
      </Header>
    </Container>
  )
}

export default SiteHeaderText