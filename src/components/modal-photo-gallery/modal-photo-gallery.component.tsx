import * as React from 'react'

import Modal, { ModalProps } from '../modal'
import PhotoGallery, { PhotoGalleryProps } from '../photo-gallery'

export type ModalPhotoGalleryProps = ModalProps & PhotoGalleryProps
const ModalPhotoGalleryComponent = (props: ModalPhotoGalleryProps): JSX.Element => {
  const { isOpen, close, photos, startIndex } = props
  return (
    <Modal isOpen={isOpen} close={close}>
      <PhotoGallery photos={photos} startIndex={startIndex}/>
    </Modal>
  )
}

export default ModalPhotoGalleryComponent