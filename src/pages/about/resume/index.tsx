import * as React from 'react'

import { Container, Header } from 'semantic-ui-react'
import ResumeTable from './resume-table'

import { getResumeData } from '../../../database'

const roles = getResumeData().roles

export const Resume = () => {
  return (
    <Container fluid>
      <Header as="h3" content="Resume" />
      <ResumeTable roles={roles}/>
    </Container>
  )
}

export default Resume