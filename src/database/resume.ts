import { ResumeData } from '../constants'

const RESUME_DATA: ResumeData = {
  roles: [
    {
      role: 'Pinkerton',
      operaTitle: 'Madama Butterfly',
      companyName: 'Unknown',
      dates: 'Oct 2018'
    },
    {
      role: 'Florestan',
      operaTitle: 'Fidelio',
      companyName: 'Unknown',
      dates: 'Aug 2018'
    },
    {
      role: 'Il Duca',
      operaTitle: 'Rigoletto',
      companyName: 'Resonanz Opera',
      dates: 'Jun 2018'
    },
    {
      role: 'Pinkerton',
      operaTitle: 'Madama Butterfly',
      companyName: 'Regina Opera',
      dates: 'Feb/Mar 2018'
    }
  ]
}

const getResumeData = (): ResumeData  => RESUME_DATA

export default getResumeData