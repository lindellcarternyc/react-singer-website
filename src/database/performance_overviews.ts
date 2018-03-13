import { PerformanceOverview } from '../constants'

const PerformanceOverviews: PerformanceOverview[] = [
  {
    title: 'Madama Butterfly: Pinkerton',
    date: 'Sunday, March 11, 2018',
    time: '3 PM',
    venue: 'Regina Opera',
    location: 'Our Lady of Perpetual Help',
    link: 'http://reginaopera.org/tickets'
  },
  {
    title: 'Madama Butterfly: Pinkerton',
    date: 'Monday, March 12, 2018',
    time: '3 PM',
  },
  {
    title: 'Rigoletto: Il Duca',
    date: 'Thursday, March 15, 2018',
    time: '7:30 PM'
  }
]

const getPerformanceOverviews = () => PerformanceOverviews
export default getPerformanceOverviews