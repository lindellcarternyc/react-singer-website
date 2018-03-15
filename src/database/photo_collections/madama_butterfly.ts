import { PhotoCollection } from '../../constants'

const b1 = require('../../assets/images/madama_butterfly/img1.jpg')
const b2 = require('../../assets/images/madama_butterfly/img2.jpg')
const b3 = require('../../assets/images/madama_butterfly/img3.jpg')
const b4 = require('../../assets/images/madama_butterfly/img4.jpg')
const b5 = require('../../assets/images/madama_butterfly/img5.jpg')
const b6 = require('../../assets/images/madama_butterfly/img6.jpg')
const b7 = require('../../assets/images/madama_butterfly/img7.jpg')

const MadamaButterflyPhotoCollection: PhotoCollection = {
  id: 'madama_butterfly',
  name: 'Pinkerton',
  description: 'Madama Butterfly with Regina Opera (Feb/Mar 2018)',
  photos: [ b1, b2, b3, b4, b5, b6, b7 ]
}

export default MadamaButterflyPhotoCollection