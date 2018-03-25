import { connect, Dispatch } from 'react-redux'
import { StoreState, closeGallery } from '../../store'

import ModalPhotoGallery  from './modal-photo-gallery.component'

const mapStateToProps = (state: StoreState): { 
  isOpen: boolean
  photos: string[]
  startIndex: number
} => {
  const photos = state.photoCollection !== null 
    ? state.photoCollection.photos
    : []
  return {
    isOpen: state.photoGalleryOpen,
    photos,
    startIndex: state.photoIndex || 0
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>): {
  close: () => void
} => {
  return {
    close: () => { dispatch(closeGallery())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPhotoGallery)