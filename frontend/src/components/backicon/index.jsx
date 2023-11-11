import React from 'react'
import Styles from './BackIcon.module.css'
import { MdKeyboardBackspace } from 'react-icons/Md';
import { Link } from 'react-router-dom';

const BackIcon = () => {
  return (
    <Link to={'/'} className={Styles.backIcon} htmlFor="moving back">
        <MdKeyboardBackspace />
        <label htmlFor="moving back">Back</label>
  </Link>
  )
}

export default BackIcon