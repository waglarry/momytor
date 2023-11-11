import { CloseButton, Input, Select, rem } from '@mantine/core'
import React from 'react'
import { FiSearch } from 'react-icons/fi';
import classes from '../../../../css-modules/MantineInput.module.css';

const studentClass = ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'JHS 1', 'JHS 2', 'JHS 3'];
const subjects = ['Mathematics', 'Science', 'Social Studies', 'English']

const FilterBar = () => {

    const seacrhIcon = <FiSearch style={{ width: rem(16), height: rem(16) }} />;

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '.5rem'
    }}>
        <div style={{
            marginRight: rem(50),
            display: 'flex',
            justifyContent: 'center',
            gap: '.5rem'
        }}>
            <Input
                style={{width: '30rem'}}
                placeholder="Seacrh..."
                size="sm"
                radius="sm"
                variant="filled"
                // value={value}
                leftSection={seacrhIcon}
                // onChange={(event) => setValue(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                rightSection={
                <CloseButton
                    aria-label="Clear input"
                    // onClick={() => setValue('')}
                    // style={{ display: value ? undefined : 'none' }}
                />
                }
            />
            <Select
                size='sm'
                radius="sm"
                variant="filled" 
                leftSectionPointerEvents="none"
                comboboxProps={{ withinPortal: true }}
                data={['Male', 'Female']}
                placeholder="Gender"
                classNames={classes}
                // onChange={handleInputChange}
            />
            <Select
                size='sm'
                radius="sm"
                variant="filled" 
                leftSectionPointerEvents="none"
                comboboxProps={{ withinPortal: true }}
                data={studentClass}
                placeholder="Class"
                classNames={classes}
                // onChange={handleInputChange}
            />
        </div>
        <Select
            size='sm'
            radius="sm"
            variant="filled" 
            leftSectionPointerEvents="none"
            comboboxProps={{ withinPortal: true }}
            data={subjects}
            placeholder="Subject"
            classNames={classes}
            // onChange={handleInputChange}
        />
    </div>
  )
}

export default FilterBar