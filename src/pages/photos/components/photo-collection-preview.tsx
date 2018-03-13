import * as React from 'react'

import { Card, Image } from 'semantic-ui-react'
const Placeholder = require('../../../assets/placeholder.png')

import { PhotoCollection } from '../../../constants'

interface PhotoCollectionPreviewProps extends PhotoCollection { }
interface PhotoCollectionPreviewState {
  previewPhoto: string
}
export class PhotoCollectionPreview extends React.Component<
  PhotoCollectionPreviewProps, PhotoCollectionPreviewState
> {
  constructor(props: PhotoCollectionPreviewProps) {
    super(props)

    this.state = {
      previewPhoto: ''
    }
  }

  componentDidMount() {
    let previewPhoto: string
    const { photos } = this.props

    if (photos.length >= 1) {
      previewPhoto = photos[0]
    } else {
      previewPhoto = Placeholder
    }
    this.setState({ previewPhoto })
  }

  render() {
    const { name, description, photos } = this.props
    const { previewPhoto } = this.state

    return (
      <Card>
        <Image src={previewPhoto} />
        <Card.Content>
          <Card.Header content={name} />
          <Card.Description content={description} />
        </Card.Content>
        <Card.Content extra>
          {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
        </Card.Content>
      </Card>
    )
  }
}

export default PhotoCollectionPreview