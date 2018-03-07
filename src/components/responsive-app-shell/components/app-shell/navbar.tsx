import * as React from 'react'

import { Segment, Menu, MenuItem } from 'semantic-ui-react'

const NavbarItem = (props: { pageName: string, active: boolean } ): JSX.Element => {
  return (
    <MenuItem as="a" name={props.pageName} active={props.active} />
  )
}

type Widths = 1 | 2 | 3 | 4 | 5 | 6 | 7
const getWidths = (numPages: number): Widths | undefined => {
  switch ( numPages ) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
    case 6: 
    case 7: 
      return numPages
    default: return undefined
  }
}
const Navbar = (props: { pageNames: string[], currentPage: string }): JSX.Element => {
  return (
    <Segment inverted basic textAlign="center">
      <Menu secondary pointing inverted widths={getWidths(props.pageNames.length)}>
        {props.pageNames.map(pageName => {
          return (
            <NavbarItem key={pageName} pageName={pageName} active={pageName === props.currentPage} />
          )
        })}
      </Menu>
    </Segment>
  )
}

export default Navbar