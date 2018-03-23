import * as React from 'react'

import { Image, Card } from 'semantic-ui-react'

interface PhotoCollectionCardProps {
  name: string
  description: string
  photos: string[]
}
const PhotoCollectionCard = (props: PhotoCollectionCardProps): JSX.Element => {
  const { name, description, photos } = props
  const previewPhoto = photos[0]
  const countLabel = `${photos.length} ${photos.length === 1 ? 'Photo' : 'Photos'}`

  return (
    <Card>
      <Image src={previewPhoto} />
      <Card.Content>
        <Card.Header content={name} />
        <Card.Description content={description} />
      </Card.Content>
      <Card.Content extra>
        {countLabel}
      </Card.Content>
    </Card>
  )
}

export default PhotoCollectionCard