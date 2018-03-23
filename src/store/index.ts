import { createStore, Reducer, Store } from 'redux'

import { PhotoCollection } from '../constants'

export interface StoreState {
  photoGalleryOpen: boolean
  photoCollection: PhotoCollection | null
  photoIndex: number | null
}
const InitialState: StoreState = {
  photoGalleryOpen: false,
  photoCollection: null,
  photoIndex: null
}

interface SelectPhotoAction {
  type: 'Select Photo'
  payload: {
    photoCollection: PhotoCollection
    photoIndex: number
  }
}
type Action = SelectPhotoAction
export const selectPhoto = (photoCollection: PhotoCollection, photoIndex: number): SelectPhotoAction => {
  return {
    type: 'Select Photo',
    payload: {
      photoCollection, photoIndex
    }
  }
}

const rootReducer: Reducer<StoreState> = (state: StoreState = InitialState, action: Action): StoreState => {
  switch ( action.type ) {
    case 'Select Photo':
      const { photoCollection, photoIndex } = action.payload
      return { ...state, photoGalleryOpen: true, photoCollection, photoIndex }
    default:
      return state
  }
}

export const initStore = (): Store<StoreState> => {
  const store = createStore(rootReducer)
  store.subscribe(() => {
    console.dir('store listener')
    const state = store.getState()
    console.dir(state)
  })
  return store
}