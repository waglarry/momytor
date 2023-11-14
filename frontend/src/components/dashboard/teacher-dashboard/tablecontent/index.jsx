import { Loader, Table } from '@mantine/core';
import { Pagination, Button } from '@mantine/core';
import Styles from './TableContent.module.css'

const present = <Button variant="light" color="green">Present</Button>;
const absent = <Button variant="light" color="red">Absent</Button>;

const TableContent = ({ childData, onSelect }) => {

  const handleOnSelect = (data) => {
    onSelect(data);
  }

  const rows = childData && childData.map((child, index) => (
    <Table.Tr key={child._id} className={Styles.tableRow} onClick={() => handleOnSelect(child)}>
      <Table.Td>{child.firstName}</Table.Td>
      <Table.Td>{child.lastName}</Table.Td>
      <Table.Td>{child.gender}</Table.Td>
      <Table.Td>{child.gender}</Table.Td>
      <Table.Td>{child.class}</Table.Td>
      <Table.Td >{child.attendance ? present : absent}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={Styles.tableContainer}>
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
      {!rows && <Loader className={Styles.loader} color="blue" size="lg" type="dots" />}
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: '1rem'
      }}>
        <Pagination total={childData?.length} color="#1976D2 " size="sm" withEdges />
      </div>
    </div>
  );
}

export default TableContent;