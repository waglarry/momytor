import {CloseButton, Input, Select, rem } from '@mantine/core'
import React, { useState } from 'react'
import classes from '../../../../css-modules/MantineInput.module.css';
import { IconSearch } from '@tabler/icons-react';

const studentClass = ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'JHS 1', 'JHS 2', 'JHS 3'];
const subjects = ['Mathematics', 'Science', 'Social Studies', 'English'];

const FilterBar = ({ setSearchTerm }) => {

    const handleSearchInputChange = (event) => {
        (event?.currentTarget) ? setSearchTerm(event?.currentTarget?.value) : setSearchTerm(event)
    }

    const seacrhIcon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;

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
                leftSection={seacrhIcon}
                onChange={handleSearchInputChange}
                rightSectionPointerEvents="all"
            />
            <Select
                size='sm'
                radius="sm"
                variant="filled" 
                leftSectionPointerEvents="none"
                comboboxProps={{ withinPortal: true }}
                data={['Male', 'Female', 'Others']}
                placeholder="Gender"
                classNames={classes}
                onChange={handleSearchInputChange}
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
                onChange={handleSearchInputChange}
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
            onChange={handleSearchInputChange}
        />
    </div>
  )
}

export default FilterBar