import * as React from 'react'

import './gallery-image.styles.css'

const GalleryImage = (props: { src: string }): JSX.Element => {
  return (
    <img className="gallery-image" src={props.src}/>
  )
}

export default GalleryImage