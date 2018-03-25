import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { StoreState, closeGallery } from '../../store'

import PhotoGalleryModal from './photo-gallery-modal'
import { PhotoCollection } from '../../constants'

interface PhotoCollectionGalleryProps {
  open: boolean
  closeGallery: () => void
  photoCollection: PhotoCollection | null
  startIndex: number | null
}
const PhotoCollectionGallery = (props: PhotoCollectionGalleryProps): JSX.Element => {
  const startIndex = props.startIndex || 0
  const photos = props.photoCollection !== null 
    ? props.photoCollection.photos
    : []
  return (
    <PhotoGalleryModal 
      isOpen={props.open} 
      close={props.closeGallery}
      photos={photos}
      startIndex={startIndex}
    />
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    open: state.photoGalleryOpen,
    photoCollection: state.photoCollection,
    startIndex: state.photoIndex
  }
}
const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    closeGallery: () => { dispatch(closeGallery()) }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoCollectionGallery)