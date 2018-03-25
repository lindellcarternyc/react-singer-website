import * as React from 'react'
import { Link } from 'react-router-dom'

import { Grid, Header } from 'semantic-ui-react'

import PhotoCollectionCard from './photo-collection-card'

import { PhotoCollection } from '../constants'

interface PhotoCollectionsItemProps {
  collection: PhotoCollection
}
const PhotoCollectionsItem = (props: PhotoCollectionsItemProps): JSX.Element => {
  const { collection } = props
  const { id, name, description, photos } = collection
  return (
    <Link to={`/photos/${id}`}>
      <PhotoCollectionCard 
        name={name}
        description={description}
        photos={photos}
      />
    </Link>
  )
}

interface PhotoCollectionsProps {
  collections: PhotoCollection[]
}
const PhotoCollections = (props: PhotoCollectionsProps): JSX.Element => {
  const collections = props.collections

  return (
    <>
      <Header as="h2" content="Photos" />
      <Grid centered stackable columns={2}>
        {collections.map(collection => {
          return (
            <Grid.Column key={collection.id}>
              <PhotoCollectionsItem collection={collection} />
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}

export default PhotoCollections