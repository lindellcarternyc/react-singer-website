import { PhotoCollection } from '../constants'

const placeholder = require('../assets/placeholder.png')
const lindell =     require('../assets/lindell_picture.jpg')
const dialogues =   require('../assets/dialogues1.jpg')

const PhotoCollections: PhotoCollection[] = [
  {
    name: 'Collection 1',
    description: 'Description 1',
    photos: [dialogues]
  },
  {
    name: 'Collection 2',
    description: 'A second collection',
    photos: []
  },
  {
    name: 'Col 3',
    description: 'This is another collection',
    photos: [lindell, placeholder]
  },
  {
    name: 'Collection #4',
    description: 'A description is nice',
    photos: [placeholder, placeholder, placeholder, placeholder]
  }
]

const getPhotoCollections = () => PhotoCollections
export default getPhotoCollections