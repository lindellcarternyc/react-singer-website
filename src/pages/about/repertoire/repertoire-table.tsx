import * as React from 'react'

import { 
  Table, TableRow, 
  TableHeader, TableHeaderCell, 
  TableBody, TableCell
} from 'semantic-ui-react'

import { ComposerData } from '../../../constants'
import { getRepertoireData } from '../../../database'
const alldata = getRepertoireData()

const RepertoireTableHead = (): JSX.Element => {
  return (
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Composer</TableHeaderCell>
        <TableHeaderCell textAlign="center">Opera(s)</TableHeaderCell>
        <TableHeaderCell textAlign="right">Role(s)</TableHeaderCell>
      </TableRow>
    </TableHeader>
  )
}

const OperaTitleCell = (props: { title: string}): JSX.Element => (
  <TableCell 
    textAlign="center" 
    style={{fontStyle: 'italic'}}
  >{props.title}
  </TableCell>
)
const RolesCell = (props: { roles: string[] }): JSX.Element => (
  <TableCell textAlign="right" content={props.roles.join(', ')} />
)
const ComposerRow = (props: {composerData: ComposerData}): JSX.Element => {
  const { composerData } = props
  const { name, operas } = composerData
  return (
    <>
      <TableRow>
        <TableCell rowSpan={operas.length.toString(10)}>{name}</TableCell>
        <OperaTitleCell title={operas[0].title}/>
        <RolesCell roles={operas[0].roles} />
      </TableRow>
      {operas.slice(1).map(opera => {
        return(
          <TableRow key={opera.title}>
            <OperaTitleCell title={opera.title} />
            <RolesCell roles={opera.roles} />
          </TableRow>
        )
      })}
    </>
  )
}

export const RepertoireTable = (): JSX.Element => {
  return (
    <Table unstackable>
      <RepertoireTableHead />
      <TableBody>
        {alldata.map(composerData => {
          return (
            <ComposerRow key={composerData.name} composerData={composerData}/>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default RepertoireTable