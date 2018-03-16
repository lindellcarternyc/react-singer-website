import * as React from 'react'

import { 
  Table, TableHeader, TableRow, TableHeaderCell, TableCell
} from 'semantic-ui-react'

import { RoleData } from '../../../constants'

const ResumeTableHeader = (): JSX.Element => {
  return (
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Role</TableHeaderCell>
        <TableHeaderCell>Opera</TableHeaderCell>
        <TableHeaderCell>Company</TableHeaderCell>
        <TableHeaderCell>Dates</TableHeaderCell>
      </TableRow>
    </TableHeader>
  )
}

const ResumeTableRow = (props: { data: RoleData }): JSX.Element => {
  const { data } = props
  const { role, operaTitle, companyName, dates } = data
  return (
    <TableRow>
      <TableCell>{role}</TableCell>
      <TableCell>{operaTitle}</TableCell>
      <TableCell>{companyName}</TableCell>
      <TableCell>{dates}</TableCell>
    </TableRow>
  )
}

interface ResumeTableProps {
  roles: RoleData[]
}
export const ResumeTable = (props: ResumeTableProps): JSX.Element => {
  return (
    <Table>
      <ResumeTableHeader />
      {props.roles.map(roleData => {
        const key = roleData.role + '__' + roleData.dates
        return (
          <ResumeTableRow key={key} data={roleData}/>
        )
      })}
    </Table>
  )
}

export default ResumeTable