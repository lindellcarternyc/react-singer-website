import * as React from 'react'

import { Header } from 'semantic-ui-react'
import { PerformanceOverview } from '../../constants'
import PerformanceCard from './performance-card'

interface PerformanceCardGroupProps {
  title?: string
  overviews: PerformanceOverview[]
}

export const PerformanceCardGroup = (props: PerformanceCardGroupProps): JSX.Element => {
  return (
    <>
      {props.title !== undefined &&
        <Header as="h3" content={props.title} />
      }
      {props.overviews.map((overview, idx) => {
        return (
          <PerformanceCard 
            key={idx.toString() + '__' + overview.date}
            {...overview}
          />
        )
      })}
    </>
  )
}

export default PerformanceCardGroup