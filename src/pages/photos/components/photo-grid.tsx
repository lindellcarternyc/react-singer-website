import * as React from 'react'

import { Grid, GridColumn, } from 'semantic-ui-react'

import PhotoCollectionPreview from './photo-collection-preview'
import { PhotoCollection } from '../../../constants'
import { getPhotoCollections } from '../../../database'

const PhotoGridColumn = (props: { collection: PhotoCollection }): JSX.Element => {
  const { name, description, photos } = props.collection
  return (
    <GridColumn>
      <PhotoCollectionPreview name={name} description={description} photos={photos}/>
    </GridColumn>
  )
}

interface PhotoGridProps { }
interface PhotoGridState {
  collections: PhotoCollection[]
}
export class PhotoGrid extends React.Component<PhotoGridProps, PhotoGridState> {
  constructor(props: PhotoGridProps) {
    super(props)

    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    const collections = getPhotoCollections()
    this.setState({ collections })
  }

  render() {
    const { collections } = this.state
    const columns = collections.map(collection => {
      return (
        <PhotoGridColumn key={collection.name} collection={collection}/>
      )
    })
    return (
      <Grid columns={4} doubling>
        {columns}
      </Grid>
    )
  }
}

export default PhotoGrid