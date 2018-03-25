import { withRouter } from 'react-router-dom'
import PhotoCollectionGridContainer from './photo-collection-grid-container'

import { PhotoCollection } from '../../constants'
import { StoreState, selectPhoto } from '../../store'
import { connect, Dispatch } from 'react-redux'

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => {
  return {
    selectPhoto: (photoCollection: PhotoCollection, photoIndex: number) => {
      dispatch(selectPhoto(photoCollection, photoIndex))
    }
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(PhotoCollectionGridContainer)
)