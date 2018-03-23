import * as React from 'react'

import { getPhotoCollections } from '../../database'
const AllCollections = getPhotoCollections()
import PhotoCollections from '../../components/photo-collections'

export const PhotoCollectionsPreviewGrid = (): JSX.Element => {
  return (
    <PhotoCollections collections={AllCollections} />
  )
}

export default PhotoCollectionsPreviewGrid