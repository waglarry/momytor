import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '/momytor.svg'
import WhiteLogo from '../images/white-brand-image.svg'
import Styles from './Brand.module.css'

const Brand = ({color, imgColor}) => {
  return (
    <Link to={'/'} className={Styles.brand}>
        {imgColor === 'white' ? <img src={WhiteLogo} className={Styles.logo} alt="Brand Logo" /> : <img src={Logo} className={Styles.logo} alt="Brand Logo" />}
        
        <label className={Styles.logoText} htmlFor="logo's text" style={{color: color}}>momytor</label>
    </Link>
  )
}

export default Brand