import { PhotoCollection } from '../constants'

const placeholder = require('../assets/placeholder.png')
const lindell =     require('../assets/lindell_picture.jpg')
const dialogues =   require('../assets/dialogues1.jpg')

// madama butterfly pics
const b1 = require('../assets/images/madama_butterfly/img1.jpg')
const b2 = require('../assets/images/madama_butterfly/img2.jpg')
const b3 = require('../assets/images/madama_butterfly/img3.jpg')
const b4 = require('../assets/images/madama_butterfly/img4.jpg')
const b5 = require('../assets/images/madama_butterfly/img5.jpg')
const b6 = require('../assets/images/madama_butterfly/img6.jpg')
const b7 = require('../assets/images/madama_butterfly/img7.jpg')

const PhotoCollections: { [id: string]: PhotoCollection } = {
  'madama_butterfly': {
    id: 'madama_butterfly',
    name: 'Madama Butterfly',
    description: 'Pinkerton with Regina Opera (Feb/Mar 2018)',
    photos: [ b1, b2, b3, b4, b5, b6, b7 ]
  },
  '0': {
    id: '0',
    name: 'Collection 1',
    description: 'Description 1',
    photos: [dialogues]
  },
  '1': {
    id: '1',
    name: 'Collection 2',
    description: 'A second collection',
    photos: []
  },
  '2': {
    id: '2',
    name: 'Col 3',
    description: 'This is another collection',
    photos: [lindell, placeholder]
  },
  '3': {
    id: '3',
    name: 'Collection #4',
    description: 'A description is nice',
    photos: [placeholder, placeholder, placeholder, placeholder]
  }
}

const getPhotoCollections = (): PhotoCollection[] => {
  return Object.keys(PhotoCollections).map(id => PhotoCollections[id])
}

export const getPhotoCollectionById = (id: string): PhotoCollection => {
  return PhotoCollections[id]
}
export default getPhotoCollections