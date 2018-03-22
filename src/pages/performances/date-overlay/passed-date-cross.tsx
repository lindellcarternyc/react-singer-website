import * as React from 'react'

const DateCrossStyles = {
  position: 'absolute' as 'absolute',
  top: '50%', left: '50%',
  transform: 'translate(-50%, -50%) rotate(0.125turn)',
  display: 'block',
  width: '60px', height: '3px',
  background: 'black'
}

const PassedDateCross = (): JSX.Element => {
  return (
    <div style={DateCrossStyles}/>
  )
}

export default PassedDateCross