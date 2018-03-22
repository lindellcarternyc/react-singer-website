import * as React from 'react'

import { Container, Image } from 'semantic-ui-react'
const defaultImage = require('../../assets/lindell_picture.jpg')

import DateOverlay from './date-overlay'

interface PerformanceCardImageProps {
  src?: string
  date: string
  mobile?: boolean
}

export const PerformanceCardImage = (props: PerformanceCardImageProps) => {
    const { src, date, mobile } = props
    return (
      <Container style={{position: 'relative'}}>
        <Image src={src || defaultImage} size="massive" centered />
        <DateOverlay date={date} mobile={mobile} />
      </Container>
    )
}

export default PerformanceCardImage