import * as React from 'react'

import { Header } from 'semantic-ui-react'

interface LayoutTitleObject {
  content: string
  align?: 'center' | 'right'
  style?: { [key: string]: string }
}

export type LayoutTitleProps = string | LayoutTitleObject
export const LayoutTitle = (props: LayoutTitleProps): JSX.Element => {
  if (typeof props === 'string') {
    return (
      <Header as="h2" content={props} />
    )
  } else {
    const { content, align, style } = props
    return (
      <Header 
        as="h2"
        content={content}
        textAlign={align}
        style={style}
      />
    )
  }
}

export default LayoutTitle