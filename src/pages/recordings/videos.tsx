import * as React from 'react'

import { Header } from 'semantic-ui-react'

import ComingSoon from '../../components/coming-soon'

export const Videos = (): JSX.Element => {
  return (
    <>
      <Header as="h3" content="Videos" />
      <ComingSoon />
    </>
  )
}

export default Videos