import React from "react";
import Styles from "./ParentDashboard.module.css";
import ProfilePicture from "../../assets/images/profile.png";
import ArrowImage from '../../assets/icons/arrow.svg'
import Performance from '../../assets/icons/performance.svg'
import ParentDashboardLayout from "../../components/dashboard/parent-dashboard/layout";

const ParentDashboard = () => {
  return (
    <>
      <div className={Styles.sidebar}>
        <div className={Styles.profileBox}>
          <div className={Styles.profile}>
            <img src={ProfilePicture} alt="Profile Picture" />
          </div>
        </div>

        <ul className={Styles.profileDetails}>
          <li>Profile</li>
          <li>First Name: John</li>
          <li>Last Name: Doe</li>
          <li>Gender: Male</li>
          <li>Class: JHS 2</li>
        </ul>

        <ul className={Styles.logoutAndPerformance}>
            <li>
                <div></div>
                <span>Logout</span>
                <img src={ArrowImage} alt="arrow" />
            </li>
            <li>
                <img src={Performance} alt="performance" />
                <span>Performance</span>
                <img src={ArrowImage} alt="arrow" />
            </li>
        </ul>
      </div>

      <div className={Styles.content}>
        <ParentDashboardLayout />
      </div>
    </>
  );
};

export default ParentDashboard;
