import * as React from 'react'

import { Segment, Header, Responsive, Grid } from 'semantic-ui-react'
import PerformanceCardImage from './performance-card-image'

import { PerformanceOverview } from '../../constants'
interface PerformanceCardProps extends PerformanceOverview { }

const PerformanceCardContent = (props: PerformanceCardProps) => {
  return (
    <>
      <Header as="h3" content={props.title} />
        <p>
          {props.date}
          <br />
          {props.time}
        </p>
        {props.venue !== undefined && props.location !== undefined && 
          (<p>
            {props.venue}
            <br />
            {props.location}
          </p>)
        }
        {props.link !== undefined &&
          (
            <p>
              <a>{props.link}</a>
            </p>
          )
        }
    </>
  )
}

export const PerformanceCard = (props: PerformanceCardProps) => {
  return (
    <Segment style={{position: 'relative'}}>
      <Responsive {...Responsive.onlyMobile}>
        <PerformanceCardImage date={props.date} mobile />
        <PerformanceCardContent {...props} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Grid columns={2}>
          <Grid.Column>
            <PerformanceCardImage date={props.date} />
          </Grid.Column>
          <Grid.Column>
            <PerformanceCardContent {...props} />
          </Grid.Column>
        </Grid>
      </Responsive>
  </Segment>
  )
}

export default PerformanceCard