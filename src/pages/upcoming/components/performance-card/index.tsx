import * as React from 'react'

import { Segment, Header, Image } from 'semantic-ui-react'
const defaultImage = require('../../../../assets/lindell_picture.jpg')

import DateOverlay from './date-overlay'

interface PerformanceCardProps {
  date: string
  time: string
  title: string
  venue: string
  location: string
  link: string
}

const getDateForOverlay = (date: string): { month: string, day: string} => {
  const [month, day] = date.split(', ')[1].split(' ')
  return {
    month: month.substring(0, 3),
    day
  }
}
export const PerformanceCard = (props: PerformanceCardProps) => {
  const { month, day } = getDateForOverlay(props.date)
  return (
    <Segment style={{position: 'relative'}}>
      <DateOverlay month={month} day={day}/>
      <Image src={defaultImage} />
      <Header as="h3" content="Madama Butterfly - Pinkerton" />
      <p>
        {props.date}
        <br />
        {props.time}
      </p>
      <p>
        {props.venue}
        <br />
        {props.location}
      </p>
      <p>
        <a>{props.link}</a>
      </p>
    </Segment>
  )
}

export default PerformanceCard