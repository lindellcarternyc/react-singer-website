import { PhotoCollection } from '../../constants'

// const placeholder = require('../../assets/placeholder.png')
// const lindell =     require('../../assets/lindell_picture.jpg')
// const dialogues =   require('../../assets/dialogues1.jpg')

import MadamaButterflyPhotoCollection from './madama_butterfly'

const PhotoCollections: { [id: string]: PhotoCollection } = {
  'madama_butterfly': MadamaButterflyPhotoCollection,
  // '0': {
  //   id: '0',
  //   name: 'Collection 1',
  //   description: 'Description 1',
  //   photos: [dialogues]
  // },
  // '1': {
  //   id: '1',
  //   name: 'Collection 2',
  //   description: 'A second collection',
  //   photos: []
  // },
  // '2': {
  //   id: '2',
  //   name: 'Col 3',
  //   description: 'This is another collection',
  //   photos: [lindell, placeholder]
  // },
  // '3': {
  //   id: '3',
  //   name: 'Collection #4',
  //   description: 'A description is nice',
  //   photos: [placeholder, placeholder, placeholder, placeholder]
  // }
}

const getPhotoCollections = (): PhotoCollection[] => {
  return Object.keys(PhotoCollections).map(id => PhotoCollections[id])
}

export const getPhotoCollectionById = (id: string): PhotoCollection => {
  return PhotoCollections[id]
}
export default getPhotoCollections