import React from 'react'
import Styles from './Header.module.css'
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={Styles.header}>
        <div className={Styles.content}>
            <p>WELCOME</p>
            <p>CALL +233 247 899 7500 </p>
            <p>FOLLOW US </p>
        </div>

        <div className={Styles.buttons}>
            <Link to={'/login'}><Button variant="filled" size="sm" radius="xs">LOGIN</Button></Link>
            <Link to={'/signup'}><Button variant="filled" size="sm" radius="xs">SIGN UP</Button></Link>
        </div>
    </header>
  )
}

export default Header