import React, { useEffect, useLayoutEffect, useState } from 'react'
import Styles from  './TeacherDashboardLayout.module.css'
import { Divider } from '@mantine/core';
import axios from 'axios'
import TableActionsTab from '../tableactions';
import FilterBar from '../filterbar';
import StudentStatusTab from '../statustab';
import TableContent from '../tablecontent';
import TeacherStudentDetails from '../teacher-student-details';
import Header from '../header';
import { BASE_URL } from '../../../../urls/auth';

const TeacherDashboardLayout = () => {

  const [ childData, setChildData ] = useState(null);

  const getChildDetails = async () => {
    await axios.get(`${BASE_URL}/findAllChildren`)
    .then((response) => {
      // console.log(response.data.child);
      setChildData(response.data.child)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useLayoutEffect(() => {
    getChildDetails();
  }, [])

  return (
    <section className={Styles.layout}>
        <div className={Styles.content}>
            <Header />
            <div className={Styles.card}>
              <TableActionsTab />
              <Divider size="xs" />
              <FilterBar />
              <Divider size="xs" />
              <StudentStatusTab />
              <TableContent childData={childData} />
            </div>
        </div>
        <TeacherStudentDetails childData={childData} />
    </section>
  )
}

export default TeacherDashboardLayout