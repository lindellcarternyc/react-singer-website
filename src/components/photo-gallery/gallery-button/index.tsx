import * as React from 'react'

import { Icon } from 'semantic-ui-react'

import './gallery-button.styles.css'

interface GalleryButtonProps {
  action: 'previous' | 'next'
  handler: (action: 'previous' | 'next') => void
}
const GalleryButton = (props: GalleryButtonProps): JSX.Element => {
  const iconName = props.action === 'previous' 
    ? 'chevron left'
    : 'chevron right'
  return (
    <button 
      className={`gallery-button ${props.action}`}
      onClick={
        (evt: React.SyntheticEvent<HTMLButtonElement>) => {
          evt.preventDefault()
          evt.stopPropagation()
          props.handler(props.action)
        }
      }
    >
      <Icon name={iconName} />
    </button>
  )
}

export default GalleryButton