import React from 'react'
import Styles from './UserDisplay.module.css'
import ProfileImage from '../../../../assets/images/profile.png'

const UserDisplay = () => {
  return (
    <div className={Styles.profile}>
      <div className={Styles.profileImageAndUsername}>
        <div className={Styles.profileImage}>
          <img src={ProfileImage} alt="Profile Picture" />
        </div>
      <h4>Hello Amy!</h4>
      </div>
    </div>
  )
}

export default UserDisplay