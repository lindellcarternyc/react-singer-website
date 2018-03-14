import * as React from 'react'

import { Container } from 'semantic-ui-react'
import LayoutTitle, { LayoutTitleProps } from './layout-title'
const LayoutStyles = {
  marginTop: '1rem'
}

interface LayoutProps {
  title?: LayoutTitleProps
  children?: React.ReactNode
}
export const Layout = (props: LayoutProps): JSX.Element => (
  <Container style={LayoutStyles}>
    {props.title !== undefined && 
      <LayoutTitle {...props.title} />  
    }
    {props.children}
  </Container>
)

export default Layout