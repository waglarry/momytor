import { useState } from 'react';
import { Group } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconMessage,
  IconUser,
  IconHelp
} from '@tabler/icons-react';
import classes from './TeacherDashboardSidebar.module.css';
import Brand from '../../../../assets/brand'
import { Link } from 'react-router-dom';

const data = [
  { link: 'chats', label: 'Chats', icon: IconMessage },
  { link: 'notifications', label: 'Notifications', icon: IconBellRinging },
  { link: 'students', label: 'Students', icon: IconReceipt2 },
  { link: 'records', label: 'Records', icon: IconFingerprint },
  { link: 'profile', label: 'Profile', icon: IconUser },
  { link: 'help', label: 'Help', icon: IconHelp },
];

const TeacherDashboardSidebar = () => {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Brand color={'#fff'} />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}


export default TeacherDashboardSidebar;