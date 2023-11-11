import { Autocomplete, Group, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Brand from '../../assets/brand';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'HOME' },
  { link: '/courses', label: 'COURSES' },
  { link: '/teachers', label: 'TEACHERS' },
  { link: '/community', label: 'COMMUNITY' },
];

function Navbar() {

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Brand />

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            variant="filled"
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['Robert', 'Angela', 'Victoria']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}

export default Navbar;
