import * as React from 'react'

import { Card, CardHeader, CardContent, CardDescription, Image } from 'semantic-ui-react'
import { PhotoCollection } from '../../../constants'

interface PhotoCollectionPreviewCardProps extends PhotoCollection { }

export const PhotoCollectionPreviewCard = (props: PhotoCollectionPreviewCardProps): JSX.Element => {
  const { name, description, photos } = props

  return (
    <Card>
      {photos.length >= 1 && <Image src={photos[0]} />}
      <CardContent>
        <CardHeader content={name}/>
        <CardDescription content={description}/>
      </CardContent>
      <CardContent extra>
        {photos.length} {photos.length === 1 ? 'Photo' : 'Photos'}
      </CardContent>
    </Card>
  )
}

export default PhotoCollectionPreviewCard