import React from 'react'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <header className={Styles.header}>
        <label htmlFor="tabs">
            <span className={Styles.previousTab}>...Teacher</span>
            <span className={Styles.currentTab}>/Students</span>
        </label>
    </header>
  )
}

export default Header