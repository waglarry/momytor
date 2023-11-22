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
  IconHelp,
  IconHome
} from '@tabler/icons-react';
import classes from './TeacherDashboardSidebar.module.css';
import Brand from '../../../../assets/brand'
import { Link, useNavigate } from 'react-router-dom';

const data = [
  { link: '/', label: 'Dashboard', icon: IconHome },
  { link: 'chats', label: 'Chats', icon: IconMessage },
  { link: 'notifications', label: 'Notifications', icon: IconBellRinging },
  { link: 'students', label: 'Students', icon: IconReceipt2 },
  { link: 'records', label: 'Records', icon: IconFingerprint },
  { link: 'profile', label: 'Profile', icon: IconUser },
  { link: 'help', label: 'Help', icon: IconHelp },
];

const TeacherDashboardSidebar = () => {
  const [active, setActive] = useState('Billing');
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN_KEY")
    navigate("/login")
  }

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
        <div className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </div>

        <div className={classes.link} onClick={() => handleLogout()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </div>
      </div>
    </nav>
  );
}


export default TeacherDashboardSidebar;