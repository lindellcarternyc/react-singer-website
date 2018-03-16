import * as React from 'react'

import { Container, Header } from 'semantic-ui-react'
import ResumeTable from './resume-table'

export const Resume = () => {
  return (
    <Container fluid>
      <Header as="h3" content="Resume" />
      <ResumeTable />
    </Container>
  )
}

export default Resume