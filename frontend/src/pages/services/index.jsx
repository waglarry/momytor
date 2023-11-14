import React from 'react'
import Styles from './Services.module.css'
import ServiceHome from '../../assets/icons/service-home.svg'
import GradedTask from '../../assets/icons/graded-task.svg'
import ProgressMonitoring from '../../assets/icons/progress-monitoring.svg'

const Services = () => {
  return (
    <section className={Styles.section}>
        <h1 className={Styles.title}>Our Services</h1>

        <div className={Styles.contentRow}>
            <div className={Styles.contentBox}>
                <div className={Styles.imageContainer}>
                    <img src={ServiceHome} alt="Service Home Image" />
                </div>
                <div>
                    <h6>School Information</h6>
                    <p>
                        Provide parents with relevant and timely information about their child’s school, 
                        such as the school calendar, events, announcements, policies, and resources.
                    </p>
                </div>
            </div>
            <div className={Styles.contentBox}>
                <div className={Styles.imageContainer}>
                    <img src={ProgressMonitoring} alt="Proccessing Monitoring Image" />
                </div>
                <div>
                    <h6>Progress Monitoring</h6>
                    <p>
                        We help parents track their child’s progress in school by providing them with access to their 
                        child’s grades, test scores, assignments, and homework.
                    </p>
                </div>
            </div>
            <div className={Styles.contentBox}>
                <div className={Styles.imageContainer}>
                    <img src={GradedTask} alt="Graded Task Image" />
                </div>
                <div>
                    <h6>Graded Task</h6>
                    <p>
                        The application can display the results of the child’s graded tasks, such as tests, 
                        quizzes, assignments, and projects. 
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services