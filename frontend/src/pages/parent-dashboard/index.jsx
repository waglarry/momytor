import React from "react";
import Styles from "./ParentDashboard.module.css";
import ProfilePicture from "../../assets/images/profile.png";
import ArrowImage from '../../assets/icons/arrow.svg'
import Performance from '../../assets/icons/performance.svg'
import ParentDashboardLayout from "../../components/dashboard/parent-dashboard/layout";
import { Link, useNavigate } from "react-router-dom";

const ParentDashboard = () => {

  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN_KEY")
    navigate("/login")
  }
  
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
            <li onClick={handleLogout}>
                <div></div>
                <Link className={Styles.link} to={'/'}>Logout</Link>
                <img src={ArrowImage} alt="arrow" />
            </li>
            <li>
                <img src={Performance} alt="performance" />
                <Link className={Styles.link} to={'performance'}>Performance</Link>
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
