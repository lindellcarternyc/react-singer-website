import * as React from 'react'

const OverlayStyles = {
  position: 'absolute' as 'absolute',
  top: '2rem',
  left: '2rem',
  padding: '0.5rem 1rem',
  zIndex: 5,
  backgroundColor: 'white',
  textAlign: 'center'
}
const MonthStyles = {
  fontWeight: 'bold' as 'bold',
  textTransform: 'uppercase',
  marginBottom: 0
}
const DateStyles = {
  fontWeight: 'bold' as 'bold',
  fontSize: '1.5rem',
  marginTop: 0
}
const DateOverlay = (props: {month: string, day: string}) => {
  const { month, day } = props
  return (
    <div style={OverlayStyles}>
      <p style={MonthStyles}>{month}</p> 
      <p style={DateStyles}>{day}</p>
    </div>
  )
}

export default DateOverlay