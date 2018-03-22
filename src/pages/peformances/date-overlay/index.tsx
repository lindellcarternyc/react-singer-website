import * as React from 'react'

import PassedDateCross from './passed-date-cross'

import { formatDate, hasPassed } from '../../../utils'

const makeStylesForOverlay = (mobile: boolean = false) => {
  const baseStyles = {
    padding: '0.5rem 1rem',
    zIndex: 2,
    background: 'white',
    textAlign: 'center',
    fontWeight: 'bold' as 'bold',
    position: 'absolute' as 'absolute',
    top: '1.5rem'
  }
  const leftRightAlignment = mobile ?
    { right: '1.5rem'} :
    { left: '1.5rem'}

  return { ...baseStyles, ...leftRightAlignment }
}

interface DateOverlayProps {
  date: string
  mobile?: boolean
  passed?: boolean
}

export const DateOverlay = (props: DateOverlayProps): JSX.Element => {
  const styles = makeStylesForOverlay(props.mobile)
  const { month, day } = formatDate(props.date)
  const passed = hasPassed(props.date)

  return (
    <div style={styles}>
      {passed && <PassedDateCross />}
      <p 
        style={{
          textTransform: 'uppercase',
          marginBottom: 0
        }}
      >
        {month}
      </p> 
      <p style={{fontSize: '1.5rem'}}>{day}</p>
    </div>
  )
}

export default DateOverlay