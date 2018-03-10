import * as React from 'react'

import { PerformanceOverview } from '../../../constants'
import PerformanceCard from './performance-card'

interface PerformanceCardGroupProps {
  overviews: PerformanceOverview[]
}

export const PerformanceCardGroup = (props: PerformanceCardGroupProps): JSX.Element => {
  return (
    <>
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