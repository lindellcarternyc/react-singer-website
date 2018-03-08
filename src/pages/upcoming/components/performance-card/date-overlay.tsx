import * as React from 'react'

const formatDateForOverlay = (date: string): { month: string, day: string } => {
  const [month, day] = date.split(', ')[1].split(' ')
  return {
    month: month.substring(0, 3),
    day
  }
}

interface DateOverlayProps {
  date: string
  mobile?: boolean
}
interface Alignment {
  top: string
  left?: string 
  right?: string
}
const DateOverlay = (props: DateOverlayProps) => {
  const { month, day } = formatDateForOverlay(props.date)
  const position = 'absolute' as 'absolute'
  let alignment: Alignment = { top: '1.5rem' }
  if (props.mobile) {
    alignment.left = '1.5rem'
  } else {
    alignment.right = '1.5rem'
  }
  const styles = {
    padding: '0.5rem 1rem',
    zIndex: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: 'bold' as 'bold',
    position,
    ...alignment
  }
  return (
    <div style={styles}>
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