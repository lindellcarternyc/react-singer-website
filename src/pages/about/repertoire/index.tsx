import * as React from 'react'

import { 
  Container, Header, 
  // Table, TableHeader, TableHeaderCell,
  // TableBody, TableRow, TableCell
} from 'semantic-ui-react'

import RepertoireTable from './repertoire-table'

export const Repertoire = () => {
  return (
    <Container fluid>
      <Header as="h3" content="Repertoire" />
      <RepertoireTable />
    </Container>
  )
}

export default Repertoire