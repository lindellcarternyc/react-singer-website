import * as React from 'react'

import { Sidebar, Segment, Menu, MenuItem } from 'semantic-ui-react'

interface MobileMenuItemProps {
  name: string
  active: boolean
}
const MobileMenuItem = (props: MobileMenuItemProps): JSX.Element => (
  <MenuItem name={props.name} active={props.active} />
)

interface MobileMenuItemsProps {
  pageNames: string[]
  activePageName: string
}
const MobileMenuItems = (props: MobileMenuItemsProps): JSX.Element => {
  const { pageNames, activePageName } = props
  return (
    <>
    {pageNames.map(name => {
      return (
        <MobileMenuItem key={name} name={name} active={name === activePageName} />
      )
    })}
    </>
  )
}

export interface MobileMenuProps {
  open: boolean
  pageNames: string[]
  onClick: () => void
}
export const MobileMenu = (props: MobileMenuProps): JSX.Element => {
  return (
    <Sidebar as={Segment} visible={props.open} inverted onClick={() => { props.onClick() }}>
      <Menu inverted vertical secondary fluid>
        <MobileMenuItems pageNames={props.pageNames} activePageName="home"/>
      </Menu>
    </Sidebar>
  )
}

export default MobileMenu