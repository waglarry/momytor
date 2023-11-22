import React from 'react'
import Styles from './Activities.module.css'
import TrustedImage from '../../assets/images/activities.svg'
import { Link } from 'react-router-dom'

const Activities = () => {
  return (
    <section className={Styles.section}>
        <div className={Styles.topContainer}>
            <div className={Styles.leftCol}>
                <h1 className={Styles.title}>The Trusted Name for School Monitoring Activities.</h1>
                <p className={Styles.content}>
                    We help, you help, we all do to help our kids grow.
                    Create an account to start with us now.
                    We are voted as one of the best monitoring web applications.
                </p>
                <Link className={Styles.readMore} to={'/'}>Read more</Link>
            </div>
            <div className={Styles.rightCol}>
                <img src={TrustedImage} alt="" />
            </div>
        </div>

        <div className={Styles.topContainer}>
            <div className={Styles.rightCol}>
                <div className={Styles.card}>
                    <p className={Styles.content}>
                        Effortlessly manage your users and streamline your 
                        workflow with our user management system.
                    </p>
                </div>
            </div>
            <div className={Styles.leftCol}>
                <h1 className={Styles.title}>The Trusted Name for School Monitoring Activities.</h1>
                <p className={Styles.content}>
                    We help, you help, we all do to help our kids grow.
                    Create an account to start with us now.
                    We are voted as one of the best monitoring web applications.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Activities