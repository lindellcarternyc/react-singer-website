import * as React from 'react'

import { Header, HeaderSubheader, Grid, GridColumn, Image } from 'semantic-ui-react'
import { PhotoCollection } from '../../constants'
interface PhotoCollectionGridComponentProps {
  photoCollection: PhotoCollection
  select: (photoCollection: PhotoCollection, photoIndex: number) => void
}
const PhotoCollectionGridComponent = (props: PhotoCollectionGridComponentProps): JSX.Element => {
  const { photoCollection } = props
  const { name, description, photos } = photoCollection
  
  return (
    <>
      <Header as="h2">
        {name}
        <HeaderSubheader content={description} />
      </Header>
      <Grid columns={2} centered stackable>
        {photos.map((photo, id) => {
          return (
            <GridColumn 
              key={id.toString(10) + '__' + photo} 
              onClick={() => {
                props.select(photoCollection, id)
              }}
            >
              <Image src={photo} />
            </GridColumn>
          )
        })}
      </Grid>
    </>
  )
}

export default PhotoCollectionGridComponent