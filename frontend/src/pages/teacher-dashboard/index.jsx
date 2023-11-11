import React from 'react'
import TeacherDashboardSidebar from '../../components/dashboard/teacher-dashboard/sidebar'
import TeacherDashboardLayout from '../../components/dashboard/teacher-dashboard/layout'
import Styles from './TeacherDashboard.module.css'

const TeacherDashboard = () => {
  return (
    <main className={Styles.main}>
      <TeacherDashboardSidebar />
      <TeacherDashboardLayout />
    </main>
  )
}

export default TeacherDashboard