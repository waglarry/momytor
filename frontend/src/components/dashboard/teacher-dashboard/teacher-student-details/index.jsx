import React from 'react'
import Styles from './TeacherStudentDetails.module.css'
// import DeleteIcon from '../../assets/icons/delete-icon.svg'
// import EditIcon from '../../assets/icons/edit-icon.svg'
// import UploadIcon from '../../assets/icons/upload-icon.svg'
import { Progress } from '@mantine/core';
import UserDisplay from '../userdisplay';

const TeacherStudentDetails = ({ childData }) => {
    
  return (
    <div className={Styles.rightSideBar}>
        <UserDisplay />
        <div className={Styles.studentDetails}>
          <h3 className={Styles.headerTitle}>Student Details</h3>
          <div className={Styles.studentInfoBox}>
            <div className={Styles.studentInfoDetails}>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">FULL NAME</label>
                    <p className={Styles.value}>FRANK ADDO</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">CLASS</label>
                    <p className={Styles.value}>JHS 3</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">GENDER</label>
                    <p className={Styles.value}>FEMALE</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">EMAIL</label>
                    <p className={Styles.value}>michelleliton@gmail.com</p>
                </div>
                {
                    childData?.map((data) => (
                        <>
                        <div className={Styles.studentInfo}>
                            <label className={Styles.title} htmlFor="title">MATHEMATICS</label>
                            <div className={Styles.progress}>
                                <div className={Styles.progressBar}>
                                    <Progress size="sm" value={data?.courseProgress["English Language"]} />
                                </div>
                                <span>{data.courseProgress["English Language"]}%</span>
                            </div>
                        </div>
                        <div className={Styles.studentInfo}>
                            <label className={Styles.title} htmlFor="title">MATHEMATICS</label>
                            <div className={Styles.progress}>
                                <div className={Styles.progressBar}>
                                    <Progress size="sm" value={data?.courseProgress["Integrated Science"]} />
                                </div>
                                <span>{data?.courseProgress["Integrated Science"]}%</span>
                            </div>
                        </div>
                        <div className={Styles.studentInfo}>
                            <label className={Styles.title} htmlFor="title">ENGLISH</label>
                            <div className={Styles.progress}>
                                <div className={Styles.progressBar}>
                                    <Progress color="red" size="sm" value={data?.courseProgress["social Studies"]} />
                                </div>
                                <span>{data?.courseProgress["social Studies"]}%</span>
                            </div>
                        </div>
                        <div className={Styles.studentInfo}>
                            <label className={Styles.title} htmlFor="title">SCIENCE</label>
                            <div className={Styles.progress}>
                                <div className={Styles.progressBar}>
                                    <Progress color="#E2DB30" size="sm" value={data?.courseProgress["English Language"]} />
                                </div>
                                <span>{data?.courseProgress["English Language"]}%</span>
                            </div>
                        </div>
                        </>
                    ))
                }
            </div>
            <div className={Styles.operationButtons}>
                <button className={Styles.button}>
                    {/* <img src={UploadIcon} alt="Upload Icon" /> */}
                </button>
                <button className={Styles.button}>
                    {/* <img src={EditIcon} alt="Upload Icon" /> */}
                </button>
                <button className={Styles.button}>
                    {/* <img src={DeleteIcon} alt="Upload Icon" /> */}
                </button>
                <button className={Styles.button}>
                    {/* <img src={DeleteIcon} alt="Upload Icon" /> */}
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TeacherStudentDetails