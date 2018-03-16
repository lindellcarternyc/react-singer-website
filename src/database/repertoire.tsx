import { ComposerData } from '../constants'

const RepertoireData: ComposerData[] = [
  {
    name: 'Donizetti',
    operas: [
      {
        title: `L'Elisir d'Amore`,
        roles: ['Nemorino']
      },
      {
        title: 'Poliuto',
        roles: ['Poliuto']
      }
    ]
  },
  {
    name: 'Gounod',
    operas: [
      {
        title: 'Faust',
        roles: ['Faust']
      },
      {
        title: 'Romeo et Juliette',
        roles: ['Romeo']
      }
    ]
  },
  {
    name: 'Mozart',
    operas: [
      {
        title: 'Die Zauberfloete',
        roles: ['Tamino']
      }
    ]
  },
  {
    name: 'Offenbach',
    operas: [
      {
        title: `Les Contes d'Hoffmann`,
        roles: ['Hoffmann']
      },
      {
        title: 'La Perichole',
        roles: ['Piquillo']
      }
    ]
  },
  {
    name: 'Puccini',
    operas: [
      {
        title: 'La Boheme',
        roles: ['Rodolfo']
      },
      {
        title: 'Madama Butterfly',
        roles: ['Pinkerton']
      },
      {
        title: 'Manon Lescaut',
        roles: ['Renato des Grieux']
      },
      {
        title: 'Tosca',
        roles: ['Cavaradossi']
      }
    ]
  },
  {
    name: 'Verdi',
    operas: [
      {
        title: 'Aida',
        roles: ['Radames', 'Un Messagero']
      },
      {
        title: 'Don Carlo',
        roles: ['Don Carlo']
      },
      {
        title: 'La Traviata',
        roles: [
          'Alfredo', 'Gastone'
        ]
      },
      {
        title: 'Rigoletto',
        roles: ['Il Duca']
      }
    ]
  }
]

export const getRepertoireData = () => RepertoireData
export default getRepertoireData