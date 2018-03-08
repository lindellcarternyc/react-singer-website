import * as React from 'react'

import NavigationItem, { NavigationItemProps } from './navigation-item'

export interface NavigationItemsProps {
  items: NavigationItemProps[]
}
export const NavigationItems = (props: NavigationItemsProps): JSX.Element => {
  return (
    <>
      {props.items.map(item => {
        const { name, path, active } = item
        return <NavigationItem key={name} name={name} path={path} active={active} />
      })}
    </>
  )
}
export default NavigationItems