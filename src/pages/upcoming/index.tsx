// import * as React from 'react'

// import Layout from '../components/layout'
// import { Header } from 'semantic-ui-react'

// import { PerformanceOverview } from '../../constants'
// import PerformanceCard from './components/performance-card'
// import { getPerformanceOverviews } from '../../databse'

// interface PerformancesProps { }
// interface PerformancesState {
//   performanceOverviews: PerformanceOverview[]
// }

// export class Performances extends React.Component<PerformancesProps, PerformancesState> {
//   constructor(props: PerformancesProps) {
//     super(props)

//     this.state = {
//       performanceOverviews: []
//     }
//   }

//   componentDidMount() {
//     const performanceOverviews = getPerformanceOverviews()
//     this.setState({ performanceOverviews })
//   }

//   render() {
//     const { performanceOverviews } = this.state
//     const cards = performanceOverviews.map((overview, idx) => {
//       return <PerformanceCard key={idx.toString(10) + '_' + overview.title} {...overview} />
//     })
//     return (
//       <Layout>
//         <Header as="h2" content="Upcoming Engagements" />
//         {cards}
//       </Layout>
//     )
//   }
// }

// export default Performances