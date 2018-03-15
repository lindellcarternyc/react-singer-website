import * as React from 'react'

import { Header } from 'semantic-ui-react'

interface LayoutTitleObject {
  content: string
  align?: 'center' | 'right'
  style?: { [key: string]: string }
}

export type LayoutTitleProps = string | LayoutTitleObject
export const LayoutTitle = (props: LayoutTitleProps): JSX.Element => {
  // console.dir(Object.keys(props))
  if (Object.keys(props)[0] === '0') {
    const title = Object.keys(props)
      .reduce<string>(
         (curTitle, idx) => {
          return curTitle + props[idx]
      }, '')
    return (
      <Header as="h2" content={title} />
    )
  } else {
    const propsObj = props as LayoutTitleObject
    const { content, align, style } = propsObj
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