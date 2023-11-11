import React from 'react'
import { Table } from '@mantine/core';

const elements = [
    { name: 6, monday: 'Present', tuesday: 'Present', wednessday: 'Present', thursday: 'Present', friday: 'Absent' },
  ];

const Attendace = () => {

    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
          <Table.Td>{element.monday}</Table.Td>
          <Table.Td>{element.tuesday}</Table.Td>
          <Table.Td>{element.wednessday}</Table.Td>
          <Table.Td>{element.thursday}</Table.Td>
          <Table.Td>{element.friday}</Table.Td>
        </Table.Tr>
      ));

  return (
    <Table style={{border: '1px solid #B9B9B9', borderRadius: 10}} stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{background: 'rgba(0, 0, 0, 0.06)'}}>John Doe</Table.Th>
          <Table.Th style={{background: 'rgba(0, 0, 0, 0.06)'}}>Monday</Table.Th>
          <Table.Th style={{background: 'rgba(0, 0, 0, 0.06)'}}>Tuesday</Table.Th>
          <Table.Th style={{background: 'rgba(0, 0, 0, 0.06)'}}>Wednesday</Table.Th>
          <Table.Th style={{background: 'rgba(0, 0, 0, 0.06)'}}>Thursday</Table.Th>
          <Table.Th style={{background: 'rgba(0, 0, 0, 0.06)'}}>Fridaay</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export default Attendace