import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import PhotoCollectionGridComponent from './photo-collection-grid-component'
import { getPhotoCollectionById } from '../../database'
interface RouteProps {
  collectionId: string
}

const PhotoCollectionGridContainer = (props: RouteComponentProps<RouteProps>): JSX.Element => {
  const collectionId = props.match.params.collectionId
  const collection = getPhotoCollectionById(collectionId)
  return <PhotoCollectionGridComponent photoCollection={collection} />
}

export default PhotoCollectionGridContainer