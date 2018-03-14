import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Header, HeaderSubheader, Grid, GridColumn, Image } from 'semantic-ui-react'

import { getPhotoCollectionById } from '../../../database'

interface RouteProps {
  collectionId: string
}
interface PhotoCollectionViewProps extends RouteComponentProps<RouteProps> { }

export const PhotoCollectionView = (props: PhotoCollectionViewProps): JSX.Element => {
  const collection = getPhotoCollectionById(props.match.params.collectionId)
  return (
    <>
      <Header as="h2">
        {collection.name}
        <HeaderSubheader content={collection.description} />
      </Header>
      <Grid columns={4} centered stackable>
        {collection.photos.map((photo, id) => {
          return (
            <GridColumn key={id}>
              <Image src={photo} />
            </GridColumn>
          )
        })}
      </Grid>
    </>
  )
}

export default withRouter(PhotoCollectionView)