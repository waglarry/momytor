import React from 'react'
import BackIcon from '../../../backicon'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <header className={Styles.header}>
        <h2 className={Styles.headerTitle}>Student Performance Dashboard</h2>
        <BackIcon />
    </header>
  )
}

export default Header