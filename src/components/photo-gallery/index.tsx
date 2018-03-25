import * as React from 'react'
import './photo-gallery.styles.css'

import GalleryButton from './gallery-button'
import GalleryImage from './gallery-image'

export interface PhotoGalleryProps {
  photos: string[]
  startIndex: number 
}
interface PhotoGalleryState {
  currentIndex: number
}
class PhotoGallery extends React.Component<PhotoGalleryProps, PhotoGalleryState> {
  constructor(props: PhotoGalleryProps) {
    super(props)

    this.state = { currentIndex: this.props.startIndex }
  }

  componentWillReceiveProps(nextProps: PhotoGalleryProps) {
    const currentIndex = nextProps.startIndex
    this.setState({ currentIndex })
  }

  handler = (action: 'previous' | 'next') => {
    if (action === 'previous') {
      this._decrementIndex()
    } else {
      this._incrementIndex()
    }
  }

  get currentPhoto(): string {
    return this.props.photos[this.state.currentIndex]
  }

  render() {
    return (
      <div className="photo-gallery">
        <GalleryButton action="previous" handler={this.handler} />
        <GalleryImage src={this.currentPhoto} />
        <GalleryButton action="next" handler={this.handler} />
      </div>
    )
  }

  private _incrementIndex() {
    let currentIndex = this.state.currentIndex + 1
    if (currentIndex >= this.props.photos.length) {
      currentIndex = 0
    }
    this.setState({ currentIndex })
  }

  private _decrementIndex() {
    let currentIndex = this.state.currentIndex - 1
    if (currentIndex < 0) {
      currentIndex = this.props.photos.length - 1
    }
    this.setState({ currentIndex })
  }

}

export default PhotoGallery