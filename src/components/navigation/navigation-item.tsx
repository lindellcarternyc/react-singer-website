import * as React from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from 'semantic-ui-react'

export interface NavigationItemProps {
  name: string
  path: string
  active: boolean
}
export const NavigationItem = (props: NavigationItemProps) => (
  <MenuItem as={Link} to={props.path} name={props.name} active={props.active} />
)

export default NavigationItem