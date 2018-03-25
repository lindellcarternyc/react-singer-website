import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import PhotoCollectionGridComponent from './photo-collection-grid-component'
import { PhotoCollection } from '../../constants'
import { getPhotoCollectionById } from '../../database'
interface RouteProps {
  collectionId: string
}

interface PhotoCollectionGridContainerProps extends RouteComponentProps<RouteProps> {
  selectPhoto: (photoCollection: PhotoCollection, photoIndex: number) => void
}
const PhotoCollectionGridContainer = (props: PhotoCollectionGridContainerProps): JSX.Element => {
  const collectionId = props.match.params.collectionId
  const collection = getPhotoCollectionById(collectionId)
  return <PhotoCollectionGridComponent photoCollection={collection} select={props.selectPhoto} />
}

export default PhotoCollectionGridContainer