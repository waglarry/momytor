import React from 'react'
import classes from '../../../../css-modules/MantineInput.module.css';
import { Button, Modal, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const TableActionsTab = ({ childData, printTable }) => {

    const [opened, { open, close }] = useDisclosure(false);

  return (
    <div style={{
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem'
    }}>
        <p style={{
            color: '#000',
            fontFamily: 'Inter',
            fontSize: '.7rem',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            letterSpacing: '0.0175rem',
        }}>Showing {childData?.length} students</p>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem'
        }}>
            <button onClick={() => printTable()} style={{
                width: '5rem',
                height: '2.3rem',
                background: '#fff',
                border: 'none',
                borderRadius: 3,
                color: 'rgba(35, 50, 85, 0.80)',
                fontFamily: 'Inter',
                fontSize: '.8rem',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                letterSpacing: '0.04rem',
            }}>PRINT</button>
            <Select
                style={{width: '8rem'}}
                size='sm'
                radius="sm"
                variant="filled"
                color="#fff" 
                leftSectionPointerEvents="none"
                comboboxProps={{ withinPortal: true }}
                data={['CSV', 'XML']}
                placeholder="EXPORT"
                classNames={classes}
                // onChange={handleInputChange}
            />

            <Modal opened={opened} onClose={close} title="Create Student" centered>
                <p>Hello</p>
            </Modal>

            <Button color='gray' onClick={open}>CREATE STUDENT</Button>
        </div>
    </div>
  )
}

export default TableActionsTab