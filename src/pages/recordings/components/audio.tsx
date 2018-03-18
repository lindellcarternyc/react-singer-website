import * as React from 'react'

import { Header } from 'semantic-ui-react'
import ComingSoon from '../../../components/coming-soon'

export const Audio = (): JSX.Element => {
  return (
    <>
      <Header as="h3" content="Audio" />
      <ComingSoon />
    </>
  )
}

export default Audio