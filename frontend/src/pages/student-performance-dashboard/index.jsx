import React from 'react'
import Header from '../../components/dashboard/student-performance-dashboard/header'
import Styles from "./StudentPerformanceDasboard.module.css";
import ProfilePicture from "../../assets/images/profile.png";
import { Link } from 'react-router-dom';
import StudentPerformanceLayout from '../../components/dashboard/student-performance-dashboard/layout';

const StudentPerformanceDashboard = () => {
  return (
    <>
        <Header />
          <div className={Styles.sidebar}>
        <div className={Styles.profileBox}>
          <div className={Styles.profile}>
            <img src={ProfilePicture} alt="Profile Picture" />
          </div>
          <h3 className={Styles.username}>John Doe</h3>
        </div>


        <ul className={Styles.links}>
            <li>
                <Link className={Styles.link} to={'/'}>Subject Progress</Link>
            </li>
            <li>
                <Link className={Styles.link} to={'performance'}>Practice Areas</Link>
            </li>
            <li>
                <Link className={Styles.link} to={'performance'}>Social Analytics</Link>
            </li>
            <li>
                <Link className={Styles.link} to={'performance'}>Total Performance</Link>
            </li>
        </ul>

      </div>

      <div className={Styles.content}>
        <StudentPerformanceLayout />
      </div>
    </>
  )
}

export default StudentPerformanceDashboard