import * as React from 'react'
import { Link } from 'react-router-dom'

import { Grid, GridColumn, Header } from 'semantic-ui-react'
import PhotoCollectionPreviewCard from './photo-collection-preview-card'

import { getPhotoCollections } from '../../../database'
const PhotoCollections = getPhotoCollections()

export const PhotoCollectionsPreviewGrid = (): JSX.Element => {
  return (
    <>
      <Header as="h2" content="Photos" />
      <Grid centered doubling columns={4}>
        {PhotoCollections.map(collection => {
          return (
            <GridColumn key={collection.id} >
              <Link to={`/photos/${collection.id}`}>
                <PhotoCollectionPreviewCard {...collection} />
              </Link>
            </GridColumn>
          )
        })}
      </Grid>
    </>
  )
}

export default PhotoCollectionsPreviewGrid