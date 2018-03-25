import * as React from 'react'

import './modal.styles.css'

export interface ModalProps {
  isOpen: boolean
  close: () => void
  children?: React.ReactNode
}
const Modal = (props: ModalProps): JSX.Element => {
  const className = `modal ${props.isOpen ? 'open' : ''}`
  return (
    <div className={className} onClick={props.close}>
      {props.children}
    </div> 
  )
}

export default Modal