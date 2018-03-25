import * as React from 'react'
import './photo-gallery-modal.styles.css'

import GalleryButton from './gallery-button'
import GalleryImage from './gallery-image'

interface PhotoGalleryModalProps {
  isOpen: boolean
  close: () => void
  photos: string[]
  startIndex: number
}

interface PhotoGalleryModalState {
  photoIndex: number
}

class PhotoGalleryModal extends React.Component<PhotoGalleryModalProps, PhotoGalleryModalState> {
  constructor(props: PhotoGalleryModalProps) {
    super(props)

    this.state = {
      photoIndex: props.startIndex
    }
  }

  componentWillReceiveProps(nextProps: PhotoGalleryModalProps) {
    this.setState({ photoIndex: nextProps.startIndex })
  }

  get className(): string {
    return `photo-gallery-modal ${this.props.isOpen ? 'open' : ''}`
  }

  get currentPhoto(): string {
    return this.props.photos[this.state.photoIndex]
  }

  handleButtonClick = (action: 'previous' | 'next') => {
    let { photoIndex } = this.state
    const { photos } = this.props

    if (photos.length > 0) {
      if (action === 'previous') {
        photoIndex--
        if (photoIndex < 0) {
          photoIndex = photos.length - 1
        }
      } else if (action === 'next') {
        photoIndex++
        if (photoIndex >= photos.length) {
          photoIndex = 0
        }
      }
    }

    this.setState({ photoIndex })
  }

  render() {
    return (
      <div className={this.className} onClick={this.props.close}>
        <div className="photo-gallery-content">
          <GalleryButton action="previous" handler={this.handleButtonClick} />
          <GalleryImage src={this.currentPhoto} />
          <GalleryButton action="next" handler={this.handleButtonClick} />
        </div>
      </div>
    )
  }
}

export default PhotoGalleryModal