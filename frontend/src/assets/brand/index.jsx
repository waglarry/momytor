import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/momytor.svg'
import Styles from './Brand.module.css'

const Brand = ({color}) => {
  return (
    <Link to={'/'} className={Styles.brand}>
        <img src={Logo} className={Styles.logo} alt="Brand Logo" />
        <label className={Styles.logoText} htmlFor="logo's text" style={{color: color}}>momytor</label>
    </Link>
  )
}

export default Brand