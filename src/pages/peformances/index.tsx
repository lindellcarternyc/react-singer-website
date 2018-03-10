import * as React from 'react'

import { Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import PerformanceCardGroup from './components/performance-card-group'

import { PerformanceOverview } from '../../constants'
import { getPerformanceOverviews } from '../../databse'

interface PerformancesProps { }
interface PerformancesState {
  overviews: PerformanceOverview[]
}
export class Performances extends React.Component<PerformancesProps, PerformancesState> {
  constructor(props: PerformancesProps) {
    super(props)

    this.state = { overviews: [] }
  }

  componentDidMount() {
    const overviews = getPerformanceOverviews()
    this.setState({ overviews })
  }

  render() {
    const { overviews } = this.state

    return (
      <Layout>
        <Header as="h2" content="Performances" textAlign="center" style={{marginTop: '2rem'}}/>
        <Header as="h3" content="Upcoming" />
        <PerformanceCardGroup overviews={overviews} />
      </Layout>
    )
  }
}

export default Performances