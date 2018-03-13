import * as React from 'react'

import { Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import PerformanceCardGroup from './components/performance-card-group'

import { PerformanceOverview } from '../../constants'
import { getPerformanceOverviews } from '../../databse'
import { hasPassed } from '../../utils'

interface PerformancesProps { }
interface PerformancesState {
  upcoming: PerformanceOverview[]
  passed: PerformanceOverview[]
}
export class Performances extends React.Component<PerformancesProps, PerformancesState> {
  constructor(props: PerformancesProps) {
    super(props)

    this.state = { 
      upcoming: [],
      passed: []
     }
  }

  componentDidMount() {
    const overviews = getPerformanceOverviews()
    
    const { upcoming, passed } = overviews.reduce<
      {upcoming: PerformanceOverview[], passed: PerformanceOverview[]}
    >(  (result, current) => {
      if (hasPassed(current.date)) {
        result.passed = [...result.passed, current] 
      } else {
        result.upcoming = [...result.upcoming, current]
      }
      return result
    },  {upcoming: [], passed: []})
    this.setState({upcoming, passed})
  }

  render() {
    const { upcoming, passed } = this.state

    return (
      <Layout>
        <Header as="h2" content="Performances" textAlign="center" style={{marginTop: '2rem'}}/>
        <PerformanceCardGroup
          title="Upcoming"
          overviews={upcoming} 
        />
        <PerformanceCardGroup
          title="Passed"
          overviews={passed} 
        />
      </Layout>
    )
  }
}

export default Performances