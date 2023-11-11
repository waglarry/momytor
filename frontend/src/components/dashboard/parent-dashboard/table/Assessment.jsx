import React from 'react'
import { Table } from '@mantine/core';

const elements = [
  { id: 1 ,subject: "", quiz: 'Quiz', homework: 'Homework', test: 'Test', presentation: 'Presentation', games: 'Games' },
  { id: 1 ,subject: "Mathematics", quiz: 2, homework: 5, test: 9, presentation: 7, games: 8 },
  { id: 1 ,subject: "English", quiz: 4, homework: 5, test: 9, presentation: 7, games: 8 },
  { id: 1 ,subject: "Science", quiz: 5, homework: 5, test: 9, presentation: 7, games: 8 },
  { id: 1 ,subject: "Social", quiz: 5, homework: 5, test: 9, presentation: 7, games: 8 },
];

const Assessment = () => {

    const rows = elements.map((element) => (
        <Table.Tr key={element.id}>
          <Table.Td>{element.subject}</Table.Td>
          <Table.Td>{element.quiz}</Table.Td>
          <Table.Td>{element.homework}</Table.Td>
          <Table.Td>{element.test}</Table.Td>
          <Table.Td>{element.presentation}</Table.Td>
          <Table.Td>{element.games}</Table.Td>
        </Table.Tr>
      ));

  return (
    <Table style={{border: '1px solid #B9B9B9', borderRadius: 10}} stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{background: 'rgba(0, 0, 0, 0.06)'}}>Subjects</Table.Th>
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

export default Assessment