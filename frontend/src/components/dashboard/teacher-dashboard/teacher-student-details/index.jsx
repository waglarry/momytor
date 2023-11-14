import React, { useState } from 'react'
import Styles from './TeacherStudentDetails.module.css'
import DeleteIcon from '../../../../assets/icons/delete-icon.svg'
// import EditIcon from '../../assets/icons/edit-icon.svg'
// import UploadIcon from '../../assets/icons/upload-icon.svg'
import { Progress } from '@mantine/core';
import UserDisplay from '../userdisplay';

const TeacherStudentDetails = (data) => {
    
  return (
    <div className={Styles.rightSideBar}>
        <UserDisplay />
        <div className={Styles.studentDetails}>
          <h3 className={Styles.headerTitle}>Student Details</h3>
          <div className={Styles.studentInfoBox}>
            <div className={Styles.studentInfoDetails}>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">FULL NAME</label>
                    <p className={Styles.value}>{ data.childData?.firstName } { data.childData?.lastName }</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">CLASS</label>
                    <p className={Styles.value}>{ data.childData?.class }</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">GENDER</label>
                    <p className={Styles.value}>{ data.childData?.gender }</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">EMAIL</label>
                    <p className={Styles.value}>{data.childData?.email}</p>
                </div>

                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">MATHEMATICS</label>
                    <div className={Styles.progress}>
                        <div className={Styles.progressBar}>
                            <Progress size="sm" value={data?.childData?.courseProgress["Mathematics"]} />
                        </div>
                        <span>{data?.childData?.courseProgress["Mathematics"]}%</span>
                    </div>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">ENGLISH</label>
                    <div className={Styles.progress}>
                        <div className={Styles.progressBar}>
                            <Progress color="red" size="sm" value={data?.childData?.courseProgress["English Language"]} />
                        </div>
                        <span>{data?.childData?.courseProgress["English Language"]}%</span>
                    </div>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">SCIENCE</label>
                    <div className={Styles.progress}>
                        <div className={Styles.progressBar}>
                            <Progress color="#E2DB30" size="sm" value={data?.childData?.courseProgress["Integrated Science"]} />
                        </div>
                        <span>{data?.childData?.courseProgress["Integrated Science"]}%</span>
                    </div>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">SOCIAL STUDIES</label>
                    <div className={Styles.progress}>
                        <div className={Styles.progressBar}>
                            <Progress color='green' size="sm" value={data?.childData?.courseProgress["social Studies"]} />
                        </div>
                        <span>{data?.childData?.courseProgress["social Studies"]}%</span>
                    </div>
                </div>
            </div>
            <div className={Styles.operationButtons}>
                <button className={Styles.button}>
                    <img src={DeleteIcon} alt="Upload Icon" />
                </button>
                <button className={Styles.button}>
                    <img src={DeleteIcon} alt="Upload Icon" />
                </button>
                <button className={Styles.button}>
                    <img src={DeleteIcon} alt="Upload Icon" />
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TeacherStudentDetails