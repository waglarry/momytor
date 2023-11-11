import { Table } from '@mantine/core';
import { Pagination, Button } from '@mantine/core';

const elements = [
  { refId: 6, mass: 12.011, symbol: 'C', name: 'Carbon', button: <Button variant="light" color="green">Present</Button> },
  { refId: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen', button: <Button variant="light" color="red">Absent</Button> },
  { refId: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium', button: <Button variant="light" color="red">Absent</Button> },
  { refId: 56, mass: 137.33, symbol: 'Ba', name: 'Barium', button: <Button variant="light" color="green">Present</Button> },
  { refId: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium', button: <Button variant="light" color="red">Absent</Button> },
  { refId: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium', button: <Button variant="light" color="green">Present</Button> },
];
const present = <Button variant="light" color="green">Present</Button>;
const absent = <Button variant="light" color="red">Absent</Button>;

const TableContent = ({ childData }) => {

  const rows = childData && childData.map((child) => (
    <Table.Tr key={child._id}>
      <Table.Td>{child.firstName}</Table.Td>
      <Table.Td>{child.lastName}</Table.Td>
      <Table.Td>{child.gender}</Table.Td>
      <Table.Td>{child.gender}</Table.Td>
      <Table.Td>{child.class}</Table.Td>
      <Table.Td>{child.attendance ? present : absent}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={{ backgound: '#ffffff', filter: 'drop-shadow(0px 10px 60px rgba(226, 236, 249, 0.50))' }}>
      <Table style={{ textAlign: 'left' }} stickyHeader verticalSpacing="md" stickyHeaderOffset={60}>
          <Table.Tr>
            <Table.Th>FIRST NAME</Table.Th>
            <Table.Th>LAST NAME</Table.Th>
            <Table.Th>EMAIL</Table.Th>
            <Table.Th>GENDER</Table.Th>
            <Table.Th>CLASS</Table.Th>
            <Table.Th>ATTENDANCE</Table.Th>
          </Table.Tr>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: '1rem'
      }}>
        <Pagination total={10} color="#1976D2 " size="sm" withEdges />
      </div>
    </div>
  );
}

export default TableContent;