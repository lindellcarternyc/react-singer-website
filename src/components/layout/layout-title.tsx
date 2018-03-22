import * as React from 'react'

import { Header } from 'semantic-ui-react'

export interface LayoutTitlePropsObject {
  content: string
  align?: 'center' | 'right'
  style?: { [key: string]: string }
}

export interface LayoutTitleProps { 
  title: string | LayoutTitlePropsObject
}
const LayoutTitle = (props: LayoutTitleProps): JSX.Element | null => {
  const { title } = props
  if (typeof title === 'string') {
    return <Header as="h2" content={title} />
  } else {
    const { content, align, style } = title
    return (
      <Header 
        content={content}
        textAlign={align}
        style={style}
      />
    )
  }
}

export default LayoutTitle