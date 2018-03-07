import * as React from 'react'

import Layout from '../components/layout'
import { Header } from 'semantic-ui-react'

import PerformanceCard from './components/performance-card'

export const Upcoming = (): JSX.Element => {
  return (
    <Layout>
      <Header as="h2" content="Upcoming Engagements" />
      <PerformanceCard 
        title="Madama Butterfly - Pinkerton"
        date="Sunday, March 11, 2018"
        time="3 PM"
        venue="Regina Opera"
        location="Bay Ridge"
        link="http://reginaopera.org/tickets.html"
      />
      <PerformanceCard 
        title="Madama Butterfly - Pinkerton"
        date="Monday, March 12, 2018"
        time="3 PM"
        venue="Regina Opera"
        location="Bay Ridge"
        link="http://reginaopera.org/tickets.html"
      />
    </Layout>
  )
}

export default Upcoming